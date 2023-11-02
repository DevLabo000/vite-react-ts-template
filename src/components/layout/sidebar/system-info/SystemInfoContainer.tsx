import { useState } from 'react';
import { SystemInfoPresenter } from './SystemInfoPresenter';

export function SystemInfoContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (value: boolean) => {
    setIsOpen(value);
  };

  return <SystemInfoPresenter isOpen={isOpen} handleClick={handleClick} />;
}

export default SystemInfoContainer;
