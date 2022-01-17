import clsx from 'clsx';
import React, { FC } from 'react';

const Card: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={clsx('card', className)}>{children}</div>;
};

export default Card;
