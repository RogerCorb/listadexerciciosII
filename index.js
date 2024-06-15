const prompt = require('prompt-sync')();

const exercicio1 = () => {

  const quantidadeCigarroDia = Number(prompt("quantos cigarros vc fuma por dia ? "));
  const yearsSmoking = Number(prompt('Vc fuma a quanto anos ? '));
  const minutesLostDay = quantidadeCigarroDia * 10;

  const totalMinutesYear = minutesLostDay * (yearsSmoking * 365);
  const daysLost = totalMinutesYear / 1440;
  console.log(`Vc ja perdeu ${daysLost.toFixed(2)} dias de sua vida fumando !`);
}


const exercicio2 = () => {

  const speedCar = Number(prompt("qual a velocidade do carro em km/h ? "));
  const amountPenality = speedCar > 80 ? (speedCar - 80) * 5 : 0;
  if (amountPenality > 0) {
    console.log(`Vc foi multado em R$ ${amountPenality.toFixed(2)} por ter passado acima da velocidade permitida !`);
  }
}

const exercicio3 = () => {

  const distanceKm = Number(prompt("qual a distancia que vc deseja percorrer em km ? "));
  const amountTicketBus = distanceKm <= 200 ? distanceKm * 0.50 : distanceKm * 0.45;
  console.log(`O valor da sua passagem será de R$ ${amountTicketBus.toFixed(2)} `);

}

const exercicio4 = () => {

  const ladoA = parseInt(prompt('Digite a medida do lado A do triangulo.: '));
  const ladoB = parseInt(prompt('Digite a medida do lado B do triangulo.: '));
  const ladoC = parseInt(prompt('Digite a medida do lado C do triangulo.: '));

  const isTriangulo = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);
  const result = isTriangulo ? 'formam um triangulo.' : 'não formam um triangulo.';
  console.log(`As medidas informadas ${result}`);
}

const exercicio5 = () => {
  const jogada1 = prompt('Digite papel , pedra ou tesoura .:').toLowerCase();
  const jogada2 = prompt('Digite papel , pedra ou tesoura .:').toLowerCase();

  if (jogada1 === jogada2) {
    console.log("Empate");
  } else if (jogada1 === "pedra" || jogada2 === "pedra") {
    if (jogada1 === "tesoura" || jogada2 === "tesoura") {
      console.log("pedra");
    } else {
      console.log("papel");
    }

  } else if (jogada1 === "tesoura" || jogada2 === "tesoura") {
    if (jogada1 === "papel" || jogada2 === "papel") {
      console.log("tesoura");
    }
  }
}

const exercicio6 = () => {
  let tentativa = 1;
  while (tentativa < 6) {
    let numeroAleatorio = parseInt(Math.random() * 5 + 1);

    let chute = prompt(`Digite seu chute, um numero de 1 a 5.: `);

    if (Number(chute) === numeroAleatorio) {
      console.log(`Parabéns Voce  Acertou o número secreto ${numeroAleatorio} `);
      tentativa = 6;
    } else {
      if (tentativa < 6) {
        console.log(`Vc tem ${5 - tentativa} chances`);
      }
    }
    tentativa++;
  }
}

const exercicio7 = () => {
  let opcao = 1;
  while (opcao === 1 || opcao === 2) {
    const diariaCarroPopular = 90;
    const diariaCarroLuxo = 150;
    const carroescolhido = parseInt(prompt('Escolha o veiculo que deseja alugar 1-Carro Popular ou 2-Carro de luxo digite sua escolha 1,2 ou qq tecla para sair.: '));
    const diasDeAlugel = prompt('Quantos dias quer alugar este veículo.: ')
    const kmPercorrido = prompt('Informe quantos km vc percorreu.: ');
    let valorTotalCarro;
    if (carroescolhido === 1) {
      valorTotalCarro = kmPercorrido > 100 ? (kmPercorrido * 0.10) + (diasDeAlugel * diariaCarroPopular) : (kmPercorrido * 0.20) + (diasDeAlugel * diariaCarroLuxo);
      opcao = carroescolhido;
    } else if (carroescolhido === 2) {
      valorTotalCarro = kmPercorrido > 200 ? (kmPercorrido * 0.25) + (diasDeAlugel * diariaCarroLuxo) : (kmPercorrido * 0.30) + (diasDeAlugel * diariaCarroLuxo);
      opcao = carroescolhido;
    } else {
      console.log('Saindo do programa...');
      opcao = 3;
    }
    opcao !== 3 ? console.log(`valor total do seu aluguel R$ ${valorTotalCarro.toFixed(2)}`) : '';
  }
}

const exercicio8 = () => {
  let pontos = 0;
  const vetor = [2, 5, 10];
  const horasAtividadeFisica = parseInt(prompt('Informe quantas horas de atividade física voce fez neste mês .: '));

  if (horasAtividadeFisica > 20) {
    pontos = vetor[2] * horasAtividadeFisica;
  } else if (horasAtividadeFisica < 10) {
    pontos = vetor[0] * horasAtividadeFisica;
  } else {
    pontos = vetor[1] * horasAtividadeFisica;
  }
  const valorDaBonificacao = pontos * 0.05;
  console.log(`Vc Teve ${pontos} pontos esse mes e receberá o valor total R$ ${valorDaBonificacao.toFixed(2)}`);
}


const exercicio9 = () => {
  const vector = [];

  let opcao = 1;
  let salario = 0;
  let sexo = 0;
  let descricao = '';
  while (opcao === 1) {
    sexo = parseInt(prompt('\nPor favor informe se o funcionário é 1-homem ou 2-mulher.: '));
    salario = parseFloat(prompt('Por favor digite o salario deste funcionario.: '));
    descricao = sexo === 1 ? 'homem' : 'mulher';
    vector.push({
      salario,
      sexo,
      descricao,
    });
    opcao = parseInt(prompt('\nDeseja continuar o cadastro de salarios 1-Sim ou 2-Não.:'));

  }
  let salarioHomens = 0;
  let salarioMulher = 0;
  for (const iterator of vector) {
    if (iterator.descricao === 'mulher') {
      salarioMulher += iterator.salario;
    } else {
      salarioHomens += iterator.salario;
    }
  }
  console.log(`O valor total dos salarios pagos a homens foi de R$ ${salarioHomens.toFixed(2)}\n
  O valor Total dos salarios pagos a mulheres foi de R$ ${salarioMulher.toFixed(2)}`);
}

