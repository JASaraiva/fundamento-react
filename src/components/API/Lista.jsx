import React, { Component } from "react"
import api from "./API"
//import Axios from "axios"

class Lista extends Component{

    state = {
            projects: []
    }

    async componentDidMount(props){
        const response = await api.get("projects/?format=json");
        this.setState({projects: response.data})
    }


    render(){
        const {projects} = this.state
        return(
            <div>
                <h3>Opções</h3>
                {projects.map(pro => (
                    <li key={pro.id}>{pro.name}</li>
                ))}
             
                
            </div>
        );
    }
}

export default Lista;