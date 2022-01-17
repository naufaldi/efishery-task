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
          <p> {'>>'} </p>
          <p className="breadcumb__two">Tambah Data</p>
        </Breadcumb>
      </Container>
    </Section>
  );
};

export default Hero;
