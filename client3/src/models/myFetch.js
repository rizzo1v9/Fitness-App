import Session from "./Session";

export const API_ROOT = "http://localhost:3000/";

export function api(url, data, method){


    let promise;

    const headers = {authorization: `bearer ${Session.token}`}
    if(data){
        promise = fetch(API_ROOT + url, {
            method: method ?? 'POST', 
            cache: 'no-cache', 
            headers: {
                ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
          });
    }else{
        promise = fetch(API_ROOT + url, { headers });

    }
    return promise
        .then(x=> {
            if(x.ok) return x.json();
            else return x.json().then(y=> { throw y; })
        })
        .catch(err=>{
            console.error(err);
            
        });
    

}