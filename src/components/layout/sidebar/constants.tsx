import { AiOutlineBug } from 'react-icons/ai'
import { BiHomeAlt2 } from 'react-icons/bi'
import { SidebarListType } from './types'

export const sidebarList: SidebarListType[] = [
  {
    link: '/',
    label: 'dashboard',
    icon: <BiHomeAlt2 />,
  },
  {
    link: '/example',
    label: 'example',
    icon: <AiOutlineBug />,
  },
]

export default sidebarList