const exercicio10 = () => {
  const vectorGeral = [];
  const vectorPares = [];
  let opcao = 1;
  let numeroDigitado = 0;
  let somaValoresDigitados = 0
  do {
    numeroDigitado = parseInt(prompt('Por digite um numero inteiro.: '));
    vectorGeral.push(numeroDigitado);
    somaValoresDigitados += numeroDigitado;

    opcao = parseInt(prompt('Deseja continuar ? 1-Sim / 2-Não.:'));

  } while (opcao === 1)

  const menorValorDigitado = vectorGeral.sort((x, y) => x - y)[0];
  vectorGeral.forEach((numero) => {
    if (numero % 2 === 0) vectorPares.push(numero)
  });

  console.log(`\n***********************************************************************`);
  console.log(`Soma total dos numeros  digitados.: ${somaValoresDigitados}`);
  console.log(`menor valor digitado.: ${menorValorDigitado}`);
  console.log(`A média dos numeros  digitados é.: ${(somaValoresDigitados / vectorGeral.length).toFixed(2)}`);
  console.log(`Numeros pares digitados foram.: ${vectorPares.length} sendo eles ${vectorPares} `);
  console.log(`************************************************************************\n`);
}


const exercicio11 = () => {

  const numeroElementos = 10;
  const primeiro = parseFloat(prompt("Digite o primeiro termo da Progressão Aritmética: "));
  const razao = parseFloat(prompt("Digite a razão da Progressão Aritmética: "));

  console.log("Os 10 primeiros elementos da Progressão Aritmética são:");
  for (let i = 0; i < numeroElementos; i++) {
    const termo = primeiro + i * razao;
    console.log(`Termo ${i + 1}: ${termo}`);
  }

  const soma = (numeroElementos * (primeiro + primeiro + (numeroElementos - 1) * razao)) / 2;
  console.log(`A soma dos ${numeroElementos} elementos da Progressão Aritmética  é: ${soma}`);

}

const exercicio12 = () => {

  const termos = [0, 1];
  for (let i = 2; i < 10; i++) {
    termos[i] = termos[i - 1] + termos[i - 2];
  }
  const sequencia = termos;
  console.log("Os 10 primeiros elementos  da Sequência de Fibonacci:");
  for (let i = 0; i < sequencia.length; i++) {
    console.log(`Termo ${i + 1}: ${sequencia[i]}`);
  }
}

const exercicio13 = () => {
  const termos = [0, 1];
  for (let i = 2; i < 15; i++) {
    termos[i] = termos[i - 1] + termos[i - 2];
  }
  const sequencia = termos;
  console.log("Os 15 primeiros elementos  da Sequência de Fibonacci:");
  for (let i = 0; i < sequencia.length; i++) {
    console.log(`Termo ${i + 1}: ${sequencia[i]}`);
  }

}

const exercicio14 = () => {
  const vetor = Array();
  for (let index = 0; index < 7; index++) {
    vetor[index] = prompt(`Digite o nome ${index + 1}.: `);
  }
  vetor.reverse();
  console.log(`\n***********************************************************************`);
  console.log(` os nomes digitados em ordem reversa foram: \n ${vetor}`);
  console.log(`\n***********************************************************************`);
}

const exercicio15 = () => {

  const vetorNumeros = Array();

  for (let index = 0; index < 10; index++) {
    vetorNumeros[index] = parseInt(prompt(`Digite o numero  ${index + 1}.: `));
  }

  console.log(`\n******************************************************************`);
  vetorNumeros.forEach((numero, index) => {
    if (numero % 2 === 0) {
      console.log(`Número par ${numero} na posição ${index} do vetor  `);
    }
  });
  console.log(`\n******************************************************************`);
}

const exercicio16 = () => {

  const vetor = Array();

  for (let index = 0; index < 20; index++) {
    const numeroGerado = parseInt(Math.random() * 99 + 1);
    vetor[index] = numeroGerado;
  }

  console.log(`\n***************************************************************`);
  console.log(`Foram gerados os numeros aleatórios\n${vetor}\n`);
  vetor.sort((x, y) => x - y);
  console.log(`Agora os numeros estão em ordem crescente\n${vetor}`);
  console.log(`***************************************************************`);
}

const exercicio17 = () => {
  const vetorNome = Array();
  const vetorIdade = Array();
  const vetorResultado = Array();

  for (let index = 0; index < 9; index++) {
    vetorNome[index] = prompt(`Digite o nome da pessoa ${index + 1}.: `);
    vetorIdade[index] = Number(prompt(`Digite a idade de ${vetorNome[index]}.: `));
  }

  vetorIdade.forEach((elemento, index) => {
    if (elemento < 18) {
      vetorResultado.push(index)
    }
  });

  console.log(`\n*************************************************************`);
  vetorResultado.forEach(elemento => {
    console.log(`Nome.: ${vetorNome[elemento]} Idade.: ${vetorIdade[elemento]} anos`);
  });
  console.log(`\n*************************************************************`);

}

const exercicio18 = () => {

  const registroFuncionario = {
    nome: ``,
    cargo: ``,
    salario: 0
  }

  registroFuncionario.nome = prompt(`Digite o nome do funcionario.:`);
  registroFuncionario.cargo = prompt(`Digite o cargo.:`);
  registroFuncionario.salario = parseFloat(prompt(`Digite o Salario.:`));


  console.log(`\n*************************************************************`);
  console.log(`Funcionario cadastrado com sucesso..`);
  console.log(`Nome.: ${registroFuncionario.nome}\nCargo.: ${registroFuncionario.cargo}\nSalario.:${registroFuncionario.salario.toFixed(2)}`);
  console.log(`*************************************************************`);

}

const exercicio19 = () => {
  let horaDigitada = ``;
  let horaSaida = '';
  let index = 0;

  while (index < 5) {
    let error = false;

    horaDigitada = prompt(`Digite um horário no formato HH.MM.SS.: `);
    if (horaDigitada && horaDigitada.length === 8) {
      let vetorHorarios = horaDigitada.split('.');

      if (vetorHorarios.length === 3) {
        if (vetorHorarios[0] < 0 || vetorHorarios[0] > 23) {
          error = setError(vetorHorarios[0]);
        }
        verificaMinutosSegundos(vetorHorarios[1], 'minutos');
        verificaMinutosSegundos(vetorHorarios[2], 'segundos');
        horaSaida = `${vetorHorarios[0]}.${vetorHorarios[1]}.${vetorHorarios[2]}`
      } else {
        error = setError();
      }
    } else {
      error = setError();
    }
    if (!error) {
      console.log(horaSaida);
      index++;
    }
  }

}

