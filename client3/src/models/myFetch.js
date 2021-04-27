export const API_ROOT = "http://localhost:3000/";

export function api(url, data){

    let promise;
    if(data){
        promise = fetch(API_ROOT + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    }else{
        promise = fetch(API_ROOT + url);

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