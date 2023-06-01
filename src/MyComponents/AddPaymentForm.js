import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const API_URL = 'http://localhost:8081/api/payment';

class AddPaymentForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {

            receiptId: '',
            amount:''                          
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
      const { receiptId, amount } = this.state
    return (        
        <form  noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        Add payment
                    </Typography>
                </Toolbar>
            </AppBar>
      </div>
       
       <div>
        <TextField label="Receipt Id" type="text" name="receiptId" value={receiptId} onChange={this.changeHandler}/>
        </div>

        <div>
        <TextField label="Amount" type="text" name="amount" value={amount} onChange={this.changeHandler}/>
        </div>
      
        <br/> 
        <div>
        <Button type="submit" variant="contained" color="primary">
            Add payment 
        </Button>
        </div>              
      </form>
    );
  }
}

export default AddPaymentForm;