function temaclaro(){
  var botao = document.getElementById('temaclaro');

  botao.addEventListener('click', () => {
    document.body.classList.toggle('temaClaro');
    if (document.body.classList.contains('temaClaro')){
    botao.textContent = 'apagar luzes';
    } else{
      botao.textContent = 'ligar luzes';
    }
  })
}
temaclaro();

function atualizaRelogio(){

  var agora = new Date();
  
  var hora = agora.getHours().toString().padStart(2,'0');
  var minuto = agora.getMinutes().toString().padStart(2,'0');
  var segundo = agora.getSeconds().toString().padStart(2,'0');

  var horaAtual = `${hora}:${minuto}:${segundo}`;

  let relogio = document.getElementById('relogio');
  if(relogio){
    relogio.textContent = horaAtual;
  }

}

atualizaRelogio();
setInterval(atualizaRelogio, 1000)