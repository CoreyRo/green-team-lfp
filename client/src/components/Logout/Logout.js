
const Logout = event => {
    localStorage.clear()
    window.location.replace("/sign-in")
}
export default Logout