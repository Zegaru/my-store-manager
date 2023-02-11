import {useEffect, useState} from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {FieldErrorsImpl, useFieldArray, useForm} from 'react-hook-form';
import {useRouter} from 'next/router';

import GeneralApi from '../../utils/generalApi';
import {useAuth} from '../../contexts/Auth';

import {showErrorToast, showSuccessToast} from '../../components/Toast';
import LoadingSpinner from '../../components/LoadingSpinner';
import {Input} from '../../components/Input';
import {SPINNER_COLORS} from '../../utils/enums';
import {TrashIcon} from '@heroicons/react/24/outline';

export default function FilterForm({editId, onClose}: {editId?: string; onClose: () => void}) {
  const queryClient = useQueryClient();
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);

  const [loading, setLoading] = useState(false);

  const {isFetching: detailsFetching, data: detailsData} = useQuery(
    ['filters', editId],
    () => generalApi.get(`/filters/details/${editId}`),
    {
      staleTime: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      enabled: !!editId,
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors},
  } = useForm<{
    name: string;
    options: {
      name: string;
    }[];
  }>({
    defaultValues: {
      name: '',
      options: [
        {
          name: '',
        },
      ],
    },
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'options',
  });

  const onSubmit = async (data: any) => {
    if (!data.name) {
      return showErrorToast('El nombre es requerido');
    }
    const repeatedOptions = data.options.filter(
      (option: any, index: number, self: any) =>
        index !== self.findIndex((t: any) => t.name === option.name)
    );
    if (repeatedOptions.length) {
      return showErrorToast('No se pueden repetir las opciones');
    }

    setLoading(true);

    const result = await generalApi.post(editId ? '/filters/update' : '/filters/create', {
      filterId: editId,
      ...data,
      options: data.options.map((option: any) => option.name),
    });
    if (!result.success) {
      setLoading(false);
      return showErrorToast(result.message);
    }

    showSuccessToast(editId ? 'Filtro editado correctamente!' : 'Filtro creado correctamente!');
    setLoading(false);
    onClose();
    queryClient.invalidateQueries(['filters']);
    reset();
  };

  useEffect(() => {
    if (detailsData) {
      reset({
        ...detailsData.data,
        options: detailsData.data.options.map((option: any) => ({name: option})),
      });
    }
  }, [detailsData, reset]);

  useEffect(() => {
    if (!editId) {
      reset({
        name: '',
        options: [
          {
            name: '',
          },
        ],
      });
    }
  }, [editId, reset]);

  return (
    <form className="flex flex-col gap-4 pb-4">
      <h1 className="text-xl font-medium text-gray-900">
        {editId ? 'Editar filtro' : 'Crear filtro'}
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
            errors={
              errors as FieldErrorsImpl<{
                [x: string]: any;
              }>
            }
            register={register}
          />

          <p className="text-lg">Opciones</p>

          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <section className="flex gap-2 items-center" key={field.id}>
                  <div className="flex-1">
                    <Input
                      placeholder="Nombre de la opción"
                      type="text"
                      name={`options.${index}.name`}
                      rules={{required: true}}
                      register={register}
                    />
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </section>
              </div>
            );
          })}

          <button
            type="button"
            className="group flex w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() =>
              append({
                name: '',
              })
            }
          >
            Agregar opción +
          </button>

          <button
            type="button"
            className="group flex mt-8 w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
            {loading ? <LoadingSpinner /> : editId ? 'Editar filtro' : 'Agregar filtro'}
          </button>
        </>
      )}
    </form>
  );
}
