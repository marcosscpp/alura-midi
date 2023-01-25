function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null || elemento.localName != "audio") {
        console.log('Elemento não encontrado!')
    } 
    else {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const tipoSom = tecla.classList[1];
    const idAudio = '#som_' + tipoSom;  
    
    // Template String
    // const idAudio = `#som_${tipoSom}`;  


    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    tecla.onkeydown = function (evento) {
        console.log(evento)
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');   
        }
    }


    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
