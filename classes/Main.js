class Main {
  listCartes = [];
  score = 0;

  ajouterCarte(cartePioche) {
    this.listCartes.push(cartePioche);
  }

  calculerScore() {
    console.log("test");
    this.listCartes.forEach((carte) => {
      if (typeof carte.figure === "number") this.score += carte.figure;
      else if (carte.figure === "As")
        this.score + 10 > 21 ? (this.score += 10) : (this.score += 1);
      else this.score += 10;
    });
  }
}