const exercicio20 = () => {

  const registroFuncionarios = [];
  let sair = 0;

  while (sair === 0) {
    const matricula = prompt(`Digite a matricula do funcionario.:`);
    const nome = prompt(`Digite o nome.: `);
    const salarioBruto = parseFloat(prompt(`Digite seu salário Bruto.:`));

    registroFuncionarios.push({ matricula, nome, salarioBruto });

    sair = Number(prompt(`Deseja cadastrar mais funcionários 0-continua / 1-Sair.:`));

  }

  registroFuncionarios.forEach(elemento => {
    console.log(`******* contracheque do ${elemento.nome} ********* `);
    console.log(`Matricula.: ${elemento.matricula} `);
    console.log(`Nome......: ${elemento.nome} `);
    console.log(`Salario Bruto.: ${elemento.salarioBruto} `);
    console.log(`Deducão INSS..: ${(elemento.salarioBruto * 0.12).toFixed(2)} `);
    console.log(`Salario Líquido ${elemento.salarioBruto - (elemento.salarioBruto * 0.12).toFixed(2)} `);
    console.log(`\n`);
  });
}

const exercicio21 = () => {
  let continua = true;

  while (continua) {
    console.log(`**************************************************`);
    const altura = parseFloat(prompt(`Informe a sua altura no formato 0.00 .:`)).toFixed(2);
    const sexo = parseInt(prompt(`Informe seu sexo 0-Homem ou 1-Mulher.:`));
    if (sexo === 0 || sexo === 1) {
      console.log(`*************************************************`);
      console.log(`Seu peso ideal deveria estar em.: ${pesoIdeal(altura, sexo).toFixed(2)} Kg.`);
      console.log(`*************************************************`);
      continua = false;
    } else {
      console.log(`Por favor digite sua altura no formato X.XX e escolha 0-Homem  ou 1-Mulher`);
    }
  }
}

const exercicio22 = () => {

  const pesquisaPrefeitura = [];
  let salarioMenor350 = 0;
  let salarioMaisAlto = 0;
  let somaNumeroFilhos = 0;
  let somaSalario = 0;

  let sair = 0;

  while (sair === 0) {
    const salario = parseFloat(prompt(`Digite o seu salário .: `));
    const numeroFilhos = parseInt(prompt(`Digite a quantidade de filhos.: `));

    if (!isNaN(salario)) {
      salarioMenor350 = salario <= 350 ? salarioMenor350 += 1 : salarioMenor350;
      salarioMaisAlto = salario > salarioMaisAlto ? salario : salarioMaisAlto;
    }

    pesquisaPrefeitura.push({ salario, numeroFilhos });
    sair = Number(prompt(`Para continuar o cadastro de pessoas  digite 0.:`));
  }

  pesquisaPrefeitura.forEach(elemento => {
    somaNumeroFilhos += elemento.numeroFilhos;
    somaSalario += elemento.salario;
  });

  console.log(`Média do numero de filhos da população ${(somaNumeroFilhos / pesquisaPrefeitura.length).toFixed(2)}`);
  console.log(`O maior salário da cidade R$${(salarioMaisAlto).toFixed(2)}`);
  console.log(`Percentual da população com salário de até R$ 350,00 ${((salarioMenor350 / pesquisaPrefeitura.length * 100)).toFixed(2)} %`);
}

const exercicio23 = () => {

  // fabricando a matriz
  const matrizIdentidade = factoryMatriz(7, 7);

  for (let lin = 0; lin < matrizIdentidade.length; lin++) {
    for (let col = 0; col < matrizIdentidade.length; col++) {
      matrizIdentidade[lin][col] = lin === col ? 1 : null;
    }
  }
  for (let lin = 0; lin < matrizIdentidade.length; lin++) {
    console.log(...matrizIdentidade[lin]);
  }
}

const exercicio24 = () => {

  // fabricando a matriz  
  const matrizIdentidade = factoryMatriz(6, 8);
  const vetorC = [];

  // populando a matriz personalizado
  for (let lin = 0; lin < matrizIdentidade.length; lin++) {
    for (let col = 0; col < matrizIdentidade[lin].length; col++) {
      matrizIdentidade[lin][col] = ((48 - lin - col) % 2 === 0) ? parseInt(((Math.random() * 50) + 1) * -1) : parseInt((Math.random() * 50) + 1);
    }
  }
  // imprimindo a matriz no console
  for (let lin = 0; lin < matrizIdentidade.length; lin++) {
    let contLin = 0;
    for (let col = 0; col < matrizIdentidade[lin].length; col++) {
      contLin = matrizIdentidade[lin][col] < 0 ? contLin += 1 : contLin;
    }
    vetorC.push(contLin);
  }
  console.log(vetorC);
}

const exercicio25 = () => {

  // fabricando e populando a matriz 
  let matriz = factoryMatriz(15, 20, `popula matriz`);

  const vetorSomaColuna = [];

  for (let col = 0; col < matriz[0].length; col++) {
    let somaColuna = 0;
    for (let lin = 0; lin < matriz.length; lin++) {
      somaColuna += matriz[lin][col];
    }
    vetorSomaColuna.push(somaColuna);
  }
  console.log(`\n************************ SOMA DE TODAS AS COLUNAS DA MATRIZ ******************** `);
  console.log(`C1  C2  C3  C4  C5  C6  C7  C8  C9  C10 C11 C12 C13 C14 C15 C16 C17  C18 C19 C20  `);
  console.log(`${vetorSomaColuna}`);
  console.log(`******************************************************************************** `);

}

const exercicio26 = () => {
  // fabricando as matrizes
  let matrizA = factoryMatriz(3, 5, `popula matriz`);
  let matrizB = factoryMatriz(3, 5, `popula matriz`);
  let matrizP = factoryMatriz(3, 5);


  for (let lin = 0; lin < matrizA.length; lin++) {
    for (let col = 0; col < matrizA[lin].length; col++) {
      matrizP[lin][col] = matrizA[lin][col] * matrizB[lin][col];
    }
  }
  console.log(`Esta é a matriz Produto de uma MatrizA e MatrizB`);
  console.log(matrizP);

}


