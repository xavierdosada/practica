import { useState } from "react";
import Styles from "./Register.module.css"
import { createUser } from "../utils/services";


const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validatePass, setValidatePass] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const changeName = (event) => {
        setName(event.target.value);
    }   

    const changeLastName = (event) => {
        setLastName(event.target.value);
    }   

    const changeDate = (event) => {
        setDate(event.target.value);
    } 

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const changeValidatePass = (event) => {
        setValidatePass(event.target.value);
    }

    const submit = (event) =>{
        event.preventDefault()
        if ( name == "" ) {
            setError(true);
            setErrorMessage("Debe ingresar un nombre");
        } else if (lastName == "") {
            setError(true);
            setErrorMessage("Debe ingresar un apellido");
        } else if (date == "") {
            setError(true);
            setErrorMessage("Debe ingresar la fecha de nacimiento");
        } else if (password.length < 5) {
            setError(true);
            setErrorMessage("La contraseña debe tener al menos 5 caracteres");
        } else if (!email.includes("@gmail.com")){
            setError(true);
            setErrorMessage("No es un email valido");
        } else if (password !== validatePass){
            setError(true);
            setErrorMessage("Las contraseñas no coinciden");
        } else {
            let body = {name, lastName, email, date, password}
            createUser(body).then((res) => {
                console.log(res);
            })
        }
    }

    const handlerFocus = () => {
        setError(false);
    }

    return <div className = {Styles.container}>
        <form onSubmit={submit} className = {Styles.form} >
            <label>
                <input type={"text"} value={name} onChange={changeName} onFocus={handlerFocus} placeholder="Nombre"/>
            </label>
            <label>
                <input type={"text"} value={lastName} onChange={changeLastName} onFocus={handlerFocus} placeholder="Apellido"/>
            </label>
            <label>
                <input type={"date"} value={date} onChange={changeDate} onFocus={handlerFocus} placeholder="Fecha de Nacimiento"/>
            </label>
            <label>
                <input type={"email"}value={email} onChange={changeEmail} onFocus={handlerFocus} placeholder="Email"/>
            </label>
            <label>
                <input type={"password"}value={password} onChange={changePassword} onFocus={handlerFocus} placeholder="Contraseña"/>
            </label>
            <label>
                <input type={"password"}value={validatePass} onChange={changeValidatePass} onFocus={handlerFocus} placeholder="Repetir Contraseña"/>
            </label>
            <input type={"submit"} value="Registrar" className={Styles.registerButton}/>
            {error && <span className = {Styles.errorColor}>{errorMessage}</span>}
        </form>
    </div>
}

export default Register;