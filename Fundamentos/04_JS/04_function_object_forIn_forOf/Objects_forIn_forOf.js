//* Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);

  //* Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

  info.recorrente = 'Sim';

  //* Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

  for(let valor in info){
      console.log(valor);
  }

  //* Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

  