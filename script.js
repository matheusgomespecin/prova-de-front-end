function mudarTexto() {
    document.getElementById("demo").innerHTML = "Texto alterado!";
}


function minhaFuncaoExistente() {
    console.log('Esta é uma função existente!');
  }
  
  function novaFuncaoDeAlerta() {
    alert('Botão clicado! Exibindo um alerta na tela.');
  }
  
  document.getElementById('seuBotaoID').addEventListener('click', novaFuncaoDeAlerta);
  