const exercicio27 = () => {

  // fabricando e populando a matriz 
  let matriz = factoryMatriz(6, 6, `popula matriz`);
  let vetor = [];

  let numeroInput = 0;
  numeroInput = parseInt(prompt(`Digite um numero inteiro.: `));

  for (let lin = 0; lin < matriz.length; lin++) {
    for (let col = 0; col < matriz[lin].length; col++) {
      vetor.push(numeroInput * matriz[lin][col]);
    }
  }
  console.log(`Estes são os elementos do vetor V36 `);
  console.log(vetor);
}

const exercicio28 = () => {

  // fabricando e populando a matriz 
  let matriz = factoryMatriz(10, 10, `popula matriz`);
  let somaAbaixoDiagonal = 0;
  let somaAcimaDiagonal = 0;

  for (let lin = 0; lin < matriz.length; lin++) {
    for (let col = 0; col < matriz.length; col++) {
      somaAcimaDiagonal = col > lin ? somaAcimaDiagonal += matriz[lin][col] : somaAcimaDiagonal;
      somaAbaixoDiagonal = col < lin ? somaAbaixoDiagonal += matriz[lin][col] : somaAbaixoDiagonal;
    }
  }
  console.log(`Soma Abaixo `);
  console.log(somaAbaixoDiagonal);
  console.log(`Soma Acima `);
  console.log(somaAcimaDiagonal);
}

const exercicio29 = () => {
  // fabricando e populando a matriz 
  let matriz = factoryMatriz(5, 5, `popular matriz`);
  let somaLinha4 = 0;
  let somaColuna2 = 0;
  let somaDiagonal = 0;
  let somaTodos = 0;

  for (let lin = 0; lin < matriz.length; lin++) {
    for (let col = 0; col < matriz.length; col++) {
      somaLinha4 = lin === 4 ? somaLinha4 += matriz[lin][col] : somaLinha4;
      somaColuna2 = col === 2 ? somaColuna2 += matriz[lin][col] : somaColuna2;
      somaDiagonal = lin === col ? somaDiagonal += matriz[lin][col] : somaDiagonal;
      somaTodos += matriz[lin][col];
    }
  }
  console.log(`Soma da linha 4-> ${somaLinha4}\nSoma da coluna 2-> ${somaColuna2} `);
  console.log(`Soma da diagonal-> ${somaDiagonal}\nSoma de todos elementos-> ${somaTodos}`);
}

const exercicio30 = () => {
  // fabricando e populando a matriz  
  let matriz = factoryMatriz(5, 5, `popular matriz`);
  let vetorSl = [];
  let vetorSc = [];

  for (let lin = 0; lin < matriz.length; lin++) {
    let somaLinha = 0;
    console.log(...matriz[lin]);
    for (let col = 0; col < matriz.length; col++) {
      somaLinha += matriz[lin][col];
    }
    vetorSl.push(somaLinha);
  }
  for (let col = 0; col < matriz.length; col++) {
    let somaColuna = 0;
    for (let lin = 0; lin < matriz.length; lin++) {
      somaColuna += matriz[lin][col];
    }
    vetorSc.push(somaColuna);
  }
  console.log(`Soma de cada coluna`);
  console.log(vetorSc);
  console.log(`Soma de cada linha `);
  console.log(vetorSl);

}

const exercicio31 = () => {
  // fabricando as matrizes
  let matriz = factoryMatriz(30, 30, `popula matriz`);
  let matrizResultado = factoryMatriz(30, 30);
  let vetor = [];

  let numeroInput = 0;
  numeroInput = parseInt(prompt(`Digite um numero inteiro.: `));

  for (let lin = 0; lin < matriz.length; lin++) {
    for (let col = 0; col < matriz.length; col++) {
      if (numeroInput === matriz[lin][col]) {
        vetor.push(matriz[lin][col]);
      } else {
        matrizResultado[lin][col] = matriz[lin][col];
      }
    }
  }

  console.log(`Estes são os elementos da matriz original  `);
  console.log(...matriz);
  console.log(`foram encontrados  ${vetor.length} valores iguais ao inteiro informado `);
  console.log(`Esta e a matriz resultante  `)
  console.log(...matrizResultado);
}

const exercicio32 = () => {
  // fabricando e populando a matriz   
  let matriz = factoryMatriz(12, 13, `popula matriz`);

  console.log(`\n********* Matriz Lida Original  ************ `);
  for (let lin = 0; lin < matriz.length; lin++) {
    let maiorNumeroLinha = Math.max(...matriz[lin]);
    console.log(...matriz[lin]);
    for (let col = 0; col < matriz[lin].length; col++) {
      matriz[lin][col] = (matriz[lin][col] / maiorNumeroLinha).toFixed(2);
    }
  }
  console.log(`\n*********************** Matriz Modificada ***********************`);
  for (let lin = 0; lin < matriz.length; lin++) {
    console.log(...matriz[lin]);
  }
  console.log(`***********************//// Cplusplus ////***********************\n`);
}

//// em produção /////
const exercicio33 = () => {

  // fabricando e populando a matriz 
  let matriz = factoryMatriz(3, 3, `popula matriz`);

  console.log(`\n********* Matriz Lida Original  ************ `);
  for (let lin = 0; lin < matriz.length; lin++) {
    let maiorNumeroLinha = Math.max(...matriz[lin]);
    console.log(...matriz[lin]);
    for (let col = 0; col < matriz[lin].length; col++) {
      matriz[lin][col] = (matriz[lin][col] / maiorNumeroLinha).toFixed(2);
    }
  }
  console.log(`\n*********************** Matriz Modificada ***********************`);
  for (let lin = 0; lin < matriz.length; lin++) {
    console.log(...matriz[lin]);
  }
  console.log(`***********************//// Cplusplus ////***********************\n`);
}

const exercicio34 = () => {

  // fabricando e populando a matriz 
  let matriz = factoryMatriz(50, 50, `popula matriz`);

  console.log(`\n********* Matriz Lida Original  ************ `);
  for (let lin = 0; lin < matriz.length; lin++) {
    let elementoDiagonalPrincipal = 0;
    console.log(...matriz[lin]);
    for (let col = 0; col < matriz[lin].length; col++) {
      elementoDiagonalPrincipal = lin === col ? matriz[lin][col] : elementoDiagonalPrincipal;
      if (elementoDiagonalPrincipal !== 0) {
        break;
      }
    }
    for (let col = 0; col < matriz[lin].length; col++) {
      matriz[lin][col] = matriz[lin][col] * elementoDiagonalPrincipal;
    }

  }

  console.log(`\n*********************** Matriz Modificada ***********************`);
  for (let lin = 0; lin < matriz.length; lin++) {
    console.log(...matriz[lin]);
  }
  console.log(`***********************//// Cplusplus ////***********************\n`);

}

