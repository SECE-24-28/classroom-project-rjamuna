
import { Link } from "react-router-dom";
const Signup=()=>{
    return(
        <div>
            <h2>Signup page</h2>
            <form>
            <label>Username:</label>
            <input type="text" placeholder="Enter your username"/>
            <br></br>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email"/>
            <br></br>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password"/>
            <br></br>
            <button>Signup</button>
            </form>
           <p>create account <Link to="/login">login</Link></p>
            </div>
    )
}
export default Signup;