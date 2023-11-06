import { ConfirmMessageType } from './types'

export const confirmMessages: ConfirmMessageType[] = [
  {
    id: 'C001',
    options: { title: 'ERRORメッセージ', icon: 'error' },
  },
  {
    id: 'C002',
    options: { title: 'INFOメッセージ', icon: 'info' },
  },
  {
    id: 'C003',
    options: { title: 'QUESTIONメッセージ', icon: 'question' },
  },
  {
    id: 'C004',
    options: { title: 'SUCCESSメッセージ', icon: 'success' },
  },
  {
    id: 'C005',
    options: { title: 'WARNINGメッセージ', icon: 'warning' },
  },
]

export default confirmMessages
