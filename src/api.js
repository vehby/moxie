
import Axios from 'axios';
import Auth from './auth';
class Api{

    constructor(){
        this.sender =  Axios.create({
            baseURL: 'http://localhost:3000',
            transformRequest: [function (data, headers) {
                headers['auth-password-token'] = Auth.getToken();
                return JSON.stringify(data)
            }],
            headers: {
                'Content-Type':'application/json'
            }
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

    async createAgent(){
        let {data} = await this.sender.post('/agent/create');
        return data;
    }

    async registerAgent({Id,Name , HostKey}){
        let {data} = await this.sender.post('/agent/register',{Id,Name,HostKey})
        return data;
    }

    async updateAgent({Name , Id}){
        let {data} = await this.sender.patch('/agent/',{Name , Id});
        return data;
    }

    async listAgents(){
        let {data} = await this.sender.get('/agent');
        return data;
    }

}

export default new Api();