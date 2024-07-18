// Clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Clase Alumno que hereda de Persona
class Alumno extends Persona {
    constructor(nombre, edad, grado, seccion) {
        super(nombre, edad);
        this.grado = grado;
        this.seccion = seccion;
    }
}

// Lista para almacenar los alumnos
let alumnos = [];
añadirAlumno("Carlos Alejandro García Batista", 21 , 2 , 14);
añadirAlumno("Felix Miranda Castro", 21 , 2 , 15);
listarAlumnos();

// Función para añadir un nuevo alumno usando promesas
function añadirAlumno(nombre, edad, grado, seccion){
    return new Promise((resolve, reject) => {
        if(nombre === 0 || edad === 0 || grado === 0 || seccion === 0){
            reject(new Error("Error"))
        }
        const nuevoAlumno = new Alumno(nombre, edad, grado, seccion);
        alumnos.push(nuevoAlumno);
        resolve(nuevoAlumno);
    })
}

// Función para actualizar el grado de un alumno usando promesas
function actualizarGrado(nombre, nuevoGrado) {
    return new Promise((resolve, reject) => {
        const alumno = alumnos.find(al => al.nombre === nombre);
        if(!alumno){
            reject(new Error(`Alumno ${nombre} no encontrado.`))
        }
        else{
            alumno.grado = nuevoGrado;
            resolve(alumno);
        }
    })
}

// Función para listar todos los alumnos
/*function listarAlumnos() {
    const lista = document.getElementById('listaAlumnos');
    lista.innerHTML = '';
    if (alumnos.length === 0) {
        lista.innerHTML = '<li>No hay alumnos registrados.</li>';
    } else {
        alumnos.forEach(al => {
            const item = document.createElement('li');
            item.textContent = `Nombre: ${al.nombre}, Edad: ${al.edad}, Grado: ${al.grado}, Sección: ${al.seccion}`;
            lista.appendChild(item);
        });
    }
}*/

/////////editado por Carlos ////////

//imprimir listado en la tabla
function listarAlumnos() {
    const lista = document.getElementById('content');
    lista.innerHTML = "";
    if (alumnos.length === 0) {
    } else {
        alumnos.forEach(al => {
            const item = document.createElement('tr');
            const innerItem1 = document.createElement("td");
            const innerItem2 = document.createElement("td");
            const innerItem3 = document.createElement("td");
            const innerItem4 = document.createElement("td");
            innerItem1.textContent = al.nombre;
            innerItem2.textContent = al.edad;
            innerItem3.textContent = al.grado;
            innerItem4.textContent = al.seccion;
            item.appendChild(innerItem1);
            item.appendChild(innerItem2);
            item.appendChild(innerItem3);
            item.appendChild(innerItem4);
            lista.appendChild(item);
        });
    }
}

//añadir estudiante al listado
const añadir = document.getElementById("formAñadirAlumno")
añadir.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const grado = document.getElementById('grado').value;
    const seccion = document.getElementById('seccion').value;
    document.getElementById('seccion').value = "";
    document.getElementById('nombre').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('grado').value = "";
    añadirAlumno(nombre, edad, grado, seccion)
        .then((nuevoAlumno) => console.log(`Estudiante ${nuevoAlumno.nombre} añadido`), listarAlumnos())
        .catch((err) => console.log(err.message))
})

// actualizar estudiante del listado
const actualizar = document.getElementById("formActualizarGrado")
actualizar.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombreActualizar').value;
    const nuevoGrado = document.getElementById('nuevoGrado').value;
    document.getElementById('nombreActualizar').value = "";
    document.getElementById('nuevoGrado').value = "";
    actualizarGrado(nombre, nuevoGrado) 
        .then((alumno) => console.log(`Grado de ${alumno.nombre} actualizado a ${alumno.grado}.`), listarAlumnos())
        .catch((err => console.log(err.message)))
})

