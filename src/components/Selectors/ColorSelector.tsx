import {useState} from 'react';
import {useRouter} from 'next/router';
import {Combobox} from '@headlessui/react';
import {useQuery} from '@tanstack/react-query';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';

import {classNames} from '../../utils/functions';
import GeneralApi from '../../utils/generalApi';
import {IColor} from '../../interfaces/product';
import {useAuth} from '../../contexts/Auth';

// const colors = [
//   {
//     name: 'Limon Fosforescente',
//     color: '#F9F900',
//   },
//   {
//     name: 'Naranja Industrial',
//     color: '#FFA500',
//   },
//   {
//     name: 'Azul Marino',
//     color: '#000080',
//   },
//   {
//     name: 'Gris',
//     color: '#808080',
//   },
//   {
//     name: 'Naranja Fosforescente',
//     color: '#FFA500',
//   },
//   {
//     name: 'Negro',
//     color: '#000000',
//   },
//   {
//     name: 'Acero',
//     color: '#808080',
//   },
//   {
//     name: 'Kaki',
//     color: '#C0C0C0',
//   },
//   {
//     name: 'Botella',
//     color: '#808000',
//   },
//   {
//     name: 'Azulino',
//     color: '#0000FF',
//   },
//   {
//     name: 'Amarillo',
//     color: '#FFFF00',
//   },
// ];

export function ColorSelector({
  selectedColors,
  setSelectedColors,
}: {
  selectedColors: Array<IColor>;
  setSelectedColors: (colors: Array<IColor>) => void;
}) {
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);
  const [query, setQuery] = useState('');

  const {data} = useQuery(['colors'], () => generalApi.get('/colors/list'), {
    keepPreviousData: true,
    staleTime: 10000,
  });

  const filteredColors =
    query === ''
      ? data?.data
      : data?.data?.filter((color: IColor) => {
          return color.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      by="name"
      value={selectedColors}
      onChange={(value) => {
        setSelectedColors(value);
      }}
      multiple
    >
      <Combobox.Label className="block text-sm font-medium text-gray-700">Colores</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar color"
        />
        <Combobox.Button className="absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredColors?.length > 0 ? (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredColors.map((color: IColor) => (
              <Combobox.Option
                key={color.name}
                value={color}
                className={({active}) =>
                  classNames(
                    'relative cursor-default flex justify-between items-center select-none py-2 pl-8 pr-4',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({active, selected}) => (
                  <>
                    <span className={classNames('block truncate', selected ? 'font-semibold' : '')}>
                      {color.name}
                    </span>

                    <div
                      className={classNames(
                        'h-4 w-4 rounded-full border-2 transition-all duration-300 border-transparent',
                        active ? 'border-white' : ''
                      )}
                      style={{
                        backgroundColor: `#${color.code}`,
                      }}
                    />

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        ) : (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <div
              className="relative flex justify-between cursor-default select-none py-2 pl-8 pr-4 hover:bg-indigo-600 hover:text-white"
              onClick={(event) => event.stopPropagation()}
            >
              No se encontraron resultados
            </div>
          </Combobox.Options>
        )}
        {selectedColors.length > 0 && (
          <ul className="flex gap-2 mt-2 flex-wrap">
            {selectedColors.map((color) => (
              <li
                key={color.name}
                className="items-center rounded-md flex gap-2 bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
              >
                {color.name}
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: `#${color.code}`,
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Combobox>
  );
}
