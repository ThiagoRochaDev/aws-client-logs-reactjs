import React from 'react';
import axios from 'axios';

export default class FormGet extends React.Component{

state = {
    logs : [],
}


    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://8y5uop0v1a.execute-api.sa-east-1.amazonaws.com/dev/logs`).then(res =>{
        console.log(res);    
        this.setState({ logs: res.data });

        });
    }


    render(){
        return(
            
            
            <table align="center" width="100%"  cellspacing="10" >
                <tr >
                    <td><b>Id</b></td>
                    <td><b>Arquivo_name</b></td>
                    <td><b>Bucket_name</b></td>
                </tr>
                    <tr >
                    <td>
                    { this.state.logs.map(logs =>
                    <tr>{logs.id}</tr>
                    ) }   
                    </td>
                    
                <td>
                { this.state.logs.map(logs =>
                        <tr>{logs.arquivo_name}</tr>
                    ) }
                    </td>

                    <td>
                    { this.state.logs.map(logs =>
                        <tr>{logs.bucket_name}</tr>
                    ) }

                    </td> 

                </tr>
               
            
            </table>
            
        );
    }

}

