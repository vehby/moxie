class Auth{

    
    constructor(){
        this.$token = localStorage.getItem('token')
    }

    setToken(token){
        this.$token = token;
        localStorage.setItem('token' , token);
    }

    getToken(){
        return this.$token;
    }

    logout(){
        this.clearToken();
    }

    clearToken(){
        this.$token = null;
        localStorage.removeItem('token');
    }

}

export default new Auth();