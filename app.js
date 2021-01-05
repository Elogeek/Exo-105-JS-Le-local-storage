let un = window.localStorage;
un.setItem("18", "material", "black");

function One(taille,type,mode) {
    this.taille = taille;
    this.type = type;
    this.mode = mode;
    this.coucou = function() {
        document.getElementById("result").innerHTML = "taille " + this.taille + " px " + " mode " + this.mode + " type " + this.type;
    }
}
One("18", "material", "black");

let deux = new One( "5", "blabla", "yellow");
deux.coucou();


let nom = document.querySelector('#nom').value;
let email = document.querySelector('#email').value;

let data = {
    nom: nom,
    civilId : VarRecupId,
    civilVal : valRecupId,
    email: email,
    ville: ville,
};

let key = indice;
window.localStorage.setItem(key, data);

/*pour stocker un tableau dans localStorage : il y a 2 méthodes (JSON.stingify, JSON.parse)*/
let val = JSON.stringify(data);
window.localStorage.setItem(key, val);
/*Ensuite pour récupérer l'objet et son contenu*/
value = JSON.parse(window.localStorage.getItem(key));

// expl 2
let name = ["Anna", "Elsa", "Olaf"];
let storedName = JSON.parse(localStorage.getItem("name"));