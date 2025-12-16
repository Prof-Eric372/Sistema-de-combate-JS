//Variáveis
let hpJogador = 100;
const danoJogador = 10;
let hpInimigo = 100;
let jogoAtivo = true;

//Função para o ataque do jogador

function atacar() {
    if (!jogoAtivo) {
        console.log("O jogo acabou. Reinicie para jogar novamente.");
        
        return;
    }

    hpInimigo -= danoJogador;
    console.log("O inimigo sofreu " + danoJogador + " de dano e agora tem " + hpInimigo + " de vida");
if (hpInimigo <= 0) {
        hpInimigo = 0;
        console.log("Não sobrou nada para o beta!");
        jogoAtivo = false;
        document.getElementById("btn-reiniciar").style.display = 'inline-block';
   
    }

    const inimigo = document.getElementById("enemy");

inimigo.classList.add("dano");
inimigo.classList.add("shake");

setTimeout(() => {
    inimigo.classList.remove("dano");
    inimigo.classList.remove("shake");
}, 300);


atualizarTela();
}

//Função para atualizar tela
function atualizarTela() {
  
    document.getElementById('player-hp').innerText = "HP: " + hpJogador;
    document.getElementById('enemy-hp').innerText = "HP: " + hpInimigo;

    document.getElementById('player-life').style.width = hpJogador + "%";
    document.getElementById('enemy-life').style.width = hpInimigo + "%";
}

//Função para reiniciar o jogo
function reiniciar () {
    hpJogador = 100;
    hpInimigo = 100;
    jogoAtivo = true;
    atualizarTela();
}

 document.getElementById("btn-reiniciar").style.display = 'none';

