class Interface {
  tableJeu;
  partieUn = true;
  tourUn;

  init() {
    this.tourUn = true; //Premier tour
    this.tableJeu = new Table();
    this.#buildInterface();
  }

  #buildInterface() {
    //Seulement à la première partie, mise en place des écouteurs
    if (this.partieUn) {
      this.#eventListener();
      this.partieUn = false;
    }
    this.#affichageGeneral();
  }

  #eventListener() {
    let buttonPartie = document.querySelector("#nouvellePartie");
    let hit = document.querySelector("#hit");
    let stand = document.querySelector("#stand");

    //Relance une nouvelle partie
    buttonPartie.addEventListener("click", () => {
      this.init();
    });

    //Le joueur hit
    hit.addEventListener("click", () => {
      if (!this.tourUn) return;
      this.tableJeu.joueurHit();
      this.tourUn = false; //Passe tourUn à false pour déclencher le deuxième tour
      this.#affichageGeneral();
    });
    //Lejoueur stand
    stand.addEventListener("click", () => {
      if (!this.tourUn) return;
      this.tableJeu.faireJouerBanque();
      this.tourUn = false; //Passe tourUn à false pour déclencher le deuxième tour
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
      //La deuxième carte de la Banque n'est pas affichée lors du premier tour
      let distriB = document.createElement("p");
      let carte = this.tableJeu.mainBanque.listCartes[0]; //Affichage que de la première carte de la main
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
      //Efface résultat précedent lotrs du premier tour
      resultatDiv.textContent = "";
      return;
    }
    let resultat = this.tableJeu.resultatFinal();
    resultatDiv.textContent = resultat; //Affiche résultat
  }
}
