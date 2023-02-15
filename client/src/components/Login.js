import { useState } from "react";
import { login } from "../utils/services";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/userContext";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handlerFocus = () => {
        setError(false);
    };

    const {user, addUser} = useContext(userContext);
    const navigate = useNavigate();

    return <form onSubmit={(event) => {
        event.preventDefault();
        //Buscar regex para el email
        if (email.includes("@gmail.com") && password.length >= 5){
            let body = {email, password};
            login(body).then((data) => {
                console.log(data);
                if (data.status == 200){
                    addUser(data.data);
                    navigate("/profile")
                }
            }).catch((errMessage) => {
                alert(errMessage.response.data.errorMessage);
            })
        } else {
            setError(true);
        }
    }}>
        <input type= "email" placeholder="Email" value={email} onChange={(event) => {setEmail(event.target.value)}} onFocus={handlerFocus}/>
        <input type= "password" placeholder="Contraseña" value={password} onChange={(event) => {setPassword(event.target.value)}} onFocus={handlerFocus}/>
        <input type= "submit" value= "Login"/>
        {error && <span>Hay un error</span>}
    </form>
}

export default Login;