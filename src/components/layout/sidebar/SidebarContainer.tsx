import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SidebarPresenter } from './SidebarPresenter'
import { sidebarList } from './constants'

type SidebarContainerProps = {
  isOpen: boolean
  toggle: () => void
}

export function SidebarContainer(props: SidebarContainerProps) {
  const { isOpen, toggle } = props
  const location = useLocation()

  const [active, setActive] = useState<boolean[]>(
    Array(sidebarList.length).fill(false),
  )

  useEffect(() => {
    const arr = sidebarList.map((item) => item.link === location.pathname)
    setActive(arr)
  }, [location.pathname])

  return (
    <SidebarPresenter
      isOpen={isOpen}
      active={active}
      toggle={toggle}
      sidebarList={sidebarList}
    />
  )
}

export default SidebarContainer
