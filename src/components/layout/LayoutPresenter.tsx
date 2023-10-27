import { ToastContainer } from 'react-toastify'
import { HeaderContainer } from './header'
import { SidebarContainer } from './sidebar'

type PropsTypes = {
  children: React.ReactNode
  sidebarOpen: boolean
  handleClick: (toggle: boolean) => void
}

export function LayoutPresenter(props: PropsTypes) {
  const { children, sidebarOpen, handleClick } = props
  return (
    <>
      <div className="flex h-screen bg-gray-200 text-xl">
        <SidebarContainer
          isOpen={sidebarOpen}
          toggle={() => handleClick(false)}
        />
        <div className="flex flex-1 flex-col overflow-hidden">
          <HeaderContainer toggle={() => handleClick(true)} />
          <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200">
            {children}
          </main>
        </div>
      </div>
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
