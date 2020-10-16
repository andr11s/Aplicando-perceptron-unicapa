export function PageIndex() {
    let $row = document.createElement("div");
    $row.innerHTML = `
    <div class="row">
        <div class="col-12">
                <div class="banner">
                    <h3>Bienvenido al entrenamiento de percetron Unicapa </h3>
                        <span>Para comenzar el entrenamiento adjunte el archivo para comenzar.</span>
                </div>
        </div>
     </div>
        <hr />
    <div class="row">
            <div class="col-12" class="banner-notify">
                <div class="banner file" >
                   <span  class="btn btn-primary btn-file" id="banner-header" id="span">Subir archivo <input type="file" id="files"></span>
                  <button type="button" class="btn btn-dark" id="botoncomenzar" disabled>Comenzar entrenamiento</button>
                </div>
            </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div id="view-notify">  

                    </div>
                </div> 
            </div>
      
    ` ;
    return $row;
}

export function Message() {
    return ` 
    <div class="alert alert-success" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
    <strong>!Felicidades!</strong> Archivo subido correctamente! 
  </div> 
        
    `;
}
