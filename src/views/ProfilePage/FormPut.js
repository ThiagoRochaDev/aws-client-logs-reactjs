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
        id: event.target.value
    });
};


handleSubmit = event =>{
    event.preventDefault();

    // const id = {
    //     id : this.state.id,
    // }

    axios.put(`https://8y5uop0v1a.execute-api.sa-east-1.amazonaws.com/dev/log/${this.state.id}`)
    .then(res =>{
        console.log(res.data);
    })
};


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
               
               <CustomInput onChange={this.handleChange}
                          labelText="Informe o id..."
                          id="id"
                          name="id"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <AssignmentLateIcon className />
                              </InputAdornment>
                            )
                          }}
                        />
                              <CustomInput onChange={this.handleChange}
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
                        <CustomInput onChange={this.handleChange}
                          labelText="Bucket_name"
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

