import { useState } from 'react'
import { Spinner } from '@/components/elements/spinner'
import { useToast, useConfirm } from '@/hooks'

export function ExampleContainer() {
  const { showConfirm } = useConfirm()
  const { showToast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = async () => {
    await showConfirm('C001')
  }

  const handleClick2 = () => {
    showToast('T002')
  }

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <>
      {isLoading && <Spinner />}
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

      <button
        type="button"
        onClick={handleLoadingClick}
        className="text-gray-500 focus:outline-none"
      >
        サンプルボタン3
      </button>
    </>
  )
}

export default ExampleContainer
