export function predecir(props) {
    let $section = document.createElement("section")

    $section.innerHTML = `
    <div class="container" style="margin-bottom: 15px;">
    <div class="row">
        <div class="col-12">
            <div class="card text-center">
                <div class="card-header">
                    ¡Entrenamiento completado!
                </div>
                <div class="card-body">
                    <h5 class="card-title">Ingrese el archivo!</h5>
                    <span class="mb-3">Este archivo fue generado por el sistema al momento de terminar el entrenamiento</span>
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group mb-3"> 
                                <div class="custom-file">
                                    <input type="file" accept='text/plain' id="filesOptimo" class="custom-file-input"
                                        aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">Subir archivo</label>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div id="idcuerpo">

                    </div>
                    <div id="idresultado">

                    </div>
                </div>  
            </div>
        </div>
    </div>
</div>
    `
    return $section;
}



export function prdBody(props) {
    let inputPredecir = ` 
    <div class="row"> 
            <div class="col-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Entrada 1</span>
                    </div>
                    <input type="number" id="entrada1" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" width="10px">
                </div> 
          </div>
            <div class="col-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Entrada 2</span>
                    </div>
                    <input type="number" id="entrada2" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default">
                </div>
            </div>
        </div>

            <div class="row">
                <div class="col-12">
                    <button type="button" id="comenzarTrain" class="btn btn-primary">Entrenar Red</button>
                </div>
            </div>

    `
    return inputPredecir;
}

export function prdResultado(props) {
    let a;
    console.log(props);
    if (props == -1 || props == 1) {
        a = `
        <div class="row mb-3 mt-0">
                    <div class="col-12">
                        <div class="alert alert-success" role="alert">
                            Respuesta del entranmiento :  ${props}
                        </div>
                    </div>
        </div>
    `;
    } else {
        a = `
        <div class="row mb-3 mt-0">
                    <div class="col-12">
                        <div class="alert alert-danger" role="alert">
                            Resultado de la simulacion:  ${props}
                        </div>
                    </div>
        </div>
    `;
    }

    return a;
}