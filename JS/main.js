
function atualizaRelogio(){

  var agora = new Date();
  
  var hora = agora.getHours().toString().padStart(2,'0');/* padStart() preenche uma string com caracteres extras no início, até ela atingir um tamanho mínimo. */
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