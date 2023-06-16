import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
  { id: 'name', label: 'ลำดับ', minWidth:10 , align: 'center',},
  {
    id: 'population',
    label: 'ID',
    minWidth: 10,
    align: 'center'
   
  },
  {
    id: 'size',
    label: 'ชื่อ',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'รายละเอียด',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'icon',
    label: 'Edit / Delete',
    minWidth: 10,
    align: 'center'
  },
];

function createData(name, population, size , density,icon) {
  // const density = "";
  return { name, population, size, density ,icon};
}

const rows = [
  createData(1,1,'Label_1',1324171354,<div><EditIcon/> <DeleteIcon/></div>),
  createData(2,2,'Label_2',1403500365,<div><EditIcon/> <DeleteIcon/></div>),
  createData(3,3,'Label_3',60483973, <div><EditIcon/> <DeleteIcon/></div>),
  createData(4,4,'Label_4',327167434,<div><EditIcon/> <DeleteIcon/></div>),
  createData(5,5,'Label_5',37602103,<div><EditIcon/> <DeleteIcon/></div>),
  createData(6,6,'Label_6',25475400,<div><EditIcon/> <DeleteIcon/></div>),
  createData(7,7,'Label_7',83019200,<div><EditIcon/> <DeleteIcon/></div>),
  createData(8,8,'Label_8',4857000,<div><EditIcon/> <DeleteIcon/></div>),
  createData(9,9,'Label_9',126577691,<div><EditIcon/> <DeleteIcon/></div>),
  createData(10,10,'Label_10',126317000,<div><EditIcon/> <DeleteIcon/></div>),
  createData(11,11,'Label_11',67022000,<div><EditIcon/> <DeleteIcon/></div>),
  createData(12,12,'Label_12 ',67545757,<div><EditIcon/> <DeleteIcon/></div>),
  createData(13,13,'Label_13',146793744,<div><EditIcon/> <DeleteIcon/></div>),
  createData(14,14,'Label_14',200962417,<div><EditIcon/> <DeleteIcon/></div>),
  createData(15,15,'Label_15',210147125,<div><EditIcon/> <DeleteIcon/></div>),
  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container >
      <h2 align="left">รายการ PMESII</h2>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={'center'}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        // <TableCell>Test</TableCell>
                        <TableCell key={column.id} align={column.align}>
                          {typeof value === 'string'
                            ? <Link href={`/news-label/${value}`}>{value}</Link>
                            : column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
}