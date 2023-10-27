import { toast } from 'react-toastify'
import { ToastIdTypes } from './types'
import { toastMessages } from './constants'

export const userToast = () => {
  const showToast = (id: ToastIdTypes) => {
    const { level, message } = toastMessages.filter((row) => row.id === id)[0]
    switch (level) {
      case 'error':
        toast.error(message)
        break
      case 'info':
        toast.info(message)
        break
      case 'success':
        toast.success(message)
        break
      case 'warning':
        toast.warning(message)
        break
      default:
        toast(message)
    }
  }
  return { showToast }
}

export default userToast
