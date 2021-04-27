import { api } from "./myFetch";
const Session = {
    user: null,
    message: []
}

export default Session;

export async function Login(email, password){
    const {user, token} = await api('users/login', { email, password })
    Session.user = user;
    Session.token = token;

    console.log(Session.user);
}
export function Logout() {
    Session.user = null
}