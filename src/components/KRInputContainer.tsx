import React from 'react';
import clx from 'classnames';

export type KRInputContainerProps = React.HTMLAttributes<HTMLDivElement> & {};

const KRInputContainer: React.FC<KRInputContainerProps> = ({children, className}) => {
  return <div className={clx(`flex flex-col w-full relative`, className)}>{children}</div>;
};

export default React.memo(KRInputContainer);
