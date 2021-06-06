//Capturando Elementos do HTML e associando ao evento de clicar
//Botões Jogador 1
document.getElementById("jog1add1").addEventListener("click", jog1somar1);
 
document.getElementById("jog1add2").addEventListener("click", jog1somar2);

document.getElementById("jog1add3").addEventListener("click", jog1somar3);

//--------------------------------------------------------------------
//Botões Jogador 2
document.getElementById("jog2add1").addEventListener("click", jog2somar1);
 
document.getElementById("jog2add2").addEventListener("click", jog2somar2);

document.getElementById("jog2add3").addEventListener("click", jog2somar3);


// Botão de iniciar novo jogo 
document.getElementById("newgame").addEventListener("click", novoJogo);

//Váriaveis

var res = document.querySelector('#resultado');
var vezjog1 = document.querySelector('#vezjog1');
var vezjog2 = document.querySelector('#vezjog2');
var vit1 = document.querySelector('#vit1');
var derrotas1 = document.querySelector('#derrotas1');
var vit2 = document.querySelector('#vit2');
var derrotas2 = document.querySelector('#derrotas2');

var soma = Number(0);

//Variável para armazenar vitórias e derrotas dos jogadores
var vitoriajogador1=Number(0);
var derrotajogador1=Number(0);
var vitoriajogador2=Number(0);
var derrotajogador2=Number(0);

//Função para bloquear botões quando terminar o jogo

function bloqueiaBotao(){
    document.getElementById("jog1add1").disabled = true;
    document.getElementById("jog1add2").disabled = true;
    document.getElementById("jog1add3").disabled = true; 
    document.getElementById("jog2add1").disabled = true; 
    document.getElementById("jog2add2").disabled = true; 
    document.getElementById("jog2add3").disabled = true;  
}

//Função para bloquear botões de acordo com a vez de quem for jogar

function bloqueiaVez1(){
    if(jog1somar1 || jog1somar2 || jog1somar3){
        document.getElementById("jog1add1").disabled = true;
        document.getElementById("jog1add2").disabled = true;
        document.getElementById("jog1add3").disabled = true; 
        document.getElementById("jog2add1").disabled = false; 
        document.getElementById("jog2add2").disabled = false; 
        document.getElementById("jog2add3").disabled = false;       
        }
    }

function bloqueiaVez2(){
    if(jog2somar1 || jog2somar2 || jog2somar3){
        document.getElementById("jog2add1").disabled = true; 
        document.getElementById("jog2add2").disabled = true; 
        document.getElementById("jog2add3").disabled = true;
        document.getElementById("jog1add1").disabled = false;
        document.getElementById("jog1add2").disabled = false;
        document.getElementById("jog1add3").disabled = false;    
    }
}

//Função para iniciar novo jogo zerando a soma atual e desbloquear os botões

function novoJogo(){
    vezjog1.innerHTML="";
    vezjog2.innerHTML="";
    res.innerHTML="Nova Rodada";
    soma = 0;
    document.getElementById("jog1add1").disabled = false;
    document.getElementById("jog1add2").disabled = false;
    document.getElementById("jog1add3").disabled = false; 
    document.getElementById("jog2add1").disabled = false; 
    document.getElementById("jog2add2").disabled = false; 
    document.getElementById("jog2add3").disabled = false;  
}

//Função para verificar se jogador 1 ganhou

function verificaVitoria1(){
    if(soma == 21){
        
        res.innerHTML = "Parabéns Jogador 1, Você atingiu 21 e venceu!";
        vezjog1.innerHTML=""; 
        vezjog2.innerHTML="";
        bloqueiaBotao();
        vitoriajogador1 += 1;
        derrotajogador2 += 1;
        vit1.innerHTML = vitoriajogador1; //Mostrar vitorias Jogador 1
        derrotas1.innerHTML = derrotajogador1; //Mostrar Derrotas Jogador 1
        vit2.innerHTML = vitoriajogador2; //Mostrar Vitorias Jogador 2
        derrotas2.innerHTML = derrotajogador2; //Mostrar Derrotas Jogador 2      

    } else if(soma > 21){     
        
        res.innerHTML = "Jogador 1 ultrapassou o limite, Jogador 2 Venceu!";
        vezjog1.innerHTML="";
        vezjog2.innerHTML="";
        bloqueiaBotao();
        vitoriajogador2 += 1;
        derrotajogador1 += 1;
        vit1.innerHTML = vitoriajogador1;
        derrotas1.innerHTML = derrotajogador1; 
        vit2.innerHTML = vitoriajogador2; 
        derrotas2.innerHTML = derrotajogador2;       
        
    }
}

//Função para verificar se jogador 2 ganhou

function verificaVitoria2(){
    if(soma == 21){
       
        res.innerHTML = "Parabéns Jogador 2, Você atingiu 21 e venceu!";
        vezjog1.innerHTML="";
        vezjog2.innerHTML="";
        bloqueiaBotao();
        vitoriajogador2 += 1;
        derrotajogador1 += 1;
        vit1.innerHTML = vitoriajogador1; 
        derrotas1.innerHTML = derrotajogador1; 
        vit2.innerHTML = vitoriajogador2; 
        derrotas2.innerHTML = derrotajogador2;   

    } else if(soma > 21){
        
        res.innerHTML = "Jogador 2 ultrapassou o limite, Jogador 1 Venceu!";
        vezjog1.innerHTML="";
        vezjog2.innerHTML="";
        bloqueiaBotao();
        vitoriajogador1 += 1;
        derrotajogador2 += 1;
        vit1.innerHTML = vitoriajogador1;
        derrotas1.innerHTML = derrotajogador1; 
        vit2.innerHTML = vitoriajogador2; 
        derrotas2.innerHTML = derrotajogador2;       
    }
}


//Funções para somar valores jogador 1

function jog1somar1(){
    soma += 1
    res.innerHTML= "Total: "+soma;
    vezjog1.innerHTML="Jogador 1 Adicionou +1"; 
    vezjog2.innerHTML="";
    bloqueiaVez1(); //Bloqueia esse botão e libera o do jogador 2
    verificaVitoria1();
      
 }

 function jog1somar2(){  
    soma += 2
    res.innerHTML="Total: "+soma; 
    vezjog1.innerHTML="Jogador 1 Adicionou +2";
    vezjog2.innerHTML="";
    bloqueiaVez1();
    verificaVitoria1();
}

function jog1somar3(){
    soma += 3
    res.innerHTML= "Total: "+soma; 
    vezjog1.innerHTML="Jogador 1 Adicionou +3"; 
    vezjog2.innerHTML="";
    bloqueiaVez1();
    verificaVitoria1();
}

//Funções para somar valores jogador 2

function jog2somar1(){
    soma += 1
    res.innerHTML= "Total: "+soma; 
    vezjog2.innerHTML="Jogador 2 Adicionou +1"; 
    vezjog1.innerHTML="";
    bloqueiaVez2(); //Bloqueia esse botão e libera o do jogador 1
    verificaVitoria2();
 }

 function jog2somar2(){  
    soma += 2
    res.innerHTML="Total: "+soma; 
    vezjog2.innerHTML="Jogador 2 Adicionou +2";
    vezjog1.innerHTML="";
    bloqueiaVez2();
    verificaVitoria2();
}

function jog2somar3(){
    soma += 3
    res.innerHTML= "Total: "+soma; 
    vezjog2.innerHTML="Jogador 2 Adicionou +3";
    vezjog1.innerHTML=""; 
    bloqueiaVez2();
    verificaVitoria2();
}
