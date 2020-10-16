export function pageMain() {
    let $section = document.createElement("section");
    $section.innerHTML = ` 
        <hr/>
   <div class="container">
        <div class="row">       
            <div class="col-12">
              <h4>Entramiento de neuronas</h4>
            </div>
        </div> 
        <div class="row">
            <div class="col-6">
                <div class="card">
                <div class="card-header">Datos obtenidos para el entrenamiento</div>
                    <div class="card-body">
                        <div class="row">
                                <div class="col-6">
                                    Datos de Entrada: <span id="input">2</span>
                                    Datos de Salida: <span id="salidas">1</span>
                                </div>
                                <div class="col-6">
                                    Datos de Patrones: <span id="patrones">6</span>
                                    Datos de Peso: <span>{0,0}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    Datos de Umbral: <span id="umbral">0.1</span>
                                </div>
                                <div class="col-6">
                                Rata de aprendizaje: <span id="rata">0.1</span>
                                </div>
                            </div>  
                            Error maximo: <span id="ErrorMaximo">0.1</span>                      
                    </div>
                </div>
            </div>
            <div class="col-6">
                    <section>
                    <ul>
                    <li>Historial de iteraciones:</li>
                        <ol id="history"> 
                            
                        </ol>
                    </ul>
                    </section>
                    <h5>Tabla de comparaciones de YD1 vs YR1</h5>
                    <section>
                        <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">YD1</th>
                            <th scope="col">YR1</th>
                        </tr>
                        </thead>
                        <tbody id="viewtable">
                        
                        </tbody>
                    </table>
                    </section>
                    <section id="viewOptimo">
                    
                    </section>
            </div> 
        </div>  
   </div>
   <hr/>
`
    return $section
}

