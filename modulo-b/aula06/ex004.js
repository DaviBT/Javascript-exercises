var nome = window.prompt('Qual é o seu nome?');
var idade = window.prompt('Qual sua idade?');
var nota = window.prompt('Qual sua nota?');
/* método antigo: window.alert('O aluno ' + nome + ' tem ' + idade + ' anos e recebeu a nota ' + nota);*/
        
    // método moderno (template string ou placeholder):
    window.alert(`O aluno ${nome} que tem ${idade} anos recebeu a nota ${nota}`)