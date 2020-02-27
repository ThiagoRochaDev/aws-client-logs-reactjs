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

    axios.delete(`https://8y5uop0v1a.execute-api.sa-east-1.amazonaws.com/dev/log/${this.state.id}`)
    .then(res =>{
        console.log(res.data);
    })
};


    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                    <CustomInput
                      labelText="Informe o Id..."
                      id="id"
                      formControlProps={{
                        fullWidth: true
                      }}
                      name="arquivo_name"
                      onChange={this.handleChange}
                      inputProps={{
                        type: "text",
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

