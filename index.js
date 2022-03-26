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
    console.log('Filme indicado para todas as idades')
}