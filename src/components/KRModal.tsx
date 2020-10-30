import React from 'react';

export interface KRModalProps {
  isOpen: boolean;
  error?: string;
  defaultLayout?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  onClose: () => void;
}

const WRAPPER_CLASS = 'drawer__wrapper';

const KRModal: React.FC<KRModalProps> = ({onClose, isOpen, children, defaultLayout = true}) => {
  const handleClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;

    if (el.classList.contains(WRAPPER_CLASS)) onClose();
  };

  return (
    <div
      onClick={handleClick}
      style={{backgroundColor: '#00000080'}}
      className={`${WRAPPER_CLASS} ${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 w-screen h-screen z-10 items-center justify-center`}>
      {!defaultLayout ? (
        children
      ) : (
        <div className="bg-white w-full justify-center lg:w-1/3 md:w-1/2">{children}</div>
      )}
    </div>
  );
};

export default React.memo(KRModal);
