
export default {
    login : user =>{
        console.log(user);
        return fetch('/user/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : "",role : ""}};
        }).catch((err) => {
            console.log(err)
            })
    },
    register : user =>{
        console.log(user);
        return fetch('/user/register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data)
          .catch((err) => {
            console.log(err)
            });
    },
    Adminregister : user =>{
        console.log(user);
        return fetch('/user/registerAdmins',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data)
          .catch((err) => {
            console.log(err)
            });
    },
    Certregister : user =>{
        console.log(user);
        return fetch('/user/certregister',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
          .then(data => data)
          .catch((err) => {
            console.log(err)
            });
    },
    logout : ()=>{
        return fetch('/user/logout')
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated : ()=>{
        return fetch('/user/authenticated')
                .then(res=>{
                    if(res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated : false, user : {username : "",role : ""}};
                });
    }

}