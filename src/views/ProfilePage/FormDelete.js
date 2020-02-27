import React from 'react';
import axios from 'axios';
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

export default class FormDelete extends React.Component{

  
    
state = {
    id : undefined,
}

// PEGA O VALOR DO INPUT
handleChange = event =>{
    this.setState({
        id: event.target.value
    });
};


handleSubmit = event =>{
    event.preventDefault();



// ESTOU USANDO UM RECURSO PARA DESABILITAR CORS MAIS RAPIDO PARA EXECUÇÃO 
    axios.delete(`https://cors-anywhere.herokuapp.com/https://8y5uop0v1a.execute-api.sa-east-1.amazonaws.com/dev/log/${this.state.id}`)
    .then(res =>{
       console.log(res.data);
       alert('Log deletado com Sucesso !');
       window.location.href ='/'
    })
};


    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                    <CustomInput 
                      labelText="Informe o Id..."
                      id="id"
                      name="id"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        onChange: this.handleChange,
                        
                        endAdornment: (
                          <InputAdornment position="end">
                            <AssignmentLateIcon className  />
                          </InputAdornment>
                        )
                      }}
                    />
                   
                      <Button type="submit" simple color="primary" size="lg">
                      Delete
                    </Button>
            </form>  
        );
    }

}

