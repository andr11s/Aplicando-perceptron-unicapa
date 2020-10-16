import { prdResultado } from "./pageworking/page-test.js"
const d = document;

// const $ENTRADAS = d.getElementById("input").innerHTML;
//     let UMBRAL = d.getElementById("umbral").innerHTML;
//     console.log(UMBRAL);
//     const $SALIDAS = d.getElementById("salidas").innerHTML;
//      const $RATA = document.getElementById("rata").innerHTML;
//      const $PATRONES = d.getElementById("patrones").innerHTML;
//      const $ERRORMAXIMO = d.getElementById("ErrorMaximo").innerHTML;
let obj = 0;
let reader = new FileReader;
export function entrenar(event) {
    let input = getInpu(event);
    let ent = Perceptron()
    let resultado = ent.train(input);
    let v = []
    console.log(ent.predic({ in: [1, 1] }));;
    v.push(resultado.pesosoptimo);
    v.push(resultado.umbral);
    ent.descargarArchivo(v, "pesosoptimo");
    return resultado;
}

export function entrenarRed(props) {

    let { x1, x2, file } = props;

    let files = file.target.files[0];
    let sum = 0;

    reader.onload = () => {
        let c = d.getElementById("idresultado");
        let dataFile;
        let result = reader.result;
        let lineas = result.split('\n');

        for (const key in lineas) {
            let data = lineas[key].split(',')
            dataFile = { w1: Number(data[0]), w2: Number(data[1]), umbral: Number(data[2]) }
        }
        sum = dataFile.w1 * x1 + dataFile.w2 * x2 - dataFile.umbral
        let resu = (sum > 0) ? 1 : -1;
        c.innerHTML = prdResultado(resu);

    }
    reader.readAsText(files)


}

let Perceptron = function () {
    let umbral = 0.1;
    let tasa_de_aprendizaje = 0.1;
    let w = [0, 0];


    //suma entradas con pesos
    function getSum(input) {
        let sum = 0;
        sum = trunc(w[0] * input.in[0] + w[1] * input.in[1] - umbral, 2)
        return sum;
    }

    //función para entrenar la neurona, el cual modifica los pesos (w) en función de los valores y resultado (inputs.in , input.out).
    function train(inputs) {
        let it = 1;
        let ErrorIteracion = [], resulHistory = [];
        let resultado;
        while (true) {
            let obj = {};
            let error_patron = 0
            var contador_de_errores = 0;
            for (var n = 0; n < inputs.length; n++) {
                resultado = 0;
                let sum = getSum(inputs[n]);
                if (sum >= 0) {
                    resultado = 1;
                } else if (sum < 0) {
                    resultado = -1
                }
                obj[n] = resultado;
                let error_lineal = inputs[n].out - resultado;
                error_patron = error_patron + error_lineal;

                contador_de_errores += error_patron;

                for (var i = 0; i < inputs[n].in.length; i++) {
                    w[i] = trunc(w[i] + tasa_de_aprendizaje * error_lineal * inputs[n].in[i], 1);
                }
                umbral = trunc(umbral + tasa_de_aprendizaje * error_lineal * 1, 2);
            }
            resulHistory.push(obj)
            let ERMS = trunc(contador_de_errores / 6, 2);
            ErrorIteracion.push(ERMS)

            if (ERMS <= 0.1) {
                // console.log("pesos optimos ", w, "umbral optimo ", umbral);
                return { entrada: inputs, pesosoptimo: w, error: ErrorIteracion, umbral: umbral, pesos: w, iteracion: it, resul: resulHistory };
            }
            it++;
        }
    }

    function trunc(x, posiciones = 0) {
        let s = x.toString()
        let decimalLength = s.indexOf('.') + 1
        let numStr = s.substr(0, decimalLength + posiciones)
        return Number(numStr)
    }
    //funcion para predecir la respuesta
    function predic(input) {
        var value = getSum(input);
        console.log("predcc ", value);
        return (value > 0) ? 1 : -1;
    }

    function descargarArchivo(contenidoEnBlob, nombreArchivo) {
        contenidoEnBlob = new Blob(new Array(contenidoEnBlob), { type: 'text/plain' });
        var reader = new FileReader();
        reader.onload = function (event) {
            var save = document.createElement('a');
            save.href = event.target.result;
            save.target = '_blank';
            save.download = nombreArchivo || 'archivo.dat';
            var clicEvent = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });
            save.dispatchEvent(clicEvent);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        };
        reader.readAsDataURL(contenidoEnBlob);
    };

    return {
        train: train,
        descargarArchivo: descargarArchivo,
        getSum: getSum,
        predic: predic,
        trunc: trunc
    };
};


function getInpu(event) {
    let inp = [
        { in: [2, 0], out: 1 },
        { in: [0, 0], out: -1 },
        { in: [2, 2], out: 1 },
        { in: [0, 1], out: -1 },
        { in: [1, 1], out: 1 },
        { in: [1, 2], out: -1 }];
    let file = event.target.files[0];
    reader.readAsText(file);
    reader.onload = () => {
        let result = reader.result;
        let lineas = result.split('\n');

        inp.forEach((element, index) => {
            let data = lineas[index].split(',')
            element.in[0] = Number(data[0]);
            element.in[1] = Number(data[1]);
            element.out = Number(data[2]);
        });
    }

    return inp;
}

export const getDataInputs = () => {
    return [
        { in: [2, 0], out: 1 },
        { in: [0, 0], out: -1 },
        { in: [2, 2], out: 1 },
        { in: [0, 1], out: -1 },
        { in: [1, 1], out: 1 },
        { in: [1, 2], out: -1 }];
}