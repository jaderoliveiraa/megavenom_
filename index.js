const venom = require('venom-bot');
// const botoes = require(botoes.js);

///////////////FUNÇÕES ///////////////////////////////

function horas() {
  // Função para gerar a saudação dinâmica, de acordo com o horario
  const data = new Date();
  let horaAgora = data.getHours();
  return horaAgora;
}

function minutos() {
  // Função para gerar a saudação dinâmica, de acordo com o horario
  const data = new Date();
  let minAgora = data.getMinutes();
  return minAgora;
}

function saudacoes() {
  // Função para gerar a saudação dinâmica, de acordo com o horario
  const data = new Date();
  let hora = data.getHours();
  let str = '';
  let funcionamento = '';
  if (hora >= 0 && hora < 12) {
    str = "Bom dia";

  } else if (hora >= 12 && hora < 18) {
    str = "Boa tarde";
  } else {
    str = "Boa noite";
  }

  return str;
}

function horario() {
  // Função para gerar a saudação dinâmica, de acordo com o horario
  const data = new Date();
  let hora = data.getHours();
  let funcionamento = '';
  if (hora >= 0 && hora < 12) {
    funcionamento = 'Aberto';
  } else if (hora >= 12 && hora < 18) {
    funcionamento = 'Aberto';
  } else {
    funcionamento = 'Fechado';
  }

  return funcionamento;
}

//função que retorna o dia da semana
function diaSemana() {
  let dia = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
  let agora = new Date;
  semanal = dia[agora.getDay()];
  return semanal;
  console.log(semanal);
}

venom
  .create()
  .then((client) => start(client));

