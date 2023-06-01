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
import AddAddressButton from './AddAddressButton';



const API_URL = 'http://localhost:8080/api/person';

class PersonGrid extends React.Component{
  state = {
    persons: []
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ persons: data })
      console.log(this.state.persons)
     })     
  }

     removePerson = (person) => {    
      const url = `${API_URL}/${person.id}`;
      axios.delete(url);
    };
    
  render(){
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PersonId</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Passport serial</TableCell>
              <TableCell align="right">Passport number</TableCell>
              <TableCell>Delete persons</TableCell>
              <TableCell>Add Address</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {this.state.persons.map((person) => (
              <TableRow key={person.id}>
                <TableCell component="th" scope="row">
                  {person.id}
                </TableCell>
                <TableCell align="right">{person.name}</TableCell>
                <TableCell align="right">{person.passportSerial}</TableCell>
                <TableCell align="right">{person.passportNumber}</TableCell> 
                <TableCell>
                  <DeleteButton onClick={()=>{ this.removePerson(person) }}>
                  </DeleteButton>
                  </TableCell>      
                <TableCell><AddAddressButton/></TableCell>           
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default PersonGrid;