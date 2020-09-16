import React from 'react';

export interface KRInputLabelProps {}

const KRInputLabel: React.FC<KRInputLabelProps> = ({children}) => {
  return (
    <span className="text-xs text-gray-500 absolute -mt-2 ml-4 bg-white px-1">{children}</span>
  );
};

export default React.memo(KRInputLabel);
