import {TOAST_KIND} from '../utils/enums';

const constants = {
  TOAST_MESSAGES: {
    success: 'Action finished',
    error: 'Unexpected error',
    info: 'Info',
  },
  TOAST_COLORS: {
    success: 'border-teal-500',
    error: 'border-red-500',
    info: 'border-blue-800',
  },
  TOAST_ICONS: {
    success: `<svg class="h-6 w-6 stroke-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`,
    error: `<svg class="h-6 w-6 stroke-2 text-red-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>`,
    info: `<svg class="h-6 w-6 stroke-2 text-blue-800" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>`,
  },
};

export function showSuccessToast(msg: string, options?: any) {
  showToast(TOAST_KIND.SUCCESS, msg, options || {});
}
export function showErrorToast(msg: string, options?: any) {
  showToast(TOAST_KIND.ERROR, msg, options || {});
}
export function showInfoToast(msg: string, options?: any) {
  showToast(TOAST_KIND.INFO, msg, options || {});
}

function buildToast(id: number, kind: TOAST_KIND, msg: string) {
  let toast = document.createElement('div');
  toast.innerHTML = `<div
      id="toast_${id}"
      key="${id}"
      class='sm:mt-2 p-4 flex max-w-md sm:max-w-sm w-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 sm:rounded-lg border-l-2 ${
        constants.TOAST_COLORS[kind]
      } pointer-events-auto hover:bg-gray-50 transition-transform animate-toast-in-right'
    >
      <!--button onClick={() => deleteToast(toastProperties.id)}>X</button-->
      <div class="overflow-hidden flex-1">
        <div>
          <div class="flex items-start">
            <div class="flex-shrink-0">
              ${constants.TOAST_ICONS[kind]}
            </div>
            <div class="ml-3 flex-1 pt-1">
              <p class="toast-text text-sm leading-5 font-medium text-gray-900">
                ${msg || constants.TOAST_MESSAGES[kind]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  return toast;
}

function showToast(kind: TOAST_KIND, msg: string, options?: any) {
  const id = Math.floor(Math.random() * 101 + 1);
  let toast = buildToast(id, kind, msg);
  const toastTexts = document.getElementsByClassName('toast-text');
  for (let i = 0; i < toastTexts.length; i++) {
    if (
      toastTexts[i].innerHTML.trim() === 'Ocurrió un error' &&
      msg === 'Ocurrió un error'
    )
      return;
  }

  const rootElement = document.getElementById('toast-container');
  if (!rootElement) return;
  rootElement.insertBefore(toast, rootElement.firstChild);
  setTimeout(function () {
    toast?.parentNode?.removeChild(toast);
  }, options.duration || 8000);
}
