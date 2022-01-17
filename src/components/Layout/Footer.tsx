import Image from 'next/image';
import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <div>
        <p>Frontend Test for eFishery</p>
        <Image src="/logo.png" width={30} height={30} />
      </div>
    </footer>
  );
};

export default Footer;
