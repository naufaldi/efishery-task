import clsx from 'clsx';
import React, { FC } from 'react';

const Breadcumb: FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={clsx('breadcumb', className)}>{children}</div>;
};

export default Breadcumb;
