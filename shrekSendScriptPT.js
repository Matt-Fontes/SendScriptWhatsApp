async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SHREK

Escrito por

William Steig e Ted Elliott




SHREK
Era uma vez uma linda
princesa. Mas ela tinha um encantamento
sobre ela de um tipo terrível que poderia
só será quebrado pelo primeiro beijo do amor.
Ela estava trancada em um castelo guardado
por um terrível dragão cuspidor de fogo.
Muitos bravos cavaleiros tentaram
liberte-a desta terrível prisão,
mas não prevaleceu. Ela esperou no
fortaleza do dragão na sala mais alta do
a torre mais alta para seu verdadeiro amor
e o primeiro beijo do amor verdadeiro. (risos)
Como se isso fosse acontecer. O que
uma carga de - (descarga do vaso sanitário)

Allstar - de Smashmouth começa a tocar. Shrek cuida de seu
dia. Enquanto estão em uma cidade próxima, os moradores se reúnem para ir
depois do ogro.

NOITE - PERTO DA CASA DE SHREK

HOMEM1
Acha que está aí?

HOMEM2
Tudo bem. Vamos obtê-lo!

HOMEM1
Uau. Aguentar. Você sabe o que é isso
coisa pode fazer com você?

HOMEM3
Sim, isso vai moer seus ossos porque é
pão.

Shrek se esgueira por trás deles e ri.

SHREK
Sim, bem, na verdade, isso seria um
gigante. Agora, ogros, ah, eles são muito piores.
Eles farão um terno com seu recém-nascido
pele descascada.

HOMENS
Não!

SHREK
Eles vão raspar seu fígado. Aperte o
gelatina dos seus olhos! Na verdade, é
muito bom com torradas.

HOMEM1
Voltar! De volta, fera! Voltar! Eu te aviso!
(acena a tocha para Shrek.)

Shrek lambe os dedos calmamente e apaga a tocha. O
os homens se afastam dele. Shrek ruge muito alto e por muito tempo
e seu sopro extingue todas as tochas restantes até que o
os homens estão no escuro.

SHREK
Esta é a parte em que você foge.
(Os homens lutam para fugir. Ele ri.)
E fique de fora! (olha para baixo e escolhe
um pedaço de papel. Lê.) "Procurado.
Criaturas de contos de fadas."(Ele suspira e
joga o papel por cima do ombro.)


NO DIA SEGUINTE

Existe uma linha de criaturas de contos de fadas. O chefe da guarda
senta-se em uma mesa pagando às pessoas por trazerem as criaturas dos contos de fadas
para ele. Existem gaiolas por toda parte. Algumas das pessoas na fila
são Peter Pan, que carrega Tinkerbell em uma gaiola, Gipetto
que carrega Pinóquio, e um fazendeiro que carrega os três
pequenos porcos.

GUARDA
Tudo bem. Este está cheio. Pegue
ausente! Vá em frente. Vamos! Levantar!


PROTETOR DE CABEÇA
Próximo!

GUARDA
(pegando a vassoura de bruxa) Me dê isso!
Seus dias de voo acabaram. (quebra o
vassoura ao meio)

PROTETOR DE CABEÇA
São 20 moedas de prata para a bruxa.
Próximo!

GUARDA
Levantar! Vamos!

PROTETOR DE CABEÇA
Vinte peças.

URSINHO
(chorando) Esta gaiola é muito pequena.

BURRO
Por favor, não me entregue. Eu nunca vou
seja teimoso novamente. Eu posso mudar. Por favor!
Me dê outra chance!

VELHA
Ah, cale a boca. (puxa a corda)

BURRO
Oh!

PROTETOR DE CABEÇA
Próximo! O que voce conseguiu?

GIPETTO
Este pequeno boneco de madeira.

PINÓQUIO
Eu não sou um fantoche. Eu sou um garoto de verdade. (dele
nariz cresce)

PROTETOR DE CABEÇA
Cinco xelins pelo brinquedo possuído.
Leve embora.

PINÓQUIO
Pai, por favor! Não deixe eles fazerem isso!
Me ajude!

Gipetto pega o dinheiro e vai embora. A velha se aproxima
para a mesa.

PROTETOR DE CABEÇA
Próximo! O que voce conseguiu?

VELHA
Bem, eu tenho um burro falante.

PROTETOR DE CABEÇA
Certo. Bem, isso vale dez xelins,
se você puder provar isso.

VELHA
Ah, vá em frente, amiguinho.

Burro apenas olha para ela.

PROTETOR DE CABEÇA
Bem?

VELHA
Oh, oh, ele é só... ele é só um pouco
nervoso. Ele é realmente um tagarela.
Fala, seu idiota estúpido...

PROTETOR DE CABEÇA
É isso. Já ouvi o suficiente. Guardas!


VELHA
Não, não, ele fala! Ele faz. (finge
ser Burro) eu posso falar. eu amo
falar. Eu sou a coisa mais faladora
você já viu.

PROTETOR DE CABEÇA
Tire-a da minha vista.

VELHA
Não não! Juro! Oh! Ele pode falar!

Os guardas agarram a velha e ela luta com eles. Um
de suas pernas voa e expulsa Tinkerbell da casa de Peter Pan
mãos, e sua gaiola cai na cabeça do Burro. Ele é borrifado
com pó de fada e ele é capaz de voar.

BURRO
Ei! Eu posso voar!

PETER PAN
Ele pode voar!

3 PORQUINHOS
Ele pode voar!

PROTETOR DE CABEÇA
Ele pode falar!

BURRO
Ha, ha! Isso mesmo, idiota! Agora eu sou
um burro voador e falante. Você pode
vi uma mosca doméstica, talvez até uma supermosca
mas aposto que você nunca viu um burro
voar. Ha, ha! (o pó mágico começa
para passar) Uh-oh. (ele começa a afundar
para o chão.)

Ele bate no chão com um baque.

PROTETOR DE CABEÇA
Aproveite-o! (O burro começa a correr.)
Depois dele!

GUARDAS
Ele está fugindo! Pegue ele! Por aqui!
Vez!

Burro continua correndo e eventualmente encontra Shrek. Literalmente.
Shrek se vira para ver quem esbarrou nele. Burro parece assustado
por um momento, ele avista os guardas subindo o caminho. Ele
rapidamente se esconde atrás de Shrek.

PROTETOR DE CABEÇA
Você aí. Ogro!

SHREK
Sim?

PROTETOR DE CABEÇA
Por ordem de Lord Farquaad estou autorizado
para colocá-los sob prisão e transporte
você para uma instalação de reassentamento designada.


SHREK
Oh sério? Você e que exército?

Ele olha para trás do guarda e o guarda se vira para olhar também
e vemos que os outros homens fugiram. O guarda dobra o rabo
e foge. Shrek ri e volta para seus negócios e
começa a caminhar de volta para sua casa.

BURRO
Posso te dizer uma coisa? Ouvir,
você era realmente, realmente, realmente alguma coisa
aqui atrás. Incrível!

SHREK
Você está falando com... (ele se vira
e o Burro se foi) eu? (ele se vira
ao redor e o Burro está bem na frente
dele.) Uau!

BURRO
Sim. Eu estava falando com você. Posso dizer
você que você que você estava ótimo de volta
aqui? Esses guardas! Eles pensaram que
foi tudo isso. Então você apareceu,
e bam! Eles estavam tropeçando em si mesmos
como bebês na floresta. Isso realmente
me fez sentir bem ao ver isso.

SHREK
Oh isso é ótimo. Realmente.

BURRO
Cara, é bom ser livre.

SHREK
Agora, por que você não vai comemorar seu
liberdade com seus próprios amigos? Hum?


BURRO
Mas, uh, eu não tenho amigos. E
Não vou lá sozinho. Ei,
espere um minuto! Tive uma ótima ideia! Doente
ficar com você. Você é mau, verde,
máquina de luta. Juntos vamos assustar
o cuspe de qualquer um que cruze
nós.

Shrek se vira e olha para Burro por um momento antes de rugir muito.
ruidosamente.

BURRO
Ah, uau! Isso foi realmente assustador. Se você
não se importe que eu diga, se isso não acontecer
trabalhar, sua respiração certamente ficará
o trabalho foi feito, porque você definitivamente
preciso de alguns Tic Tacs ou algo assim, porque
seu hálito fede! Você quase queimou
o cabelo do meu nariz, assim como o
tempo...(Shrek cobre a boca, mas Burro
continua a falar, então Shrek remove
sua mão.) ... então eu comi um pouco podre
bagas. Tive vazamento de gases fortes
da minha bunda naquele dia.

SHREK
Por que você está me seguindo?

BURRO
Eu vou te dizer por quê. (cantando) Porque
Estou sozinho, não há ninguém aqui ao lado
eu, meus problemas desapareceram, há
ninguém para me ridicularizar, mas você tem que ter
fé...

SHREK
Pára de cantar! Não é de admirar que você não
tem algum amigo.

BURRO
Uau. Só um verdadeiro amigo seria esse
cruelmente honesto.

SHREK
Ouça, burrinho. Dê uma olhada
meu. O que eu sou?

BURRO
(olha para Shrek) Uh ... sério
alto?

SHREK
Não! Eu sou um ogro! Você sabe. "Pegue seu
tocha e forcados." Isso não
incomodá-lo?

BURRO
Não.

SHREK
Realmente?

BURRO
Sério sério.

SHREK
Oh.

BURRO
Cara, eu gosto de você. Qual é o seu nome?

SHREK
Ah, Shrek.

BURRO
Shrek? Bem, você sabe do que eu gosto
você, Shrek? Você tem aquele tipo de eu-não-me importo-com-o-que-ninguém-pensa-de-mim
coisa. Eu gosto disso. Eu respeito isso,
Shrek. Você está bem. (Eles vêm
uma colina e você pode ver a casa do Shrek.)
Uau! Olhe para isso. Quem gostaria de viver
no lugar assim?

SHREK
Essa seria minha casa.

BURRO
Oh! E é lindo! Apenas bonita.
Você sabe que é um grande decorador.
É incrível o que você fez com tal
um orçamento modesto. Eu gosto daquela pedra.
Essa é uma bela pedra. Eu acho que você
não se diverte muito, não é?

SHREK
Gosto da minha privacidade.

BURRO
Você sabe, eu também. Isso é outra coisa
temos em comum. Como eu odeio quando
você tem alguém na sua cara. Você tem
tentando dar-lhes uma dica, e eles
não vai embora. Há aquele silêncio constrangedor.
(silêncio constrangedor) Posso ficar com você?


SHREK
Uh o quê?

BURRO
Posso ficar com você, por favor?

SHREK
(sarcasticamente) Claro!

BURRO
Realmente?

SHREK
Não.

BURRO
Por favor! Eu não quero voltar para lá!
Você não sabe como é ser
considerado uma aberração. (pausa enquanto ele
olha para Shrek) Bem, talvez você queira.
Mas é por isso que temos que ficar juntos.
Você tem que me deixar ficar! Por favor! Por favor!


SHREK
OK! OK! Mas apenas uma noite.

BURRO
Ah! Obrigado! (ele corre para dentro da cabana)


SHREK
O que você está...? (O burro sobe
uma cadeira.) Não! Não!

BURRO
Isso vai ser divertido! Podemos ficar acordados
tarde, trocando histórias masculinas, e em
de manhã estou fazendo waffles.

SHREK
Oh!

BURRO
Onde eu durmo?

SHREK
(irritado) Lá fora!

BURRO
Ah, bem, acho que isso é legal. Quero dizer,
Eu não te conheço e você não sabe
eu, então acho que lá fora é melhor, você
saber. Aqui vou eu. Boa noite. (Shrek
bate a porta.) (suspiro) Quero dizer, eu
como o ar livre. Eu sou um burro. Eu era
nascido fora. Eu só estarei sentado
eu mesmo lá fora, eu acho, você sabe. Por
eu mesmo, lá fora. Estou sozinho... há
ninguém aqui ao meu lado...

CASA DE SHREK - NOITE

Shrek está se preparando para o jantar. Ele se senta e acende
uma vela feita de cera de ouvido. Ele começa a comer quando ouve um
barulho. Ele se levanta bufando.

SHREK
(para o Burro) Achei que tinha mandado você
fique do lado de fora.

BURRO
(da janela) Estou lá fora.

Há outro barulho e Shrek se vira para encontrar a pessoa que
fez o barulho. Ele vê várias sombras se movendo. Ele finalmente se vira
e vê 3 ratos cegos em sua mesa.

RATO CEGO1
Bem, senhores, está muito longe do
fazenda, mas que escolha temos?


RATO CEGO 2
Não está em casa, mas vai ficar tudo bem.


GORDO
(saltando em uma lesma) Que cama linda.


SHREK
Entendi. (Pega um mouse, mas ele escapa
e pousa em seu ombro.)

GORDO
Encontrei um pouco de queijo. (morde o Shrek
orelha)

SHREK
Ai!

GORDO
Blá! Coisas horríveis.

RATO CEGO1
É você, Gordo?

GORDO
Como você sabia?

SHREK
Suficiente! (ele pega os 3 ratos) O que são
você está fazendo na minha casa? (Ele é atropelado
por trás e ele deixa cair os ratos.)
Ei! (ele se vira e vê os Sete Anões
com Branca de Neve na mesa.) Ah, não,
não não. Totalmente fora da mesa.


ANÃO
Onde devemos colocá-la? O
a cama está ocupada.

SHREK
Huh?

Shrek marcha até o quarto e abre a cortina.
O Lobo Mau está sentado na cama. O lobo apenas olha
ele.

LOBO MAU
O que?

ESPAÇO DE TEMPO

Shrek agora segura o Lobo Mau pela coleira e está arrastando
ele até a porta da frente.

SHREK
Eu moro em um pântano. Coloquei cartazes. Eu sou
um ogro terrível! O que eu tenho que
consegue um pouco de privacidade? (Ele abre o
porta da frente para expulsar o Lobo e
ele vê que todas as fadas coletadas
As criaturas do conto estão em suas terras.) Oh,
não. Não! Não!

Os 3 ursos estão sentados ao redor do fogo, o flautista está tocando seu
cano e os ratos estão todos correndo para ele, alguns elfos estão direcionando
tráfego aéreo para que as fadas e bruxas possam pousar... etc.


SHREK
O que você está fazendo no meu pântano? (esse
ecoa e todos ficam em silêncio.)


Suspiros são ouvidos por toda parte. As 3 fadas boas se escondem dentro de um
barraca.

SHREK
Tudo bem, saia daqui. Todos vocês,
Mova isso! Vamos! Vamos! Feliz!
Feliz! Ei! Rapidamente. Vamos! (mais
anões correm para dentro de casa) Não, não!
Não não. Não está lá. Não está lá. (eles
feche a porta na cara dele) Oh! (vira para
olha o burro)

BURRO
Ei, não olhe para mim. eu não convidei
eles.

PINÓQUIO
Oh, meu Deus, ninguém nos convidou.

SHREK
O que?

PINÓQUIO
Fomos forçados a vir para cá.

SHREK
(espantado) Por quem?

PEQUENO PORCO
Lorde Farquaad. Ele bufou e bufou
e ele... assinou um aviso de despejo.


SHREK
(suspiro pesado) Tudo bem. Quem sabe onde
esse cara Farquaad é?

Todos olham uns para os outros, mas ninguém responde.

BURRO
Ah, eu quero. Eu sei onde ele está.

SHREK
Alguém mais sabe onde encontrar
ele? Alguém?

BURRO
Meu! Meu!

SHREK
Qualquer um?

BURRO
Oh! Ah, me escolha! Oh eu sei! Eu sei!
Eu, eu!

SHREK
(suspiro) Ok, tudo bem. Atenção, toda fada
coisas de conto. Não fique confortável.
Suas boas-vindas estão oficialmente esgotadas.
Na verdade, vou ver esse cara, Farquaad
agora mesmo e tirar todos vocês da minha terra
e de volta para onde você veio! (Pausa.
Então a multidão enlouquece.) Oh! (para o burro)
Você! Você vem comigo.

BURRO
Tudo bem, é isso que eu gosto de ouvir,
homem. Shrek e Burro, dois robustos
amigos, em uma cidade grande e turbulenta
aventura. Eu amo isso!

BURRO
(cantando) Na estrada novamente. Cante isso
comigo, Shrek. Mal posso esperar para chegar
Na estrada novamente.

SHREK
O que eu disse sobre cantar?

BURRO
Posso assobiar?

SHREK
Não.

BURRO
Posso cantarolar?

SHREK
Tudo bem, cantarole.

Donkey começa a cantarolar 'On the Road Again'.

DULOC - COZINHA

Um homem mascarado está torturando o Gingerbread Man. Ele está continuamente
mergulhando-o em um copo de leite. Lorde Farquaad entra.

FARQUAAD
É o bastante. Ele está pronto para conversar.


O Gingerbread Man é retirado do leite e derrubado
em uma assadeira. Farquaad ri enquanto caminha até o
mesa. Porém quando ele chega à mesa vemos que vai
até os olhos. Ele limpa a garganta e a mesa é abaixada.


FARQUAAD
(ele pega as pernas do Gingerbread Man
e brinca com eles) Corre, corre, corre,
o mais rápido que puder. Você não pode pegar
meu. Eu sou o boneco de gengibre.

HOMEM DE GENGIBRE
Você é um monstro.

FARQUAAD
Eu não sou o monstro aqui. Você é. Você
e o resto daquele lixo de conto de fadas,
envenenando meu mundo perfeito. Agora, diga
meu! Onde estão os outros?

HOMEM DE GENGIBRE
Coma-me! (Ele cospe leite na comida de Farquaad
olho.)

FARQUAAD
Tentei ser justo com vocês, criaturas.
Agora minha paciência chegou ao fim!
Diga-me ou eu irei...(ele faz como se quisesse
retire os botões do Gingerbread Man)


HOMEM DE GENGIBRE
Não, não, não os botões. Não é minha goma
botões.

FARQUAAD
Tudo bem então. Quem os está escondendo?


HOMEM DE GENGIBRE
Ok, eu vou te contar. Voce sabe o
homem muffin?

FARQUAAD
O homem dos muffins?

HOMEM DE GENGIBRE
O homem dos muffins.

FARQUAAD
Sim, eu conheço o homem dos muffins, que vive
em Drury Lane?

HOMEM DE GENGIBRE
Bem, ela é casada com o homem dos muffins.


FARQUAAD
O homem dos muffins?

HOMEM DE GENGIBRE
O homem dos muffins!

FARQUAAD
Ela é casada com o homem dos muffins.

A porta se abre e o Chefe da Guarda entra.

PROTETOR DE CABEÇA
Meu Senhor! Nós achamos.

FARQUAAD
Então o que você está esperando? Trazer
isso dentro.

Mais guardas entram carregando algo que está coberto por um lençol.
Eles penduram o que quer que seja e retiram o lençol. É a magia
Espelho.

HOMEM DE GENGIBRE
(com admiração) Ahhhh...

FARQUAAD
Espelho mágico...

HOMEM DE GENGIBRE
Não conte nada a ele! (Farquaad escolhe
ele se levanta e o joga em uma lata de lixo
com tampa.) Não!

FARQUAAD
Noite. Espelho, espelho na parede.
Este não é o reino mais perfeito
de todos eles?

ESPELHO
Bem, tecnicamente você não é um rei.


FARQUAAD
Ah, Thelônio. (Thelonius levanta um
espelho de mão e o quebra com seu
punho.) Você estava dizendo?

ESPELHO
O que quero dizer é que você ainda não é rei.
Mas você pode se tornar um. Tudo o que tens
fazer é casar com uma princesa.

FARQUAAD
Prossiga.

ESPELHO
(ri nervosamente) Então, sente-se
e relaxe, meu senhor, porque é hora
para você conhecer as solteiras elegíveis de hoje.
E aqui estão eles! Número de despedida de solteira
um é um recluso com abuso mental de
um reino muito, muito distante. Ela gosta de sushi
e banheira de hidromassagem a qualquer hora. Seus hobbies
incluem cozinhar e limpar para ela
duas irmãs más. Por favor, dê as boas-vindas à Cinderela.
(mostra foto da Cinderela) Despedida de solteira
o número dois é uma garota que usa capa de
a terra da fantasia. Embora ela viva
com outros sete homens, ela não é fácil.
Apenas beije seus lábios mortos e congelados e
descubra que fio vivo ela é. Vir
sobre. Desista da Branca de Neve! (mostra
foto da Branca de Neve) E por último, mas
certamente não é o último, número de despedida de solteira
três é uma ruiva ardente de um dragão guardado
castelo cercado por lava quente e fervente!
Mas não deixe que isso te esfrie. Ela é
uma pistola carregada que gosta de pina colads
e ser pego pela chuva. Seu
pelo resgate, Princesa Fiona! (Mostra
foto da Princesa Fiona) Assim será
seja a solteira número um, solteira
número dois ou despedida de solteira número três?


GUARDAS
Dois! Dois! Três! Três! Dois! Dois! Três!


FARQUAAD
Três? Um? Três?

TELÔNIO
Três! (mostra 2 dedos) Escolha o número
três, meu senhor!

FARQUAAD
Ok, ok, uh, número três!

ESPELHO
Lorde Farquaad, você escolheu Princesa
Fiona.

FARQUAAD
Princesa Fiona. Ela é perfeita. Tudo que eu
o que tenho que fazer é encontrar alguém que
poder ir...

ESPELHO
Mas eu provavelmente deveria mencionar o pequeno
coisa que acontece à noite.

FARQUAAD
Eu vou fazer isso.

ESPELHO
Sim, mas depois do pôr do sol...

FARQUAAD
Silêncio! Vou fazer essa Princesa Fiona
minha rainha, e DuLoc finalmente terão
o rei perfeito! Capitão, reúna
seus melhores homens. Nós vamos ter
um torneio. (sorri maldosamente)

Estacionamento DuLoc - Seção Lancelot

Shrek e Burro saem do campo que fica bem perto do estacionamento
muito. O castelo em si tem cerca de 40 andares.

BURRO
Mas é isso. É isso aí.
Esse é o DuLoc. Eu disse que encontraria.


SHREK
Então, esse deve ser o castelo de Lord Farquaad.


BURRO
Uh-huh. Esse é o lugar.

SHREK
Você acha que talvez ele esteja compensando
para algo? (Ele ri, mas depois
geme quando Burro não entende a piada.
Ele continua andando pelo estacionamento
muito.)

BURRO
Ei, espere. Espere, Shrek.

HOMEM
Depressa, querido. Estamos atrasados. Pressa.


SHREK
Ei você! (O atendente, que está vestindo
uma cabeça gigante que se parece com Lord Farquaad,
grita e começa a correr pelo
fileiras de corda para chegar ao portão da frente
para fugir de Shrek.) Espere um segundo.
Olha, eu não vou te comer. Eu acabei de
- - Eu só - - (Ele suspira e então começa
andando direto pelas fileiras. O
Atendente bate em uma parede e cai
abaixo. Shrek e Burro olham para ele então
continue em DuLoc.)

