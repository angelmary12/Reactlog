import React ,{useState,useEffect} from "react"
import Header from "./Header"
function Login()
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [Place,setPlace]=useState("");
    useEffect(() =>{

    })
    return(
        <div>
            <Header />
            <h1>Register Page</h1>

            <div className="col-sm-6 offset-sm-3">
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
            <br />
            <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br />            
            <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
            <br />
            <h1>Login Page</h1>
        </div>
        </div>
    )};
export default Login