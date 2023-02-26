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

  joueurHit() {
    this.mainJPioche();
    this.faireJouerBanque();
  }

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
  scoreFinal() {
    let scoreJ = this.mainJ.calculerScore();
    let scoreB = this.mainB.calculerScore();
    if (Math.abs(scoreB - scoreJ) === 0) return "Egalite";
    else if (scoreJ > 21 && scoreB > 21)
      return "La banque et le joueur ont perdu";
    else if (scoreJ > 21) return "Le joueur a perdu";
    else if (scoreB > 21) return "La banqe a perdu";
    else if (21 - scoreJ > 21 - scoreB) return "la Banque a gagné";
    else return "Vous avez gagné";
  }
}
