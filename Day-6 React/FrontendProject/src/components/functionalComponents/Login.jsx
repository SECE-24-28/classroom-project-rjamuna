import { Link } from "react-router-dom";

const Login=()=>{

    return(
<div>
    <h1>login Page</h1>
    <form>
    <label>UserName:</label>
    <input type="text" placeholder="Enter your username"/>
    <br></br>
    <label>Password:</label>
    <input type="password" placeholder="Enter your Password"/>
    <br></br>
    <button >Login</button>
    </form>
    <p>you have account?<Link to="/signup">Signup</Link></p>

</div>
    )
}
export default Login;