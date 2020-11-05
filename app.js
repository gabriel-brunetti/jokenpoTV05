// Selecionar/Criar as variáveis do Jokenpo
/*
  document.getElementById('idDesejado') -> retorna UM elemento, correspondente

  document.getElementsByClassName('classeDesejada') -> retorna UMA LISTA com os elementos pertencentes a classe
 */

let resultadoUsuario = 0
let resultadoComputador = 0
const userScore_span = document.getElementById('userScore')
const computerScore_span = document.getElementById('compScore')
const paperButton_img = document.getElementById('paperButton') 
const rockButton_img = document.getElementById('rockButton') 
const scissorsButton_img = document.getElementById('scissorsButton')
const result_p = document.getElementById('result')
const scores_p = document.getElementById('scores')

// Modificar a cor do placar de acordo com o placar
// verde se o usuário está ganhando
// veremelho se o usuário está perdendo
// branco se estiver empatado
// lembre-se das classes css green-glow e red-glow

/* 
Dar feedback visual - nas bordas dos botões -
se o usuário ganhou; venceu ou perdeu
lembre-se das classes css green-glow e red-glow
lembre-se também que a jogadaUsario tem como valor (paper, rock, scissors)
e os botões tem como id (paperButton, rockButton e scissorsButton)
talvez seja necessário fazer um getElementById para adicionar classe
*/


// função responsável por fazer o jogo de jokenpo
function jokenpo(jogadaUsuario) {
  // gerando uma jogada aleatória do computador
  jogadasPossiveisComputador = ["paper", "rock", "scissors"]
  n = (Math.floor(Math.random() * 3))
  jogadaComputador = jogadasPossiveisComputador[n]
  
  console.log(jogadaUsuario + jogadaComputador)
  switch(jogadaUsuario + jogadaComputador){
      // vitória do usuário: paperrock; rockscissors; scissorspaper
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        resultadoUsuario++
        userScore_span.innerHTML = resultadoUsuario
        break;
      // derrota do usuário: rockpaper, scissorsrock, paperscissors
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        resultadoComputador++
        computerScore_span.innerText = resultadoComputador
        break;
      // empates
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        break;
      default:
        alert("aconteceu algum erro")
  }
}

// event listener !
// adiciono uma função a ser executada se ocorrer um evento que eu determinar no elemento HTML.

function principal(){
  paperButton_img.addEventListener("click", ()=> jokenpo("paper"))
  rockButton_img.addEventListener("click", function() {
    jokenpo("rock")
  })
  scissorsButton_img.addEventListener("click", ()=> jokenpo("scissors"))
}

principal()






