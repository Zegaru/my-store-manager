import {useState} from 'react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';
import {useQuery} from '@tanstack/react-query';
import {Combobox} from '@headlessui/react';
import {useRouter} from 'next/router';

import {classNames} from '../../utils/functions';
import GeneralApi from '../../utils/generalApi';
import {IFilter} from '../../interfaces/product';
import {useAuth} from '../../contexts/Auth';

export function FilterSelector({
  selectedFilters,
  setSelectedFilters,
}: {
  selectedFilters: Array<IFilter>;
  setSelectedFilters: (filters: Array<IFilter>) => void;
}) {
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);
  const [query, setQuery] = useState('');

  const {data} = useQuery(['filters'], () => generalApi.get('/filters/list'), {
    keepPreviousData: true,
    staleTime: 10000,
  });

  const filteredFilters =
    query === ''
      ? data?.data
      : data?.data?.filter((filter: IFilter) => {
          return filter.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      by="_id"
      value={selectedFilters}
      onChange={(value) => {
        setSelectedFilters(value);
      }}
      multiple
    >
      <Combobox.Label className="block text-sm font-medium text-gray-700">Filtros</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar filtro"
        />
        <Combobox.Button className="absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredFilters?.length > 0 ? (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredFilters.map((filter: IFilter) => (
              <Combobox.Option
                key={filter._id}
                value={filter}
                className={({active}) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({active, selected}) => (
                  <>
                    <span className={classNames('block truncate', selected ? 'font-semibold' : '')}>
                      {filter.name}
                    </span>

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
        {selectedFilters.length > 0 && (
          <ul className="flex gap-2 mt-2 flex-wrap">
            {selectedFilters.map((filter) => (
              <li
                key={filter._id}
                className="items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
              >
                {filter.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Combobox>
  );
}
