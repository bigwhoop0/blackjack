class Main {
  listCartes = []; //Liste des cartes dans une main

  ajouterCarte(cartePioche) {
    this.listCartes.push(cartePioche);
  }

  calculerScore() {
    //calculer score en cours de la main
    let score = 0;
    this.listCartes.forEach((carte) => {
      if (typeof carte.figure === "number") score += carte.figure;
      //Si la figure est de type number, recupère le nombre pour calculer score
      else if (carte.figure === "As") {
        //Valeur de 1 ou 11 en fonction de la valeur de la main
        score + 10 <= 21 ? (score += 11) : (score += 1);
      } else score += 10; //Si ni un As, ni un number la valeur est de 10 points
    });
    return score;
  }
}
