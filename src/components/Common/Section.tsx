import clsx from 'clsx';
import React, { FC } from 'react';

const Section: FC<{
  children: React.ReactNode;
  id: string;
  className?: string;
}> = ({ children, id, className }) => {
  return (
    <section className={clsx('section', className)} id={id}>
      {children}
    </section>
  );
};

export default Section;
