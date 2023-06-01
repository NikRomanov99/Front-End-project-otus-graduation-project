import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const API_URL = 'http://localhost:8080/api/receipt';

class AddReceiptForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {

            addressId: '',
            debtAmount:'',            
            activeAmount:'',
            receiptStatus:''            
        }
    }    
      changeHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler =(e)=>{
        e.preventDefault();
        const url = `${API_URL}`;
        axios.post(url, this.state);       
    }
    
  render(){
      const { debtAmount, activeAmount, receiptStatus, addressId } = this.state
    return (        
        <form  noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        Add receipt
                    </Typography>
                </Toolbar>
            </AppBar>
      </div>
       
      <div>
        <TextField label="Address Id" type="number" name="addressId" value={addressId} onChange={this.changeHandler}/>
        </div>

        <div>
        <TextField label="Debt amount" type="number" name="debtAmount" value={debtAmount} onChange={this.changeHandler}/>
        </div>
        
        <div>
        <TextField label="Active amount" type="number" name="activeAmount" value={activeAmount} onChange={this.changeHandler}/>
        </div>

        <div>
        <TextField label="Receipt status" type="text" name="receiptStatus" value={receiptStatus} onChange={this.changeHandler}/>
        </div>

        <br/> 
        <div>
        <Button type="submit" variant="contained" color="primary">
            Add receipt 
        </Button>
        </div>              
      </form>
    );
  }
}

export default AddReceiptForm;