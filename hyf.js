var header = `
<div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        
                <a class="navbar-brand text-center">
                    DRBU <br> 
                    Estudio de Ingeniería
                </a>
                
                <div class="col">
                    <i class="fas fa-phone"></i> 341-4404871 <br>
                    <i class="far fa-envelope"></i> 
                    <a href="mailto:estudiodrbu@gmail.com">estudiodrbu@gmail.com</a> <br>
                    Lunes a Viernes - 9:00 a 17:00hs
                </div>
    
          
                <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div id="my-nav" class="collapse navbar-collapse justify-content-center" style="font-size: 1.5rem;">
                    <ul class="navbar-nav">
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="index.html"> INICIO </a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="obras.html" tabindex="-1" aria-disabled="true">OBRAS</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="clientes.html" tabindex="-1" aria-disabled="true">CLIENTES</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link" href="contacto.html" tabindex="-1" aria-disabled="true">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
`


document.getElementById("header_1").innerHTML = header;

var footer = `
<div class="container-fluid">
            <div class="row bg-light">
                <div class="col-sm-2 text-center align-self-center">
                    DRBU <br> 
                    Estudio de Ingeniería
                </div>
                <div class="col-sm-8 text-center">
                    <i class="fas fa-phone"></i> 341-4404871 <br>
                    <i class="far fa-envelope"></i> 
                    <a href="mailto:estudiodrbu@gmail.com">estudiodrbu@gmail.com</a> <br>
                    Lunes a Viernes - 9:00 a 17:00hs
                </div>
                <div class="col-sm-2 align-self-end text-right">
                    Todos los derechos reservados
                </div>
            
            </div>
        </div>
`

document.getElementById("footer_1").innerHTML = footer;