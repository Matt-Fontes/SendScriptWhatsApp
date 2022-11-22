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
Ta aqui o código das urnas. 
Se acharem algum bug é só mandar

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include <ctype.h>
#include <time.h> 

#ifdef __unix__
    #include <unistd.h>                      //Biblioteca para usar usleep no linux
    #include <curses.h>
#elif defined(_WIN32) || defined(_WIN64)
	#define OS_Windows
    #include <Windows.h>                     //Biblioteca para usar Sleep no windows
	#include <conio.h>            
#endif

//Declaração das funções;
int LendoVotantes();
void Permissao(char senha[50]);
void LimpaTela();
void Delay(int tempo);
void UrnaRE(char voto[6]);
void UrnaPG(char voto[6]);
void Menu();
void TabelaCandidatos();
void Fim();
void Relatorio(int votos, int david, int vinicius, int polly, int karla, int dyego, int brancoRE, int nuloRE, int hadija, int lavinia, int brancoPG, int nuloPG);

int main(){
	setlocale(LC_ALL, "");
	int i, opcao, corrige, validacao, votantes = 0, cont = 0, seguir = 1;
	int votos = 0, brancoRE = 0, nuloRE = 0, brancoPG = 0, nuloPG = 0, david = 0, vinicius = 0, polly = 0, karla = 0, dyego = 0, hadija = 0, lavinia = 0;
	char entrada, voto[6], senha[50];
	
	//A senha padrão é PEX1237;
	//É possível alterar a senha digitando 1229 no MENU principal;	
	seguir = 1;
	strcpy(senha, "PEX1237");
	
	do{
		Menu();
		printf("\t\t\t\t -> Opção: ");
		scanf("%d", &opcao);
			
		if(opcao == 1){
			Permissao(senha);
			votantes = LendoVotantes();
		} else if(opcao == 2){
			Permissao(senha);
			
			if(!votantes){
				LimpaTela();
				printf("\n\t\t\t\a ** É necessário ter o número de VOTANTES primeiro! **\n");
				printf("\n\t\t\t\t -> Pressione ENTER para continuar...");
				getch();
			} else {	
				for(i = 1; i <= votantes; i++){
					strcpy(voto, "");
					votos++;
					
					TabelaCandidatos();
					printf("\n\t\t\t\t-> Precione ENTER para continuar...");
					getch();
					
					corrige = 1;
					validacao = 0;
					
					do{
						strcpy(voto, "");
						UrnaRE(voto);
						printf("\t- INFORME SEU VOTO PARA REPRESENTANTE: ");
						scanf("%s", voto);
						Delay(1); 
						
						UrnaRE(voto);
						printf("\t- Informe 1 para CONFIRMAR ou 2 para CORRIGIR: ");
						scanf("%d", &validacao);
						
						if(validacao == 1){
							corrige = 0;
						};
						
						if(validacao != 1 && validacao != 2){
							LimpaTela();
							printf("\n\t\t\t\t\t\a** OPÇÃO INVÁLIDA! ** \n\n\t\t\t\t -> Insira seu voto novamente...");
							Delay(2);
						};
					} while(corrige);
								
					if(strcmp(voto, "12345") == 0){
						david++;
					} else if(strcmp(voto, "67890") == 0){
						vinicius++;
					} else if(strcmp(voto, "98765") == 0){
						polly++;
					} else if(strcmp(voto, "43210") == 0){
						karla++;
					} else if(strcmp(voto, "48444") == 0){
						dyego++;
					} else if(strcmp(voto, "00000") == 0){
						brancoRE++;
					} else {
						nuloRE++;
					};	
					
					votos++;
					strcpy(voto, "");
					corrige = 1;
					validacao = 0;	
					
					do{
						strcpy(voto, "");
						UrnaPG(voto);
						printf("\t- INFORME SEU VOTO PARA PRESIDENTE: ");
						scanf("%s", voto);
						Delay(1);
						
						UrnaPG(voto);
						printf("\t- Informe 1 para CONFIRMAR ou 2 para CORRIGIR: ");
						scanf("%d", &validacao);
						
						if(validacao == 1){
							corrige = 0;
						};
						
						if(validacao != 1 && validacao != 2){
							LimpaTela();
							printf("\n\t\t\t\t\t\a** OPÇÃO INVÁLIDA! ** \n\n\t\t\t\t -> Insira seu voto novamente...");
							Delay(2);
						};
					} while(corrige);
										
					if(strcmp(voto, "04") == 0){
						hadija++;
					} else if(strcmp(voto, "08") == 0){
						lavinia++;
					} else if(strcmp(voto, "00") == 0){
						brancoPG++;
					} else {
						nuloPG++;
					};
					
					Fim();
					Delay(2);				
					
					Permissao(senha);
					LimpaTela();
					printf("\n\t\t\t\t\t ** [          ] 0%% **");		
					Delay(1); 	  	  	    
			  	  	LimpaTela();	
			  	  	printf("\n\t\t\t\t\t ** [==        ] 23%% **");		
					Delay(1); 	  	  	    
			  	  	LimpaTela();
			  	  	printf("\n\t\t\t\t\t ** [=====     ] 49%% **");		
					Delay(1); 	  	  	    
			  	  	LimpaTela();
			  	  	printf("\n\t\t\t\t\t ** [========  ] 83%% **");		
					Delay(1); 	  	  	    
			  	  	LimpaTela();
			  	  	printf("\n\t\t\t\t\t ** GRAVANDO VOTO **");		
					Delay(2); 	  	  	    
			  	  	LimpaTela();
				};	
			};
		} else if(opcao == 3){
			Permissao(senha);
			Relatorio(votos, david, vinicius, polly, karla, dyego, brancoRE, nuloRE, hadija, lavinia, brancoPG, nuloPG);
			getch();
			
		} else if(opcao == 4){
			break;
		
	 	//OPÇÃO SECRETA, número da sorte de Livia após o de Leonardo.	
		} else if(opcao == 1229){
			strcpy(senha, "");
			LimpaTela();
			printf("\n\t\t\t\t+ - - - - - - - - - - - - - - - - - - +");
			printf("\n\t\t\t\t       Cadastrando uma nova SENHA \n");
			printf("\t\t\t\t+ - - - - - - - - - - - - - - - - - - +");
			printf("\n\t\t\t\t  -> Nova senha: ");
			
			do{
	        	entrada = getch();   //Irá pegar a tecla pressionada 
	        	
	            if(isprint(entrada)){   //Se a tecla pressionada for imprimível(que não é uma tecla/caractere de controle)
	            	senha[cont] = entrada;  //Armazena o caractere
	            	cont++;
	            	printf("*");   //Mostra o asterisco(*)
	            } else if(entrada == 8 && cont){
	           	    senha[cont] = '\0';
	            	cont--;
	            	printf("\b \b");   //Apagando o caractere digitado
	            }
	        } while(entrada != 13);
	        
			senha[cont]= '\0';   //Necessário para não considerar o ENTER como senha	
			Delay(2);
			
			LimpaTela();
			
	        printf("\n\t\t\t\t -- Senha cadastrada com sucesso! --\n\n");			  	
	        Delay(1);
		} else {
			LimpaTela();	
			printf("\n\t\t\t\t\t\a** OPÇÃO INVÁLIDA! ** \n\n\t\t\t\t -> Pressione ENTER para continuar...");
			getch(); 
		};
	} while(opcao != 4);

	LimpaTela();
	printf("\n\t\t\t\t\t ** OBRIGADA POR PARTICIPAR **\n\n");
	Delay(1);
	printf("\t\t ##  ##   ###  # #  ###   #      ###   ##  ###  # #  ##    #   ###  ###  ###  #\n");
	printf("\t\t#    # #  #    ###   #   # #     #    #     #   # #  # #  # #  # #   #    #   #\n");
	printf("\t\t# #  ##   ##   ###   #   # #     ##    #    #   # #  # #  ###  # #   #    #   #\n");
	printf("\t\t# #  # #  #    # #   #   # #     #      #   #   # #  # #  # #  # #   #    #   # \n");	
	printf("\t\t ##  # #  ###  # #  ###   #      ###  ##    #   ###  ##   # #  # #   #   ###  ### \n\n");
	
	system("pause");
	return(0);
}

