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
import AddPaymentButton from './AddPaymentButton';

const API_URL = 'http://localhost:8080/api/receipt';

class ReceiptGrid extends React.Component{
  state = {
    receipts: []
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ receipts: data })
      console.log(this.state.receipts)
     })
  }

  removeReceipt = ( receipt) => {    
    const url = `${API_URL}/${receipt.id}`;
    axios.delete(url);
  };

  render(){
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ReceiptId</TableCell>
              <TableCell align="right">Address Id</TableCell> 
              <TableCell align="right">Debt amount</TableCell>           
              <TableCell align="right">Active amount</TableCell>
              <TableCell align="right">Receipt status</TableCell>
              <TableCell align="right">Dispatch date</TableCell>
              <TableCell>Delete Receipt</TableCell>  
              <TableCell>Add Payment</TableCell>  

              </TableRow>
          </TableHead>
          <TableBody>
            {this.state.receipts.map((receipt) => (
              <TableRow key={receipt.id}>
                <TableCell component="th" scope="row">
                  {receipt.id}
                </TableCell>
                <TableCell align="right">{receipt.addressId}</TableCell>   
                <TableCell align="right">{receipt.debtAmount}</TableCell>   
                <TableCell align="right">{receipt.activeAmount}</TableCell>   
                <TableCell align="right">
                {(() => {
        switch (receipt.receiptStatus) {
          case 1:   return "Not Paid";
          case 2: return "Part Paid";
          case 3:  return "Full Paid";
          default:      return null;
        }
      })()}
                  
                 
                </TableCell>   
                <TableCell align="right">{receipt.dispatchDate}</TableCell>
                <TableCell>
                  <DeleteButton onClick={()=>{ this.removeReceipt(receipt) }}>
                  </DeleteButton>
                </TableCell>
                <TableCell><AddPaymentButton/></TableCell>                          
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default ReceiptGrid;