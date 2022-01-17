import React from 'react';
import Button from '../Common/Button';
import Card from '../Common/Card';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import Section from '../Common/Section';

const FormComodity = () => {
  return (
    <Section id="form-data" className="comodity">
      <Container className="comodity__container">
        <div className="comodity__content">
          <Card>
            <Grid className="comodity__grid">
              <h6>Wilayah</h6>
              <div className="">
                <label htmlFor="first-name" className="comodity__label">
                  Provinsi
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input"
                />
              </div>
              <div className="">
                <label htmlFor="first-name" className="comodity__label">
                  Kota
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input"
                />
              </div>
              <h6>Barang</h6>
              <div className="">
                <label htmlFor="first-name" className="comodity__label">
                  Komiditas
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input"
                />
              </div>
              <div className="">
                <label htmlFor="first-name" className="comodity__label">
                  Size
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input"
                />
              </div>
              <div className="">
                <label htmlFor="first-name" className="comodity__label">
                  Harga
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input"
                />
              </div>
            </Grid>
          </Card>
          <div className="comodity__button">
            <Button
              ariaLabel="batalkan data button"
              variant="light"
              // onClick={(e) => handleClick(e)}
            >
              Batalkan
            </Button>
            <Button
              ariaLabel="tambah data button"
              // onClick={(e) => handleClick(e)}
            >
              Tambah Data
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FormComodity;
