import {useEffect, useState} from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';

import GeneralApi from '../../utils/generalApi';
import {useAuth} from '../../contexts/Auth';

import {showErrorToast, showSuccessToast} from '../../components/Toast';
import LoadingSpinner from '../../components/LoadingSpinner';
import {Input} from '../../components/Input';
import {SPINNER_COLORS} from '../../utils/enums';
import FileUpload from '../../components/FileUpload';
import {IFile} from '../../components/FileUpload/interfaces';
import {IInfo} from '../../interfaces/webinfo';

export default function WebInfoForm({editInfo, onClose}: {editInfo: IInfo; onClose: () => void}) {
  const queryClient = useQueryClient();
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<Array<IFile>>([]);

  const {isFetching: detailsFetching, data: detailsData} = useQuery(
    ['webinfos', editInfo],
    () => generalApi.get(`/webinfos/details/${editInfo.slug}`),
    {
      staleTime: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async (data: any) => {
    if (editInfo.kind === 'text' && !data.value) {
      return showErrorToast('El texto es requerido');
    }

    setLoading(true);

    const result = await generalApi.post('/webinfos/update', {
      ...editInfo,
      ...data,
      images: editInfo.kind !== 'text' ? files : [],
    });
    if (!result.success) {
      setLoading(false);
      return showErrorToast(result.message);
    }

    showSuccessToast('Información actualizada correctamente!');
    setLoading(false);
    onClose();
    queryClient.invalidateQueries(['webinfos']);
    setFiles([]);
    reset();
  };

  useEffect(() => {
    if (detailsData) {
      reset(detailsData.data);
      setFiles(editInfo.kind !== 'text' ? detailsData.data?.images || [] : []);
    }
  }, [detailsData, editInfo, reset]);

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-xl font-medium text-gray-900">Editar información</h1>

      {detailsFetching ? (
        <LoadingSpinner color={SPINNER_COLORS.PRIMARY} />
      ) : (
        <>
          <div>
            <p>{editInfo.name}</p>
            <p className="text-sm text-gray-600">{editInfo.description}</p>
          </div>

          {editInfo.kind !== 'image' && (
            <Input
              label="Texto"
              type="text"
              name="value"
              rules={{required: true}}
              errors={errors}
              register={register}
            />
          )}

          {editInfo.kind !== 'text' && (
            <FileUpload
              label="Imágenes"
              generalApi={generalApi}
              files={files}
              setFiles={(newFiles) => setFiles(newFiles)}
              maxFiles={editInfo.imageMax}
              canBeEmpty={editInfo.imageMax === 1}
            />
          )}

          <button
            type="button"
            className="group flex w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
            onClick={() => {
              onClose();
              reset();
            }}
          >
            Cancelar
          </button>
          <button
            className="group flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? <LoadingSpinner /> : 'Guardar cambios'}
          </button>
        </>
      )}
    </form>
  );
}