function start(client) {

  

  client.onMessage(async (msg) => {

    if (msg.isGroupMsg === false){

      if (msg.body === 'oi' || msg.body === 'Oi' || msg.body === 'OI' || msg.body === 'oie' || msg.body === 'Oie' || msg.body === 'OIE' ||
      msg.body === 'oii' || msg.body === 'Oii' || msg.body === 'OII' || msg.body === 'ola' || msg.body === 'Ola' || msg.body === 'OLA' ||
      msg.body === 'olá' || msg.body === 'Olá' || msg.body === 'OLÁ' || msg.body === 'menu' || msg.body === 'Menu' || msg.body === 'MENU' ||
      msg.body === 'menú' || msg.body === 'Menú' || msg.body === 'MENÚ' || msg.body === 'Inicio' || msg.body === 'inicio' || msg.body === 'INICIO' ||
      msg.body === 'Início' || msg.body === 'início' || msg.body === 'INÍCIO' || msg.body === 'Opa' || msg.body === 'opa' || msg.body === 'OPA' ||
      msg.body === 'Ei' || msg.body === 'ei' || msg.body === 'EI' || msg.body === 'Bom dia' || msg.body === 'bom dia' || msg.body === 'BOM DIA' ||
      msg.body === 'boa tarde' || msg.body === 'Boa tarde' || msg.body === 'BOA TARDE' || msg.body === 'Boa noite' || msg.body === 'boa noite' || msg.body === 'BOA NOITE') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*IPTV ou INTERNET"
          }
        },
        {
          "buttonText": {
            "displayText": "*SISTEMAS ou SITES"
          }
        },
        {
          "buttonText": {
            "displayText": "*OUTROS ASSUNTOS ou PIX"
          }
        },
      ]
      await client.sendButtons(msg.from, `Olá, ${saudacoes()}!`, buttons, 'Bem-vindo à *INFOTECH+*.\nSistemas e manutenção de celulares e notebooks \n\nSobre o que você quer falar?\n\nClique em um dos botões abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

      const buttons2 = [
        {
          "buttonText": {
            "displayText": "*Celulares"
          }
        },
        {
          "buttonText": {
            "displayText": "*Computadores"
          }
        },
        {
          "buttonText": {
            "displayText": "Endereço"
          }
        },
      ]
      await client.sendButtons(msg.from, `Mais opções abaixo`, buttons2, '👇👇👇')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }
     

    //******************* Enviar localização ********************************/

    if (msg.body === 'Endereço') {
      await client.sendLocation(msg.from, '-7.221664000767992', '-39.31400543333805', 'Rua Jacinto Rocha, 1577B')
    }

    //************ Celulares - *************//
    if (msg.body === '*Celulares') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*Manutenção"
          }
        },
        {
          "buttonText": {
            "displayText": "*Quero comprar um"
          }
        },
      ]
      await client.sendButtons(msg.from, `Celulares`, buttons, 'Escolha abaixo um dos botões')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    // **************** Manutenção ************************//

    if (msg.body === '*Manutenção') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "Deixei pra reparo"
          }
        },
        {
          "buttonText": {
            "displayText": "Quero reparar"
          }
        },
        {
          "buttonText": {
            "displayText": "*OUTROS ASSUNTOS"
          }
        },
      ]
      await client.sendButtons(msg.from, `Ah entendi que você quer saber sobre manutenção de celulares`, buttons, 'Escolha abaixo um dos botões')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    // ***************** Deixei pra reparo ************
    if (msg.body === 'Deixei pra reparo') {
      client.sendText(msg.from, 'Certo, agora faz assim...\nMe informa o número da *ordem de serviço*, ou seu *nome* e a *marca* e *modelo* do celular, por favor?\n\nDaí, aguarde um pouco que algum atentende irá falar com vc!');
    }
    // ***************** Quero reparar ************
    if (msg.body === 'Quero reparar') {
      client.sendText(msg.from, 'Certo, um atendente irá falar com você...\n\nVocê pode adiantar o assunto digitando a *MARCA*, *MODELO* e o *DEFEITO* do aparelho!');
    }
    // ***************** *Quero comprar um ************
    if (msg.body === '*Quero comprar um') {
      client.sendText(msg.from, 'Certo, um atendente irá falar com você...\n\nVocê tem idéia de até que valor você pretende investir em um celular?');
    }

    //***********FIM DO MENU CELULARES */


    //************ Outros assuntos ou PIX - *************//
    if (msg.body === '*OUTROS ASSUNTOS ou PIX') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*OUTROS ASSUNTOS"
          }
        },
        {
          "buttonText": {
            "displayText": "*Chave PIX"
          }
        },
      ]
      await client.sendButtons(msg.from, `Pix ou Outros assuntos`, buttons, 'Escolha abaixo um dos botões')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    //******************* Escolha uma chave PIX *******************************//
    if (msg.body === ('pix') || msg.body === ('Pix') || msg.body === ('*Chave PIX')) {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*E-mail"
          }
        },
        {
          "buttonText": {
            "displayText": "*Celular"
          }
        },
        
      ]
      await client.sendButtons(msg.from, `Que tipo de chave PIX você prefere?`, buttons, 'Escolha abaixo um dos botões')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    //******************** E-mail *****************************

    if (msg.body === ('*E-mail')) {
      client.sendText(msg.from, 'Esses são os dados do meu Pix E-mail: ');
      client.sendText(msg.from, 'pixparajader@gmail.com');
      client.sendText(msg.from, 'Nome: *Carlos Jáder da Silva Oliveira*\nBanco: *Nu Bank*');
    }

    // ******************* Celular *********************************//
    if (msg.body === ('*Celular')) {
      client.sendText(msg.from, 'Esses são os dados do meu Pix Celular: ');
      client.sendText(msg.from, '88988420622');
      client.sendText(msg.from, 'Nome: *Carlos Jáder da Silva Oliveira*\nBanco: *Nu Bank*');
    }

    // ******************* IPTV- ou INTERNET-' *******************//
    if (msg.body === '*IPTV ou INTERNET') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*IPTV"
          }
        },
        {
          "buttonText": {
            "displayText": "*INTERNET"
          }
        },
      ]
      await client.sendButtons(msg.from, `Você quer falar sobre IPTV ou Internet?`, buttons, 'Escolha abaixo um dos botões')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    // ************************ IPTV **************************//
    if (msg.body === '*IPTV') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*TESTAR OU INFORMAÇÕES"
          }
        },
        {
          "buttonText": {
            "displayText": "*ASSINAR OU RENOVAR"
          }
        },
        {
          "buttonText": {
            "displayText": "*SUPORTE OU OUTROS ASSUNTOS"
          }
        },
      ]
      await client.sendButtons(msg.from, `Ah Entendi que você quer falar sobre IPTV!`, buttons, 'Com relação à IPTV, sobre o que você quer falar?\n\nEscolha abaixo um dos botões')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    // ************************** Testar ou informações **********//
    if (msg.body === '*TESTAR OU INFORMAÇÕES') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*TESTAR IPTV"
          }
        },
        {
          "buttonText": {
            "displayText": "*INFORMAÇÕES"
          }
        },
      ]
      await client.sendButtons(msg.from, `Certo agora escolha testar ou informações`, buttons, 'Escolha abaixo um dos botões')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    // ********************* Testar IPTV ***************************//
    if (msg.body === '*TESTAR IPTV') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*JÁ FIZ O TESTE"
          }
        },
        {
          "buttonText": {
            "displayText": "*AINDA NÃO TESTEI"
          }
        },
      ]
      await client.sendButtons(msg.from, `Teste de IPTV`, buttons, 'Antes de gerar o teste preciso que você teste a qualidade do sinal de internet, baixando no seu celular, o aplicativo *BRASIL BANDA LARGA*, instala, abra, dê todas as permissões que ele vai pedir, depois clique em *INICIAR*.\n\nDaí, vc me envia o print e eu faço a análise de como está a qualidade da sua internet!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    // ******************** já fiz o teste **************************//
    if (msg.body === '*JÁ FIZ O TESTE') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*JÁ ENVIEI O PRINT"
          }
        },
      ]
      await client.sendButtons(msg.from, `Teste de qualidade de Internet`, buttons, 'Ah, Shooow...\n\nAgora faz o seguinte: Envia o print pra mim? se você já enviou, eu vou analisar aqui e já falo com vc!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    // ******************************* Já enviei o print ***************************//
    if (msg.body === ('*JÁ ENVIEI O PRINT')) {
      client.sendText(msg.from, 'Ótimo 😊, aguarda só um pouquinho enquanto analiso e envio os dados pra vc... ');
    }
    // *************************** Ainda não testei *******************************//
    if (msg.body === ('*AINDA NÃO TESTEI')) {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*JÁ FIZ O TESTE"
          }
        },
        {
          "buttonText": {
            "displayText": "*AINDA NÃO TESTEI"
          }
        },
      ]
      await client.sendButtons(msg.from, `A importância do teste!`, buttons, 'Esse teste é muito importante!\nEstou aguardando seu print com o resultado do teste pra gente saber como está a qualidade da sua internet, sem o print, o servidor não me permite gerar o teste!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }
    // ******************************* Informações IPTV **********************///
    if (msg.body === '*INFORMAÇÕES') {
      client.sendText(msg.from, 'Um único aplicativo instalado na sua smart tv, tvbox, celular ou computador, e você tem acesso o *mês inteiro* a mais de 35 mil conteúdos, por *APENAS R$30,00!*\n*É muito barato!*');
    }

    if (msg.body === '*INFORMAÇÕES') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*TESTAR IPTV"
          }
        },
        {
          "buttonText": {
            "displayText": "*OUTRA HORA"
          }
        },
      ]
      await client.sendButtons(msg.from, `Informações`, buttons, 'Escolha um dos botões abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    if (msg.body === 'OUTRA HORA-') {
      client.sendText(msg.from, 'Puxa, é uma pena você não poder testar agora... 😢😢😢, mas quando precisar, lembre-se de que estou sempre aqui, basta dizer oi!');
    }

    // **************** Assinar ou renovar, tanto pra IPTV quanto pra internet *******************//
    if (msg.body === '*ASSINAR OU RENOVAR') {

      const buttons = [
        {
          "buttonText": {
            "displayText": "*ASSINAR"
          }
        },
        {
          "buttonText": {
            "displayText": "*RENOVAR"
          }
        },
      ]
      await client.sendButtons(msg.from, `Assinar ou Renovar?`, buttons, 'Escolha uma das duas opções abaixo, para assinar ou renovar sua assinatura!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }

    if (msg.body === '*ASSINAR' || msg.body === '*RENOVAR') {
      client.sendText(msg.from, 'Ah legal, você precisa fazer um pix e em seguida me enviar o comprovante para eu enviar pro servidor e o sinal é liberado logo em seguida!');
    }
    if (msg.body === '*ASSINAR' || msg.body === '*RENOVAR') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*E-mail"
          }
        },
        {
          "buttonText": {
            "displayText": "*Celular"
          }
        },
      ]
      await client.sendButtons(msg.from, `Que Iipo de chave você prefere?`, buttons, 'E-mail ou Celular???')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }

    // ****************** Suporte ou outros assuntos **************************//
    if (msg.body === '*SUPORTE OU OUTROS ASSUNTOS') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*SUPORTE"
          }
        },
        {
          "buttonText": {
            "displayText": "*OUTROS ASSUNTOS"
          }
        },
      ]
      await client.sendButtons(msg.from, `Suporte ou Outros assuntos`, buttons, 'Escolha uma das duas opções abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    if (msg.body === '*SUPORTE') {

      const buttons = [
        {
          "buttonText": {
            "displayText": "*NÃO ABRE"
          }
        },
        {
          "buttonText": {
            "displayText": "*TRAVANDO"
          }
        },
        {
          "buttonText": {
            "displayText": "*ESQUECI A SENHA"
          }
        },
      ]
      await client.sendButtons(msg.from, `Suporte`, buttons, 'Me diga o que está acontecendo?\n\nBasta clicar em um dos botões abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }

    if (msg.body === '*NÃO ABRE' || msg.body === '*TRAVANDO') {

      client.sendText(msg.from, 'Vamos fazer o seguinte procedimento: \n\nRetira da tomada o roteador, a tv e o tvbox(se tiver), espera 30 segundos e liga novamente, dai vc testa e me informa se deu certo, beleza?\n\n');

      const buttons = [
        {
          "buttonText": {
            "displayText": "*SIM, DEU CERTO"
          }
        },
        {
          "buttonText": {
            "displayText": "*NÃO RESOLVEU"
          }
        },
      ]
      await client.sendButtons(msg.from, `Suporte`, buttons, 'Resolveu o Problema??\n\nBasta clicar em um dos botões abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }
    if (msg.body == '*SIM, DEU CERTO') {
      client.sendText(msg.from, 'Ah sim , show de bola, quando precisar, basta você me chamar aqui e digitar um oi!');
    }

    if (msg.body == '*NÃO RESOLVEU') {
      client.sendText(msg.from, 'Sério? Mas blz, não se preocupe, vou lhe encaminhar para um humano concluir o atendimento!, aguarde só um momento!');
    }
    if (msg.body == '*NÃO RESOLVEU') {
      client.sendText(msg.from, 'Ah, se ele demorar um pouco pra atender, manda mensagem novamente, mas não ligue nem envie audio, o whatsapp do suporte não recebe chamadas!');
    }

    if (msg.body == '*OUTROS ASSUNTOS') {
      client.sendText(msg.from, 'Ahhh beleza então, vou lhe encaminhar para um humano concluir o atendimento!, aguarde só um momento!');
    }

    if (msg.body == '*OUTROS ASSUNTOS') {
      client.sendText(msg.from, 'Ah, se ele demorar um pouco pra atender, manda mensagem novamente, mas não ligue nem envie audio, o whatsapp do suporte não recebe chamadas!');
    }

    ////////////////**************************************FIM DO IPTV */

    //////////////// *********************************** INICIO INTERNET **********************///
    if (msg.body === '*INTERNET') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*TESTAR INTERNET"
          }
        },
        {
          "buttonText": {
            "displayText": "*ASSINAR OU RENOVAR"
          }
        },
        {
          "buttonText": {
            "displayText": "*SUPORTE INTERNET"
          }
        },
      ]
      await client.sendButtons(msg.from, `Menu de Internet`, buttons, 'Legal, com relação à internet, eu tenho essas opções abaixo...')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    /// ******************** testar internet *********************** //
    if (msg.body === '*TESTAR INTERNET') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*ANDROID"
          }
        },
        {
          "buttonText": {
            "displayText": "*IPHONE"
          }
        },
      ]
      await client.sendButtons(msg.from, `Teste de Internet`, buttons, 'Você utiliza celular com Android ou é Iphone?')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    // ************************* ANDROID ************************ //
    if (msg.body === '*ANDROID') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*JÁ INSTALEI"
          }
        },
        {
          "buttonText": {
            "displayText": "*NÃO CONSEGUI INSTALAR"
          }
        },
      ]
      await client.sendButtons(msg.from, `Teste de Internet no Android`, buttons, 'Tá certo,  primeiro você precisa baixar nosso aplicativo clicando no link abaixo:\nhttps://rev.plusbrasil.net.br/app/4G%20NET.apk\n\nQuando instalar me avisa, dai eu crio o teste pra você! 😁')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    // ******************* TESTE iPHONE **************************
    if (msg.body === '*IPHONE') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*JÁ INSTALEI"
          }
        },
        {
          "buttonText": {
            "displayText": "*NÃO CONSEGUI INSTALAR"
          }
        },
      ]
      await client.sendButtons(msg.from, `Teste de Internet no Android`, buttons, 'Tá certo,  primeiro você precisa ir na sua Apple Store e baixar um aplicativo chamado FAIR VPN ou pode clicar no link abaixo:\nhttps://apps.apple.com/br/app/fair-vpn/id1533873488\n\nQuando instalar me avisa, dai eu crio o teste pra você! 😁\n\nAh, outra coisa, internet ilimitada no iphone, funciona apenas com a operadora VIVO, Tá certo?')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    // *************** instalou ou não conseguiu instalar *****************//
    if (msg.body === '*JÁ INSTALEI') {


      client.sendText(msg.from, 'Tá certo,  aguarde só um pouquinho que eu já envio pra vc os dados para teste! 😁');

    }

    if (msg.body === '*NÃO CONSEGUI INSTALAR') {


      client.sendText(msg.from, 'Puxa,  mas tudo bem, aguarde só um pouco que eu já falo com você! 😁');

    }

    // *********************** SUPORTE INTERNET *************************//
    if (msg.body === '*SUPORTE INTERNET') {

      const buttons = [
        {
          "buttonText": {
            "displayText": "*NÃO ABRE NADA"
          }
        },
        {
          "buttonText": {
            "displayText": "*INTERNET LENTA"
          }
        },
        {
          "buttonText": {
            "displayText": "*ESQUECI A SENHA"
          }
        },
      ]
      await client.sendButtons(msg.from, `Suporte`, buttons, 'Pra eu lhe orientar melhor, diga o que está acontecendo?\n\nBasta clicar em um dos botões abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }
    // ***************** INTERNET NÃO ABRE NADA
    if (msg.body === '*NÃO ABRE NADA') {

      client.sendText(msg.from, 'Vamos fazer o seguinte procedimento: \n\nAtiva o modo avião, reinicia o celular, em seguida desativa o modo avião, desativa a wi-fi, liga os dados móveis e conecta a internet ilimitada, dai vc testa e me informa se deu certo, beleza?\n\n');

    }
    if (msg.body === '*NÃO ABRE NADA') {
      const buttons = [
        {
          "buttonText": {
            "displayText": "*SIM, DEU CERTO"
          }
        },
        {
          "buttonText": {
            "displayText": "*NÃO RESOLVEU"
          }
        },
      ]
      await client.sendButtons(msg.from, `Suporte`, buttons, 'Resolveu o Problema??\n\nBasta clicar em um dos botões abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }

    if (msg.body === '*INTERNET LENTA') {

      client.sendText(msg.from, 'Ah ta, entendi...\nMas é o seguinte, quando a internet está lenta, o problema na verdade é com a operadora, nosso aplicativo apenas burla o bloqueio da operadora, mas não acelera nem fornece internet!')
    }

    if (msg.body === '*ESQUECI A SENHA') {

      client.sendText(msg.from, 'Certo, sem problemas, aguarde um momento que já já lhe informo seus dados de acesso! 👍')
    }

    // ----------------------- fim do menu de suporte da internet ------------------------- //

    // ---------------------- -sites ou sistemas ------------------------// 

    if (msg.body == '*SISTEMAS ou SITES') {

      const buttons = [
        {
          "buttonText": {
            "displayText": "*SISTEMAS"
          }
        },
        {
          "buttonText": {
            "displayText": "*SITES"
          }
        },
      ]
      await client.sendButtons(msg.from, `Sistemas ou Sites`, buttons, 'Certo! você quer falar sobre sistemas ou sobre sites?\n\nBasta clicar em um dos botões abaixo!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });

    }

    if (msg.body === '*SISTEMAS' || msg.body === '*SITES') {

      client.sendText(msg.from, 'Show de bola!\nVou lhe transferir para um atendimento personalizado, aguarde um pouco que logo alguem irá te atender!');
    }

    }else{
  
    }
    



  });

}