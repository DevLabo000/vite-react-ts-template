import { HeaderPresenter } from './HeaderPresenter';

type PropsTypes = {
  toggle: () => void;
};

export function HeaderContainer(props: PropsTypes) {
  const { toggle } = props;

  return <HeaderPresenter toggle={toggle} />;
}

export default HeaderContainer;
