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
        let elHTML= document.querySelector("#crearAlerta");    
        let creandoParrafo = document.createElement("div");

        creandoParrafo.setAttribute("class", clase);

        creandoParrafo.setAttribute("role", "alert");
        let contenido = document.createTextNode(mesaje);
        creandoParrafo.appendChild(contenido);
        elHTML.appendChild(creandoParrafo);
               

        setTimeout(()=>{
        $('.alert').hide('slow');

        },3000)





    }

    crearTarjeta(nombre, apellido, fechaNacimiento, sexo){
        let notificaciones = new VisualisacionesDelUsuario();
        if (nombre== "" || apellido == "" || fechaNacimiento == "" || sexo == "") {
            notificaciones.notificacion("Algo ha ocurrido, intenta nueva mente.","alert alert-danger position-absolute mt-1 btn-block");

            
        } else {
        
            let mensaje = `        
            <div class="card">
                <div class="card-header" id="headingOne">
                
                <strong>Nombre:</strong> <span id="impNnombre" >${nombre}</span>, 
                
                <strong>Apellido:</strong> <span id="ipmApellido" >${apellido}</span>,
    
                <strong>Fecha de Nacimiento:</strong> <span id="ipmFecha" >${fechaNacimiento}</span>, 
    
                <strong>Sexo:</strong> <span id="ipmSexo" >${sexo}</span>
                
                </div>
    
            </div>
            `
            
            let elHTML = document.querySelector("#contenido");
            let creandoTarjeta =document.createElement("div");
            
            creandoTarjeta.setAttribute("class", "accordion mb-3");
       
            
            creandoTarjeta.innerHTML=mensaje;
            elHTML.appendChild(creandoTarjeta);

        notificaciones.notificacion("Agregado correctamente","alert alert-success mt-1 position-absolute btn-block");

        document.getElementById('formulario').reset();

    
        }



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

    notificaciones.crearTarjeta(datos.nombre, datos.apellido, datos.fechaNacimiento, datos.sexo);
   






})


