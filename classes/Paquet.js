class Paquet {
  listCartes = [];

  constructor() {
    for (const couleur in Couleur) {
      for (const figure in Figure)
        this.listCartes.push(new Carte(figure, couleur));
    }
  }

  // pioche();

  // melanger();

  getlistCartes() {
    console.log(this.listCartes);
    console.log(this.listCartes[1].couleur);
    for (var prop in this.listCartes[1].figure) {
      console.log(`obj.${prop} = ${this.listCartes[1][prop]}`);
    }
  }
}
