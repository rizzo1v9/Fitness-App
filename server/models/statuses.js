
const { use } = require("../controllers/users");

const users = require("./users");
const list = [
    {
      alt: "Placeholder image",
      text:
        "Just bought PDs from the guy in the locker room at the gym! #juicin",
      time: Date(),
      user_name: "Tanner Johnson",
      user_email: "tannerthedude123@gmail.com",
      isPublic: true
        
      
    },
  ];

  const listWithOwner = ()=> list.map((x, i) => ({ 
     ...x, user: users.GetByEmail(x.user_email)})
);
module.exports.GetAll = ()=> {
  return listWithOwner();
}

module.exports.GetFeed = (email)=> listWithOwner()
  .filter(status=> users.GetByEmail(email).following.some(f=> f.email == status.user_email && f.isApproved) );


module.exports.Get = (status_id)=> list[status_id];
module.exports.Add = (status)=> {
    if(!status.user_email){
        throw "Email is required"
    }
    list.push(status);
    return {...status};
}
module.exports.Update = (status_id, status)=> {
    //Make patchable
    const oldObj = list[status_id];
    const newObj = {...oldObj, ...status};
    list[status_id] = newObj;
    
    return newObj;
}
module.exports.Delete = (status_id)=> {
    //Make patchable
    const status = list[status_id];
    list.splice(status_id, 1);
    return status;
}