import { AiOutlineBug } from 'react-icons/ai';
import { BiHomeAlt2 } from 'react-icons/bi';
import { SidebarListType } from './types';

export const sidebarList: SidebarListType[] = [
  {
    link: '/',
    label: 'Home',
    icon: <BiHomeAlt2 />,
  },
  {
    link: '/not-found-page',
    label: 'NotFoundPage',
    icon: <AiOutlineBug />,
  },
];

export default sidebarList;
