import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddReceiptForm from './AddReceiptForm'

class AddReceiptButton extends React.Component{
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
          Add Receipt          
        </Button>
        {this.state.showComponent ?
           <AddReceiptForm/> :
           null
        }
        </div>      
        );
    }
}

export default AddReceiptButton;
