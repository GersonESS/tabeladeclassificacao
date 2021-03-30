
var paulo = {nome: "Paulo", vitorias: 2, empates: 5, derrotas: 1, pontos: 0}
//console.log(paulo);

var rafa = {nome: "Rafa", vitorias: 4, empates: 5, derrotas: 1, pontos: 0 }


rafa.pontos  = calcPontos(rafa)
paulo.pontos = calcPontos(paulo)

function calcPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}
var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores) 

function exibirJogadoresNaTela(jogadores)
  {
    var html = ""
    for (var i = 0; i < jogadores.length; i++)
    {
      html += "<tr><td>" + jogadores[i].nome + "</td>" 
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
function adicionarVitoria(i)
  {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
function adicionarEmpate(i)
  {
   var jogador = jogadores[i]
   jogador.empates++
   jogador.pontos = calcPontos(jogador) 
   exibirJogadoresNaTela(jogadores) 
  }
function adicionarDerrota(i)
  {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
  }