import React, { FC } from 'react';

const Grid: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="grid">{children}</div>;
};

export default Grid;
