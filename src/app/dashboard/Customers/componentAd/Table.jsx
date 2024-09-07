'use client'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';



const columns = [
  { field: 'id', headerName: 'id', width: 100 , },
  { field: 'fullName', headerName: 'fullName  ', width: 150 }, 
  { field: 'email', headerName: 'email', width: 200 },
  { field: 'city', headerName: 'city', width: 100 },
  { field: 'job', headerName: 'job', width: 100 },
];


const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users')
      .then(response => response.json())
      .then(data => setCustomers(data))
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className='w-[100%] h-[400px] flex' >
      <DataGrid
       sx={{
        '& .MuiDataGrid-columnHeader': {     
          color: 'rgb(77,112,235)', // تغییر رنگ متن تیتر
        },
       }}
        rows={customers}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowHeight={100}
        checkboxSelection
        disableRipple
      />
    </div>
  );
}

export default Customers;



