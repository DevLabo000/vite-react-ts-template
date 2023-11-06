import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuPresenter } from './MenuPresenter'

type MenuContainerProps = {
  children: React.ReactNode
  label: string
  link: string
  active: boolean
  toggle: () => void
}

export function MenuContainer(props: MenuContainerProps) {
  const { children, label, link, active, toggle } = props
  const navigate = useNavigate()

  const handleClick = async (): Promise<void> => {
    await navigate(link)
    toggle()
  }

  return (
    <MenuPresenter label={label} active={active} handleClick={handleClick}>
      {children}
    </MenuPresenter>
  )
}

export default MenuContainer
