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
  
    // Atualiza texto
    document.getElementById('player-hp').innerText = "HP: " + hpJogador;
    document.getElementById('enemy-hp').innerText = "HP: " + hpInimigo;

    // Atualiza largura da barra de vida
    const playerLife = document.getElementById('player-life');
    const enemyLife = document.getElementById('enemy-life');

    playerLife.style.width = hpJogador + "%";
    enemyLife.style.width = hpInimigo + "%";

    // Altera cor da barra conforme HP
    playerLife.className = 'vida'; // reset
    enemyLife.className = 'vida';

    if (hpJogador <= 30) playerLife.classList.add('baixo');
    else if (hpJogador <= 60) playerLife.classList.add('medio');

    if (hpInimigo <= 30) enemyLife.classList.add('baixo');
    else if (hpInimigo <= 60) enemyLife.classList.add('medio');
}



//Função para reiniciar o jogo
function reiniciar () {
    hpJogador = 100;
    hpInimigo = 100;
    jogoAtivo = true;
    atualizarTela();
    
 document.getElementById("btn-reiniciar").style.display = 'none';
}

   

