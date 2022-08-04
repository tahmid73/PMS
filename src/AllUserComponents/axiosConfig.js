import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

instance.interceptors.request.use((config)=>{
    config.headers.common["Authorization"]=localStorage.getItem("_authToken");
    console.log("authorized");
    return config;
},(err)=>{});

instance.interceptors.response.use((rsp)=>{
    return rsp;
},(err)=>{
    if(err.response.status==401){
        debugger;
        window.location.href="/";
    }
    return Promise.reject(err);
});
export default instance;