import { BsJustifyLeft } from 'react-icons/bs'

type PropsTypes = {
  toggle: () => void
}

export function HeaderPresenter(props: PropsTypes) {
  const { toggle } = props
  return (
    <header className="flex items-center justify-between border-b-4 border-indigo-600 bg-white px-6 py-4">
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggle}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <BsJustifyLeft />
        </button>
        <div className="relative mx-4 lg:mx-0" />
      </div>
      <div className="flex items-center">
        <div className="relative" />
      </div>
    </header>
  )
}

export default HeaderPresenter
