var salary = 8000
var float_salary = salary.toLocaleString('pt-BR')

var anual_salary = salary * 12
var float_anual_salary = anual_salary.toLocaleString('pt-BR')

var thirteenth_salary = salary * 13
var float_thirteenth_salary = thirteenth_salary.toLocaleString('pt-BR')

console.log(`Your salary per month is $${float_salary}, per year, is $${float_anual_salary}, and your anual salary, plus the thirteenth salary is $${float_thirteenth_salary}.`)

console.log(`Your salary, in Real, per month is R$` + float_salary * 5.14 + `, per year, is R$` + float_anual_salary * 5.14 + `, and your anual salary, plus the thirteenth salary is R$` + float_thirteenth_salary * 5.14 + `.`)