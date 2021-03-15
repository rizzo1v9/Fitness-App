const Session = {
    user: null,
    message: []
}

export default Session;

export function Login(){
    Session.user = { name: 'Carlo Rizzo', email: 'ctrizzo33@gmail.com'}
}
export function Logout() {
    Session.user = null
}