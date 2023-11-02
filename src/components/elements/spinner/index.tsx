type PropsTypes = {
  visible: boolean
}

export function Spinner(props: PropsTypes) {
  const { visible } = props
  return (
    visible && (
      <div
        className="flex h-full flex-col items-center justify-center"
        aria-label="読み込み中"
      >
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-gray-500 border-t-transparent" />
        <h2 className="mt-2 animate-pulse text-center text-xl font-semibold text-gray-500">
          Loading...
        </h2>
      </div>
    )
  )
}

export default Spinner