const exercicio35 = () => {

  // fabricando e populando a matriz 
  let matriz = factoryMatriz(6, 5, `popula matriz`);
  let vetorPar = [];
  let vetorImpar = [];

  for (let lin = 0; lin < matriz.length; lin++) {
    for (let col = 0; col < matriz[lin].length; col++) {
      matriz[lin][col] % 2 === 0 ? vetorPar.push(matriz[lin][col]) : vetorImpar.push(matriz[lin][col]);
      if (vetorPar.length === 5) {
        console.log(`Vetor par cheio : ${vetorPar} `);
        vetorPar = [];
      }
      if (vetorImpar.length === 5) {
        console.log(`Vetor Impar cheio : ${vetorImpar} `);
        vetorImpar = [];
      }
    }
  }
  console.log(`Vetor par : ${vetorPar} `);
  console.log(`Vetor Impar : ${vetorImpar} `);
}

const exercicio36 = () => {
  let vetorGabarito = [13];
  let matrizApostadores = factoryMatriz(100, 13, 'preenche matriz');
  let vetorApostas = [];

  for (let index = 0; index < 13; index++) {
    vetorGabarito[index] = parseInt(Math.random() * 60) + 1;
  }
  for (let lin = 0; lin < matrizApostadores.length; lin++) {
    vetorApostas.push(...matrizApostadores[lin]);
    console.log(`\n**************************************`);
    console.log(`Apostador numero ${lin + 1}`);

    let cont = 0;
    vetorApostas.forEach(numeroAposta => {
      const achou = vetorGabarito.find((numero) => numero === numeroAposta);
      if (achou) { cont++; }
    })
    console.log(`Seu cartão de apostas foi .: \n${vetorApostas}`);
    mensagem = cont > 0 && cont < 13 ? `Vc acertou ${cont} numeros` : `Parabéns, tu foi o GANHADOR`
    if (cont === 0) { mensagem = `${cont} - Vc não acertou nenhum número !` };
    console.log(mensagem);
    console.log(`**************************************`);
    vetorApostas = [];
  }
}

const exercicio37 = () => {
  let vetorGabarito = [a, b, d, e, g, h, d, e, c, a, c, c, d, d, f, g, d, d, a, b];
  let vetorRespostas = [c, d, f, g, a, b, d, e, g, h, d, e, d, h, c, c, f, d, a, b];

  let cont = 0;

  for (let index = 0; index < 20; index++) {
    if (vetorGabarito[index] === vetorRespostas[index]) { cont++ };
  }

  for (let lin = 0; lin < matrizApostadores.length; lin++) {
    vetorApostas.push(...matrizApostadores[lin]);
    console.log(`\n**************************************`);
    console.log(`Apostador numero ${lin + 1}`);

    let cont = 0;
    vetorApostas.forEach(numeroAposta => {
      const achou = vetorGabarito.find((numero) => numero === numeroAposta);
      if (achou) { cont++; }
    })
    console.log(`Seu cartão de apostas foi .: \n${vetorApostas}`);
    mensagem = cont < 13 ? `Vc acertou ${cont} numeros` : `Parabéns, tu foi o GANHADOR`
    console.log(mensagem);
    console.log(`**************************************`);
    vetorApostas = [];
  }
}

const exercicio38 = () => {
  let vetor = [10, 3, 5, 8, 9, 67];
  let sair = false;

  while (!sair) {
    console.log(`\n1- soma dos elementos\n2- produto dos elementos\n3- média dos elementos\n4- ordene os elementos em ordem crescente\n5- mostre o vetor.`);

    const opcao = parseInt(prompt(`Digite a sua opção.: `));

    switch (opcao) {

      case 1:
        console.log(`A soma dos elementos do vetor  ${sumVetor(vetor)}`);
        sair = true;
        break;
      case 2:
        let produto = 0;
        for (i = 0; i < vetor.length; i++) {
          if (i + 1 < vetor.length) {
            produto += vetor[i] * vetor[i + 1];
          }
        }
        console.log(`O produto dos elementos do vetor  ${produto}`);
        sair = true;
        break;
      case 3:
        console.log(`A média  dos elementos do vetor  ${sumVetor(vetor / vetor.length)}`);
        console.log(sumVetor(vetor) / vetor.length);
        sair = true;
        break;
      case 4:
        const ordenado = vetor.sort((a, b) => a - b);
        console.log(`Mostrando o vetor ordenado ${ordenado}`);
        sair = true;
        break;
      case 5:
        console.log(`Mostrando o vetor original ${vetor}`);
        sair = true;
        break;
      default:
        console.log('\nOpcao inválida !');
    }
  }
}

const exercicio39 = () => {

  const vetor = [null, -5, 0, 42, null, -10, 7];
  for (let i = 7; i < 100; i++) {
    vetor[i] = Math.random() * 100 - 50; // Valores aleatórios entre -50 e 50
  }
  const vetorB = Array();
  vetor.forEach(elemento => {
    if (elemento !== null && elemento >= 0) {
      vetorB.push(elemento.toFixed(2));
    }
  });
  console.log(`\nMostrando o vetor compactado...\n${vetorB.sort((a, b) => a - b)}\n`);
}

const exercicio40 = () => {

  const vetor = [8, 44, 42, 25, 23];
  let cont = 0;
  let matrizApostadores = factoryMatriz(50, 5, 'preenche matriz');

  for (let lin = 0; lin < matrizApostadores.length; lin++) {
    const vetorApostas = matrizApostadores[lin];
    const vetorGanhador = [];
    vetor.forEach(elemento => {
      const achou = vetorApostas.find((element) => element === elemento)
      if (achou >= 0) { vetorGanhador.push(achou) }
    });
    if (vetorGanhador.length === 5) { cont++ }
  }
  const message = cont > 0 ? `${cont} ganhador encontrado !` : `não houve ganhador no concurso.`;
  console.log(message);
}

