import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/person/';

class DeleteButton extends React.Component{

    render(){
        return(     
         <div>        
        <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />} 
        onClick={this.props.onClick}>      
        Delete
      </Button> 
        </div>      
        );
    }
}

export default DeleteButton;
