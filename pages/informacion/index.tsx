import {useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Bars4Icon, Squares2X2Icon as Squares2X2IconMini} from '@heroicons/react/20/solid';
import {PencilIcon} from '@heroicons/react/24/outline';

import LayoutHeader from '../../src/components/layouts/LayoutHeader';
import WebInfoForm from '../../src/containers/webinfos/Form';
import SlideOver from '../../src/components/SliderOver';

import GeneralApi from '../../src/utils/generalApi';
import {useAuth} from '../../src/contexts/Auth';
import {IInfo} from '../../src/interfaces/webinfo';
import {slugify} from '../../src/utils/functions';

const infoList: IInfo[] = [
  {
    name: 'Carrusel',
    slug: slugify('Carrusel'),
    description: 'Lista de imágenes',
    kind: 'image',
  },
  {
    name: 'Sección 1',
    slug: slugify('Sección 1'),
    description: 'Url y imagen de la sección 1 de la página principal',
    kind: 'both',
    imageMax: 1,
  },
  {
    name: 'Sección 2',
    slug: slugify('Sección 2'),
    description: 'Url y imagen de la sección 2 de la página principal',
    kind: 'both',
    imageMax: 1,
  },
  {
    name: 'Sección 3',
    slug: slugify('Sección 3'),
    description: 'Url y imagen de la sección 3 de la página principal',
    kind: 'both',
    imageMax: 1,
  },
];

export default function InfoPage() {
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);

  const [showForm, setShowForm] = useState(false);
  const [editInfo, setEditInfo] = useState<IInfo | undefined>();

  return (
    <>
      <Head>
        <title>Información</title>
      </Head>

      <LayoutHeader
        onButtonClick={() => {
          setEditInfo(undefined);
          setShowForm(true);
        }}
      />

      <div className="flex flex-1 items-stretch overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="flex">
              <h1 className="flex-1 text-2xl font-bold text-gray-900">Información</h1>
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
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
              >
                {infoList?.map((webinfo: IInfo) => (
                  <li key={webinfo.slug} className="relative">
                    <div className="h-4 w-full bg-indigo-500 rounded" />
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      {webinfo.name}
                    </p>
                    <div className="flex gap-2 justify-end">
                      <button
                        className="bg-indigo-500 transition-all duration-300 hover:bg-indigo-700 rounded-lg p-2"
                        onClick={() => {
                          setEditInfo(webinfo);
                          setShowForm(true);
                        }}
                      >
                        <PencilIcon className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>

        <SlideOver open={showForm} setOpen={setShowForm}>
          {showForm && editInfo ? (
            <WebInfoForm
              editInfo={editInfo}
              onClose={() => {
                setEditInfo(undefined);
                setShowForm(false);
              }}
            />
          ) : null}
        </SlideOver>
      </div>
    </>
  );
}
