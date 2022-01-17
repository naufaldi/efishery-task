import React, { FC, useRef, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import Button from '../Common/Button';
import Container from '../Common/Container';
import Section from '../Common/Section';
import Table from './Table';

// Lib not compatible with ts

const fetcher = (url) => fetch(url).then((res) => res.json());

const ListData: FC = () => {
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Komiditas',
        accessor: 'komoditas',
        width: 600,
      },
      {
        Header: 'Kota',
        accessor: 'area_kota',
        width: 400,
      },
      {
        Header: 'Provinsi',
        accessor: 'area_provinsi',
        width: 300,
      },
      {
        Header: 'Ukuran',
        accessor: 'size',
        Cell: (row) => {
          return <div className="size">{row.value}</div>;
        },
        width: 200,
      },
      {
        Header: 'Harga',
        accessor: 'price',
        Cell: (row) => {
          return (
            <div className="price">
              {row.value?.length > 0 ? (
                <>
                  <span>Rp </span>{' '}
                  <span>{Number(row.value).toLocaleString('id-ID')}</span>{' '}
                </>
              ) : (
                row.value
              )}
            </div>
          );
        },
        width: 400,
      },
      {
        Header: 'Data Masuk',
        accessor: 'tgl_parsed',
        Cell: (row) => {
          return <div className="date">{dataConvert(row.value)}</div>;
        },
        width: 400,
      },
    ],
    []
  );
  const { data, error } = useSWR(
    'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list',
    fetcher
  );

  useEffect(() => {
    if (error) {
      setError(!isError);
    }
    if (!data) {
      setLoading(true);
    }
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const dataConvert = (data: Date) => {
    return new Date(data).toLocaleDateString('en-US');
  };
  const tableInstance = useRef(null);
  console.log('data swr', data);
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/addData');
  };
  return (
    <Section id="table-homepage" className="data">
      <Container>
        <div className="data__button">
          <Button
            ariaLabel="tambah data button"
            onClick={(e) => handleClick(e)}
          >
            Tambah Data
          </Button>
        </div>
        <h1>{data?.name}</h1>
        <div className="filter">
          <label htmlFor="about" className="filter__label">
            Cari Data
          </label>
          <div className="mt-1">
            <input
              id="about"
              name="about"
              onChange={(e) => {
                tableInstance.current.setGlobalFilter(e.target.value);
              }}
              className="filter__input"
              placeholder="Ketik data yang akan dicari"
            />
          </div>
        </div>
        <div className="data__table">
          {isError && <div>Something went wrong ...</div>}
          {isLoading && <div>Loading ...</div>}

          {data && (
            //@ts-ignore
            //table not sync with ts
            <Table columns={columns} data={data} ref={tableInstance} />
          )}
        </div>
      </Container>
    </Section>
  );
};

export default ListData;
