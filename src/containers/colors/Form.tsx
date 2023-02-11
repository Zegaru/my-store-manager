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

export default function ColorForm({editId, onClose}: {editId?: string; onClose: () => void}) {
  const queryClient = useQueryClient();
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);

  const [loading, setLoading] = useState(false);

  const {isFetching: detailsFetching, data: detailsData} = useQuery(
    ['colors', editId],
    () => generalApi.get(`/colors/details/${editId}`),
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
    watch,
    formState: {errors},
  } = useForm<{
    name: string;
    code: string;
  }>({
    defaultValues: {},
  });

  const currentColor = watch('code');

  const onSubmit = async (data: any) => {
    if (!data.name) {
      return showErrorToast('El nombre es requerido');
    }

    setLoading(true);

    const result = await generalApi.post(editId ? '/colors/update' : '/colors/create', {
      colorId: editId,
      ...data,
    });
    if (!result.success) {
      setLoading(false);
      return showErrorToast(result.message);
    }

    showSuccessToast(editId ? 'Color editado correctamente!' : 'Color creado correctamente!');
    setLoading(false);
    onClose();
    queryClient.invalidateQueries(['colors']);
    reset();
  };

  useEffect(() => {
    if (detailsData) {
      reset(detailsData.data);
    }
  }, [detailsData, reset]);

  useEffect(() => {
    if (!editId) {
      reset({
        name: '',
      });
    }
  }, [editId, reset]);

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-xl font-medium text-gray-900">
        {editId ? 'Editar color' : 'Crear color'}
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
          <div className="flex gap-2 items-end">
            <div className="flex-1">
              <Input
                label="Color (Código hexadecimal) (Ej: FFFFFF)"
                type="text"
                name="code"
                rules={{required: true}}
                errors={errors}
                register={register}
              />
            </div>
            <div
              className="flex items-center justify-center w-12 h-12 rounded-md border border-gray-200"
              style={{backgroundColor: `#${currentColor}`}}
            >
              <span className="sr-only">Color</span>
            </div>
          </div>

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
            {loading ? <LoadingSpinner /> : editId ? 'Editar color' : 'Agregar color'}
          </button>
        </>
      )}
    </form>
  );
}