DULOC

Eles olham em volta, mas tudo está quieto.

SHREK
Está quieto. Muito quieto. Onde está todo mundo?


BURRO
Ei, olhe isso!

Burro corre e puxa uma alavanca que está presa a uma caixa
marcado como 'Informações'. A música termina e depois as portas da caixa
Abra. Há pequenas pessoas de madeira lá dentro e elas começam
cantar.

PESSOAS DE MADEIRA
Bem-vindo ao DuLoc, uma cidade tão perfeita


Aqui temos algumas regras

Vamos deitá-los

Não faça ondas, fique na linha

E nos daremos bem

DuLoc é o lugar perfeito

Por favor, fique longe da grama

Engraxe seus sapatos, limpe seu... rosto

DuLoc é, DuLoc é

DuLoc é o lugar perfeito.

De repente, uma câmera tira uma foto de Burro e Shrek.

BURRO
Uau! Vamos fazer isso de novo! (se prepara
correr e puxar a alavanca novamente)


SHREK
(agarra o rabo do Burro e o mantém imóvel)
Não não não não não! Não.

Eles ouvem uma fanfarra de trombeta e vão para a arena.

FARQUAAD
Bravos cavaleiros. Você é o melhor e
mais brilhante em toda a terra. Hoje um
de vocês provará a si mesmo...

Enquanto Shrek e Burro descem o túnel para entrar na arena
Donkey está cantarolando a música tema do DuLoc.

SHREK
Tudo bem. Você está indo no caminho certo
para um traseiro batido.

BURRO
Desculpe por isso.

FARQUAAD
Esse campeão terá a honra -
- não, não - - o privilégio de seguir em frente
e resgate a adorável Princesa Fiona
da fortaleza de fogo do dragão. Se
por qualquer motivo, o vencedor não teve sucesso,
o primeiro vice-campeão ocupará seu lugar
e assim por diante. Alguns de vocês
posso morrer, mas é um sacrifício que estou disposto
fazer. (aplausos) Deixe o torneio
começar! (Ele percebe Shrek) Ah! O que é
que? É horrível!

SHREK
(vira-se para olhar para Burro e depois volta
em Farquaad) Ah, isso não é muito legal.
É apenas um burro.

FARQUAAD
De fato. Cavaleiros, novo plano! Aquele que
mata o ogro será nomeado campeão!
Pegue ele!

HOMENS
Pegue ele!

SHREK
Ah, ei! Agora vamos! Espere agora. (solavancos
em uma mesa onde há canecas de
cerveja)

MULTIDÃO
Vá em frente! Pegue ele!

SHREK
(mostra uma caneca de cerveja) Não podemos simplesmente
resolver isso com uma cerveja?

MULTIDÃO
Mate a fera!

SHREK
Não? Tudo bem então. (bebe a cerveja)
Vamos!

Ele pega a caneca e quebra a torneira do barril grande
de cerveja atrás dele. A cerveja sai correndo encharcando o
outros homens e molhando o chão. É como lama agora. Slides do Shrek
passa pelos homens e pega uma lança que um dos homens deixou cair.
Quando Shrek começa a lutar, Burro sobe em um dos maiores
barris de cerveja. Ele se liberta das cordas e começa a rolar.
Burro consegue esmagar dois homens na lama. Há tanto
brigas acontecendo aqui não vou entrar em detalhes. Satisfazer
para dizer que Shrek arrasa.

BURRO
Ei, Shrek, me marque! Marque-me!

Shrek se aproxima e bate a cabeça de um homem contra Burros. Shrek
sobe nas cordas e interage com a multidão.

SHREK
Sim!

Um homem tenta se esgueirar por trás de Shrek, mas Shrek se vira a tempo
e o vê.

MULHER
A cadeira! Dê-lhe a cadeira!

Shrek quebra uma cadeira nas costas dos caras. Finalmente todos os homens
estão em baixa. Burro chuta um deles no capacete, e o ding
soa o fim da partida. O público vai à loucura.

SHREK
Oh sim! Ah! Ah! Obrigado! Obrigado
muito! Estou aqui até quinta-feira. Tentar
a vitela! Ha, ha! (risos)

A risada para quando todos os guardas ligam suas armas
Shrek.

PROTETOR DE CABEÇA
Devo dar a ordem, senhor?

FARQUAAD
Não, tenho uma ideia melhor. Povo de
DuLoc, eu te dou nosso campeão!

SHREK
O que?

FARQUAAD
Parabéns, ogro. Você ganhou o
honra de embarcar em um grande e nobre
busca.

SHREK
Busca? Eu já estou em uma missão, uma missão
para recuperar meu pântano.

FARQUAAD
Seu pântano?

SHREK
Sim, meu pântano! Onde você jogou aqueles
criaturas de contos de fadas!

FARQUAAD
De fato. Tudo bem, ogro. Eu vou fazer você
um acordo. Vá nessa busca por mim, e
Eu lhe devolverei seu pântano.

SHREK
Exatamente do jeito que foi?

FARQUAAD
Até o último cogumelo venenoso coberto de limo.


SHREK
E os posseiros?

FARQUAAD
Quase desapareceu.

SHREK
Que tipo de missão?

Lapso de tempo - Burro e Shrek agora estão andando pelo campo
indo para longe de DuLoc. Shrek está mastigando uma cebola.

BURRO
Deixe-me ver se entendi. Você vai
vá lutar contra um dragão e resgate uma princesa
só para que Farquaad te devolva
um pântano que você só não tem porque
ele encheu tudo de malucos no primeiro
lugar. Isso está certo?

SHREK
Você sabe, talvez haja uma boa razão
burros não deveriam falar.

BURRO
Eu não entendo. Por que você simplesmente não puxa
alguma daquelas coisas de ogro nele? Acelerador
ele, sitia sua fortaleza, mói
seus ossos para fazer o seu pão, todo
viagem de ogro.

SHREK
Ah, eu sei o quê. Talvez eu pudesse ter
decapitou uma aldeia inteira e colocou
suas cabeças em uma lança, pegaram uma faca,
abrir seu baço e beber seu
fluidos. isso parece bom para você?


BURRO
Uh, não, na verdade não, não.

SHREK
Para sua informação, há muito
mais para ogros do que as pessoas pensam.

BURRO
Exemplo?

SHREK
Exemplo? Ok, hum, ogros são como cebolas.
(ele estende a cebola)

BURRO
(cheira a cebola) Eles cheiram mal?

SHREK
Sim não!

BURRO
Eles fazem você chorar?

SHREK
Não!

BURRO
Você os deixa ao sol, eles ficam
todo marrom, comece a brotar um pouco de branco
cabelos.

SHREK
Não! Camadas! As cebolas têm camadas. Ogros
tem camadas! As cebolas têm camadas. Você
pegue? Nós dois temos camadas. (ele levanta
um suspiro e depois vai embora)

BURRO
(seguindo Shrek) Oh, vocês dois
tem camadas. Oh. {Sniffs} Você sabe,
nem todo mundo gosta de cebola. Bolo! Todo mundo
adora bolos! Os bolos têm camadas.

SHREK
Eu não me importo... com o que todo mundo gosta.
Ogros não são como bolos.

BURRO
Você sabe o que mais todo mundo gosta?
Parfaits. Você já conheceu uma pessoa,
você diz: "Vamos pegar um parfait", eles
dizer: "Claro que não, não gosto de parfait"?
Os parfaits são deliciosos.

SHREK
Não! Você é denso, irritante, miniatura
Besta de carga! Ogros são como cebolas!
E de história. Bye Bye. Te vejo mais tarde.


BURRO
Parfaits podem ser a coisa mais deliciosa
em todo o maldito planeta.

SHREK
Sabe, acho que preferia seu cantarolar.


BURRO
Você tem um lenço de papel ou algo assim? Eu sou
fazendo bagunça. Apenas a palavra parfait
me faça começar a babar.

Eles partem. Há uma montagem de sua jornada. Caminhando
um campo ao pôr do sol. Dormindo sob uma lua brilhante. Shrek tentando
apagar a fogueira no dia seguinte e ter um pequeno problema,
então o Burro faz xixi no fogo para apagá-lo.

MANTENHA DO DRAGÃO

Shrek e Burro estão caminhando até a fortaleza que deveria
casa Princesa Fiona. Parece um vulcão gigante.


BURRO
(cheira) Ohh! Shrek! Você fez isso?
Você tem que avisar alguém antes de você
quebrar um. Minha boca estava aberta e
tudo.

SHREK
Acredite, Burro, se fosse eu, você
estar morto. (cheira) É enxofre. Nós
deve estar chegando perto.

BURRO
Sim, certo, enxofre. Não fique falando
sobre isso é o enxofre. eu sei o que
Eu cheiro. Não foi nenhum enxofre. Isto
também não saiu pedra nenhuma.


Eles sobem pela lateral do vulcão/fortaleza e olham para baixo. Lá
é um pequeno pedaço de rocha bem no centro e é onde
o castelo é. Está rodeado por lava fervente. Parece muito
pressentimento.

SHREK
Claro, é grande o suficiente, mas olhe para o
localização. (risos... então a risada vira
em um gemido)

BURRO
Ah, Shrek? Uh, lembra quando você disse
ogros têm camadas?

SHREK
Ah, sim.

BURRO
Bem, eu tenho uma pequena confissão para
fazer. Os burros não têm camadas. Nós
usar o nosso medo lá fora, no nosso
mangas.

SHREK
Espere um segundo. Burros não têm mangas.


BURRO
Você sabe o que eu quero dizer.

SHREK
Você não pode me dizer que tem medo de altura.


BURRO
Não, só estou um pouco desconfortável
sobre estar em uma ponte frágil
uma fervura como lava!

SHREK
Vamos, burro. Estou bem aqui ao lado
sim, ok? Para apoio emocional., vamos
apenas resolvam essa coisa juntos um
pequeno passo de bebê de cada vez.

BURRO
Realmente?

SHREK
Sério sério.

BURRO
Ok, isso me faz sentir muito melhor.


SHREK
Apenas continue andando. E não olhe para baixo.


BURRO
Ok, não olhe para baixo. Não olhe para baixo.
Não olhe para baixo. Continue andando. Não
olhar para baixo. (ele passa por um apodrecimento
tabuleiro e acaba olhando direto para baixo
na lava) Shrek! Estou olhando para baixo!
Oh, Deus, eu não posso fazer isso! Apenas me deixe
fora, por favor!

SHREK
Mas você já está na metade do caminho.

BURRO
Mas eu sei que metade está segura!

SHREK
Certo, tudo bem. Eu não tenho tempo para isso.
Você vai voltar.

BURRO
Shrek, não! Espere!

SHREK
Apenas, Burro - - Vamos dançar
então, posso? (salta e balança o
ponte)

BURRO
Não faça isso!

SHREK
Oh, me desculpe. Fazer o que? Ah, isso? (salta
a ponte novamente)

BURRO
Isso!

SHREK
Sim? Sim, faça isso. OK. (continua a
saltar e balançar enquanto ele empurra o Burro
a Ponte)

BURRO
Não, Shrek! Não! Pare com isso!

SHREK
Você disse para fazer isso! Estou fazendo isso.

BURRO
Eu vou morrer. Eu vou morrer. Shrek,
Eu vou morrer. (pisa em terra firme)
Oh!

SHREK
Isso basta, Burro. Isso basta. (anda em
em direção ao castelo)

