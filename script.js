
function mudarTexto() {
    document.getElementById('demo').innerHTML = 'Texto alterado!';
  }
  
  function novaFuncaoDeAlerta() {
    alert('Botão clicado! Exibindo um alerta na tela.');
  }
  
  document.getElementById('seuBotaoID').addEventListener('click', novaFuncaoDeAlerta);
  
  