async function enviarScript(scriptText) {
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);

    function getMain() {
        return document.querySelector('div#main')
            || [...document.querySelectorAll('[id="main"]')].find(el => el.tagName === 'DIV');
    }

    const main = getMain();
    if (!main) throw new Error("Não há uma conversa aberta");

    function getTextarea() {
        // data-tab="10" + data-lexical-editor="true" é o campo de mensagem confirmado
        return document.querySelector('div[contenteditable="true"][data-tab="10"][data-lexical-editor="true"]')
            || document.querySelector('div[contenteditable="true"][data-tab="10"]')
            || main.querySelector('div[contenteditable="true"][data-lexical-editor="true"]')
            || main.querySelector('div[contenteditable="true"]');
    }

    function getSendButton() {
        return main.querySelector('[data-testid="send"]')
            || main.querySelector('[data-icon="send"]')
            || main.querySelector('button[aria-label="Enviar"]')
            || main.querySelector('button[aria-label="Send"]');
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function enviarLinha(text) {
        const textarea = getTextarea();
        if (!textarea) throw new Error("Campo de texto não encontrado");

        textarea.focus();
        textarea.innerHTML = '';

        document.execCommand('insertText', false, text);

        textarea.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertText', data: text }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        await sleep(300);

        const enterDown = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true });
        const enterUp   = new KeyboardEvent('keyup',   { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true });

        textarea.dispatchEvent(enterDown);
        textarea.dispatchEvent(enterUp);

        await sleep(150);

        if (textarea.innerText.trim().length > 0) {
            const btn = getSendButton();
            if (btn) btn.click();
        }

        await sleep(300);
    }

    let enviadas = 0;
    for (const line of lines) {
        console.log(`[${enviadas + 1}/${lines.length}] ${line}`);
        await enviarLinha(line);
        enviadas++;
    }

    return enviadas;
}

