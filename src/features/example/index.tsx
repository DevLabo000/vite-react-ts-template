import { useToast, useConfirm } from '@/hooks'

export function ExampleContainer() {
  const { showConfirm } = useConfirm()
  const { showToast } = useToast()

  const handleClick = async () => {
    await showConfirm('C001')
  }

  const handleClick2 = () => {
    showToast('T002')
  }
  return (
    <>
      <h1>exampleページ</h1>
      <button
        type="button"
        onClick={handleClick}
        className="text-gray-500 focus:outline-none"
      >
        サンプルボタン
      </button>

      <button
        type="button"
        onClick={handleClick2}
        className="text-gray-500 focus:outline-none"
      >
        サンプルボタン2
      </button>
    </>
  )
}

export default ExampleContainer
