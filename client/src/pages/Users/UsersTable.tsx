/** Dependencies */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/** Styles */
import { Paper, TableCell, TableRow } from '@mui/material';

/** Components */
import EmptyState from '../../components/EmptyState';

/** Hooks */
import TableComponent from '../../components/TableComponent';
import useUsers from "../../hooks/useUsers";

interface Props {
  page: number;
  setPage: (value: ((prevState: number) => number) | number) => void;
}

function CustomersTable({ page, setPage }: Props) {
  const navigate = useNavigate();
  const {users, meta} = useUsers();
  useEffect(() => {
    // @ts-ignore
    setPage(1);
  }, [meta]);

  const tableHead = ['id', 'Kullanıcı Adı'];

  const tableBody = users.map((row, index) => (
    <TableRow
      key={row.id}
      onClick={() => {
        navigate(`/user-details/${row.id}`);
      }}
    >
      <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
        {
          // @ts-ignore
          `#${index + 1}`
        }
      </TableCell>
      <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell style={{ textAlign: 'center' }} component="th" scope="row">
        {row.name}
      </TableCell>
    </TableRow>
  ));

  const renderEmpty = () => (
    <EmptyState
      message='Veri bulunamadı!'
    />
  );

  useEffect(() => {
    // @ts-ignore
    setPage(1);
  }, []);

  return (
    <Paper sx={{ width: '100%', p: 2 }}>
      {!users.length ? (
        renderEmpty()
      ) : (
        <TableComponent
          tableHead={tableHead}
          tableBody={tableBody}
          showPagination
          page={1}
          tableStyle={{ minWidth: 650 }}
          tableHeadStyle={{ textAlign: 'center' }}
          tableBodyStyle={'pointer'}
          count={1}
        />
      )}
    </Paper>
  );
}

export default CustomersTable;
