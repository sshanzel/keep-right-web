import React from 'react';
import KRInput from 'src/components/KRInput';

export interface KeepRightProps {
  name: string;
}

const KeepRight: React.FC<KeepRightProps> = ({name}) => {
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <div className="w-full bg-white mb-4 p-4 font-semibold">Hi {name}!</div>
      <KRInput shadow className="rounded-full px-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-4 p-4">
        <div className="h-32 w-full shadow bg-white rounded-lg"></div>
        <div className="h-32 w-full shadow bg-white rounded-lg"></div>
        <div className="h-32 w-full shadow bg-white rounded-lg"></div>
        <div className="h-32 w-full shadow bg-white rounded-lg"></div>
        <div className="h-32 w-full shadow bg-white rounded-lg"></div>
        <div className="h-32 w-full shadow bg-white rounded-lg"></div>
      </div>
    </div>
  );
};

export default KeepRight;
