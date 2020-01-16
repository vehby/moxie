
import Axios from 'axios';
import Auth from './auth';
class Api{

    constructor(){
        this.sender =  Axios.create({
            baseURL: 'http://localhost:3000',
        });
    }

    async signin({Email , Password}){
        let {data} =  await this.sender.post('/signin',{
            Email , Password
        });   
        Auth.setToken(data);   
        return data;
    }

    async login({Email , Password}){
        let {data} = await this.sender.post('/login',{
            Email , Password
        });
        Auth.setToken(data);
        return data;
    }

}

export default new Api();