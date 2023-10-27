import { SweetAlertOptions } from 'sweetalert2'

const confirmMessageId = {
  C001: 'C001',
  C002: 'C002',
  C003: 'C003',
  C004: 'C004',
  C005: 'C005',
}

export type ConfirmIdTypes = keyof typeof confirmMessageId

export type ConfirmMessageType = {
  id: ConfirmIdTypes
  options: SweetAlertOptions
}
