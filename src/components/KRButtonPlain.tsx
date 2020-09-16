import React from 'react';
import clx from 'classnames';

export type KRButtonPlainProps = React.ButtonHTMLAttributes<HTMLElement> & {
  contentClassName?: string;
};

const KRButtonPlain: React.FC<KRButtonPlainProps> = ({
  children,
  className,
  contentClassName,
  ...rest
}) => {
  return (
    <button className={clx('focus:outline-none', className)} {...rest}>
      <span className={clx('text-sm', contentClassName)}>{children}</span>
    </button>
  );
};

export default React.memo(KRButtonPlain);
