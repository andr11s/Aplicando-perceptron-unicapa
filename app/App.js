import { entrenar, entrenarRed, getDataInputs } from './components/totrain.js'
import { PageIndex, Message } from './components/page-index.js'
import { predecir, prdBody, prdResultado } from './components/pageworking/page-test.js'
import { pageMain, tableView } from './components/pageworking/page-process.js';
import { pageHistory, ResultadoOptimo, tableHistory } from "./components/pageworking/page-history.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(PageIndex());


  let $files = d.getElementById("files");
  let $botoncomenzar = d.getElementById("botoncomenzar");
  let archivo;
  $files.addEventListener('change', even => {
    if ($root.appendChild(pageMain())) {
      let $tabledata = d.getElementById("tabledata");
      let resultado = getDataInputs();
      for (let index = 0; index < resultado.length; index++) {
        $tabledata.innerHTML += tableView(resultado[index]);
      }
      archivo = even;
      d.getElementById("banner-header").remove('span');
      d.getElementById("view-notify").innerHTML = Message();
      setTimeout(() => {
        d.getElementById("view-notify").remove();
      }, 3000);
      $botoncomenzar.classList.remove('btn-dark')
      $botoncomenzar.classList.add('btn-success')
      $botoncomenzar.disabled = false;
    }
  });


  $botoncomenzar.addEventListener('click', Event => {
    $botoncomenzar.disabled = true;
    let resultado = entrenar(archivo);
    let $pagehistory = d.getElementById("history");
    let $pagetable = d.getElementById("viewtable");

    for (let index = 0; index < resultado.iteracion; index++) {
      $pagehistory.innerHTML += pageHistory({ it: index, error: resultado.error[index] });
    }

    for (let index = 0; index < resultado.iteracion; index++) {
      $pagetable.innerHTML += tableHistory({ it: index, yd1: resultado.entrada[index], yr1: resultado.resul[index] });
    }

    let $pageOptimo = d.getElementById("viewOptimo");
    $pageOptimo.innerHTML = ResultadoOptimo({ poptimo: resultado.pesosoptimo, umbral: resultado.umbral })
    $root.appendChild(predecir())
  });

  let archivoRed;
  $(function () {
    $(document).on('change', 'input[type="file"]', function (event) {
      if (this.id === "filesOptimo") {
        let v = d.getElementById("idcuerpo");
        archivoRed = event;
        v.innerHTML = prdBody();
      }
    });
  });

  $(function () {
    $(document).on('click', 'button[type="button"]', function (event) {
      if (this.id === "comenzarTrain") {
        let entrada1 = d.getElementById("entrada1").value
        let entrada2 = d.getElementById("entrada2").value
        let dataEntrenar = ({ x1: entrada1, x2: entrada2, file: archivoRed })
        entrenarRed(dataEntrenar);
      }
    });
  });
}
