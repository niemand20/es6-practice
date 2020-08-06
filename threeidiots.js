const age = [12,23,13,25,22];
const age2 = [21,23,11];
const age3 = [25,23,21];
const total = age.concat(age2).concat(age3);
const allAges = [...age,...age2,...age3];
console.log(allAges);

const x = 500;
const y = 400;
const z = 600;
const money = [400,500,600];

const maxm = Math.max(...money);
console.log(maxm);