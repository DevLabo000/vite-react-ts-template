import { Dialog } from '@headlessui/react';
import Vite from '@/assets/vite.svg?react';

type SystemInfoPresenterProps = {
  isOpen: boolean;
  handleClick: (value: boolean) => void;
};

export function SystemInfoPresenter(props: SystemInfoPresenterProps) {
  const { isOpen, handleClick } = props;
  return (
    <>
      <div className="mt-8 flex items-center justify-center">
        <div className="flex-col">
          <button type="button" onClick={() => handleClick(true)}>
            <div className="flex items-center justify-center mb-4">
              <Vite className="h-32 w-32 p-4 text-gray-200 rounded-full bg-gray-800 hover:bg-slate-500" />
            </div>
            <p className="text-center text-xl font-semibold text-white">
              {import.meta.env.VITE_APP_DISPLAY_NAME}
            </p>
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => handleClick(false)}
        className="fixed z-100 inset-0 overflow-y-auto"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-10">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-10">
            <Dialog.Title className={'text-center mb-6 text-xl font-bold'}>
              <Vite />
              System Information
            </Dialog.Title>
            <div className="flex-col items-center justify-center">
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">display name</span>
                <span className="ml-auto text-gray-900">
                  {import.meta.env.VITE_APP_DISPLAY_NAME}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">app name</span>
                <span className="ml-auto text-gray-900">
                  {import.meta.env.VITE_APP_TITLE}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">version</span>
                <span className="ml-auto text-gray-900">
                  {import.meta.env.VITE_APP_VERSION}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">last commit</span>
                <span className="ml-auto text-gray-900">
                  {import.meta.env.VITE_APP_COMMIT_VERSION}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">last build date</span>
                <span className="ml-auto text-gray-900">
                  {import.meta.env.VITE_APP_BUILD_DATE}
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">build mode</span>
                <span className="ml-auto text-gray-900">
                  {import.meta.env.MODE}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-600 px-4 py-2 rounded-md text-white text-lg"
                  onClick={() => handleClick(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default SystemInfoPresenter;
