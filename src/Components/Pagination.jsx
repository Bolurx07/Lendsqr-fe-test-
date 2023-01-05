import TablePagination from '@mui/material/TablePagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Datatable from './Datatable/Datatable';

export default function TablePaginationDemo() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [userData, setUserData] = useState()

    
    useEffect(() => {
        const getData = () => {
            try {
                axios
                .get(' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/4')
                .then((result) => {
                        const users = result;
                        console.log(users);
                        setUserData(users);
                })
            } catch (error) {
                console.log(error)
            }
        };
        
        getData()
    }, []);

  return (
    <TablePagination
      component="tr"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}