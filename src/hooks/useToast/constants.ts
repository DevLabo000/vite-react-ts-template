import { ToastMessageType } from './types'

export const toastMessages: ToastMessageType[] = [
  { id: 'T001', level: 'default', message: 'defaultメッセージ' },
  { id: 'T002', level: 'error', message: 'errorメッセージ' },
  { id: 'T003', level: 'info', message: 'infoメッセージ' },
  { id: 'T004', level: 'success', message: 'successメッセージ' },
  { id: 'T005', level: 'warning', message: 'warningメッセージ' },
]

export default toastMessages
