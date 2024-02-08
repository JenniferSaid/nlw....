const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "a) let",
        "b) const",
        "c) var"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: [
        "a) 4",
        "b) '22'",
        "c) '4'"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "a) push()",
        "b) concat()",
        "c) add()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar tanto o valor quanto o tipo em JavaScript?",
      respostas: [
        "a) ==",
        "b) ===",
        "c) !="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código 'typeof undefined' em JavaScript?",
      respostas: [
        "a) 'undefined'",
        "b) 'null'",
        "c) 'undefined'"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "a) pop()",
        "b) remove()",
        "c) shift()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para criar um loop em JavaScript?",
      respostas: [
        "a) loop()",
        "b) for()",
        "c) repeat()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "a) parseInt()",
        "b) toNumber()",
        "c) parseString()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "a) =",
        "b) :=",
        "c) -="
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para encontrar o comprimento de uma string em JavaScript?",
      respostas: [
        "a) length()",
        "b) size()",
        "c) count()"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }