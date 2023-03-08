const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="imagens/aprovado.png" alt="Aprovado" />';
const imgReprovado = '<img src="imagens/reprovado.png" alt="Reprovado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});
function adicionaLinha() {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  if (atividades.includes(inputNomeAtividade.value)) {
    alert("Atividade já cadastrada");
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${
      inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
    } </td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
function atualizaMediaFinal() {
  const mediaFinal = somaDasNotas();
  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function somaDasNotas() {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}
