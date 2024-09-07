'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id,
  fullName,
  email,
  city,
  job,
) {
  return { id, fullName, email, city, job };
}

const rows = [
  createData('1', 'Niloofar Yoosedi', 'niloofar@gmail.com', 'Tehran', 'Developer'),

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ '& .MuiTableCell-root': { color: 'rgb(77,112,235)', textAlign: 'center' } }}>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>fullName</TableCell>
            <TableCell>email</TableCell>
            <TableCell>city</TableCell>
            <TableCell>job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell  align="center"  component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.fullName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



