let table = new Table();
table.nouvellePartie();
table.getPaquet();
console.log(table.mainJ);

console.log(table.mainB);
table.mainJPioche();
console.log(table.mainJ);

table.mainJ.calculerScore();
console.log(table.mainJ.score);
