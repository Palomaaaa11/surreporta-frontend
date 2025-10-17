import { useState } from "react";
import { useLocation } from "wouter";

export default function Signup(){

    const [nombre, setNombre] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [, navigate] = useLocation();

    const manejarSignup = (e) =>{
        e.preventDefault();
    }

    let url= "http://localhost:4000/usuarios"

    const nuevoUsuario = {nombre, user, pass};

    axios.post(url, nuevoUsuario)
    .then((resp) =>{
        console.log("usuario creado:", resp.data);
        alert("¡Usuario registrado correctamente!");
        navigate("/home");
    })
    .catch((error)=>{
        console.error("Error al crear el nuevo usuario", error);
        alert("¡Ocurrió un error al intentar registrar su usuario!")
    })

    return(
        <div>

        </div>
    )
}