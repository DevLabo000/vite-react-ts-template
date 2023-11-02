import { MenuContainer } from './menu';
import { SidebarListType } from './types';
import { SystemInfoContainer } from './system-info';

type PropsTypes = {
  isOpen: boolean;
  active: boolean[];
  toggle: () => void;
  sidebarList: SidebarListType[];
};

export function SidebarPresenter(props: PropsTypes) {
  const { isOpen, active, toggle, sidebarList } = props;
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
        <SystemInfoContainer />
        <h3 className="mt-14 ml-5 text-sm font-semibold text-gray-200">MENU</h3>
        <nav className="mt-4">
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
  );
}

export default SidebarPresenter;
