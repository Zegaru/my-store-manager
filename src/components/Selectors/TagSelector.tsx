import {useState} from 'react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {Combobox} from '@headlessui/react';
import {useRouter} from 'next/router';

import {classNames} from '../../utils/functions';
import GeneralApi from '../../utils/generalApi';
import {ITag} from '../../interfaces/product';
import {useAuth} from '../../contexts/Auth';
import {showErrorToast} from '../Toast';
import LoadingSpinner from '../LoadingSpinner';
import {SPINNER_COLORS} from '../../utils/enums';

export function TagSelector({
  selectedTags,
  setSelectedTags,
}: {
  selectedTags: Array<ITag>;
  setSelectedTags: (tags: Array<ITag>) => void;
}) {
  const queryClient = useQueryClient();
  const history = useRouter();
  const auth = useAuth();

  const generalApi = new GeneralApi(auth, history);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const {data} = useQuery(['tags'], () => generalApi.get('/tags/list'), {
    keepPreviousData: true,
    staleTime: 10000,
  });

  const filteredTags =
    query === ''
      ? data?.data
      : data?.data?.filter((tag: ITag) => {
          return tag.name.toLowerCase().includes(query.toLowerCase());
        });

  const submitCreate = async () => {
    if (!query) return;

    setLoading(true);

    const result = await generalApi.post('/tags/create', {
      name: query,
    });
    if (!result.success) {
      setLoading(false);
      return showErrorToast(result.message);
    }
    setLoading(false);
    setSelectedTags([...selectedTags, result.data]);
    queryClient.invalidateQueries(['tags']);
  };

  return (
    <Combobox
      as="div"
      by="_id"
      value={selectedTags}
      onChange={(value) => {
        setSelectedTags(value);
      }}
      multiple
    >
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Categorías
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar categoría"
        />
        <Combobox.Button className="absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        {filteredTags?.length > 0 ? (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredTags.map((tag: ITag) => (
              <Combobox.Option
                key={tag._id}
                value={tag}
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
                      {tag.name}
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
            {loading ? (
              <div className="py-2 pl-8 pr-4">
                <LoadingSpinner color={SPINNER_COLORS.PRIMARY} />
              </div>
            ) : (
              <div
                className="relative flex justify-between cursor-default select-none py-2 pl-8 pr-4 hover:bg-indigo-600 hover:text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  submitCreate();
                }}
              >
                <span>{query}</span>
                <span>Nueva categoría</span>
              </div>
            )}
          </Combobox.Options>
        )}
        {selectedTags.length > 0 && (
          <ul className="flex gap-2 mt-2 flex-wrap">
            {selectedTags.map((tag) => (
              <li
                key={tag._id}
                className="items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
              >
                {tag.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Combobox>
  );
}
