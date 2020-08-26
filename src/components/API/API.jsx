import React from "react"
import Axios from "axios"

export default props =>
    Axios.create({baseURL:"https://site-jas.herokuapp.com/"})
