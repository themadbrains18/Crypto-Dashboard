import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MarketData from './marketData';
import svgimg from '../../assets/images/graph.svg'

export default function TableChart() {
  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
              <TableCell align="left" colSpan={4}>
              Market Overview
              </TableCell>
              <TableCell align="right" colSpan={4}>
              <MoreVertIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              {MarketData.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 53 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {MarketData.rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {MarketData.columns.map((column) => {
                      const value = row[column.id];
                      console.log('====value', value)
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value !== 'image' ? value : <img src={svgimg} alt='' />  }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}