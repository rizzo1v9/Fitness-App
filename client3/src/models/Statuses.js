
import { api } from "../models/myFetch";

export function GetMyStatuses(){
    return api("statuses")
}

export function GetStatusesForUser(email){
    return api(`statuses/${email}`)
}

export function GetMyFeed(){
    return api("statuses/feed");
}

export function AddStatus(status){
    return api("statuses", status );
}

export function DeletStatus(status_id){
    
    return api("statuses/" + status_id, { }, "DELETE" );
}
