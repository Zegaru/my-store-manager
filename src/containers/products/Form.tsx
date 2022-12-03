import {useEffect, useState} from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';

import {IFile} from '../../components/FileUpload/interfaces';
import GeneralApi from '../../utils/generalApi';
import {IColor, IDetail, ITag} from '../../interfaces/product';
import {useAuth} from '../../contexts/Auth';

import {showErrorToast, showSuccessToast} from '../../components/Toast';
import {TagSelector} from '../../components/Selectors/TagSelector';
import LoadingSpinner from '../../components/LoadingSpinner';
import FileUpload from '../../components/FileUpload';
import {Input} from '../../components/Input';
import {ColorSelector} from '../../components/Selectors/ColorSelector';
import {DetailsSelector} from '../../components/Selectors/DetailsSelector';
import {Disclosure} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';
import {SPINNER_COLORS} from '../../utils/enums';

export default function ProductForm({editId, onClose}: {editId?: string; onClose: () => void}) {
  const queryClient = useQueryClient();
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);

  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  const [selectedColors, setSelectedColors] = useState<IColor[]>([]);
  const [selectedDetails, setSelectedDetails] = useState<IDetail[]>([]);
  const [files, setFiles] = useState<Array<IFile>>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {},
  });

  const {isFetching: detailsFetching, data: detailsData} = useQuery(
    ['products', editId],
    () => generalApi.get(`/products/details/${editId}`),
    {
      staleTime: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      enabled: !!editId,
    }
  );

  const onSubmit = async (data: any) => {
    if (!data.name) {
      return showErrorToast('El nombre es requerido');
    }

    setLoading(true);

    const result = await generalApi.post(editId ? '/products/update' : '/products/create', {
      name: data.name,
      description: data.description,
      productId: editId,
      tags: selectedTags.map((tag) => tag._id),
      colors: selectedColors,
      details_list: Object.keys(data.details_list).map((key) => ({
        name: key,
        value: data.details_list[key],
      })),
      images: files,
    });
    if (!result.success) {
      setLoading(false);
      return showErrorToast(result.message);
    }

    showSuccessToast(editId ? 'Producto editado correctamente!' : 'Producto creado correctamente!');
    setLoading(false);
    onClose();
    setFiles([]);
    queryClient.invalidateQueries(['products']);
    reset();
  };

  useEffect(() => {
    if (detailsData) {
      reset({
        name: detailsData.data.name,
        description: detailsData.data.description,
        ...(detailsData.data.details_list || []).reduce(
          (acc: any, detail: IDetail) => ({
            ...acc,
            [`details_list.${detail.name}`]: detail.value,
          }),
          {}
        ),
      });
      setSelectedTags(detailsData.data.tags);
      setSelectedColors(detailsData.data.colors);
      setSelectedDetails(detailsData.data.details_list);
      setFiles(detailsData.data.images);
    }
  }, [detailsData, reset]);

  useEffect(() => {
    if (!editId) {
      reset({
        name: '',
        description: '',
      });
      setSelectedTags([]);
      setSelectedColors([]);
      setSelectedDetails([]);
      setFiles([]);
    }
  }, [editId, reset]);

  return (
    <form className="flex flex-col gap-6 pb-4">
      <h1 className="text-xl font-medium text-gray-900">
        {editId ? 'Editar producto' : 'Crear producto'}
      </h1>

      {detailsFetching ? (
        <LoadingSpinner color={SPINNER_COLORS.PRIMARY} />
      ) : (
        <>
          <Input
            label="Nombre"
            type="text"
            name="name"
            rules={{required: true}}
            errors={errors}
            register={register}
          />
          <Input
            label="Descripción"
            type="text"
            name="description"
            rules={{required: true}}
            errors={errors}
            register={register}
          />

          <TagSelector selectedTags={selectedTags} setSelectedTags={setSelectedTags} />

          <ColorSelector selectedColors={selectedColors} setSelectedColors={setSelectedColors} />

          <Disclosure defaultOpen>
            {({open}) => (
              <>
                <Disclosure.Button className="flex w-full justify-between transition-all duration-300 rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span>Información</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 transition-all duration-300 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pb-2 flex flex-col gap-4 text-sm text-gray-500">
                  <DetailsSelector
                    selectedDetails={selectedDetails}
                    setSelectedDetails={setSelectedDetails}
                  />

                  {selectedDetails.map((detail) => (
                    <Input
                      key={detail.name}
                      label={detail.name}
                      type="text"
                      name={`details_list.${detail.name}`}
                      rules={{required: true}}
                      errors={errors}
                      register={register}
                    />
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure defaultOpen>
            {({open}) => (
              <>
                <Disclosure.Button className="flex w-full justify-between transition-all duration-300 rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                  <span>Imágenes</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 transition-all duration-300 text-indigo-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pb-2 flex flex-col gap-4 text-sm text-gray-500">
                  <FileUpload
                    label="Imágenes"
                    generalApi={generalApi}
                    files={files}
                    setFiles={(newFiles) => setFiles(newFiles)}
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <button
            type="button"
            className="group flex w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
            onClick={() => {
              onClose();
              setFiles([]);
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
            {loading ? <LoadingSpinner /> : editId ? 'Editar producto' : 'Agregar producto'}
          </button>
        </>
      )}
    </form>
  );
}
