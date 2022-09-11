/**
 * /hooks/ui の例
 * componentをreturnに使用する場合に/hooks/ui に配置する
 */
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ModalWrapper = useCallback(
    ({ children }: { children: ReactNode }) => {
      return <dialog open={isOpen}>{children}</dialog>;
    },
    [isOpen]
  );

  return [ModalWrapper, openModal, closeModal, isOpen];
};
