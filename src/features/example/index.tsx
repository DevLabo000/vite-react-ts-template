import { useState } from 'react'
import { Button } from '@/components/elements/button'
import { Spinner } from '@/components/elements/spinner'
import { Typography } from '@/components/elements/typography'
import { useToast, useConfirm } from '@/hooks'

export function ExampleContainer() {
  const { showConfirm } = useConfirm()
  const { showToast } = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClickConfirmErr = async () => {
    await showConfirm('C001')
  }

  const handleClickConfirminfo = async () => {
    await showConfirm('C002')
  }
  const handleClickConfirmQue = async () => {
    await showConfirm('C003')
  }
  const handleClickConfirmSuc = async () => {
    await showConfirm('C004')
  }

  const handleClickConfirmWarn = async () => {
    await showConfirm('C005')
  }

  const handleClickToastDef = () => {
    showToast('T001')
  }

  const handleClickToastErr = () => {
    showToast('T002')
  }

  const handleClickToastInfo = () => {
    showToast('T003')
  }

  const handleClickToastSuc = () => {
    showToast('T004')
  }

  const handleClickToastWarn = () => {
    showToast('T005')
  }

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <>
      <Spinner visible={isLoading} />
      {!isLoading && (
        <div className="flex">
          <div className="flex-col">
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
              <div className="space-x-4">
                <Button
                  color="primary"
                  size="xl"
                  onClick={handleClickConfirmErr}
                >
                  error confirm
                </Button>

                <Button
                  color="primary"
                  size="xl"
                  onClick={handleClickConfirminfo}
                >
                  info confirm
                </Button>

                <Button
                  color="primary"
                  size="xl"
                  onClick={handleClickConfirmQue}
                >
                  question confirm
                </Button>

                <Button
                  color="primary"
                  size="xl"
                  onClick={handleClickConfirmSuc}
                >
                  success confirm
                </Button>

                <Button
                  color="primary"
                  size="xl"
                  onClick={handleClickConfirmWarn}
                >
                  warning confirm
                </Button>
              </div>
              <div className="mt-4 space-x-4">
                <Button color="danger" size="xl" onClick={handleClickToastDef}>
                  default toast
                </Button>

                <Button color="danger" size="xl" onClick={handleClickToastErr}>
                  error toast
                </Button>

                <Button color="danger" size="xl" onClick={handleClickToastInfo}>
                  info toast
                </Button>

                <Button color="danger" size="xl" onClick={handleClickToastSuc}>
                  success toast
                </Button>

                <Button color="danger" size="xl" onClick={handleClickToastWarn}>
                  warning toast
                </Button>
              </div>

              <div className="mt-4">
                <Button color="danger" size="xl" onClick={handleLoadingClick}>
                  5秒ローディング
                </Button>
              </div>
              <div className="mt-4">
                <Button
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={handleClickToastWarn}
                >
                  full width
                </Button>
              </div>

              <div className="mt-4">
                <Button
                  color="primary"
                  size="large"
                  disabled
                  onClick={handleClickToastWarn}
                >
                  disabled
                </Button>
              </div>

              <div className="mt-4">
                <Button
                  color="primary"
                  size="medium"
                  onClick={handleClickToastWarn}
                >
                  medium size
                </Button>
              </div>

              <div className="mt-4">
                <Button
                  color="primary"
                  size="small"
                  onClick={handleClickToastWarn}
                >
                  small size
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ExampleContainer
