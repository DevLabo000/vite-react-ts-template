import { useState } from 'react'
import { LayoutPresenter } from './LayoutPresenter'

type LayoutContainerProps = {
  children: React.ReactNode
}

export function LayoutContainer(props: LayoutContainerProps) {
  const { children } = props
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

  const handleClick = (toggle: boolean) => {
    setSidebarOpen(toggle)
  }

  return (
    <LayoutPresenter sidebarOpen={sidebarOpen} handleClick={handleClick}>
      {children}
    </LayoutPresenter>
  )
}

export default LayoutContainer
