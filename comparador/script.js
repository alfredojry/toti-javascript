console.log('Seja bem-vindo!');
let nome1  = prompt('Digite o nome da primeira pessoa');
let idade1 = Number(prompt('Digite a idade da primeira pessoa'));
let nome2  = prompt('Digite o nome da segunda pessoa');
let idade2 = Number(prompt('Digite a idade da segunda pessoa'));
console.log(`Registros de ${nome1} e ${nome2}`);
console.log(`Idade de ${nome1}: ${idade1}`);
console.log(`Idade de ${nome2}: ${idade2}`);
let strComp = idade1 > idade2 ? 'mais velho/a' : idade1 < idade2 ? 'mais novo/a' : 'da mesma idade';
console.log(`${nome1} é ${strComp} que ${nome2}`);