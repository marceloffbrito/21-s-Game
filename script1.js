//Capturando Elementos do HTML e associando ao evento de clicar
document.getElementById("add1").addEventListener("click", somar1);
 
document.getElementById("add2").addEventListener("click", somar2);

document.getElementById("add3").addEventListener("click", somar3);

//Botão novo jogo

document.getElementById("newgame").addEventListener("click", novoJogo);

//Váriaveis

var res = document.querySelector('#resultado');
var vezpc = document.querySelector('#vezpc');
var jog1 = document.querySelector('#jog1');
var vit1 = document.querySelector('#vit1');
var vitpc = document.querySelector('#vitpc');
var derjog1 = document.querySelector('#derjog1');
var derpc = document.querySelector('#derpc');

var soma = Number(0);

//Variáveis para armazenar vitórias e derrotas dos jogadores

var vitoriajogador=Number(0);
var derrotajogador=Number(0);
var vitoriacomputador=Number(0);
var derrotacomputador=Number(0);
  

//Função para iniciar novo jogo

function novoJogo(){
   vezpc.innerHTML=""; //Limpar Tela
   res.innerHTML="Nova Rodada";
   soma = 0;
   desbloqueiaBotao();
} 

//Função  para fazer computador jogar algum tempo após a primeira jogada
function intervaloJogada(){
   var intervalo = setTimeout(function(){ computadorJogar();}, 1200);
}

//Função para desabilitar os botões quando terminar o jogo 

function bloqueiaBotao(){
   document.getElementById("add1").disabled = true;
   document.getElementById("add2").disabled = true;
   document.getElementById("add3").disabled = true; 
}

//Função para desabilitar e habilitar os botões quando de acordo com vez do PC ou do Jogador 

function desbloqueiaBotao(){
   document.getElementById("add1").disabled = false;
   document.getElementById("add2").disabled = false;
   document.getElementById("add3").disabled = false; 
}

//Função para verificar se o Usuário já atingiu 21

function verificaLimite(){   
       
    if(soma == 21){
       
           res.innerHTML = "21! Parabéns, Você venceu!";
           vezpc.innerHTML=""; //Limpar campo onde mostra quanto computador Jogou
           bloqueiaBotao(); 
           vitoriajogador += 1;
           derrotacomputador += 1;
           vit1.innerHTML = vitoriajogador; //exibir quantidade de vitorias do jogador
           derjog1.innerHTML = derrotajogador; //Exibir derrotas jogador 1
           vitpc.innerHTML = vitoriacomputador; //exibir quantidade de vitorias do computador
           derpc.innerHTML = derrotacomputador; //Exibir derrotas PC
      
   } else if(soma > 21){

           res.innerHTML = "Você ultrapassou o limite, Computador Venceu!";
           vezpc.innerHTML=""; //Limpar campo onde mostra quanto computador Jogou
           bloqueiaBotao();
           vitoriacomputador += 1;
           derrotajogador += 1;
           vit1.innerHTML = vitoriajogador; //exibir quantidade de vitorias do jogador
           derjog1.innerHTML = derrotajogador; //Exibir derrotas jogador 1
           vitpc.innerHTML = vitoriacomputador; //exibir quantidade de vitorias do computador
           derpc.innerHTML = derrotacomputador; //Exibir derrotas PC
      
   } else { 
         intervaloJogada();
           //Função intervalojogada() já chama a computadorJogar();
   }          
   
}

//Função para fazer computador jogar automaticamente e tambem verificar se ele ganhou

function computadorJogar(){ 
   var somapc = Math.floor(Math.random() * (3)+1);                 
       soma+=somapc;
       res.innerHTML = "Total: "+soma;
       vezpc.innerHTML="Computador adicionou: "+somapc +", é sua vez.";      //Mostrar quanto o computador adicionou
      
       if(soma > 21){
           
           bloqueiaBotao();
           res.innerHTML="Computador ultrapassou limite, Você ganhou!";
           vezpc.innerHTML=""; //Limpar campo onde mostra quanto computador Jogou
           vitoriajogador += 1;
           derrotacomputador += 1;
           vit1.innerHTML = vitoriajogador;
           derjog1.innerHTML = derrotajogador; 
           vitpc.innerHTML = vitoriacomputador; 
           derpc.innerHTML = derrotacomputador; 
       
       }else if(soma == 21){
           
           bloqueiaBotao();
           res.innerHTML=" 21! Computador Venceu!";
           vezpc.innerHTML="Computador adicionou: "+ somapc; //Deixo aparecer a mensagem para que o usuário saiba quanto o computador adicionou pra ganhar
           vitoriacomputador += 1;
           derrotajogador += 1;
           vit1.innerHTML = vitoriajogador; 
           derjog1.innerHTML = derrotajogador; 
           vitpc.innerHTML = vitoriacomputador; 
           derpc.innerHTML = derrotacomputador; 
      
       } else{
            desbloqueiaBotao(); //Desbloquear Botões após a jogada do PC
       }         
}     

//Funções para somar números na tela adicionando +1/+2/+3

function somar1(){
   soma += 1
   res.innerHTML= "Total: "+soma; 
   verificaLimite();
   bloqueiaBotao();
}

function somar2(){  
   soma += 2
   res.innerHTML="Total: "+soma; 
   verificaLimite();
   bloqueiaBotao();
}

function somar3(){
   soma += 3
   res.innerHTML= "Total: "+soma; 
   verificaLimite();
   bloqueiaBotao();
}




