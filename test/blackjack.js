class Couleur {
	static PIQUE= new Couleur("Pique");
	static COEUR = new Couleur("Coeur");

	constructor(name){
	this.name= name
	}
}



// class Carte{
	
// constructor
// 	this.couleur=Couleur.PIQUE;	
// }


class Table{
	constructor(){
this.paquet = new Paquet();
this.mainJ = new Main();
this.mainB = new Main();
	}
getMainJ();
getMainB();
faireJouerBanque();
getResultat();//Gagnant, perdu, egalité
joueurHit(){
	const nouvelleCarte=this.paquet.pioche();
	this.mainJ.ajouterCarte(nouvelleCarte);
	return nouvelleCarte;
}
}

Array.pop();