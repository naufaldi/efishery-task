import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <div className="navbar__logo">
          <Image src="/logo.png" width={50} height={50} />
        </div>
        <div className="navbar__menu">
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="https://docs.steinhq.com/read-data">
            <a target="_blank">Data API</a>
          </Link>{' '}
        </div>
      </nav>
    </header>
  );
};

export default Header;
