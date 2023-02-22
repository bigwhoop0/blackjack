class Paquet {
  listCartes = [];
  figure = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "valet",
    "dame",
    "roi",
  ];
  couleur = ["Pique", "Carreau", "Coeur", "Trefle"];

  constructor() {
    for (const couleur of this.couleur) {
      for (const figure of this.figure)
        this.listCartes.push(new Carte(figure, couleur));
    }
  }

  // pioche();

  // melanger();

  getlistCartes() {
    console.log(this.listCartes);
  }
}
