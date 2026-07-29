/* =====================================================================
   ARQUIVO DE CONFIGURAÇÃO DA EMPRESA
   =====================================================================
   Este é o ÚNICO lugar do sistema onde a estrutura organizacional deve
   ser mantida: Filiais, Setores e as Funções compatíveis com cada setor.

   Por quê isso existe:
   Antes, setores, funções e filiais eram 3 listas independentes, o que
   permitia combinações que não existem na empresa (ex: setor ELÉTRICA
   com função GERENTE DE CSC). Isso nunca deveria acontecer.

   Agora a hierarquia é:
     Empresa → Filial (independente)
     Empresa → Setor → Funções compatíveis (encadeado)

   Quando o modo de teste gera um colaborador fictício, ele:
     1) sorteia uma FILIAL (unidade onde o colaborador trabalha)
     2) sorteia um SETOR
     3) sorteia uma FUNÇÃO dentre as funções compatíveis DAQUELE setor

   Isso garante que nunca existirá, por exemplo, alguém do setor
   "MECÂNICA GERAL" com a função "ANALISTA DA QUALIDADE".

   Quando a integração real com o sistema corporativo existir, basta
   substituir a geração aleatória por uma consulta à API/base do RH —
   toda a lógica do restante do app já consome esses dados por aqui,
   então nenhuma outra parte do código precisa mudar.
   ===================================================================== */

