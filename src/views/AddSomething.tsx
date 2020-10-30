import React from 'react';
import KRModal from 'src/components/KRModal';

export interface AddSomethingProps {}

const AddSomething: React.FC<AddSomethingProps> = () => {
  const [isOpen, setIsOpen] = React.useState(() => false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white hover:shadow w-10 rounded-full flex items-center justify-center focus:outline-none">
        <span className="font-bold text-2xl -mt-1">+</span>
      </button>
      <KRModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-8">Test</div>
      </KRModal>
    </>
  );
};

export default AddSomething;
