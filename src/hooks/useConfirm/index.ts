import Swal from 'sweetalert2'
import { ConfirmIdTypes } from './types'
import { confirmMessages } from './constants'

export const useConfirm = () => {
  const showConfirm = (id: ConfirmIdTypes) => {
    const { options } = confirmMessages.filter((row) => row.id === id)[0]
    return Swal.fire({ ...options })
  }
  return { showConfirm }
}

export default useConfirm
