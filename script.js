function openTab(evt, tabName) {
    // GANBIARRA FOFA 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove as classes para tudo ficar bonitinho ( coisa besta )
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "#007bff";
    }
  
    // mostra as budegas
    document.getElementById(tabName).style.display = "block";
  
    // deixa as coisas mais inviadadas 
    evt.currentTarget.style.backgroundColor = "#0056b3";
  }
  
  // Define a materia do inferno
  document.getElementsByClassName("tablink")[0].click();
  
  document.getElementById('aritmetica-quiz').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo as respostas do usuário
    const resposta1 = parseInt(document.getElementById('questao1').value);
    const resposta2 = parseInt(document.getElementById('questao2').value);

    // Respostas corretas
    const respostaCorreta1 = 43; // 15 + 28
    const respostaCorreta2 = 9;   // 72 ÷ 8

    // Verificando as respostas
    let resultadoTexto = 'Resultados:<br>';
    resultadoTexto += 'Questão 1: ' + (resposta1 === respostaCorreta1 ? 'Correta!' : 'Incorreta!') + '<br>';
    resultadoTexto += 'Questão 2: ' + (resposta2 === respostaCorreta2 ? 'Correta!' : 'Incorreta!');

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = resultadoTexto;
  });

  