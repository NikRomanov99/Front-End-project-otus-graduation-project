import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddAddressForm from './AddAddressForm'

class AddAddressButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
   
  _onButtonClick() {
    this.setState({
      
      showComponent: !this.state.showComponent,
    });
  }

    render(){
        return(     
         <div>        
          <Button variant="contained" color="primary" disableElevation onClick={this._onButtonClick}>
          Add Address          
        </Button>
        {this.state.showComponent ?
           <AddAddressForm/> :
           null
        }
        </div>      
        );
    }
}

export default AddAddressButton;
