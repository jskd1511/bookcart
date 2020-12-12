import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




export default function BasicTable(props) {
   if(props.show === false)
   {
      return null
   }
   else{
      if(props.data.length === 0)
   {
      return <div>
         <h1>loading</h1>
      </div>
   }
   else
   {

   console.log(props.data)
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         

             {
                props.data.map((item,index)=>{
                  return(<TableRow key={index}>
                     <TableCell align="right">{item.id}</TableCell>
                     <TableCell align="right">{item.name}</TableCell>
                     <TableCell align="right">{item.username}</TableCell>
                     <TableCell align="right">{item.phone}</TableCell>
                     <TableCell align="right">{item.website}</TableCell>
                  </TableRow>)
                })
              
               }
            
        
        </TableBody>
      </Table>
    </TableContainer>
  );
   }
   }
}
