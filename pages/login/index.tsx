import {ReactElement, useState} from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import Head from 'next/head';

import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline';

import {showErrorToast, showSuccessToast} from '../../src/components/Toast';
import AuthLayout from '../../src/components/layouts/AuthLayout';
import LoadingSpinner from '../../src/components/LoadingSpinner';
import {Input} from '../../src/components/Input';

import {useAuth} from '../../src/contexts/Auth';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const queryClient = useQueryClient();
  const history = useRouter();
  const auth = useAuth();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    let result: any = await auth.signin(data.username, data.password);
    if (!result.success) {
      setLoading(false);
      return showErrorToast(result.message);
    }
    showSuccessToast(result.message);
    history.replace('');
    queryClient.invalidateQueries(['products']);
  };

  return (
    <>
      <Head>
        <title>Iniciar sesión</title>
      </Head>

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Ingresa a tu cuenta
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <Input
              label="Correo"
              type="text"
              name="username"
              rules={{required: true}}
              errors={errors}
              register={register}
            />
            <Input
              label="Contraseña"
              type="password"
              name="password"
              autoComplete="current-password"
              rules={{required: true}}
              errors={errors}
              register={register}
            />
            <div className="pt-1">
              <button
                className="group flex w-full items-center justify-center rounded-lg border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={loading}
                onClick={handleSubmit(onSubmit)}
              >
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    Ingresar
                    <ArrowRightOnRectangleIcon className="h-5 ml-2 w-5 group-hover:translate-x-2 transition-all duration-300" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
