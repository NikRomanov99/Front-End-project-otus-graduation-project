import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const API_URL = 'http://localhost:8080/api/address';

class AddAddressForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            fullAddress:'',
            personId: ''            
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

    componentDidMount() {
        document.addEventListener('click', this.onClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('click', this.onClickOutside);
      }
    
      onClickOutside = () => {
        this.setState({ visible: false });
      }
    
  render(){
      const { fullAddress, personId } = this.state
    return (        
        <form  noValidate autoComplete="off" onSubmit={this.submitHandler}>
            <div>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" >
                        Add address
                    </Typography>
                </Toolbar>
            </AppBar>
      </div>
       
        <div>
        <TextField label="Full Address" type="text" name="fullAddress" value={fullAddress} onChange={this.changeHandler}/>
        </div>

        <div>
        <TextField label="Person Id" type="number" name="personId" value={personId} onChange={this.changeHandler}/>
        </div>

        <br/> 
        <div>
        <Button type="submit" variant="contained" color="default">
            Add address 
        </Button>
        </div>  
                    
      </form>
    );
  }
}

export default AddAddressForm;