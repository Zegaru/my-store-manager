import {Bars4Icon, Squares2X2Icon as Squares2X2IconMini} from '@heroicons/react/20/solid';
import {useQuery} from '@tanstack/react-query';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {useState} from 'react';
import {PencilIcon} from '@heroicons/react/24/outline';

import LayoutHeader from '../../src/components/layouts/LayoutHeader';
import LoadingSpinner from '../../src/components/LoadingSpinner';
import SlideOver from '../../src/components/SliderOver';
import TagForm from '../../src/containers/tags/Form';

import {SPINNER_COLORS} from '../../src/utils/enums';
import GeneralApi from '../../src/utils/generalApi';
import {ITag} from '../../src/interfaces/product';
import {useAuth} from '../../src/contexts/Auth';

export default function TagsPage() {
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | undefined>();

  const {isFetching, data} = useQuery(['tags'], () => generalApi.get('/tags/list'), {
    keepPreviousData: true,
    staleTime: 10000,
  });

  return (
    <>
      <Head>
        <title>Categorías</title>
      </Head>

      <LayoutHeader
        onButtonClick={() => {
          setEditId(undefined);
          setShowForm(true);
        }}
      />

      <div className="flex flex-1 items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-1 text-2xl font-bold text-gray-900">Categorías</h1>
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
              {isFetching && (
                <div className="flex justify-center p-4">
                  <LoadingSpinner color={SPINNER_COLORS.PRIMARY} />
                </div>
              )}
              {!isFetching && data?.data?.length === 0 && (
                <p className="mt-4">No se encontraron resultados</p>
              )}
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
              >
                {data?.data?.map((tag: ITag) => (
                  <li key={tag._id} className="relative">
                    <div className="h-4 w-full bg-indigo-500 rounded" />
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      {tag.name}
                    </p>
                    <div className="flex gap-2 justify-end">
                      <button
                        className="bg-indigo-500 transition-all duration-300 hover:bg-indigo-700 rounded-lg p-2"
                        onClick={() => {
                          setEditId(tag._id);
                          setShowForm(true);
                        }}
                      >
                        <PencilIcon className="h-5 w-5 text-white" />
                      </button>
                      {/* <button className="bg-red-500 transition-all duration-300 hover:bg-red-700 rounded-lg p-2">
                        <TrashIcon className="h-5 w-5 text-white" />
                      </button> */}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>

        <SlideOver open={showForm} setOpen={setShowForm}>
          {showForm ? (
            <TagForm
              editId={editId}
              onClose={() => {
                setEditId(undefined);
                setShowForm(false);
              }}
            />
          ) : null}
        </SlideOver>
      </div>
    </>
  );
}
