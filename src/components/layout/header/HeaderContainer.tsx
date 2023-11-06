import { HeaderPresenter } from './HeaderPresenter'

type HeaderContainerProps = {
  toggle: () => void
}

export function HeaderContainer(props: HeaderContainerProps) {
  const { toggle } = props

  return <HeaderPresenter toggle={toggle} />
}

export default HeaderContainer
