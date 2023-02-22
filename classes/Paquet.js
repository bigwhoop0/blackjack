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
    this.#melanger(this.listCartes);
  }

  // pioche();

  #melanger(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getlistCartes() {
    console.log(this.listCartes);
  }
}
