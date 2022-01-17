// @ts-nocheck

import React, { FC, useRef, useImperativeHandle, forwardRef } from 'react';
import Button from '../Common/Button';
import Container from '../Common/Container';
import Section from '../Common/Section';
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from 'react-table';
import makeData from './makeData';
// Lib not compatible with ts
const Table = forwardRef(({ columns, data }, ref) => {
  // Use the state and functions returned from useTable to build your UI
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 200,
    }),
    []
  );
  const instance = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
    },
    useFilters, // useFilters!
    useGlobalFilter, //
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    prepareRow,

    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = instance;
  useImperativeHandle(ref, () => instance);
  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
});

const ListData: FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Komiditas',
        accessor: 'firstName',
      },
      {
        Header: 'Kota',
        accessor: 'lastName',
      },
      {
        Header: 'Provinsi',
        accessor: 'age',
      },
      {
        Header: 'Ukuran',
        accessor: 'visits',
      },
      {
        Header: 'Harga',
        accessor: 'status',
      },
      {
        Header: 'Data Masuk',
        accessor: 'progress',
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(40), []);
  const tableInstance = useRef(null);

  return (
    <Section id="table-homepage" className="data">
      <Container>
        <div className="data__button">
          <Button ariaLabel="tambah data button">Tambah Data</Button>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <input
            onChange={(e) => {
              tableInstance.current.setGlobalFilter(e.target.value);
            }}
            placeholder="Filter outside table"
          />
        </div>
        <div className="data__table">
          <Table columns={columns} data={data} ref={tableInstance} />
        </div>
      </Container>
    </Section>
  );
};

export default ListData;
