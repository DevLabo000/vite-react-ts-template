import { MenuContainer } from './menu'
import { SidebarListType } from './types'

type PropsTypes = {
  isOpen: boolean
  active: boolean[]
  toggle: () => void
  sidebarList: SidebarListType[]
}

export function SidebarPresenter(props: PropsTypes) {
  const { isOpen, active, toggle, sidebarList } = props
  return (
    <>
      <div
        onClick={toggle}
        className={`fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      />
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto bg-gray-900 transition duration-300 lg:static lg:inset-0 lg:translate-x-0 ${
          isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        }`}
      >
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center">
            <span className="mx-2 text-2xl font-semibold text-white">***</span>
          </div>
        </div>

        <nav className="mt-10">
          {sidebarList.map((item, index) => (
            <MenuContainer
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              label={item.label}
              link={item.link}
              active={active[index]}
              toggle={toggle}
            >
              {item.icon}
            </MenuContainer>
          ))}
        </nav>
      </div>
    </>
  )
}

export default SidebarPresenter
