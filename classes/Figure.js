class Figure extends Enumify {
  static AS = new Figure("As", 1);
  static DEUX = new Figure("2", 2);
  static TROIS = new Figure("3", 3);
  static QUATRE = new Figure("4", 4);
  static CINQ = new Figure("5", 5);
  static SIX = new Figure("6", 6);
  static SEPT = new Figure("7", 7);
  static HUIT = new Figure("8", 8);
  static NEUF = new Figure("9", 9);
  static DIX = new Figure("10", 10);
  static VALET = new Figure("Valet", 10);
  static DAME = new Figure("Dame", 10);
  static ROI = new Figure("Roi", 10);

  constructor(name, valeur) {
    this.name = name;
    this.valeur = valeur;
    Object.freeze(this);
  }
}