const exercicio41 = () => {

  const pessoa = {
    nome: `Rogerio corbo`,
    idade: 49
  }
  console.log(pessoa.idade);
  pessoa["email"] = `rogeriocgprest@gmail.com`;
  console.log(pessoa);
}

const exercicio42 = () => {

  const dados = {
    nome: `Rogerio corbo`,
    idade: 49,
    vetorMaterias: ['matematica', 'powerBi', 'javascript'],
    email: ''
  }

  console.log(retornaNovoObjeto(dados));

  function retornaNovoObjeto(objeto) {
    let obj = {};

    for (const propriedade in objeto) {
      if (Object.prototype.toString.call(objeto[propriedade]) === "[object Array]") {
        obj[propriedade] = objeto[propriedade]
      }
    }
    return obj;
  }
}

const exercicio43 = () => {

  const objeto1 = {
    nome: `Rogerio corbo`,
    idade: 49,
    vetorMaterias: ['matematica', 'powerBi', 'javascript'],
    email: '',
    profissao: 'Dev FullStack'
  }

  const objeto2 = {
    nome: `Rogerio corbo`,
    solteiro: false,
    vetorMaterias: ['matematica', 'powerBi', 'javascript'],
    email: ''
  }

  console.log(combinaObjetos(objeto1, objeto2));

  function combinaObjetos(objeto1, objeto2) {
    const obj = {};

    for (const propriedade in objeto1) {
      obj[propriedade] = objeto1[propriedade];
    }
    for (const key in objeto2) {
      obj[key] = objeto2[key];
    }
    return obj;
  }
}

const exercicio44 = () => {

  const dados = {
    nome: `Rogerio corbo`,
    idade: 49,
    vetorMaterias: ['matematica', 'powerBi', 'javascript'],
    email: ''
  }

  console.log(`Existe ${retornaQuantidadeString(dados)} propriedade tipo String no objeto`);

  function retornaQuantidadeString(objeto) {
    let vetor = [];

    for (const propriedade in objeto) {
      if (Object.prototype.toString.call(objeto[propriedade]) === "[object String]") {
        vetor.push(objeto[propriedade])
      }
    }
    return vetor.length;
  }
}

const exercicio45 = () => {

  const vetor = ['matematica', 'powerBi', 'javascript', 'matematica'];
  const obj = {};

  vetor.forEach(elemento => {
    const result = vetor.filter(element => element === elemento);
    obj[elemento] = result.length;
  });

  console.log(obj);
}

const exercicio46 = () => {

  const vetor = [
    { vendedor: 'Alan', valor: 100 },
    { vendedor: 'Rogerio', valor: 100 },
    { vendedor: 'Ricardo', valor: 100 },
    { vendedor: 'Alan', valor: 100 },
    { vendedor: 'Renata', valor: 100 },
    { vendedor: 'Andreza', valor: 100 },
    { vendedor: 'Sarah', valor: 100 },
    { vendedor: 'Rogerio', valor: 100 },
    { vendedor: 'Renata', valor: 100 },
    { vendedor: 'Ariadne', valor: 100 },
    { vendedor: 'Levi', valor: 100 }
  ]


  function sumarizarVendasPorVendedor(vendas) {
    const vendasPorVendedor = {};

    for (const venda of vendas) {
      const { vendedor, valor } = venda;

      if (!vendasPorVendedor[vendedor]) {
        vendasPorVendedor[vendedor] = 0;
      }

      vendasPorVendedor[vendedor] += valor;
    }

    return vendasPorVendedor;
  }

  const totalVendasPorVendedor = sumarizarVendasPorVendedor(vetor);
  console.log(totalVendasPorVendedor);
}

const exercicio47 = () => {
  function transformarObjeto(objeto, funcao) {
    const novoObjeto = {};

    for (const propriedade in objeto) {
      if (objeto.hasOwnProperty(propriedade)) {
        novoObjeto[propriedade] = funcao(objeto[propriedade]);
      }
    }

    return novoObjeto;
  }


  const meuObjeto = {
    nome: 'Alice',
    idade: 30,
    salario: 50000,
  };


  function dobra(valor) {
    if (Object.prototype.toString.call(valor) === "[object String]") {
      return valor + valor;
    }
    return valor * 2;
  }

  const objetoTransformado = transformarObjeto(meuObjeto, dobra);
  console.log(objetoTransformado);
}

const exercicio48 = () => {

  const inventarioLojaUm = {
    lapis: 10,
    borracha: 20,
    apontador: 5,
    cola: 25
  };

  const inventarioLojaDois = {
    lapis: 6,
    borracha: 2,
    apontador: 2,
    Caderno: 21,
    caneta: 2
  };

  const inventarioEstoqueTotal = transformarObjeto(inventarioLojaUm, inventarioLojaDois);
  console.log(inventarioEstoqueTotal);

}

const exercicio49 = () => {

  const transacoesFinanceira = [
    { id: 1, valor: 2350, data: new Date(), categoria: `compra mercado` },
    { id: 2, valor: 2580, data: new Date(), categoria: `compra farmacia` },
    { id: 3, valor: 23580, data: new Date(), categoria: `posto de gasolina` },
    { id: 4, valor: 880, data: new Date(), categoria: `compra feira` },
    { id: 5, valor: 580, data: new Date(), categoria: `posto de gasolina` },
    { id: 6, valor: 6580, data: new Date(), categoria: `compra amazon` },
    { id: 7, valor: 7580, data: new Date(), categoria: `compra shopping` },
    { id: 8, valor: 8580, data: new Date(), categoria: `compra mercado` },
    { id: 9, valor: 2500, data: new Date(), categoria: `compra farmacia` }
  ]

  let novoObjeto = listaDeGastosCategorizada(transacoesFinanceira)

  console.log(`\n Lista de gastos por categoria...`);
  console.log(listaDeGastosCategorizada(transacoesFinanceira));

  console.log(`\n Lista de gastos por categoria com subtotal...`);

  for (const key in novoObjeto) {
    let subTotal = 0;
    for (const valor of novoObjeto[key]) {
      subTotal += valor;
    }
    novoObjeto[key].push({ subTotal });
  }

  console.log(novoObjeto);
}

