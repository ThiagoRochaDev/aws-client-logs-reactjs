import React from 'react';
import axios from 'axios';
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import DescriptionIcon from '@material-ui/icons/Description';


export default class FormPut extends React.Component{

state = {
    id : undefined,
}


handleChange = event =>{
    this.setState({
        id: event.target.value,
        
       
    });

  
}




handleSubmit = event =>{
    event.preventDefault();

    let params ={
      
      arquivo_name: event.target.elements.arquivo_name.value,
      bucket_name: event.target.elements.bucket_name.value
      
    }

    axios.put(`https://cors-anywhere.herokuapp.com/https://8y5uop0v1a.execute-api.sa-east-1.amazonaws.com/dev/log/${this.state.id}`,params)
    .then(res =>{
        
        console.log(res.data);
        alert('Log alterado com Sucesso !');
        window.location.href ='/'
    })
};


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
               
               <CustomInput 
                          labelText="Informe o id..."
                          id="id"
                          name="id"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            onChange: this.handleChange,
                            endAdornment: (
                              <InputAdornment position="end">
                                <AssignmentLateIcon className />
                              </InputAdornment>
                            )
                          }}
                        />
                              <CustomInput 
                          labelText="Informe o Arquivo_name..."
                          id="arquivo_name"
                          name="arquivo_name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                           
                            endAdornment: (
                              <InputAdornment position="end">
                                <DescriptionIcon className />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput 
                          labelText="Bucket_name.."
                          id="bucket_name"
                          name="bucket_name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                           
                            endAdornment: (
                              <InputAdornment position="end">
                                <DescriptionIcon className>
                                  lock_outline
                                </DescriptionIcon>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                      <Button type="submit" simple color="primary" size="lg">
                         Edit
                      </Button> 
                
            </form>  
        );
    }

}

