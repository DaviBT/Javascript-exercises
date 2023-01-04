var nome = window.prompt('Qual é o seu nome?');

document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br>`);

document.write(`Seu nome com todas as letras maiúsculas é ${nome.toUpperCase()}.<br>`);
        
document.write(`Seu nome com todas as letras minúsculas é ${nome.toLowerCase()}.`);