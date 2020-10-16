export function pageHistory(props) {
  let { it, error } = props
  return `
    <li>Error de la iteracion ${it} es de : ${error}</li>
    `;
}

export function tableHistory(params) {
  let { yd1, yr1 } = params;
  return `
      <tr>             
      <td>${yd1.out}</td>
      <td>${yr1}</td>
      </tr>
    `
}

export function ResultadoOptimo(props) {
  let { poptimo, umbral } = props
  return `
      <div class="alert alert-success" role="alert">
            Pesos optimo [${poptimo[0]}, ${poptimo[1]}] Y umbral ${umbral}
       </div>
    `;
}