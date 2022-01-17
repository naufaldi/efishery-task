import React, { useEffect, useState } from 'react';
import Button from '../Common/Button';
import Card from '../Common/Card';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import Section from '../Common/Section';
import { v4 as uuidv4 } from 'uuid';
import useSWR from 'swr';
import Link from 'next/link';
const fetcher = (url) => fetch(url).then((res) => res.json());

const FormComodity = () => {
  const [dataForm, setDataForm] = useState<any>([]);
  const [province, setProvince] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [comodity, setComodity] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [errorState, setErrorState] = useState<boolean>(false);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { data, error } = useSWR(
    'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_area',
    fetcher
  );
  const { data: dataSize, error: errorSize } = useSWR(
    'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size',
    fetcher
  );
  const submitForm = () => {
    let now = new Date();
    let isoString = now.toISOString();
    fetch(
      'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            uuid: uuidv4(),
            komoditas: comodity,
            area_provinsi: province,
            area_kota: city,
            size: size,
            price: price,
            tgl_parsed: isoString,
            timestamp: +new Date(),
          },
        ]),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setDataForm(result);
        setAlert(true);
      })
      .catch((err) => {
        alert('error');
      });
  };
  useEffect(() => {
    if (error || errorSize) {
      setErrorState(!errorState);
    }
    if (!data || !dataSize) {
      setLoading(true);
    }
    if (data || dataSize) {
      setLoading(false);
    }
  }, [data]);
  const handleChangeProvince = (e) => {
    // const value = event.target.value;
    const value = e.target.value;
    setProvince(value);
  };
  const handleChangeCity = (e) => {
    // const value = event.target.value;
    const value = e.target.value;
    setCity(value);
  };
  const handleChangeSize = (e) => {
    // const value = event.target.value;
    const value = e.target.value;
    setSize(value);
  };
  console.log('dataSize', dataSize);
  return (
    <Section id="form-data" className="comodity">
      <Container className="comodity__container">
        <div className="comodity__content">
          <Card>
            {isAlert && (
              <div className="comodity__alert">
                {dataForm?.updatedRange && 'Data Berhasil diperbarui'}

                <span onClick={() => setAlert(!isAlert)}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
            )}
            <form>
              <Grid className="comodity__grid">
                <h6>Wilayah</h6>
                <div className="">
                  <label htmlFor="province" className="comodity__label">
                    Provinsi
                  </label>
                  {/* <input
                    type="text"
                    name="province"
                    id="province"
                    className="input"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  /> */}
                  <select
                    name="province"
                    id="province"
                    className="input"
                    onChange={handleChangeProvince}
                  >
                    <option value="" disabled selected={true}>
                      Pilih Provinsi
                    </option>
                    {data?.map((item: any, index: number) => (
                      <option key={index} value={item.province}>
                        {item.province}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label htmlFor="city" className="comodity__label">
                    Kota
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {/* <select
                    name="city"
                    id="city"
                    className="input"
                    onChange={handleChangeCity}
                  >
                    {data?.map((item: any, index: number) => {
                      if (item.province === province) {
                        <option key={index} value={item.city}>
                          {item.city}
                        </option>;
                      }
                    })}
                  </select> */}
                </div>
                <h6>Barang</h6>
                <div className="">
                  <label htmlFor="comodity" className="comodity__label">
                    Komiditas
                  </label>
                  <input
                    type="text"
                    name="comodity"
                    id="comodity"
                    className="input"
                    value={comodity}
                    onChange={(e) => setComodity(e.target.value)}
                  />
                </div>
                <div className="">
                  <label htmlFor="size" className="comodity__label">
                    Size
                  </label>
                  {/* <input
                    type="text"
                    name="size"
                    id="size"
                    className="input"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  /> */}
                  <select
                    name="province"
                    id="province"
                    className="input"
                    onChange={handleChangeSize}
                  >
                    <option value="" disabled selected={true}>
                      Pilih Size
                    </option>
                    {dataSize?.map((item, index) => (
                      <option key={index} value={item.size}>
                        {item.size}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label htmlFor="price" className="comodity__label">
                    Harga
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </Grid>
            </form>
          </Card>
          <div className="comodity__button">
            <Link passHref href="/">
              <Button ariaLabel="batalkan data button" variant="light">
                Batalkan
              </Button>
            </Link>
            <Button ariaLabel="tambah data button" onClick={submitForm}>
              Tambah Data
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FormComodity;
