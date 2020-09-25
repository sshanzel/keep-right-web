import React from 'react';
import KRCard from 'src/components/KRCard';
import Something from 'src/entities/Something';

export interface FeedProps {
  somethings: Something[];
}

const Feed: React.FC<FeedProps> = ({somethings}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 p-4">
      {somethings.map(something => (
        <KRCard something={something} />
      ))}
    </div>
  );
};

export default Feed;
