import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const API_URL = 'http://localhost:8080/api/person';

class AddPersonForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            passportSerial: '',
            passportNumber: ''
        };
        
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
      const { name, passportSerial, passportNumber } = this.state
    return (        
        <form  noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        Add Person
                    </Typography>
                </Toolbar>
            </AppBar>
      </div>
       
        <div>
        <TextField label="Full person name" type="text" name="name" value={name} onChange={this.changeHandler}/>
        </div>

        <div>
        <TextField label="Passport serial" type="number" name="passportSerial" value={passportSerial} onChange={this.changeHandler}/>
        </div>
        
        <div>
        <TextField label="Passport number" type="number" name="passportNumber" value={passportNumber} onChange={this.changeHandler}/>
        </div>
        <br/> 
        <div>
        <Button type="submit" variant="contained" color="primary">
            Add person 
        </Button>
        </div>              
      </form>
    );
  }
}

export default AddPersonForm;