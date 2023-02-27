class Interface {
  tableJeu;
  partieUn = false;
  tourUn;

  init() {
    this.tourUn = true;
    this.tableJeu = new Table();
    this.#buildInterface();
  }

  #buildInterface() {
    if (!this.partieUn) {
      this.#eventListener();
      this.partieUn = true;
    }
    this.#affichageGeneral();
  }

  #eventListener() {
    let buttonPartie = document.querySelector("#nouvellePartie");
    let hit = document.querySelector("#hit");
    let stand = document.querySelector("#stand");

    buttonPartie.addEventListener("click", () => {
      this.init();
    });

    hit.addEventListener("click", () => {
      if (!this.tourUn) return;
      this.tableJeu.joueurHit();
      this.tourUn = false;
      this.#affichageGeneral();
    });

    stand.addEventListener("click", () => {
      if (!this.tourUn) return;
      this.tableJeu.faireJouerBanque();
      this.tourUn = false;
      this.#affichageGeneral();
    });
  }

  #affichageGeneral() {
    let mainJ = document.querySelector("#mainJ");
    let mainB = document.querySelector("#mainB");
    this.#affichageJoueur(mainJ);
    this.#affichageBanque(mainB);
    this.#affichageScore();
  }

  #affichageJoueur(mainJoueur) {
    mainJoueur.textContent = "";
    this.tableJeu.mainJoueur.listCartes.forEach((carte) => {
      let distriJ = document.createElement("p");
      distriJ.textContent = `${carte.figure} ${carte.couleur}`;
      mainJoueur.append(distriJ);
    });
  }

  #affichageBanque(mainBanque) {
    mainBanque.textContent = "";
    if (this.tourUn) {
      let distriB = document.createElement("p");
      let carte = this.tableJeu.mainBanque.listCartes[0];
      distriB.textContent = `${carte.figure} ${carte.couleur}`;
      mainBanque.append(distriB);
    } else
      this.tableJeu.mainBanque.listCartes.forEach((carte) => {
        let distriB = document.createElement("p");
        distriB.textContent = `${carte.figure} ${carte.couleur}`;
        mainBanque.append(distriB);
      });
  }

  #affichageScore() {
    let resultatDiv = document.querySelector("#scoreF");
    if (this.tourUn) {
      resultatDiv.textContent = "";
      return;
    }
    let resultat = this.tableJeu.resultatFinal();
    resultatDiv.textContent = resultat;
  }
}
