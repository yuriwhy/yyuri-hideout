document.body.style.zoom = "100%";

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
