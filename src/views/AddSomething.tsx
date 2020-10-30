import React from 'react';
import KRInput from 'src/components/KRInput';
import KRModal from 'src/components/KRModal';

export interface AddSomethingProps {}

const AddSomething: React.FC<AddSomethingProps> = () => {
  const [isOpen, setIsOpen] = React.useState(() => false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white hover:shadow w-12 h-12 rounded-full flex items-center justify-center focus:outline-none">
        <span className="font-bold text-2xl -mt-1">+</span>
      </button>
      <KRModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-8">
          <KRInput filled label="Title" />
          <KRInput filled label="Description" />
        </div>
      </KRModal>
    </>
  );
};

export default AddSomething;