enviarScript(`
BEE MOVIE - A HISTÓRIA DE UMA ABELHA
De acordo com todas as leis conhecidas da aviação, não há como uma abelha conseguir voar.
Suas asas são pequenas demais para tirar seu corpinho gordo do chão.
A abelha, é claro, voa assim mesmo, porque abelhas não ligam para o que os humanos acham impossível.
Amarelo, preto. Amarelo, preto. Amarelo, preto. Amarelo, preto.
Oh, preto e amarelo!
Vamos agitar um pouco isso.
Barry! O café da manhã está pronto!
Já vou!
Espera um segundo.
Alô?
Barry?
Adam?
Você acredita que isso está acontecendo?
Não consigo acreditar.
Eu te pego.
Que visual!
Use as escadas. Seu pai pagou caro por elas.
Desculpe. Estou animado.
Aqui está o formando.
Estamos muito orgulhosos de você, filho.
Um boletim perfeito, cheio de Bs.
Muito orgulhoso.
Mãe! Tenho uma coisa aqui.
Você tem fiapo no fuzz.
Ai! Isso sou eu!
Acene para nós! Estaremos na fila 118.000.
Tchau!
Barry, eu disse, para de voar dentro de casa!
Ei, Adam.
Ei, Barry.
É gel de fuzz?
Um pouco. Dia especial, formatura.
Nunca pensei que chegaria aqui.
Três dias no jardim, três dias no fundamental.
Esses foram constrangedores.
Três dias na faculdade. Fico feliz de ter tirado um dia para fazer carona pela Colmeia.
Você voltou diferente.
Oi, Barry. Artie, crescendo um bigode? Ficou bom.
Ouviu falar do Frankie?
Sim.
Vai ao funeral?
Não, não vou.
Todo mundo sabe, ferroar alguém, você morre.
Não desperdice com um esquilo.
Cabeça quente.
Acho que ele poderia ter saído do caminho.
Adoro isso de incorporar um parque de diversões ao nosso dia.
É por isso que não precisamos de férias.
Bom, bastante pompa nessas circunstâncias.
Bem, Adam, hoje somos homens.
Somos!
Homens-abelha.
Amém!
Aleluia!
Alunos, corpo docente, abelhas distintas,
sejam bem-vindos ao Diretor Buzzwell.
Bem-vindos, turma de formandos de Cidade Nova Colmeia, às 9h15.
Isso conclui nossas cerimônias e inicia sua carreira na Honex!
Vamos escolher nosso trabalho hoje?
Ouvi dizer que é só orientação.
Atenção! Lá vamos nós.
Mantenham as mãos e antenas dentro do bonde o tempo todo.
Como será?
Um pouco assustador.
Bem-vindos à Honex, uma divisão da Honesco e parte do Grupo Hexágono.
É isso!
Uau.
Uau.
Sabemos que você, como abelha, trabalhou a vida toda para chegar ao ponto em que pode trabalhar a vida toda.
O mel começa quando nossos valorosos Coletores de Pólen trazem o néctar para a Colmeia.
Nossa fórmula ultrassecreta é automaticamente corrigida na cor, ajustada no aroma e modelada em bolhas neste xarope suave e doce com seu brilho dourado característico que você conhece como... Mel!
Aquela garota era quente.
Ela é minha prima!
É?
Sim, somos todos primos.
Certo. Você tem razão.
Na Honex, nos esforçamos constantemente para melhorar cada aspecto da existência das abelhas.
Essas abelhas estão testando uma nova tecnologia de capacete.
Quanto você acha que ele ganha?
Não o suficiente.
Aqui temos nosso mais recente avanço, o Krelman.
O que ele faz?
Captura aquele fio de mel que escorre depois que você derrama.
Nos economiza milhões.
Qualquer um pode trabalhar no Krelman?
Claro. A maioria dos trabalhos de abelhas são pequenos.
Mas as abelhas sabem que todo trabalho pequeno, se bem feito, significa muito.
Mas escolha com cuidado porque você ficará no trabalho que escolher pelo resto da vida.
O mesmo trabalho pelo resto da vida? Não sabia disso.
Qual é a diferença?
Terá prazer em saber que as abelhas, como espécie, não tiveram um dia de folga em 27 milhões de anos.
Então vão nos trabalhar até a morte?
Vamos tentar com certeza.
Uau! Isso explodiu minha mente!
"Qual é a diferença?"
Como você pode dizer isso?
Um trabalho para sempre?
Essa é uma escolha insana a se fazer.
Estou aliviado. Agora só precisamos tomar uma decisão na vida.
Mas, Adam, como eles nunca nos contaram isso?
Por que você questionaria qualquer coisa? Somos abelhas.
Somos a sociedade que funciona mais perfeitamente na Terra.
Você já pensou que talvez as coisas funcionem bem demais aqui?
Como assim? Me dê um exemplo.
Não sei. Mas você sabe do que estou falando.
Por favor, limpem o portão. Força Real do Néctar se aproximando.
Espera um segundo. Olha isso.
Ei, são os Coletores de Pólen!
Uau.
Nunca os vi tão de perto.
Eles sabem como é lá fora da Colmeia.
Sim, mas alguns não voltam.
Ei, Coletores!
Oi, Coletores!
Vocês foram ótimos!
Vocês são monstros!
São malucos do céu! Adoro! Adoro!
Onde eles estavam?
Não sei.
O dia deles não é planejado.
Fora da Colmeia, voando sabe-se lá onde, fazendo sabe-se lá o quê.
Você não pode simplesmente decidir ser um Coletor de Pólen. Tem que nascer para isso.
Certo.
Olha. Há mais pólen do que você e eu veremos na vida toda.
É só um símbolo de status.
As abelhas exageram nisso.
Talvez. A menos que você esteja usando e as damas te vejam usando.
Aquelas damas?
Elas não são nossas primas também?
Distantes. Distantes.
Olha esses dois.
Um par de Harrys da Colmeia.
Vamos nos divertir com eles.
Deve ser perigoso ser um Coletor de Pólen.
Sim. Uma vez um urso me encurralou contra um cogumelo!
Ele tinha uma pata na minha garganta, e com a outra, estava me esbofeteando!
Oh, meu!
Nunca pensei que o derrubaria.
O que você estava fazendo durante isso?
Tentando alertar as autoridades.
Posso autografar isso.
Estava um pouco ventoso lá fora hoje, não estava, camaradas?
Sim. Ventoso.
Vamos atingir uma plantação de girassóis a seis quilômetros daqui amanhã.
Seis quilômetros, hein?
Barry!
Um salto em poça para nós, mas talvez você não esteja pronto.
Talvez eu esteja.
Você não está!
Vamos às 9h no Portão J.
O que você acha, garoto-zumbido?
Você é abelha o suficiente?
Talvez seja. Tudo depende do que 9h significa.
Ei, Honex!
Pai, você me surpreendeu.
Decidiu no que está interessado?
Bem, há muitas escolhas.
Mas você só tem uma.
Você já se entedia fazendo o mesmo trabalho todo dia?
Filho, deixa eu te contar sobre mexer.
Você pega aquele palito, e apenas o move em volta, e mexe em volta.
Você entra em um ritmo.
É uma coisa linda.
Sabe, pai, quanto mais penso nisso,
talvez o campo do mel não seja certo para mim.
Você estava pensando em quê, fazer animais de balão?
Esse é um trabalho ruim para um cara com ferrão.
Janet, seu filho não tem certeza se quer trabalhar com mel!
Barry, você é muito engraçado às vezes.
Não estou tentando ser engraçado.
Você não é engraçado! Você vai trabalhar com mel. Nosso filho, o mexedor!
Você vai ser um mexedor?
Ninguém está me ouvindo!
Espera para ver os palitos que tenho.
Poderia dizer qualquer coisa agora.
Vou fazer uma tatuagem de formiga!
Vamos abrir um mel e celebrar!
Talvez eu fure meu tórax. Raspar minhas antenas. Me ajuntar com um gafanhoto. Colocar um dente de ouro e chamar todo mundo de "parça"!
Estou tão orgulhoso.
Estamos começando a trabalhar hoje!
Hoje é o dia.
Vamos! Todos os bons empregos vão acabar.
É, claro.
Contagem de pólen, abelha acrobática, derramamento, mexedor, recepção, remoção de pelos...
Ainda está disponível?
Espera. Sobrou dois!
Um deles é seu! Parabéns!
Passe para o lado.
O que você conseguiu?
Retirar sujeira. Excelente!
Uau!
Um par de novatos?
Sim, senhor! Nosso primeiro dia! Estamos prontos!
Faça sua escolha.
Quer ir primeiro?
Não, você vai.
Oh, meu. O que está disponível?
Atendente de banheiro disponível, não pelo motivo que você pensa.
Alguma chance de conseguir o Krelman?
Claro, você está escalado.
Me desculpe, o Krelman acabou de fechar.
O macaco de cera está sempre aberto.
O Krelman abriu novamente.
O que aconteceu?
Uma abelha morreu. Abre uma vaga. Veja? Ela está morta. Mais uma morta.
Mortinha. Mortificada. Mais duas mortas.
Morta do pescoço para cima. Morta do pescoço para baixo. Isso é a vida!
Oh, isso é tão difícil!
Aquecimento, resfriamento, abelha acrobática, derramamento, mexedor, zumbido, inspetor número sete, coordenador de fiapo, supervisor de listras, domador de ácaros.
Barry, o que você acha que eu deveria... Barry?
Barry!
Tudo bem, temos a plantação de girassóis no quadrante nove...
O que aconteceu com você?
Onde você está?
Estou saindo.
Saindo? Sair para onde?
Lá fora.
Não!
Preciso, antes de ir trabalhar pelo resto da minha vida.
Você vai morrer! Você é louco! Alô?
Outra ligação chegando.
Se alguém estiver se sentindo corajoso, há uma floricultura na 83ª que recebe suas rosas hoje.
Ei, pessoal.
Olha isso.
Não é o garoto que vimos ontem?
Espere, filho, o deck de voo é restrito.
Tudo bem, Lou. Vamos levá-lo.
Sério? Sentindo sorte, está?
Assine aqui, aqui. Só coloque as iniciais ali.
Obrigado.
Ok.
Há um aviso de chuva hoje, e como todos sabem, abelhas não podem voar na chuva.
Então cuidado. Como sempre, atenção às vassouras, tacos de hóquei, cães, pássaros, ursos e morcegos.
Também recebi alguns relatórios de cerveja de raiz sendo derramada em nós.
Murphy está num asilo por causa disso, falando como uma cigarra!
Que horror.
E um lembrete para os novatos, lei das abelhas número um, absolutamente nenhuma conversa com humanos!
Tudo bem, posições de lançamento!
Zum, zum, zum, zum! Zum, zum, zum, zum! Zum, zum, zum, zum!
Preto e amarelo!
Olá!
Pronto para isso, craque?
Sim. Sim, pode vir.
Vento, verificado.
Antenas, verificadas.
Mochila de néctar, verificada.
Asas, verificadas.
Ferrão, verificado.
Apavorado nas calças, verificado.
Ok, senhoras,
vamos lá!
Socam essas petúnias, sugadores de caule listrado!
Todos vocês, drenem essas flores!
Uau! Estou fora!
Não acredito que estou fora!
Tão azul.
Me sinto tão rápido e livre!
Pipa!
Uau!
Flores!
Aqui é o Líder Azul. Temos rosas à vista.
Gire 30 graus e segure.
Rosas!
30 graus, entendido. Girando agora.
Fique de lado, garoto.
Isso tem um certo coice.
Que coletor de néctar!
Já viu a polinização de perto?
Não, senhor.
Pego um pouco de pólen aqui, polvilho por aqui. Talvez um toque por ali, uma pitada nessa.
Viu isso? É um pouco de magia.
Que incrível. Por que fazemos isso?
É o poder do pólen. Mais pólen, mais flores, mais néctar, mais mel para nós.
Legal.
Estou captando muito amarelo brilhante. Podem ser margaridas. Não precisamos delas?
Cópia visual.
Espera. Uma dessas flores parece estar se movendo.
Repita? Você está relatando uma flor em movimento?
Afirmativo.
Isso foi no limite!
Isso é o mais legal. O que é isso?
Não sei, mas estou adorando essa cor.
Cheira bem.
Não como uma flor, mas eu gosto.
Sim, felpudo.
Com produtos químicos.
Cuidado, pessoal. Está um pouco agarrento.
Meu doce senhor das abelhas!
Cérebro-de-doce, saia daí!
Problema!
Pessoal!
Isso pode ser ruim.
Afirmativo.
Muito perto.
Vai doer.
O garotinho da mamãe.
Você está muito fora de posição, novato!
Vindo em você como um míssil!
Me ajudem!
Não acho que essas são flores.
Devemos contar para ele?
Acho que ele sabe.
O que é isso?!
Ponto de partida!
Você pode começar a fazer as malas, querida, porque está prestes a comer poeira!
Ai!
Que nojo.
Tem uma abelha no carro!
Faça alguma coisa!
Estou dirigindo!
Oi, abelha.
Ele está aqui atrás!
Ele vai me ferroar!
Ninguém se mova. Se você não se mover, ele não vai te ferroar. Congele!
Ele piscou!
Borrife nele, Vovó!
O que você está fazendo?!
Uau... o nível de tensão aqui é inacreditável.
Preciso ir para casa.
Não posso voar na chuva. Não posso voar na chuva. Não posso voar na chuva.
Mayday! Mayday! Abelha caindo!
Ken, pode fechar a janela, por favor?
Ken, pode fechar a janela, por favor?
Olha meu novo currículo. Transformei em um folheto dobrável. Veja? Dobra.
Oh, não. Mais humanos. Não preciso disso.
O que foi aquilo?
Talvez dessa vez. Dessa vez. Dessa vez. Dessa vez! Dessa vez! Essa... Cortinas!
Isso é diabólico.
É fantástico. Tem todas as minhas habilidades especiais, até meus dez filmes favoritos.
Qual é o número um? Guerra nas Estrelas?
Não, não gosto muito desse... tipo de coisa.
Não é à toa que não devemos falar com eles. Estão fora da cabeça.
Quando saio de uma entrevista de emprego, eles ficam boquiabertos, não acreditam no que digo.
Lá está o sol. Talvez seja uma saída.
Não me lembro do sol ter um 75 enorme.
Previ o aquecimento global. Podia sentir ficando mais quente. A princípio pensei que era só eu.
Espera! Para! Abelha!
Recue. Essas são botas de inverno.
Espera!
Não mate ele!
Você sabe que sou alérgico a eles! Essa coisa pode me matar!
Por que a vida dele tem menos valor que a sua?
Por que a vida dele tem menos valor que a minha? É isso que você está dizendo?
Só estou dizendo que toda vida tem valor. Você não sabe do que ele é capaz de sentir.
Meu folheto!
Lá vai você, pequenino.
Não tenho medo dele. É uma coisa alérgica.
Coloque isso no seu folheto currículo.
Meu rosto inteiro pode inchar.
Torne isso uma de suas habilidades especiais.
Nocautear alguém também é uma habilidade especial.
Certo. Tchau, Vanessa. Obrigado.
Vanessa, semana que vem? Noite do iogurte?
Claro, Ken. Sabe, tanto faz.
Você pode colocar chips de alfarroba lá.
Tchau.
Supostamente tem menos calorias.
Tchau.
Preciso dizer algo. Ela salvou minha vida. Preciso dizer algo.
Tudo bem, lá vai.
Não.
O que eu diria?
Posso me meter em apuros de verdade. É uma lei das abelhas. Não se deve falar com um humano.
Não acredito que estou fazendo isso. Preciso.
Oh, não consigo. Vai lá!
Não. Sim. Não. Faz isso. Não consigo.
Como devo começar? "Você gosta de jazz?" Não, isso não presta.
Ela está chegando! Fale, seu tolo!
Oi!
Desculpe. Você está falando.
Sim, eu sei.
Você está falando!
Sinto muito.
Não, tudo bem. Tudo bem.
Sei que estou sonhando. Mas não me lembro de ter ido dormir.
Bem, tenho certeza que isso é muito desconcertante.
É uma pequena surpresa para mim. Quer dizer, você é uma abelha!
Sou. E não deveria estar fazendo isso, mas eles estavam todos tentando me matar.
E se não fosse por você... Tive que agradecer. É só como fui criado.
Isso foi um pouco estranho. Estou falando com uma abelha.
É.
Estou falando com uma abelha. E a abelha está falando comigo!
Só quero dizer que sou grato.
Vou embora agora.
Espera! Como você aprendeu a fazer isso?
O quê?
A coisa de falar.
Do mesmo jeito que você, acho. "Mamãe, papai, mel." Você aprende.
Isso é muito engraçado.
É.
Abelhas são engraçadas. Se não ríssemos, choraríamos com o que temos que lidar.
De qualquer forma... Posso te oferecer algo?
Como o quê?
Não sei. Quer dizer... Não sei. Café?
Não quero te incomodar.
Não é problema. Leva dois minutos.
É só café.
Odeio impor.
Não seja ridículo!
Na verdade, adoraria uma xícara.
Ei, quer bolo de rum?
Não deveria.
Coma um pouco.
Não, não consigo.
Vai lá!
Estou tentando perder uns microgramas.
Onde?
Essas listras não ajudam.
Você está ótimo!
Não sei se você entende algo sobre moda.
Você está bem?
Não.
Ele está fazendo o laço no táxi enquanto voam pela Madison.
Ele finalmente chega.
Ele sobe os degraus e entra na igreja.
O casamento está acontecendo.
E ele diz: "Melancia?"
"Achei que você tinha dito guatemalteca.
Por que eu me casaria com uma melancia?"
Isso é uma piada de abelha?
É o tipo de coisa que fazemos.
É, diferente.
Então, o que você vai fazer, Barry?
Sobre o trabalho? Não sei.
Quero fazer minha parte pela Colmeia, mas não consigo do jeito que eles querem.
Sei como você se sente.
Sabe?
Claro.
Meus pais queriam que eu fosse advogada ou médica, mas eu queria ser florista.
Sério?
Meu único interesse é flores.
Nossa nova rainha foi eleita com o mesmo slogan de campanha.
De qualquer forma, se você olhar... Ali está minha colmeia. Vê?
Você está no Sheep Meadow!
Sim! Fico perto do Turtle Pond!
Não acredito! Conheço aquela área. Perdi um anel de dedo do pé lá uma vez.
Por que as meninas colocam anéis nos dedos dos pés?
Por que não?
É como colocar um chapéu no joelho.
Talvez eu tente isso.
Você está bem, senhora?
Oh, sim. Tudo bem.
Só tomando duas xícaras de café!
De qualquer forma, isso foi ótimo.
Obrigado pelo café.
Sim, não foi problema.
Desculpa não ter terminado. Se terminasse, ficaria acordado o resto da vida.
Você está...?
Posso levar um pedaço disso comigo?
Claro! Aqui, pegue uma migalha.
Obrigado!
É.
Tudo bem. Então... Acho que te vejo por aí. Ou não.
Ok, Barry.
E muito obrigado de novo... por antes.
Oh, aquilo? Não foi nada.
Bem, não foi nada, mas... De qualquer forma...
Isso não pode funcionar de jeito nenhum.
Ele está pronto para ir.
Podemos muito bem tentar.
Ok, Dave, puxa o paraquedas.
Parece incrível.
Foi incrível!
Foi o momento mais assustador e mais feliz da minha vida.
Humanos! Não acredito que você estava com humanos!
Humanos gigantes e assustadores!
Como eram eles?
Enormes e loucos. Falam loucamente.
Comem coisas gigantes e loucas.
Dirigem de forma louca.
Eles tentam te matar, como na TV?
Alguns deles. Mas alguns não.
Como você voltou?
Poodle.
Você fez e estou feliz. Você viu o que queria ver.
Você teve sua "experiência." Agora pode escolher seu trabalho e ser normal.
Bem...
Bem?
Bem, conheci alguém.
Conheceu? Era uma Abelha?
Uma vespa?! Seus pais vão te matar!
Não, não, não, não é uma vespa.
Aranha?
Não sou atraído por aranhas.
Sei que é a coisa mais quente, com as oito pernas e tudo. Não consigo passar daquele rosto.
Então quem é ela?
Ela é... humana.
Não, não. Isso é uma lei das abelhas. Você não quebraria uma lei das abelhas.
O nome dela é Vanessa.
Meu Deus.
Ela é tão legal. E é florista!
Não! Você está namorando uma florista humana!
Não estamos namorando.
Você está voando fora da Colmeia, falando com humanos que atacam nossas casas com lavadoras de alta pressão e M-80s! Um oitavo de dinamite!
Ela salvou minha vida! E ela me entende.
Acabou!
Come isso.
Não acabou! O que foi aquilo?
Chamam de migalha.
Era tão listrada!
E não é o que eles comem.
É o que cai do que eles comem!
Você sabe o que é um Cinnabon?
Não.
É pão com canela e cobertura. Eles esquentam...
Senta!
...bem quente!
Me ouça!
Não somos eles! Somos nós.
Há nós e há eles!
Sim, mas quem pode negar o coração que anseia?
Não há anseio. Para de ansear. Me ouça!
Você precisa começar a pensar como abelha, meu amigo. Pensa como abelha!
Pensa como abelha.
Pensa como abelha.
Pensa como abelha! Pensa como abelha! Pensa como abelha! Pensa como abelha!
Lá está ele. Ele está na piscina.
Você sabe qual é o seu problema, Barry?
Preciso começar a pensar como abelha?
Quanto tempo mais isso vai durar?
Já faz três dias! Por que você não está trabalhando?
Tenho muitas grandes decisões de vida para pensar.
Que vida? Você não tem vida!
Você não tem trabalho. Mal é uma abelha!
Seria tão difícil fazer um pouco de mel?
Barry, sai daí. Seu pai está falando com você.
Martin, você pode falar com ele?
Barry, estou falando com você!
Está vindo?
Pegou tudo?
Pronto!
Vai. Te alcanço.
Não demore muito.
Veja isso!
Vanessa!
Ainda estamos aqui.
Disse para você não gritar com ele.
Ele não responde a gritos!
Então por que grita comigo?
Porque você não me ouve!
Não estou ouvindo isso.
Desculpa, preciso ir.
Para onde você vai?
Encontrar um amigo.
Uma garota? É por isso que não consegue decidir?
Tchau.
Espero apenas que ela seja uma Abelha.
Eles têm um desfile enorme de flores todo ano em Pasadena?
Estar no Torneio das Rosas é o sonho de todo florista!
Em cima de um carro alegórico, cercada de flores, multidões torcendo.
Um torneio. As rosas competem em eventos atléticos?
Não. Tudo bem, tenho uma.
Por que você não voa para todo lugar?
É cansativo. Por que você não corre para todo lugar? É mais rápido.
Sim, ok, entendo, entendo.
Tudo bem, sua vez.
TiVo. Você pode congelar a TV ao vivo? Que loucura!
Você não tem isso?
Temos Hivo, mas é uma doença. É uma doença horrível e terrível.
Oh, meu.
Abelhas idiotas!
Deve querer ferroar todos esses babacas.
Tentamos não ferroar. Geralmente é fatal para nós.
Então você tem que controlar seu temperamento.
Com muito cuidado.
Você chuta uma parede, dá uma caminhada, escreve uma carta furiosa e a joga fora. Trabalhe nisso como qualquer emoção: Raiva, ciúme, desejo.
Oh, meu Deus! Você está bem?
É.
O que há de errado com você?!
É um inseto.
Ele não está incomodando ninguém.
Sai daqui, seu parasita!
O que foi aquilo? Um folheto do Pic 'N' Save?
Sim, era. Como você sabia?
Pareceu ter umas 10 páginas. Setenta e cinco é praticamente nosso limite.
Você realmente dominou isso como uma ciência.
Perdi um primo para a Vogue italiana.
Aposto.
Em nome do poderoso Hércules, o que é isso?
Como isso chegou aqui? Abelha fofa, Flor Dourada, Ray Liotta Seleção Privada?
Ele é aquele ator?
Nunca ouvi falar dele.
Por que isso está aqui?
Para pessoas. A gente come.
Você não tem comida suficiente?
Bem, sim.
Como você consegue?
As abelhas fazem.
Eu sei quem faz! E é difícil de fazer!
Tem aquecimento, resfriamento, meximento. Você precisa de um Krelman inteiro!
É orgânico.
É nosso-gânico!
É só mel, Barry.
Só o quê?!
As abelhas não sabem disso! Isso é roubo! Muito roubo!
Vocês tomaram nossas casas, escolas, hospitais! Isso é tudo que temos!
E está à venda?! Vou chegar ao fundo disso.
Vou chegar ao fundo de tudo isso!
Ei, Hector. Quase acabou?
Quase.
Ele está aqui. Eu sinto.
Bem, acho que vou para casa agora e deixar esse mel gostoso aqui, sem ninguém por perto.
Você está preso, garoto das caixas!
Sabia que ouvi algo.
Então você pode falar!
Posso falar. E agora você vai começar a falar!
De onde você está tirando o negócio doce? Quem é seu fornecedor?
Não entendo.
Achei que éramos amigos.
A última coisa que queremos é chatear as abelhas!
Tarde demais! Agora é nosso!
Senhor, você cruzou a espada errada!
Senhor, será o almoço do meu iguana, Ignácio!
De onde vem o mel? Me diga onde!
Fazendas de Mel! Vem das Fazendas de Mel!
Pessoa louca!
Que coisa horrível aconteceu aqui?
Esses rostos, nunca souberam o que os atingiu. E agora
estão na estrada para lugar nenhum!
Fique quieto.
O quê? Você não está morto?
Pareço morto? Eles limpam qualquer coisa que se mova. Para onde você vai?
Para as Fazendas de Mel. Estou em cima de algo enorme aqui.
Vou para o Alasca. Sangue de alce, coisa louca. Explode sua cabeça!
Vou para Tacoma.
E você?
Ele realmente está morto.
Tudo bem.
Ai!
O que é isso?!
Oh, não!
Um limpador! Lâmina tripla!
Lâmina tripla?
Pula! É sua única chance, abelha!
Por que tudo tem que estar tão maldito limpo?!
Quanto você precisa ver?!
Abra os olhos!
Bote a cabeça para fora da janela!
Da NPR News em Washington,
sou Carl Kasell.
Mas não mate mais insetos!
Abelha!
Cara do sangue de alce!
Ouviu algo?
Tipo o quê?
Tipo pequenos gritos.
Desligue o rádio.
E aí, rapaz-abelha?
Ei, Sangue.
Apenas uma fileira de potes de mel, até onde o olho podia alcançar.
Uau!
Presumo que para onde esse caminhão vai é onde eles estão pegando. Quer dizer, esse mel é nosso.
As abelhas ficam bem. Estamos todos amontoados.
É uma comunidade unida.
Não nós, cara. Nós por nossa conta. Cada mosquito por conta própria.
E se você se meter em apuros?
Você é mosquito, você está em apuros. Ninguém gosta de nós. Eles só socam. Vê um mosquito, soca, soca!
Pelo menos você está no mundo. Deve conhecer garotas.
Garotas mosquito tentam subir, ficar com uma mariposa, libélula. Garota mosquito não quer mosquito.
Você está brincando comigo!
Sangue de Alce está prestes a deixar o prédio! Até logo, abelha!
Ei, pessoal!
Sangue de Alce!
Sabia que te pegaria aqui embaixo.
Você trouxe seu canudinho louco?
A gente joga em potes, cola uma etiqueta, e é lucro puro.
O que é este lugar?
O cérebro de uma abelha é do tamanho de uma cabeça de alfinete.
Eles são cabeças de alfinete!
Cabeça de alfinete.
Olha o novo fumigador.
Oh, que maravilha. Esse é o que você quer. O Thomas 3000!
Fumigador?
Noventa baforadas por minuto, semi-automático. Duas vezes a nicotina, todo o alcatrão. Alguns tragos disso os derruba.
Eles fazem o mel, e a gente fica com o dinheiro.
"Eles fazem o mel, e a gente fica com o dinheiro"?
Oh, meu!
O que está acontecendo? Você está bem?
É. Não dura muito tempo.
Você sabe que está numa colmeia falsa com paredes falsas?
Nossa rainha foi mudada para cá. Não tivemos escolha.
Esta é sua rainha? Isso é um homem com roupa de mulher! É uma drag queen!
O que é isso?
Oh, não!
São centenas delas!
Mel de abelha.
Nosso mel está sendo descaradamente roubado em escala massiva!
Isso é pior do que qualquer coisa que os ursos já fizeram! Pretendo fazer algo.
Oh, Barry, para.
Quem te disse que os humanos estão pegando nosso mel? É um boato.
Isso parece boato?
Isso é uma teoria da conspiração. Essas são fotos obviamente adulteradas. Como você se envolveu nisso?
Ele tem ficado falando com humanos.
O quê? Falando com humanos?!
Ele tem uma namorada humana. E ficam se beijando!
Se beijando? Barry!
Não ficamos.
Você queria.
De que lado você está?
Das abelhas!
Namorei um grilo uma vez em San Antonio. Aquelas pernas loucas me mantiveram acordado a noite toda.
Barry, isso é o que você quer fazer com sua vida?
Quero fazer por todas as nossas vidas. Ninguém trabalha mais do que as abelhas!
Pai, me lembro de você chegando em casa tão sobrecarregado
que suas mãos ainda estavam mexendo. Você não conseguia parar.
Me lembro disso.
Que direito eles têm sobre nosso mel?
Vivemos com duas xícaras por ano. Eles colocam em bálsamo labial sem motivo algum!
Mesmo que seja verdade, o que uma abelha pode fazer?
Ferroar onde realmente dói.
Na cara! No olho!
Isso doeria.
Não.
No nariz? Isso é mortal.
Só há um lugar onde você pode ferroar os humanos, um lugar onde importa.
Hive às Cinco, a única fonte de notícias de ação de hora cheia da Colmeia.
Chega de barbas de abelha!
Com Bob Bumble na bancada de âncora. Meteorologia com Storm Stinger. Esportes com Buzz Larvi. E Jeanette Chung.
Boa noite. Sou Bob Bumble.
E sou Jeanette Chung.
Uma abelha de três condados, Barry Benson, pretende processar a raça humana por roubar nosso mel, embalá-lo e lucrar ilegalmente!
Amanhã à noite no Bee Larry King, teremos três ex-rainhas aqui em nosso estúdio, discutindo seu novo livro, Damas com Classe, que sai esta semana pela Hexagon.
Esta noite estamos falando com Barry Benson.
Você já pensou: "Sou um garoto da Colmeia. Não consigo fazer isso"?
As abelhas nunca tiveram medo de mudar o mundo.
E quanto ao Bee Colombo? Bee Gandhi? Bejesus?
De onde sou, nunca processeríamos humanos.
Estávamos pensando em jogo de bolinhas de gude ou lojas de doces.
Quantos anos você tem?
A comunidade das abelhas está te apoiando neste caso, que será o julgamento do século das abelhas.
Sabe, eles têm um Larry King no mundo humano também.
É um nome comum. Semana que vem...
Ele se parece com você e tem um programa e suspensórios e bolinhas coloridas...
Semana que vem...
Óculos, citações na parte inferior do convidado, mesmo que você acabou de ouvi-las.
Semana do Urso na próxima semana! Eles são assustadores, peludos e aqui ao vivo.
Sempre se inclina para frente, ombros pontudos, olhos estrábicos, muito judeu.
No tênis, você ataca no ponto fraco!
Era minha avó, Ken. Ela tem 81 anos.
Querida, o revés dela é uma piada!
Não vou me aproveitar disso?
Silêncio, por favor.
Trabalho de verdade acontecendo aqui.
É a mesma abelha?
Sim, é!
Estou ajudando-o a processar a raça humana.
Olá.
Olá, abelha.
Este é Ken.
Sim, me lembro de você. Timberland, tamanho 42. Sola Vibram, acredito.
Por que ele fala de novo?
Escuta, é melhor você ir porque estamos realmente ocupados trabalhando.
Mas é nossa noite de iogurte!
Tchau tchau.
Por que a noite do iogurte é tão difícil?!
Você coitadinho. Vocês dois estão nisso há horas!
Sim, e Adam aqui foi uma grande ajuda.
Cobertura...
Quantos açúcares?
Só um. Tento não usar a concorrência.
Então por que você está me ajudando?
As abelhas têm boas qualidades. E tira minha mente da loja. Em vez de flores, as pessoas estão dando buquês de balões agora.
Esses são ótimos, se você tiver três anos.
E flores artificiais.
Oh, essas me deixam psicótica!
Sim, eu também.
Ferrões tortos, polinização inútil.
As abelhas devem odiar essas coisas falsas!
Nada pior do que um narciso que fez trabalho.
Talvez isso possa compensar um pouco.
Este processo é um negócio muito sério.
Acho.
Tem certeza de que quer continuar com isso?
Tenho certeza? Quando terminar com os humanos, eles não poderão dizer "querida, cheguei em casa" sem pagar direitos autorais!
É uma cena incrível aqui no centro de Manhattan, onde o mundo espera ansiosamente, porque pela primeira vez na história, ouviremos por nós mesmos se uma abelha consegue realmente falar.
No que nos metemos aqui, Barry?
É muito grande, não é?
Não acredito em quantos humanos não trabalham durante o dia.
Você acha que empresas alimentícias multinacionais de bilhões de dólares têm bons advogados?
Todo mundo precisa ficar atrás da barricada.
O que houve?
Não sei, só tive um calafrio.
Bem, se não é o time das abelhas.
Vocês trabalharam nisso?
Em pé! O honrado Juiz Bumbleton presidindo.
Tudo bem. Caso número 4475,
Tribunal Superior de Nova York,
Barry Bee Benson v. a Indústria do Mel está agora em sessão.
Sr. Montgomery, você está representando as cinco empresas alimentícias coletivamente?
Uma honra.
Sr. Benson... você está representando todas as abelhas do mundo?
Estou brincando. Sim, Meritíssimo, estamos prontos para prosseguir.
Sr. Montgomery, sua declaração de abertura, por favor.
Senhoras e senhores do júri, minha avó era uma mulher simples. Nascida numa fazenda, ela acreditava que era direito divino do homem se beneficiar da generosidade da natureza que Deus colocou diante de nós.
Se vivêssemos no mundo de cabeça para baixo que o Sr. Benson imagina, pense no que significaria.
Eu teria que negociar com o bicho-da-seda pela elástica nas minhas calças!
Abelha que fala!
Como sabemos que isso não é algum tipo de holografia de captura cinematográfica Hollywood?
Poderiam estar usando raios laser! Robótica! Ventriloquismo! Clonagem! Por tudo que sabemos, ele pode estar com esteroide!
Sr. Benson?
Senhoras e senhores, não há truques aqui. Sou apenas uma abelha comum. O mel é muito importante para mim. É importante para todas as abelhas. Nós inventamos! Fazemos. E o protegemos com nossas vidas.
Infelizmente, há algumas pessoas nesta sala que acham que podem tomá-lo de nós porque somos os pequeninos!
Estou esperando que, depois que tudo isso acabar, vocês vejam como, ao pegar nosso mel, vocês não apenas levam tudo que temos, mas tudo que somos!
Queria que ele se vestisse assim o tempo todo. Tão chique!
Chame sua primeira testemunha.
Então, Sr. Klauss Vanderhayden das Fazendas de Mel, empresa grande a que você tem.
Suponho que sim.
Vejo que você também possui Honeyburton e Honron!
Sim, eles fornecem apicultores para nossas fazendas.
Apicultor. Acho esse um termo muito perturbador.
Não imagino que você empregue algum libertador-de-abelhas, não é?
Não.
Não consegui ouvir.
Não.
Não. Porque você não liberta abelhas. Você mantém abelhas. Não só isso, parece que você achou que um urso seria uma imagem adequada para um pote de mel.
São criaturas muito amáveis. Ursinho Pooh, Fozzie Bear, Build-A-Bear.
Quer dizer como este?
Ursos matam abelhas!
Como você gostaria que a cabeça dele caísse pela sua sala de estar?! Mordendo seu sofá! Cuspindo suas almofadas! Ok, chega. Leve-o embora.
Então, Sr. Sting, obrigado por estar aqui. Seu nome me intriga. Onde já ouvi antes?
Eu estava em uma banda chamada The Police.
Mas você nunca foi policial, não foi?
Não, não fui.
Não, não foi. E então aqui temos mais um exemplo da cultura das abelhas casualmente roubada por um humano por nada mais do que um nome artístico para se exibir no palco.
Por favor.
Já foi ferroado, Sr. Sting? Porque estou me sentindo um pouco ferroado, Sting. Ou deveria dizer... Sr. Gordon M. Sumner!
Esse não é o nome verdadeiro dele?! Idiotas!
Sr. Liotta, primeiro, parabéns atrasados por sua vitória no Emmy por participação especial em ER em 2005.
Obrigado. Obrigado.
Vejo pelo seu currículo que você é diabolicamente bonito com uma turbulência interior em ebulição pronta para explodir.
Gosto do que faço. Isso é crime?
Ainda não. Mas é assim que chegou para você? Explorar abelhas minúsculas e indefesas para não ter que ensaiar seu papel e aprender suas falas, senhor?
Cuidado, Benson! Posso explodir agora!
Esse não é um bom sujeito.
Esse é um mau sujeito!
Por que alguém não simplesmente pisa nesse esquisito e podemos todos ir para casa?!
Ordem neste tribunal!
Todos vocês estão pensando nisso!
Ordem! Ordem, eu disse!
Diga!
Sr. Liotta, por favor, sente-se!
Acho que foi muito gentil daquele urso se envolver assim. Acho que o júri está do nosso lado.
Estamos fazendo tudo certo, legalmente?
Sou florista.
Certo. Bem, então, brindes a uma ótima equipe.
À uma ótima equipe!
Bem, olá.
Ken!
Olá.
Não achei que você viria.
Não, estava apenas atrasado. Tentei ligar, mas... a bateria.
Não queria que tudo isso fosse desperdiçado,
então liguei para Barry. Felizmente, ele estava livre.
Oh, que sorte.
Sobrou um pouco. Posso aquecer.
Sim, aquece, claro, tanto faz.
Então ouvi que você é um grande jogador de tênis. Eu mesmo não sou muito bom no jogo. A bola é um pouco agarrenta.
É onde geralmente sento. Ali... mesmo.
Ken, Barry estava olhando seu currículo, e ele concordou comigo que comer com pauzinhos não é realmente uma habilidade especial.
Você acha que eu não sei o que você está fazendo?
Sei o quanto é difícil encontrar o trabalho certo. Temos isso em comum.
Temos?
As abelhas têm 100% de emprego, mas fazemos trabalhos como retirar sujeira.
É exatamente o que eu estava pensando em fazer.
Ken, deixei Barry pegar sua gilete para o fuzz dele. Espero que esteja tudo bem.
Vou drenar o velho ferrão.
Sim, faz isso.
Olha aquilo.
Sabe, estou praticamente farto dos seus pequenos Jogos Mentais.
O que é aquilo?
Vogue italiana.
Mamma mia, que quantidade de páginas.
Muitos anúncios.
Lembra do que Vanessa disse, por que sua vida é mais valiosa que a minha?
Engraçado, simplesmente não consigo me lembrar disso! Acho que tem algo fedendo aqui!
Adoro o cheiro de flores.
Como você gosta do cheiro das chamas?!
Não tanto.
Percevejo d'água! Não estou tomando partido!
Ken, estou usando um chapéu de Chapstick!
Isso é patético!
Tenho problemas!
Bem, bem, bem, royal flush!
Você está blefando.
Estou?
Surf está alto, cara!
Água de privada!
Essa tigela está nojenta. Exceto por esses anéis amarelos sujos!
Kenneth! O que você está fazendo?!
Sabe, eu nem gosto de mel! Eu não como!
Precisamos conversar! Ele é só uma abelhinha!
E é a abelha mais legal que já conheci em muito tempo!
Muito tempo? Do que você está falando?! Tem outros insetos na sua vida?
Não, mas tem outras coisas me incomodando na vida. E você é uma delas!
Tudo bem! Abelhas que falam, sem noite de iogurte...
Meus nervos estão fritos por andar nessa montanha-russa emocional!
Tchau, Ken.
E para sua informação, prefiro adoçantes artificiais sem açúcar feitos pelo homem!
Desculpa por tudo aquilo.
Sei que tem gosto residual! Gosto!
Sempre senti que havia algum tipo de barreira entre Ken e eu. Não conseguia superar.
Oh, bem.
Você está bem para o julgamento?
Acredito que o Sr. Montgomery está quase sem ideias.
Gostaríamos de chamar o Sr. Barry Benson Bee à tribuna.
Boa ideia! Dá para ver por que ele é considerado um dos melhores advogados...
É.
Layton, você precisa tecer alguma magia com esse júri, ou vai acabar tudo.
Não se preocupe. A única coisa que preciso fazer para virar esse júri é lembrá-los do que não gostam nas abelhas.
Você tem as pinças?
Você é alérgico?
Só a perder, filho. Só a perder.
Sr. Benson Bee, vou lhe perguntar o que acho que todos gostaríamos de saber.
Qual é exatamente sua relação com aquela mulher?
Somos amigos.
Bons amigos?
Sim.
Quão bons? Vocês moram juntos?
Espera um minuto... Você é o bichinho dela... de cama?
Já vi um documentário de abelhas ou dois. Pelo que entendo, sua rainha não dá à luz todas as crianças-abelha?
É, mas...
Então esses não são seus pais de verdade!
Oh, Barry...
Sim, são!
Me segurem!
Você é uma abelha ilegítima, não é, Benson?
Ele está difamando as abelhas!
Vocês não namoram seus primos?
Objeção!
Vou ferroar esse cara!
Adam, não! É o que ele quer!
Oh, fui atingido!! Oh, meu Deus, fui atingido!
Ordem! Ordem!
O veneno! O veneno está circulando pelas minhas veias! Fui derrubado por uma besta alada da destruição! Viu? Você não pode tratá-las como iguais! São selvagens listrados! Ferroar é tudo que sabem! É o jeito delas!
Adam, fica comigo.
Não consigo sentir minhas pernas.
Que Anjo da Misericórdia vai se apresentar para sugar o veneno das minhas nádegas ofegantes?
Quero ordem neste tribunal. Ordem! Ordem, por favor!
O caso das abelhas versus a raça humana tomou uma Virada Pontuda Contra as abelhas ontem, quando um de sua equipe jurídica ferroou Layton T. Montgomery.
Ei, companheiro.
Ei.
Tem muita dor?
É.
Eu... eu destruí o caso todo, não destruí?
Não importa. O que importa é
que você está vivo. Poderia ter morrido.
Estaria melhor morto. Olha para mim.
Conseguiram na lanchonete lá embaixo, num sanduíche de atum. Olha, tem um pedacinho de salsão ainda.
Como foi ferroar alguém?
Não consigo explicar. Foi tudo... tudo adrenalina e então... e então êxtase!
Tudo bem.
Você acha que foi tudo uma armadilha?
Claro. Me desculpa. Voei direto para dentro disso.
No que estávamos pensando? Olha para nós. Somos só um par de insetos nesse mundo.
O que os humanos vão fazer com a gente se ganharem?
Não sei.
Ouço que colocam as baratas em motéis. Isso não parece tão ruim.
Adam, elas entram, mas não saem!
Oh, meu.
Você pode pedir a uma enfermeira para fechar aquela janela?
Por quê?
A fumaça.
Abelhas não fumam.
Certo. Abelhas não fumam.
Abelhas não fumam!
Mas algumas abelhas estão fumando.
É isso! Esse é nosso caso!
É? Não acabou?
Vista-se. Preciso ir a algum lugar.
Volte ao tribunal e ganhe tempo. Ganhe tempo de qualquer jeito que puder.
E assumindo que você fez o passo corretamente, está pronto para a banheira.
Sr. Flayman.
Sim? Sim, Meritíssimo!
Onde está o resto de sua equipe?
Bem, Meritíssimo, é interessante. As abelhas são treinadas para voar de forma errática e, como resultado, não viajamos muito bem.
Na verdade, ouvi uma história engraçada sobre...
Meritíssimo, esses insetos ridículos não tomaram tempo suficiente deste tribunal valioso? Quanto tempo mais vamos permitir essas palhaçadas absurdas?
Eles não apresentaram nenhuma evidência convincente para sustentar suas acusações contra meus clientes, que gerenciam negócios legítimos.
Solicito a dispensa completa de todo este caso!
Sr. Flayman, receio que precisarei considerar a moção do Sr. Montgomery.
Mas não pode! Temos um caso excelente.
Onde está a prova?
Onde está a evidência?
Mostre-me a arma fumegante!
Espere, Meritíssimo!
Quer uma arma fumegante? Aqui está sua arma fumegante.
O que é aquilo?
É um fumigador de abelhas!
O quê, isso? Esse inofensivo pequeno dispositivo? Isso não machucaria uma mosca, muito menos uma abelha.
Olhe o que aconteceu com as abelhas que nunca foram perguntadas: "Fumante ou não-fumante?" Isso é o que a natureza pretendia para nós? Ser forçosamente viciadas em máquinas de fumaça e campos de trabalho de madeira feitos pelo homem?
Vivendo nossas vidas como escravos de mel para o homem branco?
O que vamos fazer?
Ele está jogando o cartão da espécie.
Senhoras e senhores, por favor, libertem estas abelhas!
Liberta as abelhas! Liberta as abelhas! Liberta as abelhas! Liberta as abelhas! Liberta as abelhas!
O tribunal decide a favor das abelhas!
Vanessa, ganhamos!
Sabia que conseguia! Toca aqui!
Desculpa.
Estou bem! Sabe o que isso significa?
Todo o mel finalmente pertencerá às abelhas.
Agora não precisaremos trabalhar tão duro o tempo todo.
Isso é uma perversão ímpia do equilíbrio da natureza, Benson.
Você vai se arrepender disso.
Barry, quanto mel há por aí?
Tudo bem. Um de cada vez.
Barry, o que você está vestindo?
Meu suéter é Ralph Lauren e não tenho calças.
E se Montgomery estiver certo?
O que você quer dizer?
Temos vivido do jeito das abelhas há muito tempo, 27 milhões de anos.
Parabéns pela sua vitória. O que você exigirá como acordo?
Primeiro, exigiremos o fechamento completo de todos os campos de trabalho de abelhas.
Depois queremos de volta o mel que era nosso para começar, cada última gota.
Exigimos o fim da glorificação do urso como qualquer coisa mais do que uma máquina fétida, fedorenta e de mau hálito.
Todos sabemos o que eles fazem na floresta.
Aguarde meu sinal. Eliminem-no.
Ele ficará com náusea por algumas horas, depois estará bem.
E não toleraremos mais apelidos negativos para abelhas...
Mas é só um nome artístico para se exibir no palco!
...inclusão desnecessária de mel em produtos de saúde falsos e guarnições de lanche da hora do chá humana la-dee-da.
Não consigo respirar.
Traz isso aqui, pessoal!
Para ali! Bom.
Bate nele.
Sr. Buzzwell, acabamos de passar três xícaras e tem galões vindo!
Acho que precisamos fechar!
Fechar? Nunca fechamos.
Fechar a produção de mel!
Parem de fazer mel!
Gire sua chave, senhor!
O que fazemos agora?
Canhonada!
Estamos fechando a produção de mel!
Missão abortada.
Abortando polinização e detalhes de néctar.
Retornando à base.
Adam, você não acreditaria em quanto mel havia lá fora.
Oh, é?
O que está acontecendo? Onde está todo mundo?
Estão comemorando?
Estão em casa.
Não sabem o que fazer. Descansando, dormindo até tarde.
Ouvi que seu Tio Carl estava a caminho de San Antonio com um grilo.
Pelo menos temos nosso mel de volta.
Às vezes penso, e daí se os humanos gostavam do nosso mel? Quem não gostaria?
É a maior coisa do mundo! Estava animado em fazer parte da produção.
Esta era minha nova mesa. Este era meu novo trabalho. Queria fazer muito bem. E agora...
Agora não consigo.
Não entendo por que não estão felizes.
Achei que suas vidas seriam melhores!
Não estão fazendo nada. É incrível.
O mel realmente muda as pessoas.
Você não tem nenhuma ideia do que está acontecendo, não é?
O que você queria me mostrar?
Isso.
O que aconteceu aqui?
Isso não é nem a metade.
Oh, não. Oh, meu.
Todas estão murchando.
Não parece muito bom, não é?
Não.
E de quem você acha que é a culpa?
Sabe, vou adivinhar abelhas.
Abelhas?
Especificamente, eu.
Não pensei que as abelhas não precisarem fazer mel afetaria todas essas coisas.
Não são apenas as flores. Frutas, vegetais, todos precisam de abelhas.
Isso é nosso teste inteiro do SAT ali.
Tira os vegetais, isso afeta todo o reino animal.
E então, é claro...
A espécie humana?
Então se não houver mais polinização, poderia tudo desmoronar aqui, não poderia?
Sei que isso é parcialmente minha culpa também.
Que tal um pacto de suicídio?
Como fazemos?
Eu te forro, você me pisa.
Isso só te mata duas vezes.
Certo, certo.
Escuta, Barry... desculpa, mas preciso ir.
Tive que abrir minha boca e falar.
Vanessa?
Vanessa? Por que você está saindo?
Para onde você está indo?
Para o último Torneio das Rosas em Pasadena.
Moveram para este fim de semana porque todas as flores estão morrendo.
É a Última Chance que terei de ver.
Vanessa, só quero dizer que me arrependo.
Nunca quis que terminasse assim.
Eu sei. Eu também.
Torneio das Rosas.
Rosas não fazem esportes.
Espera um minuto. Rosas. Rosas?
Rosas!
Vanessa!
Rosas?!
Barry?
Rosas são flores!
Sim, são.
Flores, abelhas, pólen!
Eu sei.
É por isso que este é o último desfile.
Talvez não.
Você pode pedir para ele ir mais devagar?
Pode ir mais devagar?
Barry!
Ok, cometi um erro enorme.
Isso é um desastre total, toda minha culpa.
Sim, um pouco é.
Arruinei o planeta. Queria te ajudar com a floricultura. Piorei.
Na verdade, está completamente fechada.
Achei que talvez você estivesse reformando.
Mas tenho outra ideia, e é maior do que todas as minhas ideias anteriores combinadas.
Não quero ouvir!
Tudo bem, eles têm as rosas, as rosas têm o pólen.
Conheço cada abelha, planta e botão de flor neste parque.
Tudo que precisamos fazer é pegar o que eles têm de volta aqui com o que temos.
Abelhas.
Parque.
Pólen!
Flores.
Repolinização!
Por toda a nação!
Torneio das Rosas, Pasadena, Califórnia.
Não têm nada além de flores, carros alegóricos e algodão doce.
A segurança será intensa.
Tenho uma ideia.
Vanessa Bloome, FTD.
Negócios florais oficiais. É real.
Desculpa, senhora. Broche bonito.
Obrigada. Foi um presente.
Uma vez lá dentro, só escolhemos o carro alegórico certo.
Que tal A Princesa e a Ervilha?
Eu poderia ser a princesa, e você poderia ser a ervilha!
Sim, entendi.
Onde devo sentar?
O que você é?
Acho que sou a ervilha.
A ervilha?
Ela fica embaixo dos colchões.
Não neste conto de fadas, querida.
Vou chamar o marechal.
Faz isso! Este desfile inteiro é uma bagunça!
Vamos ver o que esse bebê faz.
Ei, o que você está fazendo?!
Então tudo que fazemos é nos misturar com o tráfego... sem despertar suspeitas.
Uma vez no aeroporto, nada nos para.
Para! Segurança.
Você e seus insetos embalaram seu carro alegórico?
Sim.
Ele esteve em sua posse o tempo todo?
Você pode remover seus sapatos?
Remova seu ferrão.
Faz parte de mim.
Eu sei. Só me divertindo um pouco.
Aproveite seu voo.
Então se tivermos sorte, teremos pólen suficiente para fazer o trabalho.
Você consegue acreditar em quanta sorte temos? Temos exatamente pólen suficiente para fazer o trabalho!
Acho que isso vai funcionar.
Tem que funcionar.
Atenção, passageiros, aqui é o Capitão Scott. Temos um pouco de mau tempo em Nova York. Parece que vamos ter um atraso de algumas horas.
Barry, essas são flores cortadas sem água. Nunca vão aguentar.
Preciso subir e falar com eles.
Cuidado.
Posso pegar ajuda com a revista Sky Mall? Gostaria de pedir o aparador inflável falante de cabelo nasal e de orelha.
Capitão, estou numa situação real.
O que você disse, Hal?
Nada.
Abelha!
Não entre em pânico! Toda a minha espécie...
O que você está fazendo?
Espera um minuto! Sou advogado!
Quem é advogado?
Não se mova.
Oh, Barry.
Boa tarde, passageiros. Aqui é seu capitão. Poderia a Sra. Vanessa Bloome do assento 24B se apresentar na cabine? E por favor, rapidinho!
O que aconteceu aqui?
Havia um aspirador de pó, uma peruca, uma balsa de salvamento explodiu.
Um está careca, um está num barco, os dois estão inconscientes!
Isso é outra piada de abelha?
Não!
Ninguém está pilotando o avião!
Aqui é a torre de controle do JFK, Voo 356. Qual é o seu status?
Aqui é Vanessa Bloome. Sou florista de Nova York.
Onde está o piloto?
Ele está inconsciente, e o copiloto também.
Não está bom. Alguém a bordo tem experiência de voo?
Na verdade, tem.
Quem é?
Barry Benson.
Do julgamento do mel?! Ótimo.
Vanessa, isso não é nada mais que uma grande abelha de metal.
Tem asas gigantes, motores enormes.
Não consigo pilotar um avião.
Por que não? Não é John Travolta um piloto?
Sim.
Quão difícil pode ser?
Espera, Barry!
Estamos entrando em alguns relâmpagos.
Aqui é Bob Bumble. Temos algumas últimas notícias do Aeroporto JFK, onde uma cena suspense está se desenvolvendo.
Barry Benson, recém saído de sua vitória legal...
É Barry!
...está tentando pousar um avião, carregado com pessoas, flores e uma tripulação incapacitada.
Flores?!
Temos uma tempestade na área e dois indivíduos nos controles com absolutamente nenhuma experiência de voo.
Só um minuto. Tem uma abelha naquele avião.
Estou bem familiarizado com o Sr. Benson e seus companheiros sem conta.
Já fizeram dano suficiente.
Mas ele não é sua única esperança?
Tecnicamente, uma abelha não deveria conseguir voar de jeito nenhum.
Suas asas são pequenas demais... Já ouvimos isso um milhão de vezes?
"A área superficial das asas e a massa corporal não fazem sentido."
Coloquem isso no ar!
Consegui.
Fiquem de prontidão.
Estamos indo ao vivo.
O jeito como trabalhamos pode ser um mistério para você. Fazer mel leva muitas abelhas fazendo muitos trabalhos pequenos.
Mas deixa eu te contar sobre um trabalho pequeno. Se você o faz bem, faz uma grande diferença.
Mais do que percebemos. Para nós, para todos.
É por isso que quero colocar as abelhas de volta a trabalhar juntas. Esse é o jeito das abelhas! Não somos feitos de gelatina.
Apoiamos um companheiro.
Preto e amarelo!
Olá!
Esquerda, direita, abaixo, pairar.
Pairar?
Esqueça pairar.
Isso não é tão difícil.
Bip-bip! Bip-bip!
Barry, o que aconteceu?!
Espera, acho que estávamos no piloto automático o tempo todo.
Isso pode ter estado me ajudando.
E agora não estamos!
Então descobri que não consigo pilotar um avião.
Todos vocês, vamos apoiar esse companheiro! Movam-se!
Movam-se!
Nossa única chance é se eu fizer o que faria, você copia comigo com as asas do avião!
Não precisa gritar.
Não estou gritando! Estamos em muita apuros.
É muito difícil se concentrar com aquele tom de pânico na sua voz!
Não é um tom. Estou em pânico!
Não consigo fazer isso!
Vanessa, se controla. Você precisa acordar!
Você acorda.
Você acorda.
Você acorda!
Você acorda!
Você acorda!
Você acorda!
Você acorda!
Você acorda!
Espera!
Por quê? Vamos lá, é minha vez.
Como está o avião voando?
Não sei.
Alô?
Benson, tem algumas flores para uma ocasião feliz aí?
Os Coletores de Pólen!
Eles realmente apoiam um companheiro.
Preto e amarelo.
Olá.
Tudo bem, vamos pousar essa latinha na pista.
Onde? Não consigo ver nada. Você consegue?
Não, nada. Está todo nublado.
Vamos. Você precisa pensar como abelha, Barry.
Pensando como abelha.
Pensando como abelha.
Pensando como abelha!
Pensando como abelha! Pensando como abelha!
Espera um minuto. Acho que estou sentindo algo.
O quê?
Não sei. É forte, me puxando.
Como um instinto de 27 milhões de anos.
Abaixe o nariz.
Pensando como abelha!
Pensando como abelha! Pensando como abelha!
O que no mundo está na pista?
Acendam as luzes nisso!
Pensando como abelha!
Pensando como abelha! Pensando como abelha!
Vanessa, mira na flor.
Ok.
Desligue os motores. Vamos entrar com força de abelha. Prontos, pessoal?
Afirmativo!
Bom. Bom. Com cuidado agora. É isso.
Pousa naquela flor!
Pronto? Reversão completa!
Gira!
Não aquela flor! A outra!
Qual?
Aquela flor.
Esse é um gordo com uma camisa florida.
Quero dizer a flor gigante pulsante feita de milhões de abelhas!
Avança. Nariz abaixo. Cauda para cima.
Gira em torno dela.
Isso é insano, Barry!
É o único jeito que sei voar.
Eu estou ficando louca ou este avião está voando num padrão de inseto?
Bote o nariz lá dentro. Não tenha medo. Cheira. Reversão completa!
Apenas deixa. Seja parte disso.
Mira no centro!
Agora entra! Entra, mulher!
Vamos lá, já.
Barry, conseguimos! Você me ensinou a voar!
Sim. Sem toca aqui!
Certo.
Barry, funcionou!
Você viu a flor gigante?
Que flor gigante? Onde? Claro
que vi a flor! Foi genial!
Obrigado.
Mas ainda não acabamos.
Ouçam, todo mundo!
Esta pista está coberta com o último pólen das últimas flores disponíveis em qualquer lugar da Terra.
Isso significa que esta é nossa Última Chance. Somos os únicos que fazem mel, polinizamos flores e nos vestimos assim.
Se vamos sobreviver como espécie, este é o nosso momento! O que você acha?
Vamos ser abelhas ou apenas chaveiros do Museu de História Natural?
Somos abelhas!
Chaveiro!
Então me sigam! Exceto Chaveiro.
Espera, Barry. Aqui. Você merece isso.
Sim!
Sou um Coletor de Pólen! E serve perfeitamente. Só preciso fazer as mangas.
Oh, é.
Esse é nosso Barry.
Mãe! As abelhas voltaram!
Se alguém precisar fazer uma ligação, agora é a hora. Tenho uma sensação de que trabalharemos até tarde essa noite!
Aqui está o seu troco. Tenha uma boa tarde! Posso ajudar quem vem a seguir?
Gostaria de um pouco de mel com isso?
É aprovado pelas abelhas. Não esqueça estes.
Leite, creme, queijo, tudo sou eu. E não vejo um tostão!
Às vezes me sinto como um pedaço de carne!
Não tinha ideia.
Barry, me desculpa.
Tem um momento?
Me dá licença?
Meu associado mosquito vai te ajudar.
Desculpa o atraso.
Ele é advogado também?
Eu já era um parasita sugador de sangue. Só precisava de uma pasta.
Tenha uma boa tarde!
Barry, acabei de receber este pedido enorme de tulipas e não consigo encontrar em lugar nenhum.
Sem problema, Vannie. Deixa comigo.
Você é um salva-vidas, Barry. Posso ajudar quem vem a seguir?
Tudo bem, decolem, coletores! É hora de voar.
Obrigado, Barry!
Essa abelha está vivendo minha vida!
Deixa pra lá, Kenny.
Quando esse pesadelo vai acabar?!
Deixa tudo ir.
Lindo dia para voar.
Com certeza.
Entre eu e você,
estava morrendo de vontade de sair daquele escritório.
Você precisa começar a pensar como abelha, meu amigo.
Pensando como abelha!
Eu?
Espera. Vamos parar por um segundo. Espera.
Me desculpa. Me desculpa, todo mundo. Podemos parar aqui?
Não estou tomando uma grande decisão de vida durante um número de produção!
Tudo bem. Dez minutos para todo mundo. Encerrem, pessoal.
Praticamente não tive ensaio para isso.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error);
