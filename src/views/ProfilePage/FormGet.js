import React from 'react';
import axios from 'axios';

export default class FormGet extends React.Component{

state = {
    logs : [],
}


    componentDidMount(){
        axios.get(`https://8y5uop0v1a.execute-api.sa-east-1.amazonaws.com/dev/logs`).then(res =>{
        console.log(res);    
        this.setState({ logs: res.data });

        });
    }


    render(){
        return(
            <ul>
                { this.state.logs.map(logs => <li key={logs.id}>{logs.arquivo_name}<br></br>{logs.id} </li>) }
            </ul>
        );
    }

}

