import React,{ useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
function Login()
{
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const history= useHistory();
  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      history.push('/home');
    }
  }, [])
  async function login(){
    console.log("login",email,password);
    let item={email,password}
    let restult=await fetch('http://127.0.0.1:8000/api/service/login',
    {
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    restult= await restult.json();
    localStorage.setItem('accessToken',restult.data.accessToken);
    localStorage.setItem('email',restult.data.email);
    localStorage.setItem('name',restult.data.name);
    localStorage.setItem('id',restult.data.id);
    localStorage.setItem('user-info',JSON.stringify(restult.data));
    // accessToken
    history.push('/home');
  }
    return (
      <div className="col-md-12">
        <h1>Login</h1>
          <div className="col-md-6 offset-3 text-left">
              <label htmlFor="formBasicEmail1">Email address</label>
              <input className="form-control" id="formBasicEmail1" 
              onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
              <label htmlFor="formBasicEmail1">Password</label>
              <input className="form-control" type="password" 
              onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            <button variant="primary" type="submit" className="btn btn-info mt-1" onClick={login}>Submit</button>
          </div>
        </div>
    )
}

export default Login;
