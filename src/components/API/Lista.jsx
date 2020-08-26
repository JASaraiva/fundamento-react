import React, { Component } from "react"
import API from "./API"

class Lista extends Component{

    state = {
            projects: []
    }

    async componentDidMount(){
        const response = await API.get('projects')
        console.log(response.data)

        this.setState({projects: response.data})
    }


    render(){

        const {projects} = this.state
        return(
            <div>
                <h3>Opções</h3>
              
            </div>
        );
    }
}

export default Lista;