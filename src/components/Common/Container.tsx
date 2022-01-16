import clsx from 'clsx';
import React, { FC } from 'react';

const Container: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={clsx('container', className)}>{children}</div>;
};

export default Container;