const exercicio50 = () => {

  let hoteis = [];
  const reservas = [];
  let opcao = 0;

  while (opcao !== 10) {
    console.log(`\n1 - Cadastrar hoteis.:\n2 - Listar hoteis.:\n3 - Fazer reserva.:\n4 - Cancelar Reserva.:\n5 - Listar reserva.:\n6 - CheckIn.:\n7 - Checkout.:\n8 - Relatorio ocupacao.:\n9 - Avaliar hotel.:\n10 - Sair`);
    opcao = parseInt(prompt(`Digite sua opcao.:`));

    switch (opcao) {

      case 1: cadastrarHotel();
        break;
      case 2: listaHoteisCidade();
        break;
      case 3: fazerReserva();
        break;
      case 4: cancelaReserva();
        break;
      case 5: listarReservas();
        break;
      case 6: checkIn();
        break;
      case 7: checkOut();
        break;
      case 8: relatorioOcupacao(reservas, hoteis);
        break;
      case 9: avaliacaoCliente(hoteis);
        break;
    }
  }

  function cadastrarHotel() {

    const nome = prompt(`Digite o nome do hotel.: `);
    const cidade = prompt(`Digite a cidade em que o hotel está.:`);
    const quartosTotal = parseInt(prompt(`Digite a quantidade de quartos do hotel.: `));
    let reserva = 0;
    const quartosLivres = quartosTotal - reserva;

    if (nome && cidade && quartosTotal > 1) {

      let id = hoteis.length < 1 ? 1 : hoteis[hoteis.length - 1].id + 1;
      hoteis.push({ id, nome, cidade, quartosTotal, quartosLivres });
      console.log(`Hotel cadastrado com sucesso !`);
    } else {
      console.log(`Todos os campos são obrigatórios o preeenchimento correto`);
    }

  }

  function listaHoteisCidade() {
    if (!verificaHotelReserva('', hoteis)) {
      return;
    }
    const cidade = prompt(`Digite o nome da cidade para listar hoteis disponiveis.:`).toLowerCase();
    disponibilidade = 0;
    hoteis.forEach(element => {
      if (element.cidade.toLocaleLowerCase() === cidade && element.quartosLivres > 0) {
        console.log(`Id: ${element.id} - Hotel: ${element.nome.toUpperCase()} - Cidade: ${element.cidade.toUpperCase()} - Quartos Disponiveis: ${element.quartosLivres}`);
        disponibilidade = 1;
      }
    });
    if (disponibilidade === 0) { console.log(`Não há hoteis disponíveis em ${cidade.toUpperCase()} para hospedagem `) }
  }

  function fazerReserva() {

    if (!verificaHotelReserva('', hoteis)) {
      return;
    }

    const nomeCliente = prompt(`Digite o nome do cliente .: `);
    const idHotel = parseInt(prompt(`Digite a ID do hotel que deseja se hospedar.:`));
    const temVaga = hoteis.filter(element => element.id === idHotel);
    const { quartosLivres } = temVaga[0]

    if (quartosLivres > 0) {
      let month = new Date().toDateString().split(` `)[1];
      let day = new Date().toDateString().split(` `)[2];
      let year = new Date().toDateString().split(` `)[3];

      let data = day + '/' + month + '/' + year;

      let idReserva = reservas.length < 1 ? 1 : reservas[reservas.length - 1].idReserva + 1;
      let checkout = false;
      let checkin = false;
      reservas.push({ idReserva, nomeCliente, idHotel, month, data, checkout, checkin });
      hoteis.forEach(element => {
        if (element.id === idHotel) {
          element.quartosLivres--;
        }
      })
      console.log(`reserva registrada com sucesso !`);
    } else {
      console.log(`Não há quartos disponíveis nesse momento`);
    }
  }

  function checkIn() {

    if (!verificaHotelReserva(reservas, hoteis)) {
      return;
    }

    const nomeCliente = prompt(`Digite o nome do cliente .: `).toLowerCase();
    reservas.forEach(element => {
      if (element.nomeCliente.toLowerCase() === nomeCliente) {
        element.checkin = true;
      }
    });
    console.log(`Checkin realizado com sucesso, Aproveite a estadia!`)
  }

  function checkOut() {
    if (!verificaHotelReserva(reservas, hoteis)) {
      return;
    }

    const nomeCliente = prompt(`Digite o nome do cliente .: `).toLowerCase();
    let idHotel = null;
    let verifyCheckin = true;
    reservas.forEach(element => {
      if (element.nomeCliente.toLowerCase() === nomeCliente) {
        idHotel = element.idHotel;
        if (element.checkin) {
          element.checkout = true;
        } else {
          console.log('Não é possivel fazer o checkout, pois este cliente não fez checkin !');
          verifyCheckin = false;
        }
      }
    })
    if (verifyCheckin) {
      hoteis.forEach(hotel => {
        if (hotel.id === idHotel) {
          hotel.quartosLivres++;
        }
      })
      console.log(`Obrigado por sua estadia em nosso hotel ! Volte Sempre!`)
    }
  }

  function cancelaReserva() {
    if (!verificaHotelReserva(reservas, hoteis)) {
      return;
    }

    const nomeCliente = prompt(`Digite o nome do cliente .: `).toLowerCase();
    let idHotel = null;
    let check = true;
    reservas.forEach(element => {
      if (element.nomeCliente.toLowerCase() === nomeCliente && !element.checkin) {
        idHotel = element.idHotel;
        element.checkout = true;
        check = false;
      }
    })
    hoteis.forEach(hotel => {
      if (hotel.id === idHotel) {
        hotel.quartosLivres++;
      }
    })
    if (!check) {
      console.log(`Sua reserva foi cancelada com sucesso !`);
    } else {
      console.log(`Não é possivel cancelar sua reserva, fale com a administração`);
    }

  }

  function listarReservas() {
    if (!verificaHotelReserva(reservas, hoteis)) {
      return;
    }
    let todasAsreservas = [];

    reservas.forEach(element => {
      let idHotel = element.idHotel;
      let idReserva = element.idReserva;
      let nomeCliente = element.nomeCliente;
      const hotelReservado = hoteis.filter(t => t.id === idHotel);
      let { nome, cidade, quartosTotal, quartosLivres } = hotelReservado[0];
      if (!element.checkout) {
        todasAsreservas.push({ idReserva, nomeCliente, idHotel, nome, cidade, quartosTotal, quartosLivres });
      }
    })
    console.log(...todasAsreservas)
  }

  function relatorioOcupacao(vetorReserva, vetorHotel) {
    if (!verificaHotelReserva(reservas, hoteis)) {
      return;
    }
    let vetorRelatorio = null;
    const nomeHotel = prompt(`Digite o nome do hotel para gerar um relatório de ocupação.:`).toLowerCase();
    if (nomeHotel && isNaN(nomeHotel)) {
      vetorRelatorio = vetorHotel.filter(t => t.nome === nomeHotel);
    } else {
      console.log(`Digite um nome tipo string para consulta:`);
      return
    }
    const vetorResultadoFiltroReserva = vetorReserva.filter(t => t.idHotel === vetorRelatorio[0].id);
    const quartosCheckin = vetorResultadoFiltroReserva.filter(check => check.checkin);

    let quartosUtilizados = quartosCheckin.length;
    let quartosTotais = vetorRelatorio[0].quartosTotal;
    let percentualOcupacao = (quartosUtilizados / quartosTotais) * 100;
    console.log(`\nA Taxa de ocupação do hotel no mes de ${vetorResultadoFiltroReserva[0].month} foi ${percentualOcupacao.toFixed(2)} % `);
    console.log(`Rotatividade de hospedes deste mes:`)
    console.log(`********************************************************`)
    quartosCheckin.forEach(t => {
      console.log(`${t.data}`)
    })
  }


  function avaliacaoCliente(hotel) {

    const nomeCliente = prompt(`Digite o nome do cliente .: `).toLowerCase();

    if (!verificaHotelReserva(reservas, hoteis)) {
      return;
    }

    let encontraReserva = reservas.filter(element => element.nomeCliente.toLowerCase() === nomeCliente);
    let idHotel = null;
    if (encontraReserva[0].checkin) {
      idHotel = encontraReserva[0].idHotel;
    } else {
      console.log(`Cliente não se hospedou em nenhum hotel, impossibilitado de avaliar nossos serviços ! `);
      return //hotel;
    }

    let encontraHotel = null;
    let nota = null;
    nota = parseInt(prompt(`Digite uma nota de 0 a 5 para avaliar nossos serviços.: `));
    encontraHotel = hotel.filter(h => h.id === idHotel);
    hotel.forEach(h => {
      if (h.id === encontraHotel[0].id) {
        if (Object.hasOwn(h, 'avaliacao')) {
          h.avaliacao.push(nota);
        } else {
          h['avaliacao'] = [];
          h.avaliacao.push(nota);
        }
      }
    });
    console.log(`Nota computada com sucesso em nosso sistema !`);
    hoteis = hotel;
    //return hotel;
  }
}

