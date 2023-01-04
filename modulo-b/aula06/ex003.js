        // Número inteiro:
        var n1 = Number.parseInt(window.prompt('Digite um número inteiro'));
        var n2 = Number.parseInt(window.prompt('Digite outro número inteiro'));
        var soma = n1 + n2
            window.alert(n1 + ' + ' + n2 + ' é igual a ' + soma);

        // Número real:
        var n1 = Number.parseFloat(window.prompt('Digite um número real (com vírgula)'));
        var n2 = Number.parseFloat(window.prompt('Digite outro número real'));
        var produto = n1 * n2
            window.alert('O produto de ' + n1 + ' * ' + n2 + ' é igual a ' + produto);

        // Qualquer número:
        var n1 = Number(window.prompt('Digite qualquer número'));
        var n2 = Number(window.prompt('Digite outro número'));
        var divi = n1 / n2
            window.alert('A divisão de ' + n1 + ' por ' + n2 + ' é igual a ' + divi)