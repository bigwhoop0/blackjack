class Table {
  paquet;
  mainJ;
  mainB;

  nouvellePartie() {
    this.paquet = new Paquet();
    this.mainJ = new Main();
    this.mainB = new Main();
    this.mainJPioche();
    this.mainJPioche();
    this.mainBPioche();
    this.mainBPioche();
  }

  getPaquet() {
    this.paquet.getlistCartes();
  }

  joueurHit() {}

  faireJouerBanque() {
    if (this.mainB.calculerScore() >= 17) console.log("stop");
    else this.mainBPioche();
  }

  mainJPioche() {
    this.mainJ.ajouterCarte(this.paquet.pioche());
  }

  mainBPioche() {
    this.mainB.ajouterCarte(this.paquet.pioche());
  }
}
