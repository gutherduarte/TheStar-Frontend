import "./login.css"
import logo from "./../data/logo.png"
import { login } from "../services/workingService"
import { useState } from "react";
import { useStateContext } from "./../contexts/ContextProvider"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser, handleClick } = useStateContext();

    const handleSubmit = (e) => {
        e.preventDefault()
        let body = {email, password}
        login(body).then(response => {
            if (response.length) {
                handleClick("userProfile") 
                setUser(response[0])
            }
        })
    }


  return (
    <div className=".bg-main-bg container-login w-full min-h-screen flex-2 ">

      <div className="text-area">
        <img src={logo} alt="logo" />
        <h2>Ewischers solution</h2>
        <p>
          Empresa comprometida al desarrollo de software personalizo, especializado en el potencial amiento de tu negocio
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h3>Iniciar session</h3>

        <div className="input">
          <div className="inputBox">
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} name="" placeholder="Email" />
          </div>
          <div className="inputBox">
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="" placeholder="password" />
          </div>
          <div className="inputBox">
            <input type="submit" name="" value="Login" />
          </div>
        </div>
        <p className="login">
        </p>
      </form>
    </div>
  );
};
