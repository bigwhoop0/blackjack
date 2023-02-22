class Carte {
  constructor(figure, couleur) {
    this.figure = figure;
    this.couleur = couleur;
    Object.freeze(this);
  }
}
