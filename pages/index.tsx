import {Fragment, useState} from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {Menu, Transition} from '@headlessui/react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {
  Bars4Icon,
  EllipsisVerticalIcon,
  Squares2X2Icon as Squares2X2IconMini,
} from '@heroicons/react/20/solid';

import {showErrorToast, showSuccessToast} from '../src/components/Toast';
import LayoutHeader from '../src/components/layouts/LayoutHeader';
import LoadingSpinner from '../src/components/LoadingSpinner';
import ProductForm from '../src/containers/products/Form';
import SlideOver from '../src/components/SliderOver';

import PaginationApi from '../src/utils/paginationApi';
import {IProduct} from '../src/interfaces/product';
import {classNames} from '../src/utils/functions';
import {SPINNER_COLORS} from '../src/utils/enums';
import GeneralApi from '../src/utils/generalApi';
import {useAuth} from '../src/contexts/Auth';

export default function Home() {
  const queryClient = useQueryClient();
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);
  const paginationApi = new PaginationApi('/products/list', 6, auth, history);

  const [showForm, setShowForm] = useState(false);
  const [actionId, setActionId] = useState<string | undefined>();
  const [duplicateLoading, setDuplicateLoading] = useState(false);

  const [page, setPage] = useState(0);

  const {isLoading, isFetching, data} = useQuery(
    ['products', page],
    () => {
      return paginationApi.getContent(page, {});
    },
    {keepPreviousData: true, staleTime: 10000}
  );

  const submitDuplicate = async (productId: string) => {
    setDuplicateLoading(true);

    const result = await generalApi.post('/products/duplicate', {
      productId,
    });
    if (!result.success) {
      setDuplicateLoading(false);
      return showErrorToast(result.message);
    }

    showSuccessToast('Categoría duplicada correctamente!');
    queryClient.invalidateQueries(['products']);
    setDuplicateLoading(false);
    setActionId(result.data._id);
    setShowForm(true);
  };

  return (
    <>
      <Head>
        <title>Productos</title>
      </Head>

      <LayoutHeader
        onButtonClick={() => {
          setActionId(undefined);
          setShowForm(true);
        }}
      />

      <div className="flex flex-1 items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-1 text-2xl font-bold text-gray-900">Productos</h1>
              <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                <button
                  type="button"
                  className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <Bars4Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use list view</span>
                </button>
                <button
                  type="button"
                  className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <Squares2X2IconMini className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Use grid view</span>
                </button>
              </div>
            </div>

            <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" className="sr-only">
                Productos
              </h2>
              {isLoading && (
                <div className="flex justify-center p-4">
                  <LoadingSpinner color={SPINNER_COLORS.PRIMARY} />
                </div>
              )}
              {!isLoading && data?.data?.length === 0 && (
                <p className="mt-4">No se encontraron resultados</p>
              )}
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
              >
                {data?.data?.map((product: IProduct) => (
                  <li key={product._id} className="relative">
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
                      <img
                        src={
                          product.images[0]?.url ||
                          'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80'
                        }
                        alt=""
                        className="object-cover pointer-events-none"
                      />
                      <button
                        type="button"
                        disabled={duplicateLoading}
                        className="absolute inset-0 focus:outline-none"
                        onClick={() => {
                          setActionId(product._id);
                          setShowForm(true);
                        }}
                      >
                        <span className="sr-only">View details for Producto 1</span>
                      </button>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-1">
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                          {product.name}
                        </p>
                        <p className="pointer-events-none block text-sm font-medium text-gray-500">
                          {product.tags.map((tag) => tag.name).join(', ')}
                        </p>
                      </div>

                      <Menu as="div" className="flex-shrink-0 pr-2 relative">
                        <Menu.Button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open options</span>
                          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 top-10 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({active}) => (
                                  <button
                                    disabled={duplicateLoading}
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block w-full text-left px-4 py-2 text-sm'
                                    )}
                                    onClick={() => {
                                      setActionId(product._id);
                                      setShowForm(true);
                                    }}
                                  >
                                    Editar
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({active}) => (
                                  <button
                                    disabled={duplicateLoading}
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block w-full text-left px-4 py-2 text-sm'
                                    )}
                                    onClick={() => {
                                      setActionId(product._id);
                                      submitDuplicate(product._id);
                                    }}
                                  >
                                    {duplicateLoading && actionId === product._id ? (
                                      <LoadingSpinner color={SPINNER_COLORS.PRIMARY} />
                                    ) : (
                                      'Duplicar'
                                    )}
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>

        <SlideOver open={showForm} setOpen={setShowForm}>
          {showForm ? (
            <ProductForm
              editId={actionId}
              onClose={() => {
                setActionId(undefined);
                setShowForm(false);
              }}
            />
          ) : null}
        </SlideOver>
      </div>
    </>
  );
}
