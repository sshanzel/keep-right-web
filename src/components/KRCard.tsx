import React from 'react';
import Something from 'src/entities/Something';

export interface KRCardProps {
  something: Something;
}

const KRCard: React.FC<KRCardProps> = ({something}) => {
  const {title, somethingTags} = something;

  return (
    <div className="card__container h-32 w-full flex flex-col items-center justify-between pt-2 shadow hover:shadow-lg duration-100 hover:-translate-y-1 transform ease-in-out transition-all bg-white rounded-lg">
      <span className="text-2xl text-gray-800">{title}</span>
      <div className="flex flex-row truncate text-xs text-gray-600 mb-2">
        {somethingTags?.map(somethingTag => '#' + somethingTag.tag.title)}
      </div>
    </div>
  );
};

export default KRCard;
