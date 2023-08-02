var TEXTOS_GERAL = {

// TEXTO DE REMOÇÃO DE QUEM ENVIOU IMAGEM
REMOVEU_Q_ENVIOU_IMAGEM: `Usuario enviou imagem, e é proibido nesse grupo.`,

// TEXTO DE REMOÇÃO DE QUEM ENVIOU VIDEO
REMOVEU_Q_ENVIOU_VIDEO: `Usuario enviou video, e é proibido nesse grupo.`,

// TEXTO DE REMOÇÃO DE QUEM ENVIOU DOCUMENTO
REMOVEU_Q_ENVIOU_DOCUMENTO: `Usuario enviou documento, e é proibido nesse grupo.`,

// TEXTO DE REMOÇÃO DE QUEM ENVIOU CATALOGO
REMOVEU_Q_ENVIOU_CATALOGO: `Usuario enviou catalogo, e é proibido nesse grupo.`,

// TEXTO DE REMOÇÃO DE QUEM ENVIOU LOCALIZAÇÃO
REMOVEU_Q_ENVIOU_LOCALIZACAO: `Usuario enviou localização, e é proibido nesse grupo.`,

// TEXTO DE QUEM ENVIOU VCARD/CONTATO
REMOVEU_Q_ENVIOU_CONTATO: `Usuario enviou vcard/contato, e é proibido nesse grupo.`,

// LINK DA FOTO DO MENU // QUISER SEM FOTO, VOCÊ TROCA `https://xatimg.com/image/7JweqAjDsPWh.png`, pra false, sem as aspas, e não esquece da virgula do final.
FOTO_DO_MENU: `https://xatimg.com/image/7JweqAjDsPWh.png`,

// QUANDO O MODO BRINCADEIRA TIVER DESATIVADO
MODO_BRINCADEIRA: `Modo brincadeira está desativado, use o comando:\n#prefixo#brincadeiras para ativar, usando o comando novamente você desativa, boa sorte.`,

// LINK DA IMAGEM DO COMANDO DE CASAL
LINK_COMANDO_CASAL: "https://xatimg.com/image/K88c2BkQwlcF.jpg",

// TEXTO DO COMANDO DE CASAL // O #porcentagem# vai puxar de 0 a 100.
TEXTO_COMANDO_CASAL: `🌟 Casal do grupo com ॐ #porcentagem# ✨ de chance pra da certo 😏:`,

// #tempo# é quantos segundos ta definido no comando tempocmd, e #tempocmd# é quanto falta pra chegar no tempo definido, exemplo: 1 minuto // esse texto é do comando limitarcomando, veja a info dele usando o comando info limitarcomando
TEMPO_DE_CMD: `Aguarde #tempo# Segundos ate executar outro comando, tempo a concluir: ⏳ #tempocmd#`,

// TEXTO PARA QUANDO REMOVER UM USUARIO QUE TÁ MARCANDO TODOS COM WHATSAPP MODIFICADO, E NÃO É ADM DO GRUPO:

MARCOU_TODOS: `Usuario com mensagem marcando todos do grupo, talvez seja o Whatsapp dele, ou ele marcou com @ todos, irei remover e apagar a mensagem dele, Adeus..`,

// MENSAGEM DO COMANDO ANTIPVMSG
ANTIPV_MSG: `O Bot Aleatory New, não pode ser utilizado no privado, apenas em grupos.`,

// TEXTO DE REMOÇÃO DE QUANDO FALA UMA PALAVRA PROIBIDA DO ANTIPALAVRA / JÁ O #prefixo# ali ele puxa o prefixo que pode ser / ou ! tanto faz..
PALAVRAS_PB: `Usuario enviou uma palavra proibida, veja as palavras proibida para não cometer os mesmos erros, comando: #prefixo#palavraspb`,

// TEXTO PARA QUANDO ALGUÉM TENTAR USAR UM COMANDO VIP.
TEXTO_VIP: `Este comando é apenas para vips.`,

// MENSAGEM DE COMANDO NÃO ENCONTRADO: O #PREFIXO# é a definição que pega o prefixo.
CMD_N_ENCONTRADO: `_- Comando não encontrado: Utilize #PREFIXO#menu para visualizar meus comandos.`,

// MENSAGEM DE QUANDO TENTAREM UTILIZAR UM COMANDO EM GRUPO, QUE ESTÁ BLOQUEADO.
COMANDO_BLOQUEADO: `Comando Bloqueado, proibido por algum administrador do grupo, de utilizar este comando.`,

// QUANDO BLOQUEIA O USUARIO DE UTILIZAR COMANDOS NO GRUPO.
BLOQUEADO_DE_U_CMD: `Você está bloqueado de utilizar meus comandos, fale com algum administrador pra saber o porque, não pertube para não levar ban do grupo.`,

// TEXTO QUE VAI APARECER QUANDO REMOVER UM USUARIO QUE ESTÁ NA LISTA NEGRA.
LISTA_NEGRA_T: `Este usuario se encontra na lista negra, então por ordem dos administradores do grupo, irei remover ele(a)`,

// TEXTO QUE VAI APARECER QUANDO REMOVER UM USUARIO QUE ESTÁ NA LISTA NEGRA GLOBALMENTE
LISTA_NEGRA_GLOBAL: `Este usuario se encontra na lista negra, então por ordem do meu dono, irei remover ele(a)`,

// TEXTO QUE VAI APARECER, QUANDO REMOVER UM ESTRANGEIRO, LEMBRE-SE DE ADD O DDI, O DO BRASIL É 55:
ANTI_ESTRANGEIRO_T: `Usuario estrangeiro não permitido entrou no grupo, irei remover ele por não está na lista de DDI permitido do país dele.`,

// MENSAGEM DE QUE REMOVEU O USARIO QUE ENVIOU LINK // SE QUISER QUE A MENSAGEM NÃO SEJA ENVIADA, DEIXE DEFINIDO `0`
REMOVEU_LINK: `0`,

// MENSAGEM DE QUE REMOVEU O USARIO QUE ENVIOU LINK DE GRUPO // SE QUISER QUE A MENSAGEM NÃO SEJA ENVIADA, DEIXE DEFINIDO `0`
REMOVEU_LINK_DE_GRUPO: `0`,

// REMOVER USUARIOS QUE EXCEDE O LIMITE DE CARACTERES, DO COMANDO LIMITECARACTERES OU USANDO O DIMINUITIVO LIMITEC, A SIGLA #LMTCRC# É UMA DEFINIÇÃO DO LIMITE QUE NÃO PODE EXCEDER, QUE VAI APARECER QUANDO ENVIAR.
LIMITE_CARACTERES: `Usuario excedeu o limite de caracteres permitida pelos administradores, então irei remover, Limite permitido: #LMTCRC#`,

// TODO COMANDO QUE QUEM NÃO FOR DONO, E FOR EXECUTADO POR ALGUM USUARIO, O BOT VAI RESPONDER:
DONO: `Olá, apenas meu dono pode utilizar este comando.`,

// TODO COMANDO QUE QUEM NÃO FOR ADM, E FOR EXECUTADO POR ALGUM USUARIO, O BOT VAI RESPONDER:
ADM: `Olá, apenas administradores do grupo pode utilizar este comando.`,

// TODO COMANDO QUE O BOT PRECISA SER ADM, O BOT VAI RESPONDER:
BOT_ADM: `Olá, Eu preciso ser administrador para poder realizar esta ação.`,

// QUANDO UM COMANDO DE GRUPO É EXECUTADO NO PRIVADO.
SO_GRUPO: `Este comando so deve ser utilizado em grupos.`,

// TODO COMANDO DE AÇÃO QUE FOR UTILIZADO, O BOT VAI RESPONDER:
ENV: `Aguarde, estou realizando a ação..`

};

// NÃO MEXA NISSO, SÓ PODE MODIFICAR O TEXTO QUE ESTÁ ENTRE ` `, CUIDADO PARA NÃO APAGAR AS CHAVES, TIPO { }
exports.TEXTOS_GERAL = TEXTOS_GERAL;