window.EMPRESA_CONFIG = {

  nome: "Empresa de Transportes",

  // Filiais / unidades da empresa (independentes do setor).
  filiais: [
    "Matriz – Coronel Fabriciano",
    "Complexo Minas Centrais - Filial Santa Bárbara",
    "Complexo Mariana - Filial Mariana",
    "Bahia - Filial",
    "Mineração Usiminas - Filial Itaúna"
  ],

  // Cargos/funções que NUNCA podem participar do sorteio do PPG,
  // independentemente do setor ao qual pertençam.
  cargosImpedidos: [
    "COORD. DE MANUTENCAO","COORD. DE TRANSPORTES","ENC. DE SETOR - ADMINISTRATIVO",
    "ENC. DE SETOR - MANUTENCAO","ENC. DE SETOR - OPERACIONAL","ENCARREGADO DE TI",
    "ENG. SEGURANÇA DO TRABALHO","ESPECIALISTA EM MANUTENÇÃO","GERENTE COMERCIAL",
    "GERENTE CONTÁBIL","GERENTE DE CSC","GERENTE DE FILIAL","GERENTE DE MANUTENÇÃO",
    "GERENTE DE OPERAÇÃO","GERENTE DE RH/QUALIDADE","GERENTE DE SUPRIMENTOS",
    "GERENTE FINANCEIRO","GERENTE JURÍDICO"
  ],

  // Setor → funções compatíveis. Esta é a peça central da correção:
  // uma função só pode ser sorteada dentro do setor em que ela realmente existe.
  // Funções podem se repetir em mais de um setor quando isso é coerente
  // (ex: "ASSIST. ADMINISTRATIVO" existe em vários setores administrativos).
  setores: [
    {nome:"ADM. DE TRANSPORTES - MINERAÇÃO", funcoes:["COORD. DE TRANSPORTES","ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"ADM. FRETAMENTO", funcoes:["ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO","COORD. DE TRANSPORTES"]},
    {nome:"ADM. FRETAMENTO - BEMISA", funcoes:["ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"ADM. FRETAMENTO - CENIBRA", funcoes:["ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"ADM. FRETAMENTO - TECHINT", funcoes:["ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"ADM. FRETAMENTO - USIMINAS", funcoes:["ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"ADM. MANUTENÇÃO/SUPRIMENTOS", funcoes:["GERENTE DE SUPRIMENTOS","ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"ADMINISTRAÇÃO DE PESSOAL", funcoes:["ANALISTA DE PESSOAL","AUX. DE PESSOAL","ASSIST. ADMINISTRATIVO"]},
    {nome:"ADMINISTRAÇÃO DE TRANSPORTES", funcoes:["COORD. DE TRANSPORTES","ASSIST. ADMINISTRATIVO","ENC. DE SETOR - ADMINISTRATIVO"]},
    {nome:"ADMINISTRAÇÃO DE TRANSPORTES/FRETAMENTO MUSA", funcoes:["COORD. DE TRANSPORTES","ASSIST. ADMINISTRATIVO"]},
    {nome:"APRENDIZAGEM", funcoes:["AUX. ADMINISTRATIVO"]},
    {nome:"ARRECADAÇÃO", funcoes:["ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"ASSESSORIA JURÍDICA", funcoes:["ADVOGADO","GERENTE JURÍDICO"]},
    {nome:"ASSESSORIA OPERACIONAL", funcoes:["ANALISTA AMBIENTAL","ASSIST. ADMINISTRATIVO"]},
    {nome:"ASSISTÊNCIA  ADMINISTRATIVA", funcoes:["ASSIST. ADMINISTRATIVO","AUX. ADMINISTRATIVO"]},
    {nome:"BORRACHARIA", funcoes:["BORRACHEIRO"]},
    {nome:"CENTRO DE SERVIÇOS COMPARTILHADOS", funcoes:["GERENTE DE CSC","ASSIST. ADMINISTRATIVO"]},
    {nome:"COBRADORES", funcoes:["COBRADOR"]},
    {nome:"COMERCIAL", funcoes:["ANALISTA COMERCIAL","GERENTE COMERCIAL"]},
    {nome:"CONSERVAÇÃO", funcoes:["PEDREIRO","AJUDANTE DE PEDREIRO","AUX. SERV. GERAIS"]},
    {nome:"CONTABILIDADE", funcoes:["ANALISTA CONTABIL","AUX. CONTABIL","GERENTE CONTÁBIL"]},
    {nome:"CONTROLE RECEITAS", funcoes:["ASSIST. ADMINISTRATIVO","ANALISTA DE CUSTOS"]},
    {nome:"CUSTOS", funcoes:["ANALISTA DE CUSTOS"]},
    {nome:"ELÉTRICA", funcoes:["ELETRICISTA","AUX. ELETRICISTA"]},
    {nome:"FINANCEIRO", funcoes:["GERENTE FINANCEIRO","ASSIST. ADMINISTRATIVO"]},
    {nome:"FISCALIZAÇÃO DE TRANSPORTES", funcoes:["FISCAL"]},
    {nome:"GARAGISTAS / FRENTISTAS", funcoes:["GARAGISTA"]},
    {nome:"GERENCIA", funcoes:["GERENTE DE FILIAL","GERENTE DE OPERAÇÃO","ENC. DE SETOR - OPERACIONAL"]},
    {nome:"INFORMÁTICA", funcoes:["ANALISTA DE TI","TÉC. DE INFORMÁTICA","ENCARREGADO DE TI"]},
    {nome:"INSTRUÇÃO DE TRANSPORTES", funcoes:["MOTORISTA INSTRUTOR"]},
    {nome:"JARDINAGEM", funcoes:["AUX. DE JARDINAGEM"]},
    {nome:"LANTERNAGEM", funcoes:["LANTERNEIRO","PINTOR DE VEICULOS","POLIDOR","CAPOTEIRO"]},
    {nome:"LAVANDERIA", funcoes:["LAVADOR","LAVADOR CHASSIS"]},
    {nome:"MECÂNICA GERAL", funcoes:["MECANICO","AUX. MECANICO","LUBRIFICADOR","MOLEIRO"]},
    {nome:"MONITORAMENTO", funcoes:["ANALISTA DE TELEMETRIA"]},
    {nome:"MOTORISTAS - COMPARTILHADOS", funcoes:["MOTORISTA DE MICROONIBUS","MOTORISTA DE VAN","MOTO BOY"]},
    {nome:"MOTORISTAS - COMPLEXO MARIANA", funcoes:["MOTORISTA DE MICROONIBUS","MOTORISTA DE ONIBUS - SÊNIOR","MOTORISTA DE VAN"]},
    {nome:"MOTORISTAS - COMPLEXO MINAS CENTRAIS", funcoes:["MOTORISTA DE MICROONIBUS","MOTORISTA DE ONIBUS - SÊNIOR","MOTORISTA DE VAN"]},
    {nome:"MOTORISTAS - FRETAMENTO - BYD", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS - FRETAMENTO - ENGEPACK", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS - FRETAMENTO - KORDSA", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS - FRETAMENTO - OXITENO", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS - FRETAMENTO - POOL I", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS - FRETAMENTO - TURISMO", funcoes:["MOTORISTA DE ONIBUS - SÊNIOR"]},
    {nome:"MOTORISTAS - FRETAMENTO MUSA", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS - LINHAS INTERMUNICIPAIS - CAPITAL", funcoes:["MOTORISTA DE ONIBUS - SÊNIOR"]},
    {nome:"MOTORISTAS (FRETAMENTO APERAM)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (FRETAMENTO BEMISA PEDRA BRANCA)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (FRETAMENTO BEMISA)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (FRETAMENTO CENIBRA)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (FRETAMENTO CIPALAM)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (FRETAMENTO TECHINT)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (FRETAMENTO USIMEC - OPEX)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (FRETAMENTO USIMINAS)", funcoes:["MOTORISTA DE VAN","MOTORISTA DE MICROONIBUS"]},
    {nome:"MOTORISTAS (LINHAS)", funcoes:["MOTORISTA DE ONIBUS - SÊNIOR","MOTORISTA DE MICROONIBUS"]},
    {nome:"PORTARIA", funcoes:["PORTEIRO","VIGIA"]},
    {nome:"PROGRAMAÇÃO DE TRANSPORTES", funcoes:["COORD. DE TRANSPORTES","ASSIST. ADMINISTRATIVO"]},
    {nome:"QUALIDADE", funcoes:["ANALISTA DA QUALIDADE","SUPERVISOR"]},
    {nome:"QUALIDADE E RH", funcoes:["ANALISTA DA QUALIDADE","ANALISTA DE PESSOAL","GERENTE DE RH/QUALIDADE"]},
    {nome:"RECEPÇÃO DE MANUTENCAO", funcoes:["AUX. ADMINISTRATIVO","ASSIST. ADMINISTRATIVO"]},
    {nome:"RECURSOS HUMANOS", funcoes:["ANALISTA DE PESSOAL","AUX. DE PESSOAL","ASSISTENTE SOCIAL"]},
    {nome:"SERVIÇOS GERAIS", funcoes:["AUX. SERV. GERAIS"]},
    {nome:"SERVIÇOS GERAIS - BEMISA", funcoes:["AUX. SERV. GERAIS"]},
    {nome:"SERVIÇOS GERAIS - CENIBRA", funcoes:["AUX. SERV. GERAIS"]},
    {nome:"SERVIÇOS GERAIS - USIMINAS", funcoes:["AUX. SERV. GERAIS"]},
    {nome:"SESMT", funcoes:["ENG. SEGURANÇA DO TRABALHO","TÉC. SEG. TRABALHO","MEDICO DO TRABALHO","TÉC. ENFERMAGEM TRABALHO"]},
    {nome:"SUPERVISÃO DE MANUTENÇÃO", funcoes:["SUPERVISOR","COORD. DE MANUTENCAO","ENC. DE SETOR - MANUTENCAO","ESPECIALISTA EM MANUTENÇÃO","GERENTE DE MANUTENÇÃO"]},
    {nome:"SUPRIMENTOS", funcoes:["GERENTE DE SUPRIMENTOS","ASSIST. ADMINISTRATIVO"]},
    {nome:"TURISMO", funcoes:["MOTORISTA DE ONIBUS - SÊNIOR"]}
  ]
};

/* Helper de consulta usado pelo restante do sistema — mantém a regra
   "toda função sorteada deve pertencer ao setor sorteado" em um único lugar. */
window.EMPRESA_CONFIG.getFuncoesDoSetor = function(nomeSetor){
  const s = this.setores.find(x => x.nome === nomeSetor);
  return s ? s.funcoes : [];
};
window.EMPRESA_CONFIG.sortearSetorEFuncao = function(){
  const setor = this.setores[Math.floor(Math.random() * this.setores.length)];
  const funcao = setor.funcoes[Math.floor(Math.random() * setor.funcoes.length)];
  return {setor: setor.nome, funcao};
};
