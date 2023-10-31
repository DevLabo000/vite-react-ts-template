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
    <div className="flex">
      <div className="flex-col">
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

        <div className="space-x-4">
          <div className="my-4">
            <Typography variant="h3">Buttons</Typography>
          </div>

          <Button color="primary" size="xl" onClick={handleClick}>
            Confirm表示
          </Button>

          <Button color="primary" size="large" onClick={handleClick2}>
            Toast表示
          </Button>

          <Button color="primary" size="medium" onClick={handleLoadingClick}>
            5秒ローディング
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ExampleContainer
