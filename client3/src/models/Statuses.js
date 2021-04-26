import { api } from "../models/myFetch";

export function GetMyStatuses(){
    return api("statuses")
}

export function GetStatusesForUser(email){
    return api(`tatuses/${email}`)
}

export function GetMyFeed(){
    return api("statuses/feed");
}

export function AddStatus(status){
    return api("statuses", status );
}

export function DeletePost(post_id){
    // This wont actually delete the correct item unless you are an administrator viewing all posts.
    //  TODO: add real ids to posts so that we can address them properly
    return api("statuses/" + status_id, { }, "DELETE" );
}