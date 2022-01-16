import React, { FC } from 'react';
import Breadcumb from '../Common/Breadcumb';

import Container from '../Common/Container';
import Section from '../Common/Section';

const Hero: FC = () => {
  return (
    <Section id="hero-homepage" className="hero">
      <Container className="hero__container">
        <Breadcumb>
          <p className="breadcumb__one">Beranda</p>
        </Breadcumb>
      </Container>
    </Section>
  );
};

export default Hero;
