import React from 'react';
import Something from 'src/entities/Something';

export interface KRCardProps {
  something: Something;
}

const KRCard: React.FC<KRCardProps> = ({something}) => {
  return <div className="h-32 w-full shadow bg-white rounded-lg"></div>;
};

export default KRCard;
