let tabla = [
    { id: "1001886488", nombre: "Juan", apellido: "Rodriguez", edad: "25", correo: "pedro10@gmail.com", telefono: "3004818838", direccion: "cra 20 #51a-20", ciudad: "Barranquilla" },
    { id: "1021886488", nombre: "Lina", apellido: "Mercado", edad: "20", correo: "lina200@gmail.com", telefono: "3024818898", direccion: "cra 35 #52b-10", ciudad: "Cartagena" },
    { id: "1005886499", nombre: "Manuel", apellido: "Gonzalez", edad: "30", correo: "manuel99@hotmail.com", telefono: "3204819938", direccion: "cra 30 #40c-15", ciudad: "Medellin" }
]

const listar = () => {
    let t_body = document.getElementById("t_usuarios")
    let tabla_llena = "";
    for (let i = 0; i < tabla.length; i++) {
        tabla_llena = tabla_llena + "<tr><td>" + tabla[i].id + "</td><td>" + tabla[i].nombre + "</td><td>" + tabla[i].apellido
            + "</td><td> " + tabla[i].edad + "</td><td> " + tabla[i].correo + "</td><td> " + tabla[i].telefono + "</td><td> "
            + tabla[i].direccion + "</td><td> " + tabla[i].ciudad + "</td></tr> ";

    }

    t_body.innerHTML = tabla_llena;
}

//validar si el id esta en la tabla.
const existe = (id) => {
    return tabla.find((tabla) => tabla.id === id);
};



const registrar = () => {

    const id = document.getElementById("id").value
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const edad = document.getElementById("edad").value
    const correo = document.getElementById("correo").value
    const telefono = document.getElementById("telefono").value
    const direccion = document.getElementById("direccion").value
    const ciudad = document.getElementById("ciudad").value

    //validaciones campos obligatorios
    if (!id.trim()) {
        alert("Por favor, Ingrese el Id")
        return
    }
    if (!nombre.trim()) {
        alert("Por favor, Ingrese el nombre")
        return
    }
    if (!apellido.trim()) {
        alert("Por favor, Ingrese el apellido")
        return
    }
    if (!edad.trim()) {
        alert("Por favor, Ingrese la edad")
        return
    }
    if (!correo.trim()) {
        alert("Por favor, Ingrese el correo")
        return
    }
    if (!telefono.trim()) {
        alert("Por favor, Ingrese el telefono")
        return
    }
    if (!direccion.trim()) {
        alert("Por favor, Ingrese la direccion")
        return
    }
    if (!ciudad.trim()) {
        alert("Por favor, Ingrese la ciudad")
        return
    }

    //validacion id de usuarios existentes

    if (!existe(id)) {

        let t_body = document.getElementById("t_usuarios")
        t_body.innerHTML = t_body.innerHTML + "<tr><td>" + id + "</td><td>" + nombre + "</td><td>" + apellido
            + "</td><td> " + edad + "</td><td> " + correo + "</td><td> " + telefono + "</td><td> "
            + direccion + "</td><td> " + ciudad + "</td></tr> ";
        const nuevo = { id: id, nombre: nombre, apellido: apellido, edad: edad, correo: correo, telefono: telefono, direccion: direccion, ciudad: ciudad };

        //usuarios al final
        tabla.push(nuevo)

    } else {

        alert("El ID ya se encuentra registrado, por favor cambielo por otro.")
    }


}

