import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import AddReceiptButton from './AddReceiptButton';

const API_URL = 'http://localhost:8080/api/address';

class AddressGrid extends React.Component{
  state = {
    addresses: []
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ addresses: data })
      console.log(this.state.addresses)
     })
  }

  removeAddress = ( address) => {    
    const url = `${API_URL}/${address.id}`;
    axios.delete(url);
  };


  render(){
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>AddressId</TableCell>
              <TableCell align="right">Person Id</TableCell> 
              <TableCell align="right">Full address</TableCell>
              <TableCell>Delete Address</TableCell>  
              <TableCell>Add Receipt</TableCell>             
              </TableRow>
          </TableHead>
          <TableBody>
            {this.state.addresses.map((address) => (
              <TableRow key={address.id}>
                <TableCell component="th" scope="row">
                  {address.id}
                </TableCell>
                <TableCell align="right">{address.personId}</TableCell>   
                <TableCell align="right">{address.fullAddress}</TableCell>
                <TableCell>
                  <DeleteButton onClick={()=>{ this.removeAddress(address) }}>
                  </DeleteButton>
                  </TableCell>
                  <TableCell><AddReceiptButton/></TableCell>                            
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default AddressGrid;