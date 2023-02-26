class Main {
  listCartes = [];

  ajouterCarte(cartePioche) {
    this.listCartes.push(cartePioche);
  }

  calculerScore() {
    console.log("test");
    let score = 0;
    this.listCartes.forEach((carte) => {
      if (typeof carte.figure === "number") score += carte.figure;
      else if (carte.figure === "As")
        this.score + 10 <= 21 ? (score += 10) : (score += 1);
      else score += 10;
    });
    return score;
  }
}
