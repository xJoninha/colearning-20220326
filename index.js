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