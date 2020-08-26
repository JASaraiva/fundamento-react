import Axios from "axios"


    const instance = Axios.create({
        baseURL: "https://site-jas.herokuapp.com/",
        headers: {"Authorization": "Token cbbd44d4512a83192c5ca9a0cd4b88a40fd8027d"}
    });

    export default instance;
