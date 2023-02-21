class Paquet{
listCartes=[];

constructor(){
    for (const couleur in Couleur) {
        for (const figure in Figure)
        this.listCartes.push(new Carte(figure,couleur))
      }
}

pioche();

melanger();

getlistCartes(){
    console.log(listCartes);
}

}