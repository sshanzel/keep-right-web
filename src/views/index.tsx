import React from 'react';
import Feed from './Feed';
import AddSomething from './AddSomething';
import KRInput from 'src/components/KRInput';
import Something from 'src/entities/Something';
import {getSomethings} from 'src/services/something.service';

export interface KeepRightProps {
  name: string;
}

const KeepRight: React.FC<KeepRightProps> = ({name}) => {
  const [somethings, setSomethings] = React.useState<Something[]>([]);

  React.useEffect(() => {
    getSomethings().then(response => setSomethings(response.data));
  }, []);

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <div className="w-full bg-white mb-4 p-4 font-semibold">Hi {name}!</div>
      <div className="w-full flex flex-row pl-4">
        <AddSomething />
        <KRInput shadow className="rounded-full px-4" />
      </div>
      <Feed somethings={somethings} />
    </div>
  );
};

export default KeepRight;