BURRO
Legal. Então, onde está esse cuspidor de fogo
dor no pescoço, afinal?

SHREK
Lá dentro, esperando que a salvemos.
(risos)

BURRO
Eu estava falando sobre o dragão, Shrek.


DENTRO DO CASTELO

BURRO
Você tem medo?

SHREK
Não.

BURRO
Mas...

SHREK
Shh.

BURRO
Ah, que bom. Nem eu. (vê um esqueleto
e suspiros) Porque não há nada de errado
com medo. O medo é sensato
resposta a uma situação desconhecida.
Situação perigosa desconhecida, eu poderia
adicionar. Com um dragão que cospe fogo
e come cavaleiros e cospe fogo,
isso com certeza não significa que você é um covarde
se você está com um pouco de medo. eu tenho certeza como
caramba, não sou covarde. Eu sei que.


SHREK
Burro, duas coisas, ok? Cale-se.
Agora vá até lá e veja se você consegue
encontre qualquer escada.

BURRO
Escadaria? Eu pensei que estávamos procurando
a princesa.

SHREK
(colocando um capacete) A princesa vai
estar subindo as escadas no quarto mais alto
na torre mais alta.

BURRO
O que faz você pensar que ela estará lá?


SHREK
Eu li isso em um livro uma vez. (sai)


BURRO
Legal. Você lida com o dragão. eu vou lidar
as escadas. Vou encontrar aquelas escadas.
Vou chicotear a bunda deles também. Aquelas escadas
não saberão para que lado estão indo.
(sai)

SALA VAZIA

Burro ainda está falando sozinho enquanto olha ao redor da sala.


BURRO
Vou tomar medidas drásticas. Chute
para o meio-fio. Não mexa comigo. Eu sou
o mestre da escada. Eu dominei o
escadaria. Eu gostaria de ter dado um passo aqui.
Eu pisaria em tudo.

EM OUTRO LUGAR

Shrek vê uma luz na janela mais alta da torre.

SHREK
Bem, pelo menos sabemos onde está a princesa
é, mas onde está o...

BURRO
(os) Dragão!

O burro engasga e sai correndo enquanto o dragão ruge novamente.
Shrek consegue tirar Burro do caminho assim como o dragão
respira fogo.

SHREK
Burro, cuidado! (ele consegue
segura a cauda do dragão e segura
ligado) Entendi!

O dragão fica irritado com isso e sacode o rabo e Shrek
sai voando pelo ar e bate no telhado do
torre mais alta. Fiona acorda com um puxão e olha para ele deitado
no chão.

BURRO
Oh! Ah! Ah!

O burro é encurralado enquanto o dragão derruba todos, exceto um pequeno
parte da ponte em que ele está.

BURRO
Não. Ah, não, não! (o dragão ruge) Oh,
que dentes grandes você tem. (o Dragão
rosna) quero dizer dentes brancos e brilhantes.
Eu sei que você provavelmente ouve isso o tempo todo
da sua comida, mas você deve usar alvejante,
porque esse é um sorriso deslumbrante que você
cheguei lá. Detecto um toque de menta
frescor? E você sabe o que mais? Você é
- - Você é uma garota dragão! Ah com certeza!
Quero dizer, é claro que você é uma garota dragão.
Você está simplesmente cheirando a beleza feminina.
(o dragão começa a agitar os olhos
para ele) Qual é o problema com você?
Você tem algo no seu olho? Ah.
Oh. Oh. Cara, eu realmente adoraria ficar,
mas você sabe, eu sou, uh...(o dragão
sopra um anel de fumaça em forma de
coração direto para ele, e ele tosse) eu estou
um asmático, e não sei se seria
descubra se você vai soprar fumaça
argolas. Shrek! (o dragão o escolhe
levanta com os dentes e o carrega)
Não! Shrek! Shrek! Shrek!

QUARTO DA FIONA

Shrek geme ao se levantar do chão. Ele está de costas para Fiona
então ela ajeita o vestido e deita na cama. Ela
então rapidamente estende a mão e tira o buquê de flores
a mesa lateral. Ela então se deita e parece estar dormindo.
Shrek se vira e vai até ela. Ele olha para Fiona por
por um momento e ela franze os lábios. Shrek a segura pelos ombros
e a afasta.

FIONA
Oh! Oh!

SHREK
Acordar!

FIONA
O que?

SHREK
Você é a princesa Fiona?

FIONA
Estou esperando um cavaleiro tão ousado que
me salve.

SHREK
Oh, isso é legal. Agora vamos!

FIONA
Mas espere, senhor cavaleiro. Este é o nosso
primeiro encontro. Não deveria ser maravilhoso,
momento romântico?

SHREK
Sim, desculpe, senhora. Não há tempo.


FIONA
Ei, espere. O que você está fazendo? Você deve
me varrer daquela janela
e desça uma corda até seu valente corcel.


SHREK
Você teve muito tempo para planejar isso,
não é?

FIONA
(sorri) Hum-hmm.

Shrek quebra a fechadura da porta e a puxa para fora e para baixo
o corredor.

FIONA
Mas temos que saborear este momento! Você
poderia recitar um poema épico para mim. A
balada? Um soneto! Uma limerique? Ou alguma coisa!


SHREK
Eu não acho.

FIONA
Posso pelo menos saber o nome do meu campeão?


SHREK
Ah, Shrek.

FIONA
Senhor Shrek. (limpa a garganta e segura
um lenço) eu rezo para que você
aceite este favor como um sinal de minha gratidão.


SHREK
Obrigado!

De repente, eles ouvem o rugido do dragão.

FIONA
(surpreso) Você não matou o dragão?


SHREK
Está na minha lista de tarefas. Agora vamos!
(sai correndo e arrasta Fiona atrás
ele.)

FIONA
Mas isso não está certo! Você estava destinado
para atacar, espada desembainhada, estandarte voando.
Foi o que todos os outros cavaleiros fizeram.


SHREK
Sim, pouco antes de explodirem em chamas.


FIONA
Essa não é a questão. (Shrek de repente
para e ela dá de cara com ele.) Oh! (Shrek
a ignora e se dirige para uma porta de madeira
para o lado.) Espere. Onde você está
indo? A saída é ali.

SHREK
Bem, eu tenho que salvar minha pele.

FIONA
Que tipo de cavaleiro você é?

SHREK
Um de cada tipo. (abre a porta para
a sala do trono)

BURRO
(os) Vá mais devagar. Vá devagar, querido, por favor.
Acredito que é saudável conhecer
alguém durante um longo período de tempo.
Apenas me chame de antiquado. (risos
preocupado) (vemos ele de perto e
à distância enquanto Shrek entra furtivamente
a sala) eu não quero me apressar
um relacionamento físico. Eu não estou emocionalmente
pronto para um compromisso de, uh, isso
- - Magnitude realmente é a palavra que eu sou
procurando por. Magnitude- - Ei, isso
é contato físico indesejado. Ei o que
você esta fazendo? Está bem, está bem. Vamos só
recue um pouco e dê este passo
de uma vez. Nós realmente deveríamos conhecer
uns aos outros primeiro como amigos ou amigos por correspondência.
Estou muito na estrada, mas adoro
recebendo cartões - - eu adoraria
ficar, mas - - Não faça isso! Isso é
meu rabo! Essa é minha cauda pessoal. Você é
vou arrancá-lo. eu não dou permissão
- - O que você vai fazer com isso?
Ei, agora. Sem chance. Não! Não! Não não! Não.
Não não não. Não! Oh!

Shrek pega uma corrente que está conectada ao lustre e balança
em direção ao dragão. Ele erra e balança de volta novamente. Ele olha
para cima e percebe que o lustre está logo acima da cabeça do dragão.
Ele puxa a corrente e ela se solta e ele cai e bate
Burro fora do caminho quando o dragão estiver prestes a beijá-lo.
Em vez disso, o dragão beija a bunda de Shreks. Ela abre os olhos e
ruge. Shrek solta a corrente e o lustre cai
a cabeça dela, mas é muito grande e passa por cima da cabeça dela e se forma
uma espécie de coleira para ela. Ela ruge novamente e Shrek e Burro
saia correndo. Estilo muito 'Matrix'. Shrek agarra Burro e
então agarra a Princesa Fiona enquanto ele passa por ela.

BURRO
Olá princesa!

FIONA
Isso fala!

SHREK
Sim, é fazê-lo calar a boca, isso é
o truque.

Todos eles começam a gritar quando o dragão os aproxima. Manchas de Shrek
um slide descendente e salta. Mas infelizmente há um
quebra a pedra e atinge Shrek bem na virilha. Dele
os olhos se cruzam e quando ele chega ao final do escorregador ele tropeça
sai e anda levemente.

SHREK
Oh!

Shrek os aproxima da saída e coloca Burro e Fiona.


SHREK
Ok, vocês dois, ouvidos para a saída! Doente
cuide do dragão.

Shrek pega uma espada e volta para o interior do
castelo. Ele joga a espada entre vários
elos da cadeia. Os elos da corrente estão presos ao lustre que
ainda está no pescoço do dragão.

SHREK
(ecoando) Corra!

Todos eles saem correndo para a saída com o dragão quente
perseguir. Eles chegam à ponte e atravessam. Os dragões
cospe fogo e a ponte começa a queimar. Todos eles aguentam
pela vida enquanto as cordas que sustentam a ponte desmoronam. Eles
são balançados para o outro lado. Enquanto ficam pendurados de cabeça para baixo, eles parecem
horrorizado enquanto o dragão voa sobre a lava fervente para
pegue eles. Mas de repente o lustre com a corrente sacode
dragão de volta e ela é incapaz de chegar até eles. Nossa gangue sobe
rapidamente para a segurança enquanto o dragão parece zangado e então dá um
choramingo triste enquanto observa Donkey se afastar.

FIONA
(deslizando pela colina do 'vulcão') Você
fiz isso! Você me salvou! Você é incrível.
(atrás dela o burro cai morro abaixo)
Você é... - Você é maravilhoso. Você é...
(se vira e vê Shrek cair no
colina e esbarrar no Burro) um pouco
pouco ortodoxo, admito. Mas a tua ação
é grande, e teu coração é puro. Eu sou
eternamente em dívida com você. (Burro limpa
sua garganta.) E onde estaria um corajoso
cavaleiro ficará sem seu nobre corcel?


BURRO
Espero que você tenha ouvido isso. Ela me chamou
um nobre corcel. Ela acha que sou um corcel.


FIONA
A batalha está vencida. Você pode remover seu
capacete, bom senhor cavaleiro.

SHREK
Oh não.

FIONA
Por que não?

SHREK
Eu tenho cabelo de capacete.

FIONA
Por favor. Eu olharia para o rosto
do meu salvador.

SHREK
Não, não, você não iria - - 'st.

FIONA
Mas como você vai me beijar?

SHREK
O que? (para o Burro) Isso não estava no
descrição do trabalho.

BURRO
Talvez seja uma vantagem.

FIONA
Não, é o destino. Ah, você deve saber
Como vai. Uma princesa trancada em um
torre e cercado por um dragão é resgatado
por um bravo cavaleiro, e então eles compartilham
primeiro beijo do amor verdadeiro.

BURRO
Hum? Com Shrek? Você pensa... - Espere.
Espere. Você acha que Shrek é verdade
amor?

FIONA
Bem, sim.

Tanto Burro quanto Shrek começaram a rir.

BURRO
Você acha que Shrek é seu verdadeiro amor!


FIONA
O que é tão engraçado?

SHREK
Digamos que não sou seu tipo, ok? Fiona:
Claro que você é. Você é meu salvador.
Agora... - Agora tire seu capacete.

SHREK
Olhar. Eu realmente não acho que isso seja um
Boa ideia.

FIONA
Basta tirar o capacete.

SHREK
Eu não estou indo.

FIONA
Tire.

SHREK
Não!

FIONA
Agora!

SHREK
OK! Fácil. Como você manda. Sua Alteza.
(tira o capacete)

FIONA
Você... - Você é um... - um ogro.

SHREK
Oh, você estava esperando o Príncipe Encantado.


FIONA
Bem, sim, na verdade. Oh não. Isso é
tudo errado. Você não deveria estar
um ogro.

SHREK
Princesa, fui enviado para resgatá-la por
Lorde Farquaad, ok? Ele é aquele que
quer se casar com você.

FIONA
Então por que ele não veio me resgatar?


SHREK
Boa pergunta. Você deveria perguntar isso a ele
quando chegarmos lá.

FIONA
Mas eu tenho que ser resgatado pela minha verdadeira
amor, não por algum ogro e seu- - seu
bicho de estimação.

BURRO
Bem, chega de nobre corcel.

SHREK
Você não está facilitando meu trabalho.


FIONA
Sinto muito, mas seu trabalho não é problema meu.
Você pode dizer a Lord Farquaad que se ele
quiser me resgatar adequadamente, eu estarei
esperando por ele aqui mesmo.

SHREK
Ei! Eu não sou mensageiro de ninguém, tudo
certo? (sinistro) Sou entregador.
(ele rapidamente a pega e balança
ela por cima do ombro como se ela fosse uma
saco de batatas)

FIONA
Você não ousaria. Coloque-me no chão!

SHREK
Você vem, Burro?

BURRO
Estou bem atrás de você.

FIONA
Coloque-me no chão, ou você sofrerá o
consequências! Isso não é digno!
Coloque-me no chão!

MADEIRAS

Passou um pouco de tempo e Fiona se acalmou. Ela só
fica pendurado lá molemente enquanto Shrek a carrega.

BURRO
Ok, então aqui está outra pergunta. Dizer
tem uma mulher que gosta de você, certo,
mas você realmente não gosta dela desse jeito.
Como você a decepciona tão facilmente
os sentimentos dela não estão feridos, mas você não
ficar queimado até ficar crocante e comido?

FIONA
Você acabou de dizer a ela que ela não é sua verdade
amor. Todo mundo sabe o que acontece quando
você encontra o seu...(Shrek a deixa cair
o chão) Ei! Quanto mais cedo chegarmos
DuLoc, melhor.

BURRO
Você vai adorar lá, princesa.
É lindo!

FIONA
E o meu futuro noivo? Lorde Farquaad?
Como ele é?

SHREK
Deixe-me colocar desta forma, princesa. Homens
da estatura de Farquaad são escassos.
(ele e o Burro riem)

Shrek então começa a jogar água no rosto para se lavar.
a poeira e a sujeira.

BURRO
Não sei. Há quem pense
pouco dele. (eles riem de novo) Fiona:
Pare com isso. Parem com isso, vocês dois. Você é
apenas com ciúmes, você nunca pode estar à altura
a um grande governante como Lord Farquaad.


SHREK
Sim, bem, talvez você esteja certa, princesa.
Mas vou deixar você fazer a "medição"
quando você o ver amanhã.

FIONA
(olha para o pôr do sol) Amanhã?
Vai demorar tanto? Não deveríamos parar
fazer acampamento?

SHREK
Não, isso vai demorar mais. Podemos manter
indo.

FIONA
Mas há ladrões na floresta.

BURRO
Uau! Acabou o tempo, Shrek! O acampamento está começando
para soar bem.

SHREK
Ei, vamos lá. Eu sou mais assustador do que qualquer coisa
vamos ver nesta floresta.


FIONA
Preciso encontrar um lugar para acampar agora!


As orelhas de Burro e Shrek abaixam enquanto eles se afastam dela.


PENHASCO DA MONTANHA

Shrek encontrou uma caverna que parece estar em boas condições. Ele empurra
uma pedra fora do caminho para revelar a caverna.

SHREK
Ei! Por aqui.

BURRO
Shrek, podemos fazer melhor que isso. EU
não acho que isso seja adequado para uma princesa.


FIONA
Não, não, é perfeito. Só precisa
alguns toques caseiros.

SHREK
Toques caseiros? Como o que? (ele ouve
um barulho de rasgo e olha para Fiona
que arrancou a casca de uma árvore.)


FIONA
Uma porta? Bem, senhores, eu lhes convido
boa noite. (entra na caverna e
coloca a porta de casca de árvore atrás dela)


BURRO
Você quer que eu leia uma história para você dormir?
Eu vou.

FIONA
(os) Eu disse boa noite!

Shrek olha para Burro por um segundo e depois vai mover o
pedra em frente à entrada da caverna com Fiona
ainda dentro.

BURRO
Shrek, o que você está fazendo?

SHREK
(risos) Eu só... - Você sabe... - Ah,
vamos. Eu estava apenas brincando.

MAIS TARDE NAQUELA NOITE

Shrek e Burro estão sentados ao redor de uma fogueira. Eles estão olhando
para o céu enquanto Shrek aponta certas constelações de estrelas
para o burro.

SHREK
E, uh, esse é o Throwback,
o único ogro que cuspiu em três
Campos de trigo.

BURRO
Certo. Sim. Ei, você pode contar meu futuro
destas estrelas?

SHREK
As estrelas não dizem o futuro, Burro.
Eles contam histórias. Olha, lá está Bloodnut,
o Flatulento. Você pode adivinhar o que ele é
famoso por.

BURRO
Eu sei que você está inventando isso.

SHREK
Não, olhe. Lá está ele, e lá está o
grupo de caçadores fugindo de seu
fedor.

BURRO
Isso não é nada além de um monte de pequenas coisas
pontos.

SHREK
Você sabe, Burro, às vezes as coisas são
mais do que parecem. Hum? Esqueça.


BURRO
(dá um grande suspiro) Ei, Shrek, o que
vamos fazer quando chegarmos ao nosso pântano, de qualquer maneira?


SHREK
Nosso pântano?

BURRO
Você sabe, quando terminarmos de resgatar
a princesa.

SHREK
Nós? Burro, não existe "nós". Há
não "nosso". Somos apenas eu e meu pântano.
A primeira coisa que vou fazer é construir
um muro de três metros ao redor da minha terra.

BURRO
Você me feriu profundamente, Shrek. Você me cortou de verdade
profundo agora. Você sabe oque eu penso?
Eu acho que toda essa coisa de parede é apenas
uma maneira de manter alguém fora.

SHREK
Não, você acha?

BURRO
Você está escondendo alguma coisa?

SHREK
Não importa, Burro.

BURRO
Ah, essa é mais uma daquelas cebolas
coisas, não é?

SHREK
Não, este é um daqueles que larga e
deixe as coisas em paz.

BURRO
Por que você não quer falar sobre isso?


SHREK
Por que você quer falar sobre isso?

BURRO
Por que você está bloqueando?

SHREK
Eu não estou bloqueando.

BURRO
Ah, sim, você é.

SHREK
Burro, estou avisando.

BURRO
Quem você está tentando manter fora?

SHREK
Todos! OK?

BURRO
(pausa) Ah, agora estamos chegando a algum lugar.
(sorri)

Neste ponto, Fiona puxa a 'porta' da entrada para
a caverna e atinge o pico. Nenhum dos caras a vê.

SHREK
Oh! Pelo amor de Pete! (levanta-se e
caminha até a beira do penhasco
e se senta)

BURRO
Qual é o seu problema? O que você tem contra
o mundo inteiro, afinal?

SHREK
Olha, não sou eu quem tem o problema,
OK? É o mundo que parece ter
um problema comigo. As pessoas dão uma olhada
para mim e vá. "Aah! Socorro! Corra! Um grande,
ogro estúpido e feio!" Eles me julgam antes
eles até me conhecem. É por isso que estou melhor
sozinho.

BURRO
Você sabe o que? Quando nos conhecemos, eu não
acho que você era apenas um grande, estúpido e feio
ogro.

SHREK
Sim, eu sei.

BURRO
Então, há algum burro aí em cima?


SHREK
Bem, há, hum, Gabby, a Pequena
e irritante.

BURRO
Ok, ok, eu vejo agora. O grande brilhante
um, bem ali. Aquele aí?


Fiona recoloca a porta.

SHREK
Essa é a lua.

BURRO
Oh, tudo bem.

DuLoc - Quarto de Farquaad

A câmera mostra muitas coisas do casamento. Música suave toca
no fundo. Farquaad está na cama, observando o Magic
O espelho mostra a ele a princesa Fiona.

FARQUAAD
Mais uma vez, mostre-me novamente. Espelho Espelho,
mostre-a para mim. Mostre-me a princesa.


ESPELHO
Hmph.

O Mirror retrocede e começa a tocar novamente desde o início.


FARQUAAD
Ah. Perfeito.

Farquaad olha para o peito nu e puxa o lençol
cobrir-se como se Fiona pudesse vê-lo enquanto ele olha timidamente
para sua imagem no espelho.

MANHÃ

Fiona sai da caverna. Ela olha para Shrek e Burro
que ainda estão dormindo. Ela vagueia pela floresta e vem
através de um pássaro azul. Ela começa a cantar. O pássaro canta junto
com ela. Ela atinge notas cada vez mais altas e o pássaro se debate
para acompanhá-la. De repente, a pressão da nota é muito
grande e o pássaro explode. Fiona parece um pouco envergonhada, mas
ela olha os ovos que o pássaro deixou para trás. Lapso de tempo, Fiona
agora está cozinhando os ovos para o café da manhã. Shrek e Burro ainda estão
dormindo. Shrek acorda e olha para Fiona. O burro está falando
em seu sono.

BURRO
(baixinho) Mmm, sim, você sabe que eu gosto
é assim. Vem cá Neném. Eu disse
Eu gosto disso.

SHREK
Burro, acorde. (saca ele)

BURRO
Huh? O que?

SHREK
Acordar.

BURRO
O que? (alongamentos e bocejos)

FIONA
Bom dia. Hm, como você gosta do seu
ovos?

BURRO
Ah, bom dia, princesa!

Fiona se levanta e coloca os ovos na frente deles.

SHREK
O que é tudo isso?

FIONA
Você sabe, nós meio que tivemos uma situação ruim
comece ontem. eu queria fazer isso
você decide. Quero dizer, afinal, você fez
me salve.

SHREK
Ah, obrigado.

Burro cheira os ovos e lambe os lábios.

FIONA
Bem, coma. Temos um grande dia pela frente
de nós. (sai)

MAIS TARDE

Eles estão mais uma vez a caminho. Eles estão andando pelo
floresta. Shrek arrota.

BURRO
Shrek!

SHREK
O que? É um elogio. Melhor sair
do que dentro, eu sempre digo. (risos)

BURRO
Bem, não é jeito de se comportar na frente
de uma princesa.

Fiona arrota

FIONA
Obrigado.

BURRO
Ela é tão desagradável quanto você.

SHREK
(risos) Você sabe, você não é exatamente
o que eu esperava.

FIONA
Bem, talvez você não devesse julgar as pessoas
antes de conhecê-los.

Ela sorri e continua andando, cantando baixinho. De repente
do nada, um homem desce e joga Fiona para cima
uma árvore.

Robin Hood
A liberdade! Ei!

SHREK
Princesa!

FIONA
(para Robin Hood) O que você está fazendo?


Robin Hood
Fique quieto, mon cherie, pois eu sou seu salvador!
E eu estou te resgatando desse verde...(beijos
levanta o braço enquanto Fiona se afasta
nojo)... besta.

SHREK
Ei! Essa é minha princesa! Vá encontrar você
ter!

Robin Hood
Por favor, monstro! Você não vê que eu sou um
um pouco ocupado aqui?

FIONA
(ficando farto) Olha, amigo, eu não
saiba quem você pensa que é!

Robin Hood
Oh! Claro! Ah, que rude. Por favor
deixe-me me apresentar. Oh, homens alegres.
(risos)

De repente, um acordeão começa a tocar e os homens alegres aparecem
dos arbustos. Eles começam a cantar a música tema de Robin.

HOMENS FELIZES
Ta, dah, dah, dah, uau.

Robin Hood
Eu roubo dos ricos e dou aos
carente.

HOMENS FELIZES
Ele pega uma pequena porcentagem,

Robin Hood
Mas não sou ganancioso. Eu resgato linda
donzelas, cara, estou bem.

HOMENS FELIZES
Que cara, Monsieur Hood.

Robin Hood
Divida isso. Eu gosto de uma luta honesta
e uma empregada atrevida...

HOMENS FELIZES
O que ele está basicamente dizendo é que gosta
obter...

Robin Hood
Pago. Então...Quando um ogro no mato
agarra uma senhora pela bunda. Isso é ruim.


HOMENS FELIZES
Isso é ruim.

Robin Hood
Quando uma bela está com uma fera, isso faz
eu estou muito bravo.

HOMENS FELIZES
Ele está bravo, ele está muito, muito bravo.


Robin Hood
Vou pegar minha lâmina e enfiá-la
seu coração, mantenham seus olhos em mim, garotos
porque estou prestes a começar...

Ouve-se um grunhido quando Fiona desce do galho da árvore e
deixa Robin Hood inconsciente.

FIONA
Cara, isso foi chato!

Shrek olha para ela com admiração.

HOMEM ALEGRE
Oh, seu pequeno- - (atira uma flecha em
Fiona, mas ela sai do caminho)


A flecha voa em direção ao Burro, que pula nos braços de Shrek para
saia do caminho. A flecha passa a ricochetear em uma árvore.


Outra sequência de luta começa e Fiona dá um grito de caratê e
em seguida, começa a espancar os Merry Men. Há
um momento 'Matrix' muito interessante aqui, quando Fiona faz uma pausa
no ar para arrumar o cabelo. Finalmente todos os Homens Alegres caíram,
e Fiona começa a se afastar.

FIONA
Ah, vamos?

SHREK
Segure o telefone. (deixa o Burro cair e começa
andando atrás de Fiona) Oh! Ei, ei,
Uau. Espere agora. De onde isso veio
de?

FIONA
O que?

SHREK
Que! Ali atrás. Isso foi incrível!
Onde você aprendeu aquilo?

FIONA
Bem...(risos) quando alguém mora sozinho,
uh, é preciso aprender essas coisas em
caso haja um... (suspiros e pontos)
há uma flecha na sua bunda!

SHREK
O que? (se vira e olha) Oh, você poderia
Olhe para isso? (ele vai tirar
mas recua porque é macio)


FIONA
Oh não. Isso é tudo minha culpa. Estou tão
desculpe.

BURRO
(se aproximando) Por quê? O que está errado?

FIONA
Shrek está ferido.

BURRO
Shrek está ferido. Shrek está ferido? Oh não,
Shrek vai morrer.

SHREK
Burro, estou bem.

BURRO
Você não pode fazer isso comigo, Shrek. Eu sou
muito jovem para você morrer. Mantenha suas pernas
elevado. Vire a cabeça e tussa.
Alguém conhece o Heimlich?

FIONA
Burro! Acalmar. Se você quiser ajudar
Shrek, corra para a floresta e me encontre
uma flor azul com espinhos vermelhos.

BURRO
Flor azul, espinhos vermelhos. Ok, estou ligado
isto. Flor azul, espinhos vermelhos. Não morra
Shrek. Se você vir um túnel longo, fique
longe da luz!

SHREK E FIONA
Burro!

BURRO
Oh sim. Certo. Flor azul, espinhos vermelhos.
(foge)

SHREK
Para que servem as flores?

FIONA
(como se fosse óbvio) Para se livrar
de Burro.

SHREK
Ah.

FIONA
Agora você fica quieto, e eu vou arrancar isso
coisa fora. (dá um pouco na flecha
puxar)

SHREK
(pula para longe) Ai! Ei! Fácil com o
puxando.

Enquanto eles continuam a conversar, Fiona continua perseguindo a flecha e
Shrek continua se esquivando de suas mãos.

FIONA
Sinto muito, mas tem que sair.


SHREK
Não, é macio.

FIONA
Agora, espere.

SHREK
O que você está fazendo é o oposto de
ajuda.

FIONA
Não se mova.

SHREK
Olha, tempo limite.

FIONA
Você poderia...(grunhidos enquanto Shrek coloca seu
mão sobre o rosto dela para impedi-la de
chegando na flecha) Ok. Fazer o que
você propõe que façamos?

EM OUTRO LUGAR

Burro ainda procura a flor especial.

BURRO
Flor azul, espinhos vermelhos. Flor-azul,
espinhos vermelhos. Flor azul, espinhos vermelhos.
Isso seria muito mais fácil se eu não estivesse
daltônico! Flor azul, espinhos vermelhos.


SHREK
(os) Ai!

BURRO
Espere, Shrek! Estou chegando'! (rasga um
florescer em um arbusto próximo que simplesmente acontece
ser uma flor azul com espinhos vermelhos)


O CAMINHO DA FLORESTA

SHREK
Ai! Não é bom.

FIONA
OK. OK. Quase posso ver a cabeça.
(Shrek grunhe enquanto puxa) É só
sobre...

SHREK
Ai! Ah! (ele sacode e consegue cair
acabou com Fiona em cima dele)

BURRO
Aham.

SHREK
(jogando Fiona para longe dele) Nada
aconteceu. Nós estávamos apenas, uh - -

BURRO
Olha, se você quisesse ficar sozinho, tudo
você tinha que fazer era perguntar. OK?

SHREK
Oh vamos lá! Essa é a última coisa
minha mente. A princesa aqui estava apenas-
- (Fiona puxa a flecha) Ugh! (ele
se vira para olhar para Fiona, que se levanta
a flecha com um sorriso) Ai!

BURRO
Ei, o que é isso? (risada nervosa)
Isso é... isso é sangue?

Burro desmaia. Shrek se aproxima e o pega enquanto eles continuam
no caminho deles.

Há uma montagem de cenas enquanto o grupo volta para DuLoc.
Shrek rastejando até o topo de uma árvore para fazê-la cair sobre um
pequeno riacho para que Fiona não se molhe. Shrek então se levanta
O burro está prestes a cruzar a árvore e a árvore balança para trás
na posição vertical e o Burro sai voando. Shrek golpeando
e um monte de moscas e mosquitos. Fiona pega uma teia de aranha próxima
que está em um galho de árvore e corre pelo campo balançando-o
por perto para pegar os insetos. Ela então entrega para Shrek, que começa
comendo como se fosse uma delícia. Enquanto ele se afasta, ela lambe os dedos.
Shrek pegando um sapo e enchendo-o como um balão e apresentando
para Fiona. Fiona pegando uma cobra, explodindo-a, criando
transformá-lo em um animal balão e apresentá-lo a Shrek. O grupo
chegando a um moinho de vento que fica perto de DuLoc.

MOINHO DE VENTO

SHREK
Aí está, princesa. Seu futuro espera
você.

FIONA
Esse é o DuLoc?

BURRO
Sim, eu sei. Você sabe, Shrek pensa
Lord Farquaad está compensando alguma coisa,
o que eu acho que significa que ele realmente tem... (Shrek
pisa em seu casco) Ai!

SHREK
Hum, eu, uh- - acho melhor irmos
sobre.

FIONA
Claro. Mas, Shrek? Estou - - estou preocupado
sobre o burro.

SHREK
O que?

FIONA
Quero dizer, olhe para ele. Ele não parece
tão bom.

BURRO
O que você está falando? Estou bem.


FIONA
(ajoelha-se para olhá-lo nos olhos) Isso é
o que eles sempre dizem, e depois
coisa que você sabe, você está de costas.
(pausa) Morto.

SHREK
Você sabe, ela está certa. Você está horrível.
Você quer se sentar?

FIONA
Uh, você sabe, vou fazer um chá para você.


BURRO
Eu não queria dizer nada, mas eu
senti uma pontada no pescoço e quando
Eu viro minha cabeça assim, olha, (vira
seu pescoço de uma forma muito afiada até que seu
cabeça está completamente de lado) Ai! Ver?


SHREK
Quem está com fome? Vou encontrar um jantar para nós.


FIONA
Eu vou buscar a lenha.

BURRO
Ei, onde você vai? Ah, cara, eu não posso
sinta meus dedos dos pés! (olha para baixo e grita)
Eu não tenho dedos nos pés! Eu acho que preciso
um abraço.

PÔR DO SOL

Shrek acendeu uma fogueira e está cozinhando o resto do jantar enquanto
Fiona come.

FIONA
Hum. Isso é bom. Isto é muito bom.
O que é isso?

SHREK
Uh, rato da erva daninha. Estilo churrasqueira.

FIONA
Sem brincadeiras. Bem, isso é delicioso.


SHREK
Bem, eles também ficam ótimos em ensopados. Agora,
Não quero me gabar, mas faço uma maldade
ensopado de rato com ervas daninhas. (risos)

Fiona olha para DuLoc e suspira.

FIONA
Acho que jantarei de maneira um pouco diferente
amanhã à noite.

SHREK
Talvez você possa vir me visitar no pântano
às vezes. Vou cozinhar todo tipo de coisa
para você. Sopa de sapo do pântano, tártaro olho de peixe
- - O que você disser.

FIONA
(sorri) Eu gostaria disso.

Eles sorriem um para o outro.

SHREK
Hum, princesa?

FIONA
Sim, Shrek?

SHREK
Eu, hum, eu estava me perguntando... você está... (suspira)
Você vai comer aquilo?

BURRO
(risos) Cara, isso não é romântico?
Basta olhar para aquele pôr do sol.

FIONA
(salta) Pôr do sol? Oh não! Quero dizer, é
tarde. E-É muito tarde.

SHREK
O que?

BURRO
Espere um minuto. Eu vejo o que está acontecendo
aqui. Você tem medo do escuro, não é
você?

FIONA
Sim! Sim é isso. Eu estou aterrorizado.
Você sabe, é melhor eu entrar.

BURRO
Não se sinta mal, princesa. Eu costumava
tenha medo do escuro também, até -
- Ei, não, espere. ainda tenho medo
o escuro.

Shrek suspira

FIONA
Boa noite.

SHREK
Boa noite.

Fiona entra no moinho e fecha a porta. Burro parece
em Shrek com um novo olhar.

BURRO
Ah! Agora eu realmente vejo o que está acontecendo
aqui.

SHREK
Ah, do que você está falando?

BURRO
Eu nem quero ouvir isso. Olha, eu estou
um animal, e eu tenho instintos. E
Eu sei que vocês dois estavam cavando um no outro
outro. Eu podia sentir isso.

SHREK
Você é louco. Eu só estou trazendo ela
de volta para Farquaad.

BURRO
Ah, vamos lá, Shrek. Acorde e cheire
os feromônios. Basta entrar e dizer
ela como você se sente.

SHREK
Eu... - Não há nada para contar. Além do mais,
mesmo se eu dissesse isso a ela, bem, você
sei - - e não estou dizendo que sim porque
Eu não... ela é uma princesa, e eu sou
- -

BURRO
Um ogro?

SHREK
Sim. Um ogro.

BURRO
Ei, onde você vai?

SHREK
Para conseguir... mover lenha. (suspira)

Burro olha para a grande pilha de lenha que já existe
é.

ESPAÇO DE TEMPO

Burro abre a porta do Moinho e entra. Fiona está
nenhum lugar para ser visto.

BURRO
Princesa? Princesa Fiona? Princesa,
onde você está? Princesa?

Fiona olha para Donkey das sombras, mas não podemos vê-la.


BURRO
É muito assustador aqui. Eu não estou jogando
sem jogos.

De repente, Fiona cai da grade. Ela se levanta, mas ela não
parecer com ela mesma. Ela parece um ogro e o Burro começa a enlouquecer
fora.

BURRO
Ah!

FIONA
Oh não!

BURRO
Nenhuma ajuda!

FIONA
Shh!

BURRO
Shrek! Shrek! Shrek!

FIONA
Não, está tudo bem. Tudo bem.

BURRO
O que você fez com a princesa?


FIONA
Burro, eu sou a princesa.

BURRO
Ah!

FIONA
Sou eu, neste corpo.

BURRO
Oh meu Deus! Você comeu a princesa. (para
sua barriga) Você pode me ouvir?

FIONA
Burro!

BURRO
(ainda apontando para a barriga) Ouça,
continue respirando! Eu vou te tirar
lá!

FIONA
Não!

BURRO
Shrek! Shrek! Shrek!

FIONA
Shh.

BURRO
Shrek!

FIONA
Este sou eu.

Burro olha nos olhos dela enquanto ela acaricia seu focinho, e ele se acalma
abaixo.

BURRO
Princesa? O que aconteceu com você? Você é,
ah, ah, ah, diferente.

FIONA
Eu sou feio, ok?

BURRO
Bem, sim! Foi algo que você comeu?
Porque eu disse ao Shrek que aqueles ratos eram um
péssima ideia. Você é o que você come, eu disse.
Agora - -

FIONA
Não. Eu... estou assim há muito tempo
pelo que me lembro.

BURRO
O que você quer dizer? Olha, eu nunca
já vi você assim antes.

FIONA
Isso só acontece quando o sol se põe.
“À noite de um jeito, de dia de outro.
será a norma... até você encontrar
o primeiro beijo do amor verdadeiro... e depois pegue
a verdadeira forma do amor."

BURRO
Ah, isso é lindo. eu não sabia
você escreveu poesia.

FIONA
É um feitiço. (suspiro) Quando eu era um pouco
garota, uma bruxa lançou um feitiço em mim. Todo
noite eu me torno isso. Isto horrível,
fera feia! Fui colocado em uma torre
esperar o dia em que meu verdadeiro amor iria
me salve. É por isso que eu tenho que me casar
Lord Farquaad amanhã antes do sol
define e ele me vê assim. (começa
chorar)

BURRO
Tudo bem, tudo bem. Acalmar. Olhar,
não é tão ruim. Você não é tão feio.
Bem, eu não vou mentir. Você é feio.
Mas você só fica assim à noite.
Shrek é feio 24 horas por dia, 7 dias por semana.

FIONA
Mas Burro, eu sou uma princesa, e isso
não é a aparência de uma princesa.


BURRO
Princesa, que tal se você não se casar
Farquaad?

FIONA
Eu tenho que. Somente o beijo do meu verdadeiro amor
pode quebrar o feitiço.

BURRO
Mas, você sabe, hum, você é uma espécie de
orge e Shrek - - bem, você tem um
muito em comum.

FIONA
Shrek?

FORA

Shrek está caminhando em direção ao moinho de vento com um girassol no colo
mão.

SHREK
(para si mesmo) Princesa, eu - - Uh, como vai
vai, em primeiro lugar? Bom? Hum, bom
para mim também. Estou bem. eu vi essa flor
e pensei em você porque é lindo
e - - bem, eu realmente não gosto disso,
mas pensei que você poderia gostar porque
você é bonita. Mas eu gosto de você de qualquer maneira.
Eu... - uh, uh... (suspira) Estou com problemas.
Ok, aqui vamos nós.

Ele caminha até a porta e para do lado de fora quando ouve Burro
e Fiona conversando.

FIONA
(os) Não posso simplesmente casar com quem eu quiser.
Dê uma boa olhada em mim, Burro. Quero dizer,
realmente, quem pode amar uma fera tanto
horrível e feio? "Princesa" e "feia"
não vá junto. É por isso que não posso
fique aqui com Shrek.

Shrek recua em estado de choque.

FIONA
(os) Minha única chance de viver feliz
para sempre é casar com meu verdadeiro amor.


Shrek dá um suspiro profundo. Ele joga a flor no chão e caminha
ausente.

DENTRO

FIONA
Você não vê, Burro? É assim que
tem que ser. É a única maneira de quebrar
o feitiço.

BURRO
Você pelo menos tem que contar a verdade ao Shrek.


FIONA
Não! Você não pode dizer uma palavra. Ninguém
deve saber.

BURRO
Qual é o sentido de poder falar
se você tem que guardar segredos?

FIONA
Prometa que não vai contar. Promessa!

BURRO
Tudo bem, tudo bem. Eu não vou contar a ele.
Mas voce devia. (sai para fora) eu só
sei que antes que isso acabe, eu vou
precisa de muita terapia séria.
Olhe para o meu olho tremendo.

Fiona sai pela porta e o observa se afastar. Ela parece
para baixo e avista o girassol. Ela pega antes de voltar
dentro do moinho de vento.

MANHÃ

O burro está dormindo. Shrek não está em lugar nenhum. Fiona ainda está
acordado. Ela está arrancando pétalas do girassol.

FIONA
Eu digo a ele, eu digo a ele que não. Eu digo a ele,
Eu digo a ele que não. Eu digo a ele. (ela rapidamente
corre até a porta e sai) Shrek!
Shrek, tem algo que eu quero...(ela
olha e vê o sol nascente, e como
o sol atinge o céu, ela se vira
em um humano.)

Assim que ela olha para o sol, ela vê Shrek caminhando em direção
dela.

FIONA
Shrek. Você está bem?

SHREK
Perfeito! Nunca estive melhor.

FIONA
Eu - - eu não - - Há algo
Eu tenho que te contar.

SHREK
Você não precisa me dizer nada,
Princesa. Eu ouvi o suficiente ontem à noite.


FIONA
Você ouviu o que eu disse?

SHREK
Toda palavra.

FIONA
Achei que você entenderia.

SHREK
Ah, Eu entendi. Como você disse: "Quem
poderia amar uma fera horrível e feia?"


FIONA
Mas eu pensei que isso não importaria
você.

SHREK
Sim? Bem, é verdade. (Fiona olha para
ele em estado de choque. Ele olha além dela e
vê um grupo se aproximando.) Ah, certo
na hora. Princesa, eu trouxe para você
um pouco de algo.

Farquaad chegou com um grupo de seus homens. Ele parece muito majestoso
sentado em seu cavalo. Você nunca imaginaria que ele é apenas
tipo 3 pés de altura. Burro acorda bocejando enquanto os soldados
marchar.

BURRO
O que eu perdi? O que eu perdi? (pontos
os soldados) (abafado) Quem disse isso?
Não poderia ter sido o burro.

FARQUAAD
Princesa Fiona.

SHREK
Como prometido. Agora entregue.

FARQUAAD
Muito bem, ogro. (mostra um pedaço
de papel) A escritura do seu pântano, limpa
fora, conforme combinado. Pegue e vá antes
Eu mudei de ideia. (Shrek pega o papel)
Perdoe-me, princesa, por surpreender
você, mas você me assustou, pois eu tenho
nunca vi uma beleza tão radiante antes.
Sou Lorde Farquaad.

FIONA
Lorde Farquaad? Ah, não, não. (Farquaad
estala os dedos) Perdoe-me, meu senhor,
pois eu estava apenas dizendo um breve... (Relógios
enquanto Farquaad é retirado do cavalo
e sentou-se na frente dela. Ele vem
até a cintura.) adeus.

FARQUAAD
Ah, isso é tão fofo. Você não tem
desperdiçar boas maneiras com o ogro. Isso é
não como se tivesse sentimentos.

FIONA
Não, você está certo. Isso não acontece.

Burro observa essa troca com uma expressão curiosa no rosto.


FARQUAAD
Princesa Fiona, linda, justa, impecável
Fiona. Peço sua mão em casamento.
Você será a noiva perfeita para o
noivo perfeito?

FIONA
Lorde Farquaad, eu aceito. Nada faria
fazer - -

FARQUAAD
(interrompendo) Excelente! Vou começar
os planos, para amanhã nos casamos!

FIONA
Não! Quero dizer, uh, por que esperar? Vamos pegar
casado hoje antes do sol se pôr.


FARQUAAD
Ah, você está ansioso? Você tem razão.
Quanto antes melhor. Há tanto
pendência! Tem o bufê, o bolo,
a banda, a lista de convidados. Capitão, redondo
alguns convidados! (um guarda coloca Fiona
nas costas de seu cavalo)

FIONA
Adeus, ogro.

Todo o grupo de Farquaad começa a voltar para DuLoc. Relógios de burro
eles vão.

BURRO
Shrek, o que você está fazendo? Você está deixando
ela fugir.

SHREK
Sim? E daí?

BURRO
Shrek, há algo nela, você
não sei. Olha, eu falei com ela pela última vez
noite, ela é - -

SHREK
Eu sei que você conversou com ela ontem à noite.
Vocês são ótimos amigos, não são? Agora se
vocês dois são tão bons amigos, por que não
você a segue para casa?

BURRO
Shrek, eu... eu quero ir com você.

SHREK
Eu te disse, não foi? Você não vem
casa comigo. Eu vivo sozinho! Meu pântano!
Meu! Ninguém mais! Entender? Ninguém!
Especialmente inútil, patético, irritante,
burros falantes!

BURRO
Mas eu pensei - -

SHREK
Sim. Você sabe o que? Você pensou errado!
(pisa)

BURRO
Shrek.

Montagem de cenas diferentes. Shrek voltando para casa. Fiona
sendo ajustado para o vestido de noiva. Burro em um riacho correndo
no dragão. Shrek limpando sua casa. Fiona jantando
sozinho. Shrek jantando sozinho.

CASA DE SHREK

Shrek está jantando quando ouve um barulho lá fora. Ele vai
lá fora para investigar.

SHREK
Burro? (Burro o ignora e continua
com o que ele está fazendo.) O que você está
fazendo?

BURRO
Eu pensaria que, de todas as pessoas, você
reconheça uma parede quando você vê uma.


SHREK
Bem, sim. Mas o muro supostamente
contornar meu pântano, não através dele.


BURRO
É cerca de sua metade. Veja, esse é o seu
metade, e esta é a minha metade.

SHREK
Oh! Sua metade. Hum.

BURRO
Sim, minha metade. Eu ajudei a resgatar a princesa.
Eu fiz metade do trabalho. Eu recebo metade do
saque. Agora me dê aquela grande e velha pedra,
aquele que se parece com sua cabeça.


SHREK
Para trás!

BURRO
Não, você recua.

SHREK
Este é o meu pântano!

BURRO
Nosso pântano.

SHREK
(agarra o galho da árvore. O Burro está trabalhando
com) Solte, Burro!

BURRO
Você deixou ir.

SHREK
Idiota teimoso!

BURRO
Ogro fedorento.

SHREK
Multar! (deixa cair o galho da árvore e caminha
ausente)

BURRO
Ei, ei, volte aqui. Eu ainda não terminei
com você ainda.

SHREK
Bem, eu terminei com você.

BURRO
Uh-uh. Você sabe, com você é sempre,
"Eu eu Eu!" Bem, adivinhe! Agora
é a minha vez! Então você cala a boca e
prestar atenção! Você é mau comigo. Você
me insulte e você não aprecia nada
aquilo eu faço! Você está sempre me empurrando
perto ou me afastando.

SHREK
Oh sim? Bem, se eu te tratasse assim
ruim, como você voltou?

BURRO
Porque é isso que os amigos fazem! Eles
perdoar um ao outro!

SHREK
Oh sim. Você está certo, Burro. Eu perdoo
você... por me apunhalar pelas costas!
(entra no banheiro e bate a porta
porta)

BURRO
Ah! Você está tão embrulhado em camadas,
garoto cebola, você tem medo dos seus
sentimentos.

SHREK
(os) Vá embora!

BURRO
Aí está você, fazendo isso de novo apenas
como você fez com Fiona. Tudo o que ela sempre
fazer foi como você, talvez até te ame.


SHREK
(os) Me ama? Ela disse que eu era feio, um
criatura horrível. Eu ouvi os dois
você falando.

BURRO
Ela não estava falando sobre você. Ela era
falando sobre, uh, outra pessoa.


SHREK
(abre a porta e sai) Ela não estava
falando sobre mim? Bem, então quem foi
ela está falando?

BURRO
Uh-uh, de jeito nenhum. Eu não estou dizendo nada.
Você não quer me ouvir. Certo?
Certo?

SHREK
Burro!

BURRO
Não!

SHREK
Ok, olhe. Sinto muito, certo? (suspirar)
Desculpe. Acho que sou apenas um grande,
ogro estúpido e feio. Você pode me perdoar?


BURRO
Ei, é para isso que servem os amigos, certo?


SHREK
Certo. Amigos?

BURRO
Amigos.

SHREK
Então, hum, o que Fiona disse sobre mim?


BURRO
O que você está me pedindo? Por que não
você simplesmente vai perguntar a ela?

SHREK
O casamento! Nós nunca conseguiremos entrar
tempo.

BURRO
Ha-ha-ha! Não tema, pois onde, há
um testamento, há um caminho e eu tenho um caminho.
(assobios)

De repente, o dragão chega acima e voa baixo o suficiente para
eles podem subir.

SHREK
Burro?

BURRO
Acho que é apenas meu magnetismo animal.


Ambos riem.

SHREK
Ah, venha aqui, você. (dá ao Burro um
noogie)

BURRO
Tudo bem, tudo bem. Não pegue tudo
baba. Ninguém gosta de beijar a bunda. Todos
certo, suba e segure firme. eu não tenho
tive a chance de instalar os cintos de segurança
ainda.

Eles sobem a bordo do dragão e ela parte para DuLoc.

DULOC - IGREJA

Fiona e Farquaad vão se casar. A cidade inteira está lá.
O cara do prompter mostra um cartão que diz 'Silêncio Reverenciado'.


PADRE
Povo de DuLoc, nos reunimos aqui hoje
para dar testemunho da união....

FIONA
(olhando para o sol poente) Um-

PADRE
...do nosso novo rei...

FIONA
Com licença. Poderíamos apenas pular em frente
para o "sim"?

FARQUAAD
(risos e depois faz um gesto para o padre
para satisfazer Fiona) Vá em frente.

PÁTIO

Alguns guardas estão circulando. De repente, o dragão pousa com
um boom. Todos os guardas saem correndo.

BURRO
(para o Dragão) Vá em frente, DIVIRTA-SE.
Se precisarmos de você, eu assobio. Que tal
que? (ela acena com a cabeça e vai atrás dos guardas)
Shrek, espere, espere! Espere um minuto! Você
quer fazer isso direito, não é?

SHREK
(na porta da Igreja) Do que você está falando
sobre?

BURRO
Tem uma fila que você tem que esperar. O
pregador dirá: "Fale agora ou
mantenha sua paz para sempre." Foi quando
você diz: "Eu me oponho!"

SHREK
Não tenho tempo para isso!

BURRO
Ei, espere. O que você está fazendo? Ouvir
para mim! Olha, você ama essa mulher, não
você?

SHREK
Sim.

BURRO
Você quer segurá-la?

SHREK
Sim.

BURRO
Por favor ela?

SHREK
Sim!

BURRO
(cantando no estilo James Brown) Então você
tenho que tentar um pouco de ternura.
(normal) As garotas adoram aquele romântico
besteira!

SHREK
Tudo bem! Pare com isso. Quando isso
cara disse a linha?

BURRO
Precisamos dar uma olhada.

DENTRO DA IGREJA

Enquanto o padre fala, vemos a sombra do Burro através de uma das
janelas Shrek o joga para cima para que ele possa ver.

PADRE
E então, pelo poder investido em mim...


Fora

SHREK
O que você vê?

BURRO
A cidade inteira está lá.

Dentro

PADRE
Agora eu os declaro marido e mulher...


Fora

BURRO
Eles estão no altar.

Dentro

PADRE
...Rei e Rainha.

Fora

BURRO
Mãe Fletcher! Ele já disse isso.


SHREK
Ah, pelo amor de Pete!

Ele corre para dentro sem pegar Burro, que bate forte no chão.


DENTRO DA IGREJA

SHREK
(correndo em direção ao altar) Eu me oponho!


FIONA
Shrek?

Toda a congregação engasga ao ver Shrek.

FARQUAAD
Ah, agora o que ele quer?

SHREK
(para a congregação quando ele chega à frente
da Igreja) Olá a todos. Tendo
um bom momento, não é? Eu amo DuLoc, primeiro
de tudo. Muito limpo.

FIONA
O que você está fazendo aqui?

SHREK
Sério, já é rude o suficiente estar vivo
quando ninguém te quer, mas aparecendo
sem ser convidado para um casamento...

SHREK
Fiona! Eu preciso falar com você.

FIONA
Ah, agora você quer conversar? É um pouco
atrasado para isso, então se você me der licença
- -

SHREK
Mas você não pode se casar com ele.

FIONA
E porque não?

SHREK
Porque... - Porque ele está apenas estragando
você para que ele possa ser rei.

FARQUAAD
Ultrajante! Fiona, não dê ouvidos a ele.


SHREK
Ele não é seu verdadeiro amor.

FIONA
E o que você sabe sobre o amor verdadeiro?


SHREK
Bem, eu - - Uh - - quero dizer - -

FARQUAAD
Ah, isso é precioso. O ogee caiu
apaixonada pela princesa! Ah, bom
Senhor. (risos)

O cara do prompter mostra um cartão que diz 'Rir'. O
toda a congregação ri.

FARQUAAD
Um ogro e uma princesa!

FIONA
Shrek, isso é verdade?

FARQUAAD
Quem se importa? É absurdo! Fiona,
meu amor, estamos a apenas um beijo de distância
nosso "felizes para sempre". Agora me beije!
(enruga os lábios e se inclina em direção a ela,
mas ela recua.)

FIONA
(olhando para o sol poente) "À noite
de um jeito, de dia de outro." (para Shrek)
Eu queria te mostrar antes.

Ela recua e, conforme o sol se põe, ela se transforma em seu eu ogro.
Ela dá a Shrek um sorriso tímido.

SHREK
Bem, isso explica muita coisa. (Fiona
sorri)

FARQUAAD
Eca! É nojento! Guardas! Guardas!
Eu ordeno que você tire isso da minha vista
agora! Pegue eles! Pegue os dois!

Os guardas entram correndo e separam Fiona e Shrek. Shrek luta
eles.

SHREK
Não não!

FIONA
Shrek!

FARQUAAD
Este hocus-pocus não altera nada. Esse
o casamento é vinculativo, e isso faz com que
eu rei! Ver? Ver?

FIONA
Não, me solte! Shrek!

SHREK
Não!

FARQUAAD
Não fiquem aí parados, seus idiotas.


SHREK
Saia do meu caminho! Fiona! Argh!

FARQUAAD
Vou fazer você se arrepender do dia em que nos conhecemos.
Verei você ser sorteado e esquartejado! Você vai
implore pela morte para salvá-lo!

FIONA
Não, Shrek!

FARQUAAD
(aponte uma adaga na garganta de Fiona) E
quanto a você, minha esposa...

SHREK
Fiona!

FARQUAAD
Eu vou trancar você naquela torre
pelo resto dos seus dias! Eu sou rei!


Shrek consegue libertar a mão e assobia.

FARQUAAD
Eu terei ordem! Eu terei perfeição!
Eu terei - - (Burro e o dragão
aparece e o dragão se inclina e
come Farquaad) Aaaah! Ah!

BURRO
Tudo bem. Ninguém se move. Eu tenho um dragão
aqui, e não tenho medo de usá-lo.
(O dragão ruge.) Eu sou um burro
A beira!

O dragão arrota e a coroa de Farquaad voa de sua boca
e cai no chão.

BURRO
Casamentos de celebridades. Eles nunca duram,
Eles?

A congregação aplaude.

BURRO
Vá em frente, Shrek.

SHREK
Ah, Fiona?

FIONA
Sim, Shrek?

SHREK
Eu... - eu te amo.

FIONA
Realmente?

SHREK
Sério sério.

FIONA
(sorri) Eu também te amo.

Shrek e Fiona se beijam. Thelonius pega um dos cartões e escreve
'Awwww' nas costas e depois mostra para a congregação.


CONGREGAÇÃO
Aawww!

De repente, a magia do feitiço afasta Fiona. Ela foi levantada
no ar e ela paira lá enquanto a magia funciona
dela.

SUSSURROS
"Até você encontrar o primeiro beijo do verdadeiro amor
e então assumir a verdadeira forma do amor. Pegar
a verdadeira forma do amor. Assuma a verdadeira forma do amor."


De repente, os olhos de Fiona se arregalaram. Ela é consumida pelo feitiço
e então é lentamente abaixado até o chão.

SHREK
(indo até ela) Fiona? Fiona. São
Você está bem?

FIONA
(levantando-se, ela ainda é um ogro) Bem,
sim. Mas eu não entendo. Eu deveria
para ser bonita.

SHREK
Mas você é linda.

Eles sorriem um para o outro.

BURRO
(risos) Eu esperava que isso fosse
um final feliz.

Shrek e Fiona se beijam... e o beijo se transforma em...

O PÂNTANO

...o beijo de casamento deles. Shrek e Fiona agora estão casados. 'Eu sou
a Believer' de Smashmouth é tocado ao fundo. Shrek
e Fiona se separam e correm no meio da multidão até a espera
transporte. Que é feito de uma cebola gigante. Fiona joga seu buquê
que Cinderela e Branca de Neve tentam capturar. Mas eles acabam
entrando em uma briga de gatos e então o dragão pega o buquê
em vez de. O boneco de gengibre foi consertado um pouco e agora
tem uma perna e anda com uma bengala doce. Shrek e Fiona
vá embora enquanto o resto dos convidados festejam e Burro assume
cantando a música.

HOMEM DE GENGIBRE
Deus abençoe todos nós.

BURRO
(quando ele termina de cantar e nós desaparecemos
preto) Ah, isso é engraçado. Oh. Oh. Não posso
respirar. Eu não consigo respirar.

O FIM
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
