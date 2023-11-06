import React from 'react'

type MenuPresenterProps = {
  children: React.ReactNode
  label: string
  active: boolean
  handleClick: () => void
}

export function MenuPresenter(props: MenuPresenterProps) {
  const { children, label, active, handleClick } = props
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`mt-4 flex w-full items-center px-6 py-2 ${
        active
          ? 'bg-gray-700/25 text-gray-100'
          : 'text-gray-400 hover:bg-gray-700/25 hover:text-gray-100'
      }`}
    >
      {children}
      <span className="mx-3">{label}</span>
    </button>
  )
}

export default MenuPresenter
