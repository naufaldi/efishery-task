import clsx from 'clsx';
import React, { FC } from 'react';

const Grid: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={clsx('grid', className)}>{children}</div>;
};

export default Grid;
