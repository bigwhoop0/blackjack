class Couleur extends Enumify {
  static PIQUE = new Couleur("Pique");
  static COEUR = new Couleur("Coeur");
  static TREFLE = new Couleur("Trefle");
  static CARREAU = new Couleur("Carreau");

  constructor(name) {
    this.name = name;
    Object.freeze(this);
  }
}
