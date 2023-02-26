class Interface {
  tableJeu;
  partieUn = false;
  tourUn;

  init() {
    this.tourUn = true;
    this.tableJeu = new Table();
    this.buildInterface();
    console.log(this.tableJeu);
    this.tourUn = true;
  }

  buildInterface() {
    let mainJ = document.querySelector("#mainJ");
    let mainB = document.querySelector("#mainB");

    if (!this.partieUn) {
      this.eventListener(mainB, mainJ);
      this.partieUn = true;
    }

    this.affichageJ(mainJ);
    this.affichageB(mainB);
  }

  eventListener(mainB, mainJ) {
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
      this.affichageJ(mainJ);
      this.affichageB(mainB);
      this.affichageScore();
    });

    stand.addEventListener("click", () => {
      if (!this.tourUn) return;
      this.tableJeu.faireJouerBanque();
      this.tourUn = false;
      this.affichageJ(mainJ);
      this.affichageB(mainB);

      this.affichageScore();
    });
  }

  affichageJ(mainJ) {
    mainJ.textContent = "";
    this.tableJeu.mainJ.listCartes.forEach((carte) => {
      let distriJ = document.createElement("p");
      distriJ.textContent = `${carte.figure} ${carte.couleur}`;
      mainJ.append(distriJ);
    });
  }

  affichageB(mainB) {
    mainB.textContent = "";
    if (this.tourUn) {
      let distriB = document.createElement("p");
      let carte = this.tableJeu.mainB.listCartes[0];
      console.log("test");
      distriB.textContent = `${carte.figure} ${carte.couleur}`;
      mainB.append(distriB);
    } else
      this.tableJeu.mainB.listCartes.forEach((carte) => {
        let distriB = document.createElement("p");
        distriB.textContent = `${carte.figure} ${carte.couleur}`;
        mainB.append(distriB);
      });
  }
  affichageScore() {
    let scoreF = document.querySelector("#scoreF");
    let score = this.tableJeu.scoreFinal();
    console.log(score);
    scoreF.textContent = score;
  }
}
