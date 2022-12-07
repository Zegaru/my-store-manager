import React, {useState} from 'react';
import {ArrowDownTrayIcon, DocumentTextIcon, TrashIcon} from '@heroicons/react/24/outline';

import {classNames} from '../../utils/functions';
import {checkFileType, validateFile} from '../../utils/fileUtils';
import {SPINNER_COLORS} from '../../utils/enums';

import {showErrorToast, showSuccessToast} from '../Toast';
import LoadingSpinner from '../LoadingSpinner';

import {IFileUploadComponent} from './interfaces';

export default function FileUploadComponent({
  label,
  generalApi,
  files,
  setFiles,
  folder,
  name,
  maxFiles,
}: IFileUploadComponent) {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null | undefined>(null);

  const [uploadLoading, setUploadLoading] = useState(false);

  const checkFile = async (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let isValid = validateFile(event.target, 'document', index);
    if (!isValid || !event.target?.files) {
      setImagePreview(null);
      showErrorToast('Formato de documento no válido.');
      return undefined;
    }
    if (event.target.files[index].size > 10_000_000) {
      setImagePreview(null);
      showErrorToast('Peso máximo excedido.');
      return undefined;
    }
    if (checkFileType(event.target.files[index].name) === 'image') {
      var reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setImagePreview(e?.target?.result);
      };
      await reader.readAsDataURL(event.target.files[index]);
    }
    return event.target.files[index];
  };

  async function saveFile(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const file = await checkFile(event, index);
    if (!file) return;

    let fileData = new FormData();

    if (folder) fileData.append('folder', folder);
    if (name) fileData.append('name', name);
    fileData.append('upfile', file);

    setUploadLoading(true);
    const result = await generalApi.post(`/utils/file`, fileData);
    setUploadLoading(false);
    if (!result?.success) {
      showErrorToast(result?.message);
      return;
    }
    showSuccessToast('Archivo guardado');
    setImagePreview(null);
    return result.data;
  }

  async function saveAllFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const filesToUpload = event.target?.files;
    if (!filesToUpload) return;
    if (maxFiles && filesToUpload.length + files.length > maxFiles) {
      showErrorToast(`No se pueden subir más de ${maxFiles} archivos.`);
      return;
    }
    const newFiles = [];
    for (let i = 0; i < filesToUpload.length; i++) {
      const reponse = await saveFile(event, i);
      if (reponse) newFiles.push(reponse);
    }
    setFiles([...files, ...newFiles]);
  }

  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="mb-4 flex flex-col gap-4">
        {maxFiles && files.length >= maxFiles ? (
          <div className="relative max-h-32 min-w-fit flex-1 rounded-md border-2 border-dashed border-gray-300 px-2 py-4 text-center">
            <p>No se pueden subir más archivos</p>
          </div>
        ) : (
          <div className="relative max-h-32 min-w-fit flex-1 rounded-md border-2 border-dashed border-gray-300 px-2 py-4 text-center">
            {uploadLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5">
                <LoadingSpinner color={SPINNER_COLORS.PRIMARY} />
              </div>
            )}
            <p className={classNames(uploadLoading ? 'opacity-10' : '', 'mb-4')}>Elegir archivo</p>
            <div
              className={classNames(
                uploadLoading ? 'opacity-10' : '',
                'flex flex-col items-center justify-evenly sm:flex-row sm:space-y-0'
              )}
            >
              <div className="flex items-center space-x-2 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-sm text-gray-600">
                  <label
                    htmlFor="inp_document_file"
                    className="relative mx-auto cursor-pointer rounded-md bg-white font-medium text-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Escoger archivo</span>
                    <input
                      multiple={!maxFiles || maxFiles > 1}
                      disabled={maxFiles ? files.length >= maxFiles : false}
                      id="inp_document_file"
                      name="inp_document_file"
                      type="file"
                      className="sr-only"
                      onChange={saveAllFiles}
                    />
                  </label>
                  <p className="max-w-[120px] text-xs text-gray-500">de hasta 10MB</p>
                </div>
              </div>
              {imagePreview && (
                <img
                  src={imagePreview as string}
                  className="max-h-12 max-w-full rounded-lg border-2 border-indigo-400 sm:max-w-[50%]"
                  alt="Imagen del documento"
                ></img>
              )}
            </div>
          </div>
        )}
        {files.map((file) => (
          <div
            key={file.url}
            className="flex justify-between max-h-24 max-w-sm gap-2 rounded-lg p-2 shadow-card"
          >
            {checkFileType(file.name) === 'image' ? (
              <img className="h-16 rounded-lg border-2 border-indigo-400" src={file.url} alt="" />
            ) : (
              <DocumentTextIcon className="mx-auto mb-2 h-12 w-12 text-gray-400" />
            )}
            <div className="flex flex-col items-end justify-between gap-1">
              <div className="text-right">
                <p className="text-sm text-gray-600">{file.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <a href={file.url} target="_blank" rel="noreferrer">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </a>
                <button
                  className="w-auto"
                  onClick={() => {
                    setFiles(files.filter((f) => f.url !== file.url));
                  }}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
