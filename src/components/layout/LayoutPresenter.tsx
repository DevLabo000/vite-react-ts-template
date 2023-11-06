import { HeaderContainer } from './header'
import { SidebarContainer } from './sidebar'

type LayoutPresenterProps = {
  children: React.ReactNode
  sidebarOpen: boolean
  handleClick: (toggle: boolean) => void
}

export function LayoutPresenter(props: LayoutPresenterProps) {
  const { children, sidebarOpen, handleClick } = props
  return (
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
  )
}

export default LayoutPresenter
