class Table {
  paquet;

  constructor() {
    this.paquet = new Paquet();
  }

  getPaquet() {
    this.paquet.getlistCartes();
  }
}
