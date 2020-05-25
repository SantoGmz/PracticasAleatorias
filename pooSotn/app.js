class Datos {
    constructor(nombre, apellido, fechaNacimiento, sexo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
    }
}


class VisualisacionesDelUsuario{

    notificacion(mesaje,clase){
        this.mesaje = mesaje;
        this.clase = clase;
/*
        let elHTML= document.querySelector("#crearAlerta");    
        let creandoParrafo = document.createElement("div");

        creandoParrafo.setAttribute("class", clase);
        creandoParrafo.setAttribute("role", "alert");
        let contenido = document.createTextNode(mesaje);
        creandoParrafo.appendChild(contenido);
        elHTML.appendChild(creandoParrafo);
               */
    }

    crearTarjeta(nombre, apellido, fechaNacimiento, sexo){
        let mensaje = `        
        <div class="card">
            <div class="card-header" id="headingOne">
            
            <strong>Nombre:</strong> <span id="impNnombre" >Santos</span>, 
            
            <strong>Apellido:</strong> <span id="ipmApellido" >Severino</span>,

            <strong>Fecha de Nacimiento:</strong> <span id="ipmFecha" >11/09/1999</span>, 

            <strong>Sexo:</strong> <span id="ipmSexo" >Masculino</span>
            
            </div>

        </div>
        `
        
        let elHTML = document.querySelector("#contenido");
        let creandoTarjeta =document.createElement("div");
        
        creandoTarjeta.setAttribute("class", "accordion mt-3");
        let creandoCont = document.createTextNode(mensaje);
        
        creandoTarjeta.appendChild(creandoCont);
        elHTML.appendChild(creandoTarjeta);



    }

}





const botonEnviar = document.getElementById('btn-Enviar');

botonEnviar.addEventListener('click', function(){
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let fechaNacimiento = document.querySelector('#fecha').value;
    let sexo = document.querySelector('#sexo').value;

    let datos = new Datos(nombre,apellido,fechaNacimiento,sexo);

    let notificaciones = new VisualisacionesDelUsuario();

    notificaciones.crearTarjeta(datos.nombre);

    notificaciones.notificacion("hola","alert alert-success");




})


