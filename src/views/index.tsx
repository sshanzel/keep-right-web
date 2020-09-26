import React from 'react';
import Feed from './Feed';
import KRInput from 'src/components/KRInput';
import Something from 'src/entities/Something';
import {getSomethingsByUserId} from 'src/__mocks__/Something';
import KRModal from 'src/components/KRModal';

export interface KeepRightProps {
  name: string;
}

const KeepRight: React.FC<KeepRightProps> = ({name}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [somethings, setSomethings] = React.useState<Something[]>([]);

  React.useEffect(() => {
    getSomethingsByUserId(1).then(somethings => setSomethings(somethings));
  }, []);

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <div className="w-full bg-white mb-4 p-4 font-semibold">Hi {name}!</div>
      <KRInput shadow className="rounded-full px-4" />
      <button className="bg-gray-500 m-4" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <KRModal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
        <div>Sample</div>
      </KRModal>
      <Feed somethings={somethings} />
    </div>
  );
};

export default KeepRight;
