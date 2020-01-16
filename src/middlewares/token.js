import Auth from '../auth';

export function redirectIfAuthenticated(to , from ,next){
    if(Auth.getToken()){
        next('dashboard');
    }else{
        next();
    }
}


export function redirectIfNotAuthenticated(to , from ,next){
    
    if(Auth.getToken()){
        next();
    }else{
        next('/');
    }
}



