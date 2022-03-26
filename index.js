const filme = {
    titulo: "pets 2",
    furacao: 136,
    genero: "Animação",
    avaliacao: 8.5,
    indicadoParaMaiores: false,
    ano: 2022
}

// Usando IF para checar se o filme é liberado para todas as idades
if(filme.indicadoParaMaiores == false){
    console.log(`[if 01] O Filme ${filme.titulo} é indicado para todas as idades`)
}

// Usando o mesmo IF mas... tirando proveito do valor booleano (truthy/falsy)
// se o valor é tru e eu coloco uma exclamação antes, ele vira false.
// Assim como, se o valor for false, com exclamação, ele vira true.
// E se minha condição for simplesmente true, ela passa na validação. E vice-verse.
if(!filme.indicadoParaMaiores){
    console.log(`[if 02] O Filme ${filme.titulo} é indicado para todas as idades`)
}

// Mesmo IF mas usando o short circuit (curto circuito)
// Basicamente o '&&' agem como se fosse um if - executam o que vem a seguir se a condição anterior for verdadeira
!filme.indicadoParaMaiores && console.log(`[if 03] O Filme ${filme.titulo} é indicado para todas as idades`)

// Mesmo short circuit, porém estamos passando o nome do filme errado (filme.title). Se não houver o title (null, undefined...) ele lê uma segunda opção (filme.titulo)
!filme.indicadoParaMaiores && console.log(`[if 04] O Filme ${filme.title || filme.titulo} é indicado para todas as idades`)

// Usando duas condições obrigatórias no if
if(!filme.indicadoParaMaiores && filme.avaliacao > 5) {
    console.log(`[if 05] O Filme ${filme.titulo} é indicado para todas as idades e está acima da média`)
}

// Usando duas condições obrigatórias no if
if(filme.indicadoParaMaiores || filme.avaliacao > 5) {
    console.log(`[if 06] O Filme ${filme.titulo} é indicado para todas as idades e está acima da média`)
}

// Usando duas condições obrigatórias no if, sendo que a segunda consiste em duas condições com um OR
if(!filme.indicadoParaMaiores && (filme.avaliacao > 5 || filme.ano === 1990)){
    console.log(`[if 07] O filme &{filme.titulo} é indicado para todas as idades e está acima da média`)
}

// Condicional com IF/ELSE
if(filme.indicadoParaMaiores) {
    console.log(`[if 08 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades`)
  } else {
    console.log(`[if 08 ELSE] O filme ${filme.titulo} é indicado para todas as idades`)
  }

// Condicional com IF/ELSE usando IF TERNÁRIO (onde ? representa o if e : o else)
// {CONDICAO} ? {SE TRUE} : {SE FALSE}
filme.indicadoParaMaiores
  ? console.log(`[if 09 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades`)
  : console.log(`[if 09 ELSE] O filme ${filme.titulo} é indicado para todas as idades`)

// Mesma condição mas com o IF TERNÁRIO dentro do console.log()
console.log(filme.indicadoParaMaiores ? `[if 10 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades` : `[if 10 ELSE] O filme ${filme.titulo} é indicado para todas as idades`)

// Condicional com IF/ELSE IF/ELSE
if(filme.indicadoParaMaiores) {
    console.log(`[if 11 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades`)
  } else if (filme.titulo === "Titanic") {
    console.log(`[if 11 ELSE IF] O nome do filme é Titanic`)
  } else {
    console.log(`[if 11 ELSE] O filme ${filme.titulo} é indicado para todas as idades e seu título não é Titanic`)
  }