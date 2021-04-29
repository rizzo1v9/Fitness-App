import { api } from "./myFetch";
import router from "../router";
const Session = {
    user: null,
    token: null,
    nextRoute: null,
    message: []
}

export default Session;

export async function Login(email, password){
    const {user, token} = await api('users/login', { email, password })
    Session.user = user;
    Session.token = token;

    console.log(Session.user);
    router.push(Session.nextRoute ?? '/friends')
}
export function Logout() {
    Session.user = null
}