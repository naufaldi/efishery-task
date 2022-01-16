import React, { FC } from 'react';
import Button from '../Common/Button';
import Container from '../Common/Container';
import Section from '../Common/Section';

const ListData: FC = () => {
  return (
    <Section id="table-homepage" className="data">
      <Container>
        <div className="data__button">
          <Button ariaLabel="tambah data button">Tambah Data</Button>
        </div>
      </Container>
    </Section>
  );
};

export default ListData;
