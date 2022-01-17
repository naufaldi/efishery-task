import React, { FC } from 'react';
import Breadcumb from '../Common/Breadcumb';
import Container from '../Common/Container';
import Section from '../Common/Section';

const Hero: FC = () => {
  return (
    <Section id="hero-add-data" className="hero">
      <Container className="hero__container">
        <Breadcumb>
          <p className="breadcumb__one">Beranda</p>
          <span className="arrow">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </span>
          <p className="breadcumb__two">Tambah Data</p>
        </Breadcumb>
      </Container>
    </Section>
  );
};

export default Hero;
