import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Popper from '@mui/material/Popper';

function createData(name, BW, IP) {
  return { name, BW, IP };
}

const rows = [
  createData('User1', 159, '192.168.1.1'),
  createData('User2', 237, '192.168.1.2'),
  createData('User3', 262, '192.168.1.3'),
];

const BandTrackPage = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <TableContainer component={Paper}>
      <div className='font-bold text-2xl m-6'>BandWidth Tracking</div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">BW</TableCell>
            <TableCell align="right">IP Address</TableCell>
            <TableCell align="right">Select Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.BW}</TableCell>
              <TableCell align="right">{row.IP}</TableCell>
              <TableCell align="right">
                <Box sx={{}}>
                  <FormControl fullWidth>
                    <InputLabel id={`select-label-${row.name}`}>Select a BW</InputLabel>
                    <Select
                      labelId={`select-label-${row.name}`}
                      id={`select-${row.name}`}
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>0.5</MenuItem>
                      <MenuItem value={20}>1</MenuItem>
                      <MenuItem value={30}>1.5</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BandTrackPage;
