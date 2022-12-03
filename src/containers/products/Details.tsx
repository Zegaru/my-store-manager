import {HeartIcon} from '@heroicons/react/24/outline';
import {PencilIcon, PlusIcon as PlusIconMini} from '@heroicons/react/20/solid';

const currentFile = {
  name: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  information: {
    'Uploaded by': 'Marie Culver',
    Created: 'June 8, 2020',
    'Last modified': 'June 8, 2020',
    Dimensions: '4032 x 3024',
    Resolution: '72 x 72',
  },
  sharedWith: [
    {
      id: 1,
      name: 'Aimee Douglas',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
    },
    {
      id: 2,
      name: 'Andrea McMillan',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
};

export default function ProductDetails() {
  return (
    <div className="space-y-6 pb-16">
      <div>
        <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
          <img src={currentFile.source} alt="" className="object-cover" />
        </div>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              <span className="sr-only">Details for </span>
              {currentFile.name}
            </h2>
            <p className="text-sm font-medium text-gray-500">{currentFile.size}</p>
          </div>
          <button
            type="button"
            className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <HeartIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Favorite</span>
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-gray-900">Information</h3>
        <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
          {Object.keys(currentFile.information).map((key) => (
            <div key={key} className="flex justify-between py-3 text-sm font-medium">
              <dt className="text-gray-500">{key}</dt>
              <dd className="whitespace-nowrap text-gray-900">
                {currentFile.information[key as keyof typeof currentFile.information]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h3 className="font-medium text-gray-900">Description</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm italic text-gray-500">Add a description to this image.</p>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <PencilIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Add description</span>
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-gray-900">Shared with</h3>
        <ul role="list" className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
          {currentFile.sharedWith.map((person) => (
            <li key={person.id} className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <img src={person.imageUrl} alt="" className="h-8 w-8 rounded-full" />
                <p className="ml-4 text-sm font-medium text-gray-900">{person.name}</p>
              </div>
              <button
                type="button"
                className="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Remove<span className="sr-only"> {person.name}</span>
              </button>
            </li>
          ))}
          <li className="flex items-center justify-between py-2">
            <button
              type="button"
              className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                <PlusIconMini className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                Share
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button
          type="button"
          className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Download
        </button>
        <button
          type="button"
          className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
