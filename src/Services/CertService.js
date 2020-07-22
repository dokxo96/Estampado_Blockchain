export default {
    getCerts : ()=>{
        return fetch('/user/todos')
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    postCert : cert=>{
        return fetch('/user/cert',{
            method : "post",
            body : JSON.stringify(cert),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            if(response.status !== 401){
                return response.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true};
        });
    }
}