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

const API_URL = 'http://localhost:8081/api/payment';

class PaymentGrid extends React.Component{
  state = {
    payments: []
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ payments: data })
      console.log(this.state.payments)
     })
  }


  removePayment = (payment) => {    
    const url = `${API_URL}/${payment.id}`;
    axios.delete(url);
  };

  render(){
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PaymentId</TableCell>
              <TableCell align="right">Receipt Id</TableCell> 
              <TableCell align="right">Amount</TableCell> 
              <TableCell align="right">Payment date</TableCell>
              <TableCell>Delete Payment</TableCell>                     
              </TableRow>
          </TableHead>
          <TableBody>
            {this.state.payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell component="th" scope="row">
                  {payment.id}
                </TableCell>
                <TableCell align="right">{payment.receiptId}</TableCell>   
                <TableCell align="right">{payment.amount}</TableCell> 
                <TableCell align="right">{payment.paymentDate}</TableCell>
                <TableCell>
                  <DeleteButton onClick={()=>{this.removePayment(payment)}}>
                  </DeleteButton>
                  </TableCell>                             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default PaymentGrid;