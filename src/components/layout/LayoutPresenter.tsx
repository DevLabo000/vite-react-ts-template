import { Provider as JotaiProvider } from 'jotai'
import { ToastContainer } from 'react-toastify'
import { HeaderContainer } from './header'
import { SidebarContainer } from './sidebar'
import 'react-toastify/dist/ReactToastify.css'

type LayoutPresenterProps = {
  children: React.ReactNode
  sidebarOpen: boolean
  handleClick: (toggle: boolean) => void
}

export function LayoutPresenter(props: LayoutPresenterProps) {
  const { children, sidebarOpen, handleClick } = props
  return (
    <>
      <JotaiProvider>
        <div className="flex h-screen bg-gray-200 text-xl">
          <SidebarContainer
            isOpen={sidebarOpen}
            toggle={() => handleClick(false)}
          />
          <div className="flex flex-1 flex-col overflow-hidden">
            <HeaderContainer toggle={() => handleClick(true)} />
            <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 p-14">
              {children}
            </main>
          </div>
        </div>
      </JotaiProvider>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        position="bottom-right"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default LayoutPresenter
