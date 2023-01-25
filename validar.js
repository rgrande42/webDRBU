document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener('submit', validar); 
  });

function validar(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Debe escribir nombre y apellido');
      document.getElementById('nombre').focus()
      return 0;
    }
    
    var telefono = document.getElementById('telefono').value;
    if(telefono.length == 0) {
      alert('Debe escribir número de telefono');
      return;
    }
    if(isNaN(telefono)) {
        alert('Debe escribir un número para el número de telefono');
        return;
    }

    var mail = document.getElementById('mail').value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validRegex)) {
        ;
    } else {
        alert("Dirección de mail inválida");
        return;
    }

    var consulta = document.getElementById('consulta').value;
    if(consulta.length == 0) {
      alert('Escribir consulta');
      return;
    }
    


    alert("Muchas gracias por contactarse con nosotros ! En breve responderemos su consulta");
    this.submit();
  }