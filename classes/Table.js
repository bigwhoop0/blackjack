class Table {
  paquet;
  mainJoueur;
  mainBanque;

  constructor() {
    this.nouvellePartie();
  }

  nouvellePartie() {
    this.paquet = new Paquet();
    this.mainJoueur = new Main();
    this.mainBanque = new Main();

    //Pioche 2  cartes par main
    for (let pioche = 0; pioche < 2; pioche++) {
      this.joueurPioche();
      this.banquePioche();
    }
  }

  joueurHit() {
    this.joueurPioche();
    this.faireJouerBanque();
  }

  faireJouerBanque() {
    //A son tour, si la valeur de la main de la Banque est strictement inférieur à 17, elle pioche
    let scoreBanqueActuelle = this.mainBanque.calculerScore();
    if (scoreBanqueActuelle >= 17) return;
    else this.banquePioche();
  }

  joueurPioche() {
    let cartePioche = this.paquet.pioche();
    this.mainJoueur.ajouterCarte(cartePioche);
  }

  banquePioche() {
    let cartePioche = this.paquet.pioche();
    this.mainBanque.ajouterCarte(cartePioche);
  }

  resultatFinal() {
    //Comparaison des scores pour déterminer le gagant
    let scoreJoueur = this.mainJoueur.calculerScore();
    let scoreBanque = this.mainBanque.calculerScore();
    if (Math.abs(scoreBanque - scoreJoueur) === 0) return "Egalite";
    else if (scoreJoueur > 21 && scoreBanque > 21)
      return "La banque et vous avez perdu";
    else if (scoreJoueur > 21) return "Vous avez perdu";
    else if (scoreBanque > 21) return "Vous avez gagné";
    else if (21 - scoreJoueur > 21 - scoreBanque) return "La Banque a gagné";
    else return "Vous avez gagné";
  }
}
