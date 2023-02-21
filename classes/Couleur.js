class Couleur {
  static PIQUE = new Couleur("Pique");
  static COEUR = new Couleur("Coeur");
  static TREFLE = new Couleur("Trefle");
  static CARREAU = new Couleur("Carreau");

  constructor(name) {
    this.name = name;
  }
}
