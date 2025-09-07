document.body.style.zoom = "100%"; // Isso define o zoom padrão do site (aprendi sozinho e sem querer, descobri que pode ser que fique errado)

/*
    Antes eu tava esquecendo de colocar o ".value", por isso tava dando errado,
    foi uma dor de cabeça pra eu lembrar que tinha que colocar isso kkkk

    Um detalhe importante: Apartir da função de calcular o módulo, eu usei o Gemini (IA do Google)
                           pra saber quais eram as operações matemáticas, mas eu não usei IA pra adaptar as operações no meu código,
                           adaptei manualmente, porque é algo bem simples e fácil.
*/

function calc(operacao) {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let res;

  switch (operacao) {
    case "soma":
      res = n1 + n2;
      break;
    case "subt":
      res = n1 - n2;
      break;
    case "mult":
      res = n1 * n2;
      break;
    case "div":
      res = n1 / n2;
      break;
    case "mod":
      res = n1 % n2;
      break;
    case "pot":
      res = Math.pow(n1, n2);
      break;
    case "raiz":
      res = Math.sqrt(n1);
      break;
    case "abs":
      res = Math.abs(n1);
      break;
    case "gbtomb":
      res = n1 * 1024;
      break;
    case "mbtogb":
      res = n1 / 1024;
      break;
    default:
      res = "Erro: Dados Errados";
  }
  document.getElementById("saida").innerHTML = "Resultado: " + res;
}

/*
    Código Antigo:
    
function soma() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = n1 + n2
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}
function subt() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = n1 - n2
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}
function mult() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = n1 * n2
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}
function div() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = n1 / n2
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}
function mod() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = n1 % n2
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}
function pot() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = Math.pow(n1, n2)
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}
function raiz() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = Math.sqrt(n1)
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}
function abs() {
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let res = Math.abs(n1)
    document.getElementById('saida').innerHTML = 'Resultado: ' + res
}

*/
