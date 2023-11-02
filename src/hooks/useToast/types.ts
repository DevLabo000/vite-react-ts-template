import { TypeOptions } from 'react-toastify';

const toastMessageId = {
  T001: 'T001',
  T002: 'T002',
  T003: 'T003',
  T004: 'T004',
  T005: 'T005',
};

export type ToastIdTypes = keyof typeof toastMessageId;

export type ToastMessageType = {
  id: ToastIdTypes;
  level: TypeOptions;
  message: string;
};
