import { BiSolidHomeAlt2 } from 'react-icons/bi'
import { BsJustifyLeft } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

type PropsTypes = {
  toggle: () => void
}

export function HeaderPresenter(props: PropsTypes) {
  const { toggle } = props
  const location = useLocation()
  let joinedPath = ''
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
        <div className="relative mx-4 lg:mx-0">
          <div className="flex w-full items-center px-4 ">
            <a href="/">
              <BiSolidHomeAlt2 className="text-gray-500 hover:text-gray-600" />
            </a>
            {location.pathname.split('/').map((path, index) => {
              if (path) {
                joinedPath += `${path}/`
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <a key={index} href={`/${joinedPath}`}>
                    <span className="mx-2 text-gray-500">/</span>
                    {path}
                  </a>
                )
              }
              // eslint-disable-next-line react/jsx-no-useless-fragment
              return <></>
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative" />
      </div>
    </header>
  )
}

export default HeaderPresenter
