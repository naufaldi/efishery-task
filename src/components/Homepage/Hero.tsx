import Link from 'next/link';
import React, { FC } from 'react';
import Breadcumb from '../Common/Breadcumb';
// import useSWR from 'swr';

import Container from '../Common/Container';
import Section from '../Common/Section';
// const fetcher = (url) => fetch(url).then((res) => res.json());

const Hero: FC = () => {
  // const { data, error } = useSWR(
  //   'https://api.github.com/repos/vercel/swr',
  //   fetcher
  // );

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  return (
    <Section id="hero-homepage" className="hero">
      <Container className="hero__container">
        <Breadcumb>
          <Link href="/">
            <a className="breadcumb__one">Beranda</a>
          </Link>
        </Breadcumb>
        {/* <h1>{data?.name}</h1> */}
      </Container>
    </Section>
  );
};

export default Hero;
