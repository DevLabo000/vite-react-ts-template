import { useState } from 'react'
import { Button } from '@/components/elements/button'
import { Spinner } from '@/components/elements/spinner'
import { Typography } from '@/components/elements/typography'
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
    <div>
      <Spinner visible={isLoading} />
      <h1>exampleページ</h1>

      <Typography variant="h1">h1Typography</Typography>
      <Typography variant="h2">h2Typography</Typography>
      <Typography variant="h3">h3Typography</Typography>
      <Typography variant="h4">h4Typography</Typography>
      <Typography variant="h5">h5Typography</Typography>
      <Typography variant="h6">h6Typography</Typography>
      <Typography variant="subtitle1">subtitle1Typography</Typography>
      <Typography variant="subtitle2">subtitle2Typography</Typography>
      <Typography variant="body1">body1Typography</Typography>
      <Typography variant="body2">body2Typography</Typography>

      <div>
        <Button color="primary" size="xl" onClick={handleClick}>
          largeボタン
        </Button>

        <Button color="primary" size="large" onClick={handleClick}>
          largeボタン
        </Button>

        <Button color="primary" size="medium" onClick={handleClick}>
          mediumボタン
        </Button>

        <Button color="primary" size="small" onClick={handleClick}>
          smallボタン
        </Button>
      </div>

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
    </div>
  )
}

export default ExampleContainer
