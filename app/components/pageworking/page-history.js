export function pageHistory(props) {
  let { it, error } = props
  return `
    <li>Error de la iteracion ${it} es de : ${error}</li>
    `;
}

export function tableHistory(params) {
  let { it, yd1, yr1 } = params;
  return `
      <tr>             
      <td>${it}</td>
      <td>${yd1.out}</td>
      <td>${yr1[0]} , ${yr1[1]} ,  ${yr1[2]} ,  ${yr1[3]} ,  ${yr1[4]} ,  ${yr1[5]}</td>
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