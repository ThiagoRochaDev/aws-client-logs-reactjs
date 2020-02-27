import React from 'react';
import axios from 'axios';

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
               
                <label>id
                    <input type="text" name="id"  onChange={this.handleChange}></input>
                </label>
                <label>Arquivo_name
                    <input type="text" name="arquivo_name"  onChange={this.handleChange}></input>
                </label>
                <label>Bucket_name
                    <input type="text" name="bucket_name"  onChange={this.handleChange}></input>
                </label>
                <button type="submit"> Editar</button>
            </form>  
        );
    }

}

