import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Pagination,
} from '@mui/material';

interface Props {
  tableHead: string[];
  tableBody: any;
  showPagination: boolean;
  page: number;
  handleChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  count: number;
  component?: any;
  tableStyle?: any;
  tableContainerStyle?: any;
  tableTopHeadStyle?: any;
  tableHeadStyle?: any;
  tableBodyStyle?: any;
}
function TableComponent({
  tableHead,
  tableBody,
  showPagination,
  page,
  handleChange,
  count,
  component,
  tableStyle,
  tableContainerStyle,
  tableTopHeadStyle,
  tableHeadStyle,
  tableBodyStyle,
}: Props) {
  return (
    <TableContainer sx={{ ...tableContainerStyle }} component={component}>
      <Table sx={{ ...tableStyle }} aria-label="simple table">
        <TableHead sx={{ ...tableTopHeadStyle }}>
          <TableRow>
            {tableHead.map(item => (
              <TableCell sx={{ ...tableHeadStyle }}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ ...tableBodyStyle }}>{tableBody}</TableBody>
      </Table>
      {showPagination && (
        <Pagination
          sx={{ margin: '10px' }}
          // @ts-ignore
          count={count}
          page={page}
          onChange={handleChange}
        />
      )}
    </TableContainer>
  );
}

export default TableComponent;
