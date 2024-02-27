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

El gaucho Martín Fierro

de José Hernández, 1872

Aquí me pongo á cantar
Al compás de la vigüela,
Que el hombre que lo desvela
Una pena estraordinaria,
Como la ave solitaria
Con el cantar se consuela.
Pido á los Santos del Cielo
Que ayuden mi pensamiento,
Les pido en este momento
Que voy á cantar mi historia
Me refresquen la memoria
Y aclaren mi entendimiento.
Vengan Santos milagrosos,
Vengan todos en mi ayuda,
Que la lengua se me añuda
Y se me turba la vista;
Pido á mi Dios que me asista
En una ocasión tan ruda.
Yo he visto muchos cantores,
Con famas bien otenidas,
Y que despues de adquiridas
No las quieren sustentar:
Parece que sin largar
Se cansaron en partidas.
Mas ande otro criollo pasa
Martin Fierro ha de pasar,
Nada lo hace recular
Ni las fantasmas lo espantan;
Y dende que todos cantan
Yo tambien quiero cantar.
Cantando me he de morir,
Cantando me han de enterrar,
Y cantando he de llegar
Al pié del Eterno Padre —
Dende el vientre de mi madre
Vine á este mundo á cantar.
Que no se trabe mi lengua
Ni me falte la palabra —
El cantar mi gloria labra
Y poniéndome a cantar,
Cantando me han de encontrar
Aunque la tierra se abra.
Me siento en el plan de un bajo
A cantar un argumento —
Como si soplára un viento
Hago tiritar los pastos —
Con oros, copas y bastos
Juega allí mi pensamiento.
Yo no soy cantor letrao,
Mas si me pongo á cantar
No tengo cuando acabar
Y me envejezco cantando,
Las coplas me van brotando
Como agua de manantial.
Con la guitarra en la mano
Ni las moscas se me arriman,
Naides me pone el pié encima.
Y cuando el pecho se entona,
Hago gemir á la prima
Y llorar á la bordona.
Yo soy toro en mi rodeo
Y torazo en rodeo ageno,
Siempre me tuve por güeno
Y si me quieren probar,
Salgan otros á cantar
Y veremos quién es ménos.
No me hago al lao de la güeya
Aunque vengan degollando,
Con los blandos yo soy blando
Y soy duro con los duros,
Y ninguno en un apuro
Me ha visto andar tutubiando.
En el peligro, qué Cristos?
El corazón se me ensancha,
Pues toda la tierra es cancha,
Y de eso naides se asombre,
El que se tiene por hombre
Ande quiere hace pata ancha.
Soy gaucho, y entiendaló
Como mi lengua lo esplica,
Para mí la tierra es chica
Y pudiera ser mayor
Ni la víbora me pica
Ni quema mi frente el Sol
Nací como nace el peje
En el fondo de la mar;
Naides me puede quitar
Aquello que Dios me dió —
Lo que al mundo truge yo
Del mundo lo he de llevar.
Mi gloria es vivir tan libre
Como el pájaro del Cielo,
No hago nido en este suelo
Ande hay tanto que sufrir;
Y naides me ha de seguir
Cuando yo remuento el vuelo.
Yo no tengo en el amor
Quien me venga con querellas;
Como esas aves tan bellas
Que saltan de rama en rama —
Yo hago en el trébol mi cama,
Y me cubren las estrellas.
Y sepan cuantos escuchan
De mis penas el relato,
Que nunca peléo ni mato
Sino por necesidá;
Y que a tanta alversidá
Solo me arrojó el mal trato.
Y atiendan la relación
Que hace un gaucho perseguido,
Que padre y marido ha sido
Empeñoso y diligente,
Y sin embargo la gente
Lo tiene por un bandido.
Ninguno me hable de penas
Porque yo penando vivo,
Y naides se muestre altivo
Aunque en el estribo esté
Que suele quedarse á pié
El gaucho mas alvertido.
Junta esperencia en la vida
Hasta pa dar y prestar
Quien la tiene que pasar
Entre sufrimiento y llanto;
Porque nada enseña tanto
Como el sufrir y el llorar.
Viene el hombre ciego al mundo
Cuartiándolo la esperanza,
Y á poco andar ya lo alcanzan
Las desgracias á empujones;
¡Jué pucha! que trae liciones
El tiempo con sus mudanzas!
Yo he conocido esta tierra
En que el paisano vivía
Y su ranchito tenía
Y sus hijos y mujer......
Era una delicia el ver
Cómo pasaba sus días.
Entonces.... cuando el lucero
Brillaba en el cielo santo,
Y los gallos con su canto
Nos decían que el día llegaba,
A la cocina rumbiaba
El gaucho que era un encanto.
Y sentao junto al jogón
A esperar que venga el día;
Al cimarrón le prendía
Hasta ponerse rechoncho,
Miéntras su china dormía
Tapadita con su poncho.
Y apénas el horizonte
Empezaba á coloriar,
Los pájaros á cantar,
Y las gallinas á apiarse,
Era cosa de largarse
Cada cual á trabajar.
Este se ata las espuelas,
Se sale el otro cantando,
Uno busca un pellón blando,
Este un lazo, otro un rebenque,
Y los pingos relinchando
Los llaman dende el palenque.
El que era pion domador
Enderezaba al corral,
Ande estaba el animal
Bufidos que se las pela....
Y mas malo que su agüela,
Se hacía astillas el bagual.
Y allí el gaucho inteligente,
En cuanto el potro enriendó,
Los cueros le acomodó
Y se le sentó en seguida,
Que el hombre muestra en la vida
La astucia que Dios le dió.
Y en las playas corcobiando
Pedazos se hacía el sotreta
Miéntras él por las paletas
Le jugaba las lloronas,
Y al ruido de las caronas
Salía haciéndose gambetas.
Ah! tiempos!... si era un orgullo
Ver ginetear un paisano —
Cuando era gaucho baquiano
Aunque el potro se boliase,
No había uno que no parase
Con el cabresto en la mano.
Y mientras domaban unos,
Otros al campo salían
Y la hacienda recogían,
Las manadas repuntaban,
Y ansí sin sentir pasaban,
Entretenidos el día.
Y verlos al cair la tarde
En la cocina riunidos,
Con el juego bien prendido
Y mil cosas que contar,
Platicar muy divertidos
Hasta despus de cenar.
Y con el buche bien lleno
Era cosa superior
Irse en brazos del amor
A dormir como la gente,
Pa empezar el día siguiente
Las fainas del día anterior.
¡Recuerdo! ¡Qué maravilla!!
Como andaba la gauchada,
Siempre alegre y bien montada
Y dispuesta pa el trabajo...
Pero al presente... barajo!
No se le vé de aporriada.
El gaucho mas infeliz
Tenía tropilla de un pelo,
No le faltaba un consuelo
Y andaba la gente lista...
Teniendo al campo la vista,
Solo vía hacienda y cielo.
Cuando llegaban las yerras,
¡Cosa que daba calor!
Tanto gaucho pialador
Y tironiador sin yel —
¡Ah! tiempos!... pero si en él,
Se ha visto tanto primor.
Aquello no era trabajo,
Mas bien era una junción,
Y después de un güen tirón
En que uno se daba maña,
Pa darle un trago de caña
Solía llamarlo el patrón.
Pues vivía la mamajuana
Siempre bajo la carreta,
Y aquel que no era chancleta,
En cuanto el goyete vía,
Sin miedo se le prendía
Como güérfano á la teta.
Y qué jugadas se armaban
Cuanto estábamos riunidos!
Siempre íbamos prevenidos!
Pues en tales ocasiones
A ayudarle á los piones
Caiban muchos comedidos.
Eran los días del apuro
Y alboroto pa el hembraje,
Pa preparar los potajes
Y osequiar bien á la gente,
Y ansí, pues, muy grandemente,
Pasaba siempre el gauchaje.
Venía la carne con cuero,
La sabrosa carbonada,
Mazamorra bien pisada,
Los pasteles y el güen vino...
Pero ha querido el destino,
Que todo aquello acabára.
Estaba el gaucho en su pago
Con toda seguridá!
Pero aura... barbaridá!
La cosa anda tan fruncida,
Que gasta el pobre la vida
En juir de la autoridá.
Pues si usté pisa en su rancho
Y si el alcalde lo sabe
Lo caza lo mesmo que ave
Aunque su mujer aborte...
No hay tiempo que no se acabe
Ni tiento que no se corte!
Y al punto dése por muerto
Si el alcalde lo bolea,
Pues hay no más se le apea
Con una felpa de palos, —
Y después dicen que es malo
El gaucho si los peléa.
Y el lomo le hinchan á golpes,
Y le rompen la cabeza,
Y luego con lijereza,
Ansí lastimao y todo,
Lo amarran codo con codo
Y pa el cepo lo enderiezan.
Ay comienzan sus desgracias,
Ay principia el pericón;
Porque ya no hay salvación,
Y que usté quiera ó no quiera,
Lo mandan á la frontera
O lo echan á un batallón.
Ansí empezaron mis males
Si gustan... en otros cantos
Les diré lo que he sufrido —
Lo mesmo que los de tantos,
Despues que uno está... perdido
No lo salvan ni los santos.
Tuve en mi pago en un tiempo
Hijos, hacienda y mujer,
Pero empecé á padecer,
Me echaron á la frontera,
¡Y qué iba á hallar al volver!
Tan solo hallé la tapera.
Sosegao vivía en mi rancho
Como el pájaro en su nido —
Allí mis hijos queridos,
Iban creciendo á mi lao...
Solo queda al desgraciao
Lamentar el bien perdido.
Mi gala en las pulperías
Era en habiendo más gente,
Ponerme medio caliente,
Pues cuando puntiao me encuentro,
Me salen coplas de adentro
Como agua de la virtiente.
Cantando estaba una vez
En una gran diversión;
Y aprovecho la ocasión
Como quiso el Juez de Paz...
Se presentó, y hay no más
Hizo arriada en montón.
Juyeron los más matreros
Y lograron escapar —
Yo no quise disparar —
Soy manso y no había porqué —
Muy tranquilo me quedé
Y ansí me dejé agarrar.
Allí un gringo con un órgano
Y una mona que bailaba,
Haciéndonos rair estaba,
Cuanto le tocó el arreo —
¡Tan grande el gringo y tan feo!
Lo viera cómo lloraba
Hasta un inglés zangiador
Que decía en la última guerra,
Que él era de Incalaperra
Y que no quería servir.
Tuvo tambien que juir
A guarecerse en la sierra.
Ni los mirones salvaron
De esa arriada de mi flor-
Fué acoyarao el cantor
Con otros nos mesturaron-
A uno solo, por favor,
Logró salvar la patrona.
Formaron un contingente
Con los que del baile arriaron-
Con otros nos mesturaron-
Que habían agarrao tambien-
Las cosas que aquí se ven
Ni los diablos las pensaron.
A mi el Juez me tomó entre ojos
En la ultima votación-
Me le había hecho el remolón
Y no me arrimé ese día,
Y él dijo que yo servia
A los de la esposición.
Y ansí sufrí ese castigo
Tal vez por culpas agenas-
Que sean malas ó sean güenas
Las listas, siempre me escondo-
Yo soy un gaucho redondo
Y esas cosas no me enllenan.
Al mandarnos nos hicieron
Más promesas que á un altar-
El Juez nos jué á proclamar
Y nos dijo muchas veces:
«Muchachos, á los seis meses
«Los van á ir á revelar.»
Yo llevé un moro de número
Sobresaliente el matucho!
Con él gané en Ayacucho
Más plata que agua bendita-
Siempre el gaucho necesita
Un pingo pa fiarle un pucho.
Y cargué sin dar mas güeltas
Con las prendas que tenía,
Gergas, ponchos, cuanto había
En casa, tuito lo alcé-
A mi china la dejé
Media desnuda ese día.
No me faltaba una guasca,
Esa ocasión eché el resto:
Bozal, maniador, cabresto,
Lazo, bolas y manea...
¡El que hoy tan pobre me vea
Tal vez no crerá todo esto!!
Ansi en mi moro escarciando,
Enderesé á la frontera;
Aparcero! si usté viera
Lo que se llama Cantón...
Ni envidia tengo al ratón
En aquella ratonera.
De los pobres que allí había
A ninguno lo largaron,
Los más viejos rezongaron,
Pero á uno que se quejó
En seguida lo estaquiaron,
Y la cosa se acabó.
En la lista de la tarde
El Jefe nos cantó el punto
Diciendo: «quinientos juntos
«Llevará el que se resierte;
«Lo haremos pitar del juerte,
«Más bien dése por dijunto.»
A naides le dieron armas,
Pues toditas las que había
El Coronel las tenia,
Sigun dijo esa ocasión,
Pa repartirlas el día
En que hubiera una invasión.
Al principio nos dejaron
De haraganes criando sebo,
Pero despues... no me atrevo,
A decir lo que pasaba-
Barajo... si nos trataban
Como se trata á malevos.
Porque todo era jugarle
Por los lomos, con la espada,
Y aunque usté no hiciera nada,
Lo mesmito que en Palermo,
Le daban cada cepiada
Que lo dejaban enfermo.
¡Y qué Indios -ni qué servicio,
No teníamos ni cuartel-
Nos mandaba el Coronel
A trabajar en sus chacras,
Y dejábamos las vacas
Que las llevára el infiel.
Yo primero sembré trigo
Y despues hice un corral,
Corté adobe pa un tapial,
Hice un quincho, corté paja...
La pucha que se trabaja
Sin que le larguen un rial.
Y es lo pior de aquel enriedo
Que si uno anda hinchando el lomo
Se le apéan como un plomo...
¡Quién aguanta aquel infierno!
Si eso es servir al Gobierno,
A mi no me gusta el cómo.
Más de un año nos tuvieron
En esos trabajos duros,-
Y los indios le asiguro
Dentraban cuando querían:
Como no los perseguían
Siempre andaban sin apuro.
A veces decía al volver
Del campo la descubierta
Que estuviéramos alerta,
Que andaba adentro la indiada;
Porque había una rastrillada
O estaba una yegua muerta.
Recién entonces salía
La órden de hacer la riunión-
Y caíbamos al cantón
En pelos y hasta enancaos,
Sin armas, cuatro pelaos
Que íbamos a hacer jabón.
Ay empezaba el afán
Se entiende, de puro vicio,
De enseñarle el ejercicio
A tanto gaucho recluta,
Con un estrutor... qué... bruto!
Que nunca sabía su oficio.
Daban entónces las armas
Pa defender los cantones,
Que eran lanzas y latones
Con ataduras de tiento...
Las de juego no las cuento
Porque no había municiones.
Y un sargento chamuscao
Me contó que las tenían,
Pero que ellos la vendían
Para cazar avestruces;
Y así andaban noche y día
Déle bala á los ñanduces.
Y cuando se iban los Indios
Con lo que habían manotiao,
Salíamos muy apuraos
A perseguirlos de atrás;
Si no se llevaban más
Es porque no habían hallao.
Allí, sí, se ven desgracias
Y lágrimas, y afliciones,
Naides le pida perdones
Al indio -pues donde entra,
Roba y mata cuanto encuentra
Y quema las poblaciones.
No salvan de su juror
Ni los pobres angelitos:
Viejos, mozos y chiquitos
Los mata del mesmo modo-
Que el Indio lo arregla todo
Con la lanza y con los gritos.
Tiemblan las carnes al verlo
Volando al viento la cerda-
La rienda en la mano izquierda
Y la lanza en la derecha-
Ande enderieza abre brecha
Pues no hay lanzazo que pierda.
Hace trotiadas tremendas
Dende el fondo del desierto-
Ansi llega medio muerto
De hambre, de sé y de fatiga;
Pero el Indio es una hormiga
Que día y noche está dispierto.
Sabe manejar las bolas
Como naides las maneja,
Cuanto el contrario se aleja
Manda una bola perdida,
Y si lo alcanza, sin vida,
Es siguro que lo deja.
Y el Indio es como tortuga
De duro para espichar;
Si lo llega á destripar
Ni siquiera se le encoge,
Luego sus tripas recoge,
Y se agacha á disparar.
Hacian el robo á su gusto
Y después se iban de arriba,
Se llevaban las cautivas,
Y nos contaban que á veces
Les descarnaban los pieses,
A las pobrecitas, vivas.
¡Ah! ¡si partía el corazón
Ver tantos males, canejo!
Los perseguiamos de lejos
Sin poder ni galopiar;
¿Y qué habíamos de alcanzar
En unos bichocos viejos?
Nos volvíamos al cantón
A las dos ó tres jornadas,
Sembrando las caballadas;
Y pa que alguno la venda,
Rejuntábamos la hacienda
Que habían dejao resagada.
Una vez entre otras muchas,
Tanto salir al boton,
Nos pegaron un malon
Los indios y una lanciada,
Que la gente acobardada
Quedó dende esa ocasión.
Habían estao escondidos
Aguaitando atrás de un cerro...
¡Lo viera á su amigo Fierro
Aflojar como un blandito!
Salieron como maiz frito
En cuanto sonó un cencerro.
Al punto nos dispusimos
Aunque ellos eran bastantes,
La formamos al istante
Nuestra gente que era poca,
Y golpiándose en la boca
Hicieron fila adelante.
Se vinieron en tropel
Haciendo temblar la tierra.
No soy manco pa la guerra
Pero tuve mi jabon,
Pues iba en un redomon
Que había boliao en la sierra.
¡Qué vocerío! ¡qué barullo!
¡Qué apurar esa carrera!
La indiada todita entera
Dando alaridos cargó-J
ué pucha... y ya nos sacó
Como yeguada matrera.
¡Qué fletes traíban los bábaros!
Como una luz de lijeros-
Hicieron el entrevero
Y en aquella mescolanza,
Este quiero, este no quiero,
Nos escojían con la lanza.
Al que le daban un chuzazo,
Dificultoso es que sane,
En fin, para no echar panes,
Salimos por esas lomas,
Lo mesmo que las palomas,
Al juir de los gavilanes.
Es de almirar la destreza
Con que la lanza manejan!
De perseguir nunca dejan-
Y nos traiban apretaos,
Si queríamos de apuraos,
Salirnos por las orejas.
Y pa mejor de la fiesta
En esa aflición tan suma,
Vino un indio echando espuma,
Y con la lanza en la mano,
Gritando «Acabau cristiano,
Metau el lanza hasta el pluma.»
Tendido en el costillar,
Cimbrando por sobre el brazo
Una lanza como un lazo,
Me atropelló dando gritos-
Si me descuido... el maldito
Me levanta de un lanzazo.
Si me atribulo, ó me encojo
Siguro que no me escapo:
Siempre he sido medio guapo
Pero en aquella ocasión,
Me hacía buya el corazón
Como la garganta al sapo.
Dios le perdone al salvaje
Las ganas que me tenía...
Desaté las tres marías
Y lo engatusé á cabriolas...
Pucha... si no traigo bolas
Me achura el indio ese día.
Era el hijo de un cacique,
Sigun yo lo averigüé-
La verdá del caso jué
Que me tuvo apuradazo,
Hasta que por fin de un bolazo
Del caballo lo bajé.
Ay no más me tiré al suelo
Y lo pisé en las paletas-
Empezó a hacer morisquetas
Y a mesquinar la garganta...
Pero yo hice la obra santa
De hacerlo estirar la geta.
Allí quedó de mojón
Y en su caballo salté
De la indiada disparé,
Pues si me alcanza me mata,
Y al fin me les escapé
Con el hilo de una pata.
Seguiré esta relación,
Aunque pa chorizo es largo:
El que pueda hágase cargo
Cómo andaría de matrero,
Después de salvar el cuero
De aquel trance tan amargo.
Del sueldo nada les cuento,
Porque andaba disparando;
Nosotros de cuando en cuando
Solíamos ladrar de pobres-
Nunca llegaban los cobres
Que se estaban aguardando.
Y andábamos de mugrientos
Que el mirarnos daba horror;
Les juro que era un dolor
Ver esos hombres, ¡por Cristo!
En mi perra vida he visto
Una miseria mayor.
Yo no tenía ni camisa
Ni cosa que se parezca;
Mis trapos sólo pa yesca
Me podían servir al fin...
No hay plaga como un fortin
Para que el hombre padezca.
Poncho, jergas, el apero,
Las prenditas, los botones,
Todo, amigo en los cantones
Jué quedando poco á poco;
Ya me tenían medio loco
La pobreza y los ratones.
Sólo una manta peluda
Era cuanto me quedaba-
La había agenciao á la taba
Y ella me tapaba el bulto-
Yaguané que allí ganaba
No salía... ni con indulto.
Y pa mejor hasta el moro
Se me jué de entre las manos-
No soy lerdo... pero hermano,
Vino el comendante un día
Diciendo que lo quería
«Pa enseñarle á comer grano».
Afigúrese cualquiera
La suerte de este su amigo,
A pié y mostrando el umbligo,
Estropiao, pobre y desnudo;
Ni por castigo se pudo
Hacerse más mal conmigo.
Ansí pasaron los meses,
Y vino el año siguiente,
Y las cosas igualmente
Siguieron del mesmo modo-
Adrede parece todo
Pa atormentar á la gente.
No teníamos más permiso,
Ni otro alivio la gauchada,
Que salir de madrugada,
Cuando no había Indio ninguno,
Campo ajuera á hacer boliadas
Desocando los reyunos.
Y cáibamos al cantón
Con los fletes aplastaos-
Pero á veces medio aviaos
Con plumas y algunos cueros-
Que pronto con el pulpero
Los teníamos negociaos.
Era un amigo del Jefe
Que con un boliche estaba;
Yerba y tabaco nos daba
Por la pluma de avestruz,
Y hasta le hacía ver la luz
Al que un cuero le llevaba.
Solo tenía cuatro frascos
Y unas barricas vacías,
Y a la gente le vendía
Todo cuanto precisaba
Algunos creíban que estaba
Allí la proveduría.
Ah! pulpero habilidoso
Nada le solía faltar-
Ay juna! y para tragar
Tenía un buche de ñandú,
La gente le dió en llamar
«El boliche de virtú.»
Aunque es justo que quien vende
Algún poquito muerda,T
iraba tanto la cuerda
Que con sus cuatro limetas
El cargaba las carretas
De plumas, cueros y cerda.
Nos tenía aputaos á todos
Con más cuentas que un rosario,
Cuando se anunció un salario
Que iban á dar, ó un socorro-
Pero sabe Dios qué zorro
Se lo comió al comisario.
Pues nunca lo ví llegar,
Y al cabo de muchos días-
En la mesma pulpería
Dieron una buena cuenta-
Que la gente muy contenta
De tan pobre recebía.
Sacaron unos sus prendas,
Que las tenían empeñadas,
Por sus deudas atrasadas
Dieron otros el dinero;
Al fin de fiesta el pulpero,
Se quedó con la mascada.
Yo me arrescosté á un horcón
Dando tiempo á que pagaran,
y poniendo güena cara
Estuve haciéndome el poyo,
A esperar que me llamaran
Para recibir mi boyo.
Pero ahi me puede quedar
Pegao pa siempre al horcón-
Ya era casi la oración
Y ninguno me llamaba-
La cosa se me ñublaba
Y me dentró comezón:
Pa sacarme el entripao
Vi al mayor, y lo fí á hablar-
Yo me lo empecé á atracar,
Y como con poca gana
Le dije: «Tal vez mañana
Acabarán de pagar.»
«-¡Que mañana ni otro día»
Al punto me contestó,
«La paga ya se acabó,
«Siempre has de ser animal»-
Me raí y le dije: «Yo...
«No he recebido ni un rial.»
Se le pusieron los ojos
Que se le querían salir,
Y ay no más volvió á decir
Comiéndome con la vista:«-
¿Y qué querés recebir
«Si no has dentrao en la lista?»
«-Esto si que es amolar»
Dije yo pa mis adentros,
«Ván dos años que me encuentro
«Y hasta aura he visto ni un grullo,
«Dentro en todos los barullos
«Pero en las listas no dentro.»
Vide el pleito mal parao
Y no quise aguardar más...
Es güeno vivir en paz
Con quien nos ha de mandar-
Y reculando pa trás
Me le empezé a retirar.
Supo todo el Comendante
Y me llamó al otro día,
Diciéndome que quería
Averiguar bien las cosas-
Que no era el tiempo de Rosas,
Que aura á naides se debía.
Llamó al cabo y al sargento
Y empezó la indagación
Si había venido al cantón
En tal tiempo ó en tal otro...
Y si había venido en potro,
En reyuno o rodomón.
Y todo era alborotar
Al ñudo, y hacer papel,
Conocí que era pastel
Pa engordar con mi guayaca,
Mas si voy al coronel
Me hacen bramar en la estaca.
¡Ah! hijos de una... la codicia
Ojála les ruempa el saco;
Ni un pedazo de tabaco
Le dán al pobre soldao,
Y lo tienen de delgao,
Más ligero que un guanaco.
Pero qué iba á hacerles yo,
Chavarón en el desierto;
Más bien me daba por muerto
Pa no verme más fundido-
Y me les hacía el dormido
Aunque soy medio despierto.
Yo andaba desesperao,
Aguardando una ocasión
Que los indios un malón
Nos dieran y entre el estrago
Hacérmeles cimarrón
Y volverme pa mi pago.
Aquello no era servicio
Ni defender la frontera —
Aquello era ratonera
En que sólo gana el juerte —
Era jugar á la suerte
Con una taba culera.
Allí tuito va al revés:
Los milicos son los piones,
Y andan en las poblaciones
Emprestaos pa trabajar —
Los rejuntan pa peliar
Cuando entran indios ladrones.
Yo he visto en esa milonga
Muchos Jefes con estancia,
Y piones en abundancia,
Y majadas y rodeos;
He visto negocios feos
A pesar de mi inorancia.
Y colijo que no quieren
La barunda componer —
Para eso no ha de tener
El Jefe, que esté de estable,
Más que su poncho, y su sable,
Su caballo y su deber.
Ansina, pues, conociendo
Que aquel mal no tiene cura,
Que tal vez mi sepoltura
Si me quedo iba á encontrar,
Pensé en mandarme mudar
Como cosa más sigura.
Y pa mejor, una noche
Qué estaquiada me pegaron,
Casi me descoyuntaron
Por motivo de una gresca —
¡Ay juna, si me estiraron
Lo mesmo que guasca fresca!
Jamás me puedo olvidar
Lo que esa vez me pasó: —
Dentrando una noche yo
Al fortín, un enganchao,
Que estaba medio mamao,
Allí me desconoció.
Era un gringo tan bozal,
Que nada se le entendía —
¡Quién sabe de ánde sería!
Tal vez no juera cristiano;
Pues lo único que decía
Es que era papolitano.
Estaba de centinela
Y por causa del peludo
Verme más claro no pudo,
Y esa fué la culpa toda —
El bruto se asustó al ñudo
Y fí el pavo de la boda.
Cuando me vido acercar:
«¿Quién vívore?»... preguntó
«Qué vívoras, — dije yo —
«Ha garto» — me pegó el grito:
Y yo dije despacito:
«Más lagarto serás vos».
Ay no más — Cristo me valga!
Rastrillar el jusil siento —
Me agaché, y en el momento
El bruto me largó un chumbo —
Mamao, me tiró sin rumbo
Que si nó, no cuento el cuento.
Por de contao, con el tiro
Se alborotó el avispero —
Los oficiales salieron
Y se empezó la junción —
Quedó en su puesto el nación —
y yo fí al estaquiadero.
Entre cuatro bayonetas
Me tendieron en el suelo —
Vino el mayor medio en pedo,
Y allí se puso á gritar,
«Pícaro te he de enseñar
Andar reclamando sueldos»
De las manos y las patas
Me ataron cuatro cinchones —
Les aguanté los tirones
Sin que ni un ¡ay! se me oyera,
Y al gringo la noche entera
Lo harté con mis maldiciones.
Yo no sé porqué el Gobierno
Nos manda aquí a la frontera,
Gringada que ni siquiera
Se sabe atracar á un pingo —
Si creerá al mandar un gringo
Que nos manda alguna fiera!
No hacen más que dar trabajo
Pues no saben ni ensillar,
No sirven ni pa carniar;
Y yo he visto muchas veces
Que ni voltiadas las reses
Se les querían arrimar.
Y lo pasan sus mercedes
Lengüetiando pico á pico
Hasta que viene un milico
A servirles al asao —
Y eso si, en lo delicaos,
Parecen hijos de rico.
Si hay calor, ya no son gente,
Si yela, todos tiritan —
Si usté no les da, no pitan
Por no gastar en tabaco, —
Y cuando pescan un naco
Uno al otro se lo quitan.
Cuando llueve se acoquinan
Como perro que oye truenos —
Qué diablos — sólo son güenos
Pa vivir entre maricas —
Y nunca se andan con chicas
Para alzar ponchos ajenos.
Pa vichar son como ciegos,
No hay ejemplo de que entiendan,
Ni hay uno solo que aprienda
Al ver un bulto que cruza,
A saber si es avestruza,
O si es ginete, ó hacienda.
Si salen á perseguir
Después de mucho aparato,
Tuitos se pelan al rato
Y va quedando el tendal —
Esto es como en un nidal
Echarle güebos á un gato.
Vamos dentrando recién
A la parte más sentida,
Aunque es todita mi vida
De males una cadena —
A cada alma dolorida
Le gusta cantar sus penas.
Se empezó en aquel entónces
A rejuntar caballada,
Y riunir la milicada
Teniéndola en el Cantón,
Para una despedición
A sorprender á la indiada.
Nos anunciaban que iríamos
Sin carretas ni bagajes
A golpiar á los salvajes
En sus mesmas tolderías —
Que á la güelta pagarían
Licenciándolo al gauchaje.
Que en esta despedicion
Tuviéramos la esperanza,
Que iba á venir sin tardanza,
Según el Jefe contó,
Un menistro o qué sé yo —
Que le llamaban Don Ganza.
Que iba á riunir el Ejército
Y tuitos los batallones —
Y que traiba unos cañones
Con más rayas que un cotin —
Pucha... las conversaciones
Por allá no tenían fin.
Pero esas trampas no enriedan
A los zorros de mi laya,
Que esa Ganza venga ó vaya,
Poco le importa á un matrero —
Yo también dejé las rayas...
En los libros del pulpero.
Nunca juí gaucho dormido
Siempre pronto, siempre listo —
Yo soy un hombre, ¡qué Cristo!
Que nada me ha acobardao,
Y siempre salí parao
En los trances que me he visto.
Dende chiquito gané
La vida con mi trabajo,
Y aunque siempre estuve abajo
Y no sé lo que es subir —
También el mucho sufrir
Suele cansarnos — ¡barajo!
En medio de mi inorancia
Conozco que nada valgo —
Soy la liebre ó soy el galgo
A sigún los tiempos andan,
Pero tambien los que mandan
Debieran cuidarnos algo.
Una noche que riunidos
Estaban en la carpeta
Empinando una limeta
El Jefe y el Juez de Paz —
Yo no quise aguardar más,
Y me hice humo en un sotreta.
Me parece el campo orégano
Dende que libre me veo —
Donde me lleva el deseo
Allí mis pasos dirijo —
Y hasta en las sombras, de fijo
Que donde quiera rumbeo.
Entro y salgo del peligro
Sin que me espante el estrago,
No aflojo al primer amago
Ni jamás fí gaucho lerdo:
Soy pa rumbiar como el cerdo
Y pronto caí á mi pago.
Volvía al cabo de tres años
De tanto sufrir al ñudo,
Resertor, pobre y desnudo —
A procurar suerte nueva —
Y lo mesmo que el peludo
Enderecé pa mi cueva.
No hallé ni rastro del rancho —
Sólo estaba la tapera! —
Por Cristo, si aquello era
Pa enlutar el corazón —
Yo juré en esa ocasión
Ser más malo que una fiera!
Quién no sentirá lo mesmo
Cuando ansi padece tanto!
Puedo asigurar que el llanto
Como una mujer largué —
Ay! mi Dios — si me quedé
Más triste que Jueves Santo!
Solo se oiban los aullidos
De un gato que se salvó,
El pobre se guareció
Cerca, en una vizcachera —
Venía como si supiera
Que estaba de güelta yo.
Al dirme dejé la hacienda
Que era todito mi haber —
Pronto debíamos volver
Sigún el juez prometía,
Y hasta entonces cuidaría
De los bienes, la mujer
Despues me contó un vecino
Que el campo se lo pidieron —
La hacienda se la vendieron
En pago de arrendamientos,
Y qué sé yo, cuántos cuentos;
Pero todo lo fundieron.
Los pobrecitos muchachos,
Entre tantas afliciones
Se conchavaron de piones
¡Mas qué iban á trabajar,
Si eran como los pichones
Sin acabar de emplumar!
Por ahi andarán sufriendo
De nuestra suerte el rigor:
Me han contao que el mayor
Nunca dejaba á su hermano —
Puede ser que algun cristiano
Los recoja por favor.
¡Y la pobre mi mujer
Dios sabe cuánto sufrió!
Me dicen que se voló
Con no sé qué gavilán —
Sin duda á buscar el pan
Que no podía darle yo.
No es raro que á uno le falte
Lo que á algún otro le sobre —
Si no le quedó ni un cobre
Si no de hijos un enjambre,
¿Que más iba á hacer la pobre
Para no morirse de hambre?
¡Tal vez no te vuelva á ver,
Prenda de mi corazón!
Dios te dé su proteción
Ya que no me la dió á mí —
Y á mis hijos dende aquí
Les echo mi bendición.
Como hijitos de la cuna
Andarán por ahi sin madre —
Ya se quedaron sin padre
Y ansi la suerte los deja,
Sin naides que los proteja
Y sin perro que les ladre.
Los pobrecitos tal vez
No tengan ande abrigarse,
Ni ramada ande ganarse,
Ni rincón ande meterse,
Ni camisa que ponerse,
Ni poncho con qué taparse.
Tal vez los verán sufrir
Sin tenerles compasión —
Puede que alguna ocasión
Aunque los vean tiritando,
Los echen de algún jogón
Pa que no estén estorbando.
Y al verse ansina espantaos
Como se espanta á los perros,
Irán los hijos de Fierro,
Con la cola entre las piernas,
A buscar almas más tiernas
O esconderse en algun cerro.
Mas también en este juego,
Voy á pedir mi bolada —
A naides le debo nada
Ni pido cuartel ni doy; —
Y ninguno dende hoy
Ha de llevarme en la armada.
Yo he sido manso primero,
Y seré gaucho matrero —
En mi triste circustancia,
Aunque es mi mal tan projundo,
Nací, y me he criado en estancia,
Pero ya conozco el mundo.
Ya les conozco sus mañas,
Le conozco sus cucañas,
Sé cómo hacen la partida,
La enriedan y la manejan —
Deshaceré la madeja
Aunque me cueste la vida.
Y aguante el que no se anime
A meterse en tanto engorro,
O sino aprétese el gorro
O para otra tierra emigre —
Pero yo ando como el tigre
Que le roban los cachorros.
Aunque muchos cren que el gaucho
Tiene una alma de reyuno —
No se encontrará ninguno
Que no le dueblen las penas —
Mas no debe aflojar uno
Mientras hay sangre en las venas.
De carta de más me vía
Sin saber á donde dirme;
Mas dijeron que era vago
Y entraron á perseguirme.
Nunca se achican los males,
Van poco a poco creciendo,
Y ansina me vide pronto
Obligado á andar juyendo.
No tenía mujer, ni rancho,
Y á más, era resertor,
No tenía una prenda güena
Ni un peso en el tirador.
A mis hijos infelices,
Pensé volverlos á hallar —
Y andaba de un lao al otro
Sin tener ni qué pitar.
Supe una vez por desgracia
Que había un baile por allí —
Y medio desesperao
A ver la milonga fuí.
Riunidos al pericón
Tantos amigos hallé,
Que alegre de verme entre ellos
Esa noche me apedé.
Como nunca, en la ocasion
Por peliar me dió la tranca,
Y la emprendí con un negro
Que trujo una negra en ancas.
Al ver llegar la morena
Que no hacía caso de naides
Le dije con la mamúa: —
«Va... ca... yendo gente al baile.»
La negra entendió la cosa
Y no tardó en contestarme
Mirándome como á perro:
«Más vaca será su madre.»
Y dentró al baile muy tiesa
Con más cola que una zorra,
Haciendo blanquiar los dientes
Lo mesmo que mazamorra. —
«Negra linda»... Dije yo —
«Me gusta... pa la carona» —
Y me puse á champurriar
Esta coplita fregona:
«A los blancos hizo Dios,
«A los mulatos San Pedro,
«A los negros hizo el diablo
«Para tizón del infierno.»
Había estao juntando rabia
El moreno dende ajuera —
En lo escuro le brillaban
Los ojos como linterna.
Lo conocí retobao
Me acerqué y le dije presto;
«Po... r... rudo que un hombre sea
«Nunca se enoja por esto.»
Corcobió el de los tamangos
Y creyéndose muy fijo:« —
Mas porrudo serás vos,
«Gaucho rotoso» me dijo.
Y ya se me vino al humo
Como á buscarme la hebra —
Y un golpe le acomodé
Con el porrón de giñebra.
Ay no más pegó el de ollin
Más gruñidos que un chanchito,
Y pelando el envenao
Me atropelló dando gritos.
Pegué un brinco y abrí cancha
Diciéndoles: — «Caballeros,
«Dejen venir ese toro»
«Solo nací... solo muero.»
El negro, después del golpe,
Se había el poncho refalao
Y dijo: — «Vas á saber
«Si es solo ó acompañao.»
Y mientras se arremangó
Yo me saqué las espuelas,
Pues malicié que aquel tío
No era de arriar con las riendas.
No hay cosa como el peligro
Pa refrescar un mamao;
Hasta la vista se aclara
Por mucho que haiga chupao.
El negro me atropelló
Como á quererme comer —
Me hizo dos tiros seguidos
Y los dos le abarajé.
Yo tenía un facón con S,
Que era de lima de acero;
Le hice un tiro, lo quitó
Y vino ciego el moreno.
Y en el medio de las aspas
Un planazo le asenté.
Que lo largué culebriando
Lo mesmo que buscapié.
Le coloriaron las motas
Con la sangre de la herida,
Y volvió á venir jurioso
Como una tigra parida.
Y ya me hizo relumbrar
Por los ojos el cuchillo,
Alcanzando con la punta
A cortarme en un carrillo.
Me hirvió la sangre en las venas
Y me le afirmé al moreno,
Dándole de punta y hacha
Pa dejar un diablo menos.
Por fin en una topada
En el cuchillo lo alcé,
Y como un saco de güesos
Contra un cerco lo largué.
Tiró unas cuantas patadas
Y ya cantó pa el carnero —
Nunca me puedo olvidar
De la agonía de aquel negro.
En esto la negra vino
Con los ojos como agí —
Y empezó la pobre allí
A bramar como una loba —
Yo quise darle una soba
A ver si la hacía callar
Mas, pude reflesionar
Que era malo en aquel punto,
Y por respeto al dijunto
No la quise castigar.
Limpié el facón en los pastos,
Desaté mi redomón.
Monté despacio y salí
Al tranco pa el cañadón.
Despues supe que al finao
Ni siquiera lo velaron,
Y retobao en un cuero,
Sin resarle lo enterraron.
Y dicen que dende entónces
Cuando es la noche serena,
Suele verse una luz mala
Como de alma que anda en pena.
Yo tengo intención á veces,
Para que no pene tanto,
De sacar de allí los güesos
Y echarlos al campo santo.
Otra vez en un boliche
Estaba haciendo la tarde,
Cayó un gaucho que hacía a larde
De guapo y de peliador.
A la llegada metió
El pingo hasta la ramada —
Y yo sin decirle nada
Me quedé en el mostrador.
Era un terne de aquel pago
Que naides lo reprendía,
Que sus enriedos tenía
Con el señor Comendante: —
Y como era protegido,
Andaba muy entonao,
Y á cualquier desgraciao
Lo llevaba por delante.
¡Ah pobre! si el mismo creiba,
Que la vida le sobraba,
Ninguno diría que andaba
Aguaitándolo la muerte —
Pero ansí pasa en el mundo,
Es ansi la triste vida —
Pa todos está escondida,
La güena ó la mala suerte.
Se tiró al suelo, al dentrar
Le dio un empeyón á un vasco-
Y me alargó un medio frasco
Diciendo — «Beba cuñao» —
«Por su hermana» contesté,
«Que por la mía no hay cuidao.»
«-¡Ah! gaucho me respondió,
«¿De qué pago será crioyo? —
«¿Lo andará buscando el hoyo? —
«¿Deberá tener güen cuero?
«Pero ande bala este toro
«No bala ningún ternero.»
Y ya salimos trensaos
Porque el hombre no era lerdo,
Mas como el tino no pierdo,
Y soy medio lijerón,
Le dejé mostrando el sebo
De un revés con el facón.
Y como con la justicia
No andaba bien por allí,
Cuanto pataliar lo vi,
Y el pulpero pegó el grito,
Ya pa el palenque salí
Como haciéndome chiquito.
Monté y me encomendé á Dios,
Rumbiando para otro pago —
Que el gaucho que llaman vago
No puede tener querencia,
Y ansi de estrago en estrago
Vive llorando la ausencia.
El anda siempre juyendo,
Siempre pobre y perseguido,
No tiene cueva ni nido
Como si juera maldito-
Porque el ser gaucho... barajo,
El ser gaucho es un delito.
Es como el patrio de posta:
Lo larga este, aquél lo toma, —
Nunca se acaba la broma —
Dende chico se parece
Al arbolito que crece
Desamparao en la loma.
Le echan la agua del bautismo
Aquel que nació en la selva,
«Buscá madre que te engüelva»
Le dice al flaire y lo larga,
Y dentra á cruzar el mundo
Como burro con la carga.
Y se cria viviendo al viento
Como oveja sin trasquila —
Mientras su padre en las filas
Anda sirviendo al Gobierno
Aunque tirite en invierno
Naide lo ampara ni asila.
Le llaman «gaucho mamao»
Si lo pillan divertido,
Y que es mal entretenido
Si en un baile lo sorprienden,
Hace mal si se defiende
Y si nó, se vé fundido.
No tiene hijos, ni mujer,
Ni amigos, ni protectores,
Pues todos son sus señores
Sin que ninguno lo ampare —
¿Tiene la suerte del güey —
Y donde irá el güey que no are?
Su casa es el pajonal,
Su guarida es el desierto;
Y si de hambre medio muerto
Le echa el lazo á algún mamón,
Lo persiguen como á plaito,
Porque es un gaucho ladrón.
Y si de un golpe por ay
Lo dan güelta panza arriba,
No hay un alma compasiva
Que le rece una oración —
Tal vez como cimarrón
En una cueva lo tiran.
«Él nada gana en la paz
Y es el primero en la guerra —
No le perdonan si yerra,
Que no saben perdonar, —
Porque el gaucho en esta tierra
Solo sirve pa votar.
Para él son los calabozos,
Para el las duras prisiones,
En su boca no hay razones
Aunque la razón le sobre;
Que son campanas de palo
Las razones de los pobres.
Si uno aguanta, es gaucho bruto —
Si no aguanta, es gaucho malo —
Déle azote, déle palo!
Porque es lo que él necesita!! —
De todo el que nació gaucho
Esta es la suerte maldita.
Vamos suerte — vamos juntos
Dende que juntos nacimos —
Y ya que juntos vivimos
Sin podernos dividir...
Yo abriré con mi cuchillo
El camino pa seguir.
Matreriando lo pasaba
Y á las casas no venía —
Solía arrimarme de día
Mas lo mesmos que el carancho,
Siempre estaba sobre el rancho
Espiando á la polecía.
Viva el gaucho que ande mal
Como zorro perseguido —
Hasta que al menor descuido
Se lo atarazquen los perros,
Pues nunca le falta un yerro
Al hombre más alvertido.
Y en esa hora de la tarde
En que tuito se adormece
Que el mundo dentrar parece
A vivir en pura calma,
Con las tristezas del alma
Al pajonal enderieze.
Bala el tierno corderito
Al lao de la blanca oveja,
Y á la vaca que se aleja
Llama el ternero amarrao —
Pero el gaucho desgraciao
No tiene á quien dar su queja.
Ansi es que al venir la noche
Iba a buscar mi guarida —
Pues ande el tigre se anida
Tambien el hombre lo pasa
Y no quería que en las casas
Me rodiára la partida.
Pues aun cuando vengan ellos
Cumpliendo con sus deberes,
Yo tengo otros pareceres,
Y en esa conduta vivo —
Que no debe un gaucho altivo
Peliar entre las mujeres.
Y al campo me iba solito,
Más matrero que el venao —
Como perro abandonao
A buscar una tapera,
O en alguna viscachera
Pasar la noche tirao.
Sin punto ni rumbo fijo
En aquella inmensidá,
Entre tanta oscuridá
Anda el gaucho como duende,
Allí jamás lo sorpriende
Dormido, la autoridá.
Su esperanza es el coraje,
Su guardia es la precaución,
Su pingo es la salvacion,
Y pasa uno en su desvelo,
Sin más amparo que el cielo
Ni otro amigo que el facón
Ansí me hallaba una noche
Contemplando las estrellas
Que le parecen más bellas
Cuanto uno es más desgraciao,
Y que Dios las haiga críao
Para consolarse en ellas.
Les tiene el hombre cariño
Y siempre con alegría
Ve salir las tres marías;
Que si llueve, cuanto escampa,
Las estrellas son la guía
Que el gaucho tiene en la pampa.
Aquí no valen Dotores,
Solo vale la esperiencia,
Aquí verían su inocencia
Esos que todo lo saben;
Por que esto tiene otra llave
Y el gaucho tiene su ciencia.
Es triste en medio del campo
Pasarse noches enteras
Contemplando en sus carreras
Las estrellas que Dios cría,
Sin tener más compañía
Que su delito y las fieras.
Me encontraba como digo,
En aquella soledá,
Entre tanta oscuridá,
Echando al viento mis quejas
Cuando el grito del chajá
Me hizo parar las orejas.
Como lumbriz me pegué
Al suelo para escuchar;
Pronto sentí retumbar
Las pisadas de los fletes,
Y que eran muchos ginetes
Conocí sin vacilar.
Cuando el hombre está en peligro
No debe tener confianza,
Ansi tendido de panza
Puse toda mi atención,
Y ya escuché sin tardanza;
Como el ruido de un latón.
Se venían tan calladitos
Que yo me puse en cuidao,
Talvez me hubieran bombiao
Y me venían á buscar;
Mas no quise disparar
Que eso es de gaucho morao.
Al punto me santigüé
Y eché de giñebra un taco,
Lo mesmito que el mataco
Me arroyé con el porrón:
«Si han de darme pa tabaco,
Dije, ésta es güena ocasión.»
Me refalé las espuelas,
Para no peliar con grillos,
Me arremangué el calzoncillo,
Y me ajusté bien la faja;
Y en una mata de paja
Probé el filo del cuchillo.
Para tenerlo a la mano
El flete en el pasto até,
La cincha le acomodé,
Y en un trance como aquel,
Haciendo espaldas en él
Quietito los aguardé.
Cuando cerca los sentí,
Y que ay no más se pararon,
Los pelos se me erizaron
Y aunque nada vían mis ojos,
« — No se han de morir de antojo» —
Les dije, cuando llegaron.
Yo quise hacerles saber
Que allí se hallaba un varón;
Les conocí la intención
Y solamente por eso
Fué que les gané el tirón,
Sin aguardar voz de preso. —
«Vos sos un gaucho matrero»
Dijo uno, haciéndose el güeno,
«Vos mataste un moreno
«Y otro en una pulpería,
«Y aquí está la polecía
«Que viene á justar tus cuentas;
«Te va á alzar por las cuarenta
«Si te resistís hoy día.» —
«No me vengan, contesté,
«Con relación de dijuntos;
«Esos son otros asuntos;
«Vean si me pueden llevar,
«Que yo no me he de entregar,
«Aunque vengan todos juntos.»
Pero no aguardaron más,
Y se apiaron en montón —
Como á perro cimarrón
Me rodiaron entre tantos,
Yo me encomendé á los Santos,
Y eché mano á mi facón.
Y ya vide el fogonazo
De un tiro de garabina,
Mas quiso la suerte indina
De aquel maula, que me errase,
Y ay no más lo levantase
Lo mesmo que una sardina.
A otro que estaba apurao
Acomodando una bola,
Le hice una dentrada sola
Y le hice sentir el fierro,
Y ya salió como el perro
Cuando le pisan la cola.
Era tanta la aflición
Y la angurria que tenían,
Que tuitos se me venían,
Donde yo los esperaba;
Uno al otro se estorbaba
Y con las ganas no vían.
Dos de ellos que traiban sables
Más garifos y resueltos,
En las hilachas envueltos
Enfrente se me pararon,
Y á un tiempo me atropellaron
Lo mesmo que perros sueltos.
Me fuí reculando en falso
Y el poncho adelante eché,
Y cuanto le puso el pié
Uno medio chapetón,
De pronto le dí un tirón
Y de espaldas lo largué.
Al verse sin compañero
El otro se sofrenó,
Entónces le dentré yo,
Sin dejarlo resollar,
Pero ya empezó a aflojar
Y á la pu...n...ta disparó.
Uno que en una tacuara
Había atao una tijera,
Se vino como si juera
Palenque de atar terneros,
Pero en dos tiros certeros
Salió aullando campo ajuera.
Por suerte en aquel momento
Venía coloriando el alba
Y yo dije «si me salva
La virgen en este apuro,
«En adelante le juro
«Ser más güeno que una malva.»
Pegué un brinco y entre todos
Sin miedo me entreveré —
Echo ovillo me quedé
Y ya me cargó una yunta,
Y por el suelo la punta
De mi facón les jugué.
El más engolosinao
Se me apió con un achazo;
Se lo quité con el brazo
De nó, me mata los piojos;
Y ante de que diera un paso
Le eché tierra en los dos ojos.
Y miéntras se sacudía
Refregándose la vista,
Yo me le fuí como lista
Y ay no más me le afirmé,
Diciéndole: «Dios te asista.»
Y de un reves lo voltié.
Pero en ese punto mesmo
Sentí que por las costillas
Un sable me hacía cosquillas
Y la sangre se me heló —
Dende ese momento yo,
Me salí de mis casillas.
Dí para atrás unos pasos
Hasta que pude hacer pié,
Por delante me lo eché
De punta y tajos a un criollo;
Metió la pata en un oyo,
Y yo al hoyo lo mandé.
Tal vez en el corazón
Lo tocó un Santo Bendito
A un gaucho, que pegó el grito,
Y dijo: — «¡Cruz no consiente
«Que se cometa el delito
«De matar ansi un valiente!
Y ay no más se me aparió,
Dentrándole a la partida;
Yo les hice otra embestida
Pues entre dos era robo;
Y el Cruz era como lobo
Que defiende su guarida.
Uno despachó al infierno
De los que lo atropellaron,
Los demás remoliniaron,
Pues íbamos á la fija,
Y á poco andar dispararon
Lo mesmo que sabandija.
Ay quedaban largo á largo
Los que estiaron la geta;
Otro iba como maleta,
Y Cruz de atrás les decía:
«Que venga otra polecía
«A llevarlos en carreta.»
Yo junté las osamentas
Me hinqué y les recé un bendito;
Hice una cruz de un palito
Y pedí á mi Dios clemente,
Me perdonára el delito
De haber muerto tanta gente.
Dejamos amotonaos
A los pobres que murieron,
No sé si los recojeron,
Porque nos fuimos á un rancho,
O si tal vez los caranchos
Ay no más se los comieron.
Lo agarramos mano á mano
Entre los dos al porrón,
En semejante ocasión
Un trago á cualquiera encanta,
Y Cruz no era remolón
Ni pijotiaba garganta.
Calentamos los gargueros
Y nos largamos muy tiesos,
Siguiendo siempre los besos
Al pichel, por mas señas,
Ibamos como cigüeñas
Estirando los pescuesos. —
«Yo me voy, le dije, amigo,
«Donde la suerte me lleve,
«Y si es que alguno se atreve
«A ponerse en mi camino
«Yo seguiré mi destino
«Que el hombre hace lo que debe.»
«Soy un gaucho desgraciao,
«No tengo donde ampararme,
«Ni un palo donde rascarme,
«Ni un árbol que me cubije;
«Pero ni aun esto me aflige
«Porque yo sé manejarme.»
«Antes de cair al servicio,
«Tenia familia y hacienda,
«Cuando volví, ni la prenda,
«Me la habían dejao ya, —
«Dios sabe en lo que vendrá
«A parar esta contienda.»
Y miéntras se sacudía
Refregándose la vista,
Yo me le fuí como lista
Y ay no más me le afirmé,
Diciéndole: «Dios te asista.»
Y de un reves lo voltié.
Pero en ese punto mesmo
Sentí que por las costillas
Un sable me hacía cosquillas
Y la sangre se me heló —
Dende ese momento yo,
Me salí de mis casillas.
Dí para atrás unos pasos
Hasta que pude hacer pié,
Por delante me lo eché
De punta y tajos a un criollo;
Metió la pata en un oyo,
Y yo al hoyo lo mandé.
Tal vez en el corazón
Lo tocó un Santo Bendito
A un gaucho, que pegó el grito,
Y dijo: — «¡Cruz no consiente
«Que se cometa el delito
«De matar ansi un valiente!
Y ay no más se me aparió,
Dentrándole a la partida;
Yo les hice otra embestida
Pues entre dos era robo;
Y el Cruz era como lobo
Que defiende su guarida.
Uno despachó al infierno
De los que lo atropellaron,
Los demás remoliniaron,
Pues íbamos á la fija,
Y á poco andar dispararon
Lo mesmo que sabandija.
Ay quedaban largo á largo
Los que estiaron la geta;
Otro iba como maleta,
Y Cruz de atrás les decía:
«Que venga otra polecía
«A llevarlos en carreta.»
Yo junté las osamentas
Me hinqué y les recé un bendito;
Hice una cruz de un palito
Y pedí á mi Dios clemente,
Me perdonára el delito
De haber muerto tanta gente.
Dejamos amotonaos
A los pobres que murieron,
No sé si los recojeron,
Porque nos fuimos á un rancho,
O si tal vez los caranchos
Ay no más se los comieron.
Lo agarramos mano á mano
Entre los dos al porrón,
En semejante ocasión
Un trago á cualquiera encanta,
Y Cruz no era remolón
Ni pijotiaba garganta.
Calentamos los gargueros
Y nos largamos muy tiesos,
Siguiendo siempre los besos
Al pichel, por mas señas,
Ibamos como cigüeñas
Estirando los pescuesos. —
«Yo me voy, le dije, amigo,
«Donde la suerte me lleve,
«Y si es que alguno se atreve
«A ponerse en mi camino
«Yo seguiré mi destino
«Que el hombre hace lo que debe.»
«Soy un gaucho desgraciao,
«No tengo donde ampararme,
«Ni un palo donde rascarme,
«Ni un árbol que me cubije;
«Pero ni aun esto me aflige
«Porque yo sé manejarme.»
«Antes de cair al servicio,
«Tenia familia y hacienda,
«Cuando volví, ni la prenda,
«Me la habían dejao ya, —
«Dios sabe en lo que vendrá
«A parar esta contienda.»
El andar tan despilchao
Ningún mérito me quita,
Sin ser un alma bendita
Me duelo del mal ageno:
Soy un pastel con relleno
Que parece torta frita.
Tampoco me faltan males
Y desgracias, le prevengo,
Tambien mis desdichas tengo,
Aunque esto poco me aflige —
Yo sé hacerme el chango rengo
Cuando la cosa lo esige.
Y con algunos ardiles
Voy viviendo, aunque rotoso;
A veces me hago el sarnoso
Y no tengo ni un granito,
Pero al chifle voy ganoso
Como panzón al maíz frito.
A mí no me matan penas
Mientras tenga el cuero sano,
Venga el sol en el verano
Y la escarcha en el invierno —
Si este mundo es un infierno
¿Por qué afligirse el cristiano?
Hagámosle cara fiera
A los males, compañero,
Porque el zorro más matrero
Suele cair como un chorlito;
Viene por un corderito
Y en la estaca deja el cuero.
Hoy tenemos que sufrir
Males que no tienen nombre,
Pero esto á naides lo asombre
Porque ansina es el pastel;
Y tiene que dar el hombre
Más vüultas que un carretel.
Yo nunca me he de entregar
A los brazos de la muerte —
Arrastro mi triste suerte
Paso á paso y como pueda —
Que donde el débil se queda
Se suele escapar el juerte.
Y ricuerde cada cual
Lo que cada cual sufrió
Que lo que es, amigo, yo,
Hago ansi la cuenta mía:
Ya lo pasado pasó —
Mañana será otro día.
Yo también tuve una pilcha
Que me enllenó el corazón —
Y si en aquella ocasión
Alguien me hubiera buscao —
Siguro que me había hallao
Más prendido que un botón.
En la güella del querer
No hay animal que se pierda...
Las mujeres no son lerdas —
Y todo gaucho es dotor
Si pa cantarle el amor
Tiene que templar las cuerdas.
¡Quién es de una alma tan dura
Que no quiera una mujer!
Lo alivia en su padecer:
Si no sale calavera
Es la mejor compañera
Que el hombre puede tener.
Si es güena, no lo abandona
Cuando lo vé desgraciao,
Lo asiste con su cuidao,
Y con afán cariñoso
Y usté tal vez ni un rebozo
Ni una pollera le ha dao.
Grandemente lo pasaba
Con aquella prenda mía —
Viviendo con alegría
Como la mosca en la miel! —
¡Amigo, qué tiempo aquel!
La pucha — que la quería!
Era la águila que á un árbol
Dende las nubes bajó
Era más linda que el alba
Cuando vá rayando el sol —
Era la flor deliciosa
Que entre el trebolar creció.
Pero, amigo, el comendante
Que mandaba la milicia,
Como que no desperdicia
Se fué refalando á casa; —
Yo le conocí en la traza
Que el hombre traiba malicia.
El me daba voz de amigo,
Pero no le tenía fe —
Era el jefe, y ya se vé,
No podía competir yo —
En mi rancho se pegó
Lo mesmo que un saguaipé.
A poco andar, conocí,
Que ya me había desbancao,
Y él siempre muy entonao,
Aunque sin darme ni un cobre
Me tenía de lao á lao
Como encomienda de pobre.
A cada rato, de chasque
Me hacía dir á gran distancia,
Ya me mandaba á una estancia,
Ya al pueblo, ya á la frontera —
Pero él en la comendancia
No ponía los piés siquiera.
Es triste á no poder más
El hombre en su padecer,
Si no tiene una mujer
Que lo ampare y lo consuele:
Mas pa que otro se la pele
Lo mejor es no tener.
No me gusta que otro gallo
Le cacarée á mi gallina —
Yo andaba ya con la espina,
Hasta que en una ocasión
Lo pillé junto al jogón
Abrazándome á la china.
Tenía el viejito una cara
De ternero mal lamido,
Y al verle tan atrevido
Le dije: — ¡Que le aproveche;
«Que había sido pa el amor
«Como gaucho pa la leche.»
Peló la espalda y se vino
Como á quererme ensartar,
Pero yo sin tutubiar
Le volví al punto á decir: —
«Cuidao no te vas á per...tigo
«Poné cuarta pa salir.»
Un puntazo me largó,
Pero el cuerpo le saqué,
Y en cuanto se lo quité,
Para no matar un viejo,
Con cuidado, medio de lejos
Un palazo le asenté.
Y como nunca al que manda
Le falta algún adulón,
Uno que en esa ocasión,
Se encontraba allí presente,
Vino apretando los dientes
Como perrito mamón,
Me hizo un tiro de revuelver
Que el hombre creyó siguro;
Era confiado y le juro
Que cerquita se arrimaba —
Pero siempre en un apuro
Se desentumen mis tabas.
El me siguió menudiando
Mas sin poderme acertar,
Y yo, déle culebriar,
Hasta que al fin le dentré
Y ay no más lo despaché
Sin dejarlo resollar.
Dentré á campiar en seguida
Al viejito enamorao,
El pobre se había ganao
En un noque de lejía —
¡Quién sabe cómo estaría
Del susto que había llevao!
Es zonzo el cristiano macho
Cuando el amor lo domina! —
El la miraba á la indina,
Y una cosa tan jedionda
Sentí yo, que ni en la fonda
He visto tal jedentina
Y le dije: — «Pa su agüela
«Han de ser esas perdices.»
Yo me tapé las narices,
Y me salí esternudando,
Y el viejo quedó olfatiando
Como chico con lumbrices.
Cuando la mula recula,
Señal que quiere cosiar —
AnsI se suele portar
Aunque ella lo disimula,
Recula como la mula
La mujer, para olvidar.
Alcé mis ponchos y mis prendas
Y me largué á padecer
Por culpa de una mujer
Que quiso engañar á dos —
Al rancho le dije adiós
Para nunca más volver.
Las mujeres dende entonces,
Conocí á todas en una —
Ya no he de probar fortuna
Con carta tan conocida:
Mujer y perra parida,
No se me atraca ninguna!
A otros les brotan las coplas
Como agua de manantial;
Pues á mí me pasa igual:
Aunque las mías nada valen,
De la boca se me salen
Como ovejas de corral.
Que en puertiando la primera,
Ya la siguen las demás,
Y en montones las de atrás
Contra los palos se estrellan,
Y saltan y se atropellan
Sin que se corten jamás.
Y aun que yo por mi inorancia
Con gran trabajo me esplico,
Cuando llego a abrir el pico
Ténganlo por cosa cierta,
Sale un verso y en la puerta
Ya asoma el otro el hocico.
Y emprésteme su atención;
Me oirá relatar las penas
De que traigo la alma llena —
Porque en toda circustancia,
Paga el gaucho su inorancia
Con la sangre de sus venas.
Despues de aquella desgracia
Me refugié en los pajales,
Andube entre los cardales
Como vicho sin guarida —
Pero, amigo, es esa vida
Como vida de animales.
Y son tantas las miserias
En que me he sabido ver,
Que con tanto padecer
Y sufrir tanta aflición
Malicio que he de tener
Un callo en el corazón.
Ansi andaba como guacho
Cuando pasa el temporal —
Supe una vez por mi mal
De una milonga que había,
Y ya pa la pulpería
Enderezé mi bagual.
Era la casa del baile
Un rancho de mala muerte,
Y se enllenó de tal suerte
Que andábamos á empujones —
Nunca faltan encontrones
Cuando un pobre se divierte.
Yo tenía unas medias botas
Con tamaños verdugones —
Me pusieron los talones
Con crestas como los gallos:
Si viera mis afliciones
Pensando yo que eran callos.
Con gato y con fandanguilio
Había empezado el changango,
Y para ver el fandango
Me colé haciendomé bola —
Más, metió el diablo la cola,
Y todo se volvió pango.
Había sido el guitarrero
Un gaucho duro de boca —
Yo tengo paciencia poca
Pa aguantar cuando no debo,
A ninguno me le atrevo,
Pero me halla el que me toca.
A bailar un pericón
Con una moza salí,
Y cuanto me vido allí
Sin duda me conoció —
Y estas coplitas cantó
Como por raIrse de mí:
«Las mujeres son todas
«Como las mulas —
«Yo no digo que todas
«Pero hay algunas
«Que á las aves que vuelan
«Les sacan plumas.»
«Hay gauchos que presumen
«De tener damas —
«No digo que presumen,
«Pero se alaban«
Y á lo mejor los dejan
«Tocando tablas.»
Se secretiaron las hembras —
Y yo ya me encocoré —
Volié la anca y le grité
«Dejá de cantar.... chicharra»
Y de un tajo á la guitarra
Tuitas las cuerdas corté.
Al punto salió de adentro
Un gringo con un jusil —
Pero nunca he sido vil,
Poco el peligro me espanta —
Yo me refalé la manta
Y la eché sobre candil.
Gané en seguida la puerta
Gritando: «Naides me ataje»
Y alborotado el hembraje,
Lo que todo quedo escuro,
Empezó á verse en apuro
Mesturao con el gauchage.
El primero que salió
Fué el cantor y se me vino —
Pero yo no pierdo el tino
Anque haiga tomao un trago —
Y hay algunos por mi pago
Que me tienen por ladino.
No ha de haber achocao otro —
Le salió cara la broma;
A su amigo cuando toma
Se le despeja el sentido,
Y el pobrecito había sido
Como carne de paloma.
Para prestar un socorro
Las mujeres no son lerdas —
Antes que la sangre pierda
Lo arrimaron á unas pipas —
Ay lo dejé con las tripas
Como pa que hiciera cuerdas.
Monté y me largué á los campos
Mmás libre que el pensamiento,
Como las nubes al viento
A vivir sin paradero,
Que no tiene el que es matrero
Nido, ni rancho, ni asiento.
No hay Fuerza contra el destino
Que le ha señalao el cielo —
Y aunque no tenga consuelo
Aguante el que está en trabajo!
¡Naides se rasca pa abajo!
¡Ni se lonjea contra el pelo!
Con el gaucho desgraciao
No hay uno que no se entone —
La menor falta lo espone
A andar con los avestruces!
Faltan otros con mas luces
Y siempre hay quien los perdone.
Yo no sé qué tantos meses
Esta vida me duró,
A veces nos obligó
La miseria á comer potro —
Me había acompañao con otros
Tan desgraciaos como yo. —
Más ¿para qué platicar
Sobre esos males, — canejo?
Nace el gaucho y se hace viejo,
Sin que mejore su suerte,
Hasta que por ay la muerte
Sale á cobrarle el pellejo.
Pero como no hay desgracia
Que no acabe alguna vez,
Me aconteció que despues
De sufrir tanto rigor
Un amigo por favor
Me compuso con el juez.
Le alvertiré que en mi pago
Ya no va quedando un criollo,
Se los ha tragao el oyo,
O juido ó muerto en la guerra
Porque, amigo, en esta tierra
Nunca se acaba el embrollo. —
Colijo que jué por eso
Que me llamó el juez un día,
Y me dijo que quería
Hacerme á su lao venir,
Y que dentrase á servir
De soldao de Policía.
Y me largó una proclama
Tratándome de valiente,
Que yo era un hombre decente,
Y que dende aquel momento
Me nombraba de sargento
Pa que mandára la gente.
Ansi estuve en la partida,
Pero ¿qué había de mandar?
Anoche al irlo á tomar
Vide güena coyontura —
Y á mí no me gusta andar
Con la lata á la cintura
Ya conoce, pues quién soy,
Tenga confianza conmigo,
Cruz le dió mano de amigo,
Y no lo ha de abandonar —
Juntos podemos buscar
Pa los dos un mesmo abrigo.
Andaremos de matreros
Si es preciso pa salvar —
Nunca nos ha de faltar
Ni un güen pingo para juír,
Ni un pajal ande dormir,
Ni un matambre que ensartar.
Y cuando sin trapo alguno
Nos haiga el tiempo dejao —
Yo le pediré emprestao
El cuero á cualquiera lobo,
Y hago un poncho, si lo sobo,
Mejor que poncho engomao.
Para mI la cola es pecho
Y el espinazo cadera —
Hago mi nido ande quiera
Y de lo que encuentro como —
Me echo tierra sobre el lomo
Y me apeo en cualquier tranquera.
Y dejo rodar la bola,
Que algún día se ha de parar —
Tiene el gaucho que aguantar
Hasta que lo trague el oyo —
O hasta que venga algun criollo
En esta tierra á mandar.
Lo miran al pobre gaucho
Como carne de cogote:
Lo tratan al estricote —
Y si ansi las cosas andan,
Porque quieren los que mandan
Aguantemos los azotes.
Pucha — si usté los oyera
Como yo en una ocasión,
Tuita la conversación
Que con otro tuvo el juez —
Le asiguro que esa vez
Se me achicó el corazón.
Hablaban de hacerse ricos
Con campos en la fronteras —
De sacarla más ajuera
Donde había campos baldidos —
Y llevar de los partidos
Gente que la defendiera.
Todos se güelven proyetos
De colonias y carriles —
Y tirar la plata á miles
En los gringos enganchaos,
Miéntras al pobre soldao
Le pelan la chaucha — ¡ah, viles! —
Pero si siguen las cosas
Como van hasta el presente
Puede ser que de repente
Veamos el campo disierto,
Y blanqueando solamente
Los güesos de los que han muerto.
Hace mucho que sufrimos
La suerte reculativa —
Trabaja el gaucho y no arriba,
Porque á lo mejor del caso,
Lo levantan de un sogazo
Sin dejarle ni saliva.
De los males que sufrimos
Hablan mucho los puebleros,
Pero hacen como los teros
Para esconder sus niditos:
En un lao pegan los gritos
Y en otro tienen los güevos.
Y se hacen los que no aciertan
A dar con la coyuntura —
Miéntras al gaucho lo apura
Con rigor la autoridá,
Ellos á la enfermedá
Le están errando la cura.
Ya conoce, pues quién soy,
Tenga confianza conmigo,
Cruz le dió mano de amigo,
Y no lo ha de abandonar —
Juntos podemos buscar
Pa los dos un mesmo abrigo.
Andaremos de matreros
Si es preciso pa salvar —
Nunca nos ha de faltar
Ni un güen pingo para juír,
Ni un pajal ande dormir,
Ni un matambre que ensartar.
Y cuando sin trapo alguno
Nos haiga el tiempo dejao —
Yo le pediré emprestao
El cuero á cualquiera lobo,
Y hago un poncho, si lo sobo,
Mejor que poncho engomao.
Para mI la cola es pecho
Y el espinazo cadera —
Hago mi nido ande quiera
Y de lo que encuentro como —
Me echo tierra sobre el lomo
Y me apeo en cualquier tranquera.
Y dejo rodar la bola,
Que algún día se ha de parar —
Tiene el gaucho que aguantar
Hasta que lo trague el oyo —
O hasta que venga algun criollo
En esta tierra á mandar.
Lo miran al pobre gaucho
Como carne de cogote:
Lo tratan al estricote —
Y si ansi las cosas andan,
Porque quieren los que mandan
Aguantemos los azotes.
Pucha — si usté los oyera
Como yo en una ocasión,
Tuita la conversación
Que con otro tuvo el juez —
Le asiguro que esa vez
Se me achicó el corazón.
Hablaban de hacerse ricos
Con campos en la fronteras —
De sacarla más ajuera
Donde había campos baldidos —
Y llevar de los partidos
Gente que la defendiera.
Todos se güelven proyetos
De colonias y carriles —
Y tirar la plata á miles
En los gringos enganchaos,
Miéntras al pobre soldao
Le pelan la chaucha — ¡ah, viles! —
Pero si siguen las cosas
Como van hasta el presente
Puede ser que de repente
Veamos el campo disierto,
Y blanqueando solamente
Los güesos de los que han muerto.
Hace mucho que sufrimos
La suerte reculativa —
Trabaja el gaucho y no arriba,
Porque á lo mejor del caso,
Lo levantan de un sogazo
Sin dejarle ni saliva.
De los males que sufrimos
Hablan mucho los puebleros,
Pero hacen como los teros
Para esconder sus niditos:
En un lao pegan los gritos
Y en otro tienen los güevos.
Y se hacen los que no aciertan
A dar con la coyuntura —
Miéntras al gaucho lo apura
Con rigor la autoridá,
Ellos á la enfermedá
Le están errando la cura.
Dios formó lindas las flores,
Delicadas como son —
Les dió toda perfeción
Y cuanto él era capaz —
Pero al hombre le dió mas
Cuando le dió el corazón.
Le dió claridá a la luz,
Juerza en su carrera al viento,
Le dió vida y movimiento
Dende el águila al gusano —
Pero más le dió al cristiano
Al darle el entendimiento.
Y aunque á las aves les dió,
Con otras cosas que inoro,
Esos piquitos como oroY
un plumaje como tabla —
Le dió al hombre mas tesoro
Al darle una lengua que habla.
Y dende que dió á las fieras
Esa juria tan inmensa.
Que no hay poder que las vensa
Ni nada que las asombre —
¿Qué ménos le daría al hombre
Que el valor pa su defensa?
Pero tantos bienes juntos
Al darle, malicio yo
Que en sus adentros pensó
Que el hombre los precisaba,
Pues los bienes igualaba
Con las penas que le dió.
Y yo empujao por las mías
Quiero salir de este infierno: —
Ya no soy pichón muy tierno
Y sé manejar la lanza —
Y hasta los Indios no alcanza
La facultá del Gobierno.
Yo sé que allá los caciques
Amparan á los cristianos,
Y que los tratan de «Hermanos»
Cuando se van por su gusto —
A que andar pasando sustos...
Alcemos el poncho y vamos.
En la cruzada hay peligros
Pero ni aun esto me aterra —
Yo ruedo sobre la tierra
Arrastrao por mi destino;
Y si erramos el camino....
No es el primero que lo erra.
Si hemos de salvar ó nó —
De esto naide nos responde,
Derecho ande el sol se esconde
Tierra adentro hay que tirar,
Algun día hemos de llegar...
Despues sabremos á dónde.
No hemos de perder el rumbo
Los dos somos güena yunta —
El que es gaucho ve ande apunta,
Aunque inora ande se encuentra;
Pa el lao en que el sol se dentra
Dueblan los pastos la punta.
De hambre no perecemos
Pues sigun otros me han dicho
En los campos se hallan vichos
De los que uno necesita...
Gamas, matacos, mulitas,
Avestruces y quirquinchos.
Cuando se anda en el desierto
Se come uno hasta las colas —
Lo han cruzado mujeres solas
Llegando al fin con salú,
Y á de ser gaucho el ñandú
Que se escape de mis bolas.
Tampoco á la sé le temo,
Yo la aguanto muy contento,
Busco agua olfatiando al viento
Y dende que no soy manco,
Ande hay duraznillo blanco
Cabo, y la saco al momento.
Allá habrá seguridá
Ya que aquí no la tenemos,
Ménos males pasaremos
Y ha de haber grande alegría,
El día que nos descolguemos
En alguna toldería.
Fabricaremos un toldo
Como lo hacen tantos otros,
Con unos cueros de potro
Que sea sala y sea cocina,
¡Tal vez no falte una china
Que se apiade de nosotros!
Allá no hay que trabajar,V
ive uno como un señor —
De cuando en cuando un malón —
Y si de él sale con vida,
Lo pasa echao panza arriba
Mirando dar güelta el sol.
Y ya que á juerza de golpes
La suerte nos dejó aflus,
Puede que allá veamos luz
Y se acaben nuestras penas;
Todas las tierras son güenas
Vamosnos amigo Cruz.
El que maneja las bolas,
El que sabe echar un pial,
Y sentársele á un bagual
Sin miedo de que lo baje,
Entre los mesmos salvajes
No puede pasarlo mal.
El amor como la guerra
Lo hace el criollo con canciones —
A mas de eso en los malones
Podemos aviarnos de algo,
En fin, amigo, yo salgo
De estas pelegrinaciones
En este punto, el cantor
Buscó un porrón pa consuelo,
Echó un trago como un cielo,
Dando fin á su argumento;
Y de un golpe el istrumento
Lo hizo astillas contra el suelo.
«Ruempo, dijo, la guitarra,
Pa no volverme á tentar,
Ninguno la ha de tocar
Por siguro tengaló;
Pues naides ha de cantar
Cuando este gaucho cantó.
Y daré fin á mis coplas
Con aire de relación,
Nunca falta un preguntón
Mas curioso que mujer,
Y tal vez quiera saber
Como jué la conclusión.
Cruz y Fierro de una estancia
Una tropilla se arriaron —
Por delante se la echaron
Como criollos entendidos,
Y pronto sin ser sentidos
Por la frontera cruzaron.
Y cuando la habían pasao,
Una madrugada claraLe dijo
Cruz que miráraLas últimas poblaciones
Y á Fierro dos lagrimones
Le rodaron por la cara.
Y siguiendo el fiel del rumbo
Se entraron en el desierto —
No sé si los habrán muerto
En alguna correría,
Pero espero que algun día
Sabré de ellos algo cierto.
Y ya con estas noticias
Mi relación acabé,
Por ser ciertas las conté,
Todas la desgracias dichas —
Es un telar de desdichas
Cada gaucho que usté vé.
Pero ponga su esperanza
En el Dios que lo formó,
Y aquí me despido yo
Que he relatao á mi modo
Males que conocen todos
Pero que naides contó.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
