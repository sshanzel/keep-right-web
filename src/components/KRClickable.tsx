import React from 'react';
import clx from 'classnames';

export type KRClickableProps = React.ButtonHTMLAttributes<HTMLElement> & {};

const KRClickable: React.FC<KRClickableProps> = ({children, className, ...props}) => {
  return (
    <div className={clx('cursor-pointer', className)} {...props}>
      {children}
    </div>
  );
};

export default React.memo(KRClickable);