function listaDeGastosCategorizada(listaDeGastos) {
  const novoObjeto = {};

  listaDeGastos.forEach(transacoes => {
    const { categoria, valor } = transacoes;
    if (!novoObjeto[categoria]) {
      novoObjeto[categoria] = [];
    }
    novoObjeto[categoria].push(valor);
  })
  return novoObjeto;
}

function transformarObjeto(estoqueLojaUm, estoqueLojaDois) {

  let novoObjeto = {}
  novoObjeto = populaNovoObjeto(estoqueLojaUm, novoObjeto);
  novoObjeto = populaNovoObjeto(estoqueLojaDois, novoObjeto);

  return novoObjeto;
}

function populaNovoObjeto(objetoOriginal, novoObjeto) {
  for (const propriedade in objetoOriginal) {
    let qtdEstoque = objetoOriginal[propriedade];

    if (!novoObjeto[propriedade]) {
      novoObjeto[propriedade] = 0;
    }
    novoObjeto[propriedade] += qtdEstoque;
  }
  return novoObjeto;
}

function factoryMatriz(lin, col, popula) {
  const matriz = new Array(lin);
  for (let index = 0; index < matriz.length; index++) {
    matriz[index] = new Array(col);
  }
  if (popula) {
    populaMatrizRandom(matriz);
    return matriz;
  } else {
    return matriz;
  }
}

function verificaMinutosSegundos(vetor, mensagem) {
  if (vetor < 0 || vetor > 60) {
    console.log(`Digite uma entrada válida entre 0 e 60 ${mensagem}`);
    error = true;
  }
}

function setError(vetorHoras) {
  if (vetorHoras) {
    console.log(`Digite um horario válido entre 0h e 23h`);
  } else {
    console.log(`Digite o horário no formato HH.MM.SS`);
  }
  return true;
}

function pesoIdeal(alt, sexo) {
  if (sexo === 0) {
    return (72.7 * alt) - 58;
  } else if (sexo === 1) {
    return (62.1 * alt) - 44.7;
  }
}

function populaMatrizRandom(matriz) {
  // populando a matriz
  for (let lin = 0; lin < matriz.length; lin++) {
    for (let col = 0; col < matriz[lin].length; col++) {
      matriz[lin][col] = parseInt(Math.random() * 99) + 1;
    }
  }
  return matriz;
}

function sumVetor(vetor) {
  const sumWithInitial = vetor.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return sumWithInitial;
}

function verificaHotelReserva(reserva, hotel) {

  if (reserva && hotel) {
    if (reserva.length === 0 || hotel.length === 0) {
      console.log('Não foram encontradas reservas ou hoteis cadastrados no sistema')
      return false;
    } else {
      return true;
    }
  }
  if (!hotel) {
    if (reserva.length === 0) {
      console.log('Não foram encontrados reservas cadastradas no sistema')
      return false;
    } else {
      return true;
    }
  }
  if (!reserva) {
    if (hotel.length === 0) {
      console.log('Não foram encontrados hoteis cadastrados no sistema')
      return false;
    } else {
      return true;
    }
  }  
}


module.exports = {
  exercicio1, exercicio2, exercicio3, exercicio4, exercicio5, exercicio6, exercicio7, exercicio8,
  exercicio9, exercicio10, exercicio11, exercicio12, exercicio13, exercicio14, exercicio15, exercicio16,
  exercicio17, exercicio18, exercicio19, exercicio20, exercicio21, exercicio22, exercicio23, exercicio24,
  exercicio25, exercicio26, exercicio27, exercicio28, exercicio29, exercicio30, exercicio31, exercicio32,
  exercicio33, exercicio34, exercicio35, exercicio36, exercicio37, exercicio38, exercicio39, exercicio40,
  exercicio41, exercicio42, exercicio43, exercicio44, exercicio45, exercicio46, exercicio47, exercicio48,
  exercicio49, exercicio50
}