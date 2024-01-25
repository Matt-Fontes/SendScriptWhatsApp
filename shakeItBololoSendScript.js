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
Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K

Shake It Bololo
AOM

Cabelo da Tony Country pra mostrar que é de vilão
Lado mal e lado bem, nós é bom mas não é bombom
O toque da horneteira entre becos e vielas
Meia preta e meia branca que nós joga na canela
Os irmão tá de AK em cima da CB 1000
Recalcado cresce o olho, vai pra puta que pariu
Vai

Menina sem coração, bandido apaixonado
E cadê o amor? Foi pra casa do caralho
Dei um fim na relação, você não acreditou
Por causa de traição, o amor acabou
E cadê o amor? Foi pra casa do caralho
E cadê o amor? Foi pra casa do caralho

Não existe mais amor, a moda é uma pentada
Usando camisinha, pele a pele é mó furada

Sou foda, na cama eu te esculacho
Na sala ou no quarto
No beco ou no carro
Eu, eu sou sinistro
Melhor que seu marido
Esculacho seu amigo
No escuro eu sou um perigo
Mas, mas não se esqueça
Que eu sou vagabundo
Depois que a putaria começou rolar no mundo

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

A mina aqui do baile
Se prepara pra sentar
Rebolando desse jeito
Vai me fazer delirar
Aah, eu vou gozar
Vem que eu vou te tacar o piru

A cada segundo nós dá uma acelerada
E a cada acelerada é um tipo de risada
Vrau-vrau-vrau, ho-ho-ho, ha-ha-ha, bololo, vai
Que 1-9-0 os vizinho já até discou
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Faz o sinal da vida louca, joga a pistola pro ar
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)
Deixa os garoto brincar, deixa os garoto brincar (bololo, ha-ha, bololo, ha-ha-ha-ha)

Pepeca bate na pica com vontade
Meu piru na sua boca derrete igual choco- (e o quê?)
Nesse calor?

Eu tô boladão
Eu vou sarrar em tu com copo de whisky na mão
Eu vou sarrar em tu com copo de whisky na mão
Daquele jeito, mulher

É o Brinquedo
É o Bin Laden
É o Bin Laden
É o Brinquedo
Tá lançando uma de novo
E tá de volta, esse é o retorno, vai, vai, vai

Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (pul-pul)
Senta na peça de prata (tá-tá)
Quica no fuzil de ouro (bololo, ha-ha, bololo, ha-ha-ha-ha)

(Bololo, ha-ha, bololo, ha-ha-ha-ha)
(Bololo, ha-ha, bololo, ha-ha-ha-ha)
Experimenta, experimenta
Se sua xota é temperada, a minha piroca é de pimenta
Experimenta, experimenta
Se sua xota é temperada a minha pi- é de pimenta

É o cabelo da Tony Country, quero ver os homi pegar
Porque aqui nós da risada e bota pra acelerar

Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha
Bololo, ha-ha, bololo, ha-ha-ha-ha

É 2, é K, então vem pra cá
Na sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
Sequência da putaria com o Pikachu e o 2K
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)