import Swal from 'sweetalert2';
import { confirmMessages } from './constants';
import { ConfirmIdTypes } from './types';

export const useConfirm = () => {
  const showConfirm = (id: ConfirmIdTypes) => {
    const { options } = confirmMessages.filter((row) => row.id === id)[0];
    return Swal.fire({ ...options });
  };
  return { showConfirm };
};

export default useConfirm;
