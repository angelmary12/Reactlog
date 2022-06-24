import React ,{useState} from "react"
function Register()
{

        const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [Place,setPlace]=useState("")


    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
            <br />
            <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br />            
            <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
            <br />
            <input type="text" onChange={(e)=>setPlace(e.target.value)} className="form-control" placeholder="place" />

            <button className="btn btn-primary"></button>
        </div>
    )
}
export default Register