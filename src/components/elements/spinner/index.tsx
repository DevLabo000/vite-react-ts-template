export function Spinner() {
  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-700/75"
      aria-label="読み込み中"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-gray-100 border-t-transparent" />
      <h2 className="mt-2 animate-pulse text-center text-xl font-semibold text-gray-100">
        Loading...
      </h2>
    </div>
  )
}

export default Spinner
