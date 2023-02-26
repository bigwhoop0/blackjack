let table = new Table();
table.nouvellePartie();
table.getPaquet();
console.log(table.mainJ);

console.log(table.mainB);

console.log(table.mainJ.calculerScore());
table.faireJouerBanque();
console.log(table.mainB.calculerScore());
console.log(table.mainB);
console.log(table.scoreFinal());