int LendoVotantes(){                    //Função para ler o número de votantes
	int votantes = 0;

	do{
		LimpaTela();
		printf("\n\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - - - - +");
		printf("\n\t\t\t\t    Defina o número de votantes na eleição: ");
		scanf("%d", &votantes);
		printf("\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - - - - +");
		
		Delay(2);
			
		if(votantes < 31){
			LimpaTela();
			printf("\n\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - - - - +");
			printf("\n\t\t\t\t **  É necessário ter no mínimo 31 votantes!  **\n");
			printf("\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - - - - +");
			Delay(3);
		};
	} while(votantes < 31);

	return(votantes);
};

void Permissao(char senha[50]){        //Função para validação de senha
	char permissao[50], entrada;
	int cont = 0;
	
	do{ 
		LimpaTela(); 
		printf("\n\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - +\n");
		printf("\t\t\t\t       Informe a SENHA para prosseguir      \n");
		printf("\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - +\n");
		printf("\t\t\t\t  -> Senha: ");
		
		cont = 0;
		do{
   			entrada = getch();   
	       	
	    	if(isprint(entrada)){   
	        	permissao[cont] = entrada;  
	           	cont++;
	           	printf("*");   
	    	} else if(entrada == 8 && cont){
	       	    permissao[cont] = '\0';
	          	cont--;
	           	printf("\b \b");   
  			}
		} while(entrada != 13);
		permissao[cont]= '\0';   
		
		if(strcmp(senha, permissao) != 0){
			LimpaTela();
			Delay(1);
			printf("\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - +\n");
			printf("\a\t\t\t\t           SENHA INCORRETA!\n\t\t\t\t      Digite novamente em instantes...\n");
			printf("\t\t\t\t+ - - - - - - - - - - - - - - - - - - - - +\n");
			Delay(2);   	
		}
		Delay(1);
	}while(strcmp(senha,permissao) != 0);
	
}

void LimpaTela(){                       //Função para limpar a tela
	system("cls || clear");              //Para sistemas diferentes, linux e windows
};

void Delay(int tempo){                  //Função para da um timer ou mesmo um delay
	int win;
	win = tempo * 1000;
	
	#ifdef OS_Windows
		Sleep(win); 
	#else 
		sleep(tempo);
	#endif
};

void UrnaRE(char voto[6]){              //Função da impressão da URNA REPRESENTANTE
	LimpaTela();
	if(strcmp(voto, "") == 0){
		printf("\t_____________________________________________________________________________\n");
		printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
		printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t|  \\\\        Representante     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
		printf("\t|   \\\\         Estudantil       \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
		printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
		printf("\t| ..  \\\\      __ __ __ __ __      \\\\\\                   \\ 0. .\\                   \\\\ \n");
		printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
    	printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
		printf("\t|=====================================================================================\\\\ \n\n");
	} else if(strcmp(voto, "00000") == 0){
		printf("\t_____________________________________________________________________________\n");
		printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
		printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t|  \\\\        Representante     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
		printf("\t|   \\\\         Estudantil       \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
		printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
		printf("\t| ..  \\\\         \\ BRANCO \\       \\\\\\                   \\ 0. .\\                   \\\\ \n");
		printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
    		printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
		printf("\t|=====================================================================================\\\\ \n\n");	
	} else if((strcmp(voto, "12345") == 0)||(strcmp(voto, "67890") == 0)||(strcmp(voto, "98765") == 0)||(strcmp(voto, "43210") == 0)||(strcmp(voto, "48444") == 0)){
		printf("\t_____________________________________________________________________________\n");
		printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
		printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t|  \\\\        Representante     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
		printf("\t|   \\\\         Estudantil       \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
		printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
		printf("\t| ..  \\\\         \\ %s \\        \\\\\\                   \\ 0. .\\                   \\\\ \n", voto);
		printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
    		printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
		printf("\t|=====================================================================================\\\\ \n\n");
	} else {
		printf("\t_____________________________________________________________________________\n");
		printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
		printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t|  \\\\        Representante     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
		printf("\t|   \\\\         Estudantil       \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
		printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
		printf("\t| ..  \\\\         \\ NULO \\         \\\\\\                   \\ 0. .\\                   \\\\ \n");
		printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
    		printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
		printf("\t|=====================================================================================\\\\ \n\n");
	}
}

void UrnaPG(char voto[6]){              //Função da impressão da URNA PRESIDENTE
	LimpaTela();
	if(strcmp(voto, "") == 0){
		printf("\t_____________________________________________________________________________\n");
		printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
		printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t|  \\\\        Presidente do     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
		printf("\t|   \\\\           Gremio         \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
		printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
		printf("\t| ..  \\\\           __ __          \\\\\\                   \\ 0. .\\                   \\\\ \n");
		printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
    		printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
		printf("\t|=====================================================================================\\\\ \n\n");
	} else if(strcmp(voto, "00") == 0){
		printf("\t_____________________________________________________________________________\n");
	   	printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
	   	printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
	   	printf("\t|  \\\\        Presidente do     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
	   	printf("\t|   \\\\           Gremio         \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
	   	printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
	   	printf("\t| ..  \\\\          \\ BRANCO \\      \\\\\\                   \\ 0. .\\                   \\\\ \n");
	   	printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
	   	printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
	    	printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
	   	printf("\t|=====================================================================================\\\\ \n\n");	
	} else if((strcmp(voto, "04") == 0)||(strcmp(voto, "08") == 0)){
		printf("\t_____________________________________________________________________________\n");
	   	printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
	   	printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
	   	printf("\t|  \\\\        Presidente do     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
	   	printf("\t|   \\\\           Gremio         \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
	   	printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
	   	printf("\t| ..  \\\\          \\ %s \\          \\\\\\                   \\ 0. .\\                   \\\\ \n", voto);
	   	printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
	   	printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
	    	printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
	   	printf("\t|=====================================================================================\\\\ \n\n");
	} else {
	   	printf("\t_____________________________________________________________________________\n");
	   	printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
	   	printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
	   	printf("\t|  \\\\        Presidente do     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
	   	printf("\t|   \\\\           Gremio         \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
	   	printf("\t| .  \\\\                          \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
	   	printf("\t| ..  \\\\          \\ NULO \\        \\\\\\                   \\ 0. .\\                   \\\\ \n");
	   	printf("\t| ...  \\\\                          \\\\\\                                             \\\\ \n");
	   	printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
	    	printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
	   	printf("\t|=====================================================================================\\\\ \n\n");
	}
}

void Fim(){                             //Função da impressão da URNA FINAL
		LimpaTela();
		printf("\a\t_____________________________________________________________________________\n");
		printf("\t|\\\\                          \\\\\\             Justiça Estudantil              \\\\ \n");
		printf("\t| \\\\                          \\\\\\                                             \\\\ \n");
		printf("\t|  \\\\   ####  ##  ###  ###     \\\\\\             \\ 1. '\\ 2...\\ 3'.'\\             \\\\ \n");
		printf("\t|   \\\\   ##    ##  # # # ##     \\\\\\             \\ 4 ..\\ 5' .\\ 6''.\\             \\\\ \n");
		printf("\t| .  \\\\   ####  ##  #  #  ##     \\\\\\             \\ 7.. \\ 8'..\\ 9.'.\\             \\\\ \n");
		printf("\t| ..  \\\\   ##    ##  #     ##     \\\\\\                   \\ 0. .\\                   \\\\ \n");
		printf("\t| ...  \\\\   ##    ##  #     ##     \\\\\\                                             \\\\ \n");
		printf("\t| ....  \\\\                          \\\\\\ \\ BRANCO ''.\\  \\ CORRIGE '''\\  \\ CONFIRMA \\ \\\\ \n");
    		printf("\t| .....  \\\\                          \\\\\\                                \\  ..''..  \\ \\\\ \n");
		printf("\t|=====================================================================================\\\\ \n\n");
}

void Menu(){						    //Função da impressão do MENU
	LimpaTela();   	
	printf("\t\t ##  ##   ###  # #  ###   #      ###   ##  ###  # #  ##    #   ###  ###  ###  #\n");
	printf("\t\t#    # #  #    ###   #   # #     #    #     #   # #  # #  # #  # #   #    #   #\n");
	printf("\t\t# #  ##   ##   ###   #   # #     ##    #    #   # #  # #  ###  # #   #    #   #\n");
	printf("\t\t# #  # #  #    # #   #   # #     #      #   #   # #  # #  # #  # #   #    #   # \n");	
	printf("\t\t ##  # #  ###  # #  ###   #      ###  ##    #   ###  ##   # #  # #   #   ###  ### \n");
	printf("\n\t\t\t\t***** VOTAÇÃO PARA REPRESENTANTE E PRESIDENTE *****\n\n\n");

	printf("\t\t\t\t ______________ ELEIÇÕES ESTUDANTIS ______________ \n");
	printf("\t\t\t\t|                                                 |\n");
	printf("\t\t\t\t|    1  -  DEFINIR A QUANTIDADE DE VOTANTE        |\n");
	printf("\t\t\t\t|    2  -  INICIAR VOTAÇÃO                        |\n");
	printf("\t\t\t\t|    3  -  CONTABILIZAR VOTOS                     |\n");
	printf("\t\t\t\t|    4  -  SAIR                                   |\n");
	printf("\t\t\t\t|_________________________________________________|\n\n");
};

void TabelaCandidatos(){                //Função da impressão da TABELA DE CANDIDATOS
	LimpaTela();
	printf("\t\t\t\t _________________________________________________\n");
	printf("\t\t\t\t|                                                 |\n");
	printf("\t\t\t\t|      CANDIDATOS A REPRESENTANTE ESTUDANTIL      |\n");
	printf("\t\t\t\t| - - - - - - - - - - - - - - - - - - - - - - - - |\n");
	printf("\t\t\t\t|                                                 |\n");
	printf("\t\t\t\t|    12345  -  DAVID ELSE                         |\n");
	printf("\t\t\t\t|    67890  -  VINICIUS WHILE                     |\n");
	printf("\t\t\t\t|    98765  -  POLLYANA RETURN                    |\n");
	printf("\t\t\t\t|    43210  -  KARLA FLOAT                        |\n");
	printf("\t\t\t\t|    48444  -  DYEGO MAIN                         |\n");
	printf("\t\t\t\t|    00000  -  BRANCO                             |\n");
	printf("\t\t\t\t|_________________________________________________|\n");
	printf("\t\t\t\t|                                                 |\n");
	printf("\t\t\t\t|        CANDIDATOS A PRESIDENTE DO GRÊMIO        |\n");
	printf("\t\t\t\t| - - - - - - - - - - - - - - - - - - - - - - - - |\n");
	printf("\t\t\t\t|                                                 |\n");
	printf("\t\t\t\t|       04  -  HADIJA PRINTF                      |\n");
	printf("\t\t\t\t|       08  -  LAVINIA SCANF                      |\n");
	printf("\t\t\t\t|       00  -  BRANCO                             |\n");
	printf("\t\t\t\t|_________________________________________________|\n");
};

void Relatorio(int votos, int david, int vinicius, int polly, int karla, int dyego, int brancoRE, int nuloRE, int hadija, int lavinia, int brancoPG, int nuloPG){
	struct tm *data_hora_atual;
	time_t segundos;
	time(&segundos); 
	data_hora_atual = localtime(&segundos);
	
	LimpaTela();
	printf("\t\t\t\t _________________________________________________\n");
	printf("\t\t\t\t                                                  \n");
	printf("\t\t\t\t           RELATÁRIO DETALHADO DAS VOTAÇÕES       \n");
	printf("\t\t\t\t  - - - - - - - - - - - - - - - - - - - - - - - - \n");
	printf("\t\t\t\t                                                  \n");
	printf("\t\t\t\t     NÚMEROS DE VOTOS: %d                         \n",votos);
	printf("\t\t\t\t     TOTAL DE VOTOS REPRESENTANTE DAVID: %d       \n",david);
	printf("\t\t\t\t     TOTAL DE VOTOS REPRESENTANTE VINICIUS: %d    \n",vinicius);
	printf("\t\t\t\t     TOTAL DE VOTOS REPRESENTANTE POLLYANA: %d    \n",polly);
	printf("\t\t\t\t     TOTAL DE VOTOS REPRESENTANTE KARLA: %d       \n",karla);
	printf("\t\t\t\t     TOTAL DE VOTOS REPRESENTANTE DYEGO: %d       \n",dyego);
	printf("\t\t\t\t     VOTOS BRANCOS PARA REPRESENTANTE: %d         \n",brancoRE);
	printf("\t\t\t\t     VOTOS NULOS PARA REPRESENTANTE: %d           \n",nuloRE);
	printf("\t\t\t\t                                                  \n");
	printf("\t\t\t\t     TOTAL DE VOTOS PRESIDENTE HADIJA: %d         \n",hadija);
	printf("\t\t\t\t     TOTAL DE VOTOS PRESIDENTE LAVINIA: %d        \n",lavinia);
	printf("\t\t\t\t     VOTOS BRANCOS PARA PRESIDENTE: %d            \n",brancoPG);
	printf("\t\t\t\t     VOTOS NULOS PARA PRESIDENTE: %d              \n",nuloPG);
	printf("\t\t\t\t _________________________________________________\n");
	printf("\t\t\t\t EMISSÃO: DATA: %d/%d/%d",data_hora_atual->tm_mday,data_hora_atual->tm_mon+1,data_hora_atual->tm_year+1900);
	printf(" às %d:%d:%d \n\n",data_hora_atual->tm_hour,data_hora_atual->tm_min,data_hora_atual->tm_sec);	
}
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
