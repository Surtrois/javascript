//operateir typeof

typeof 3; //number
typeof "coucou" //caractere
typeof true false // boolen
let ccolor = "yellow"
typeof "color"; //string 

console.log("Hello world")
//"let" tres important
//permet de faire les variable
//consoloe.log affiche quelque chose dans la console du navig
//prompt affiche une fenetre modale (mdp etc)

let response = prompt('ça va ?')

console.log(response)

//alert = prompt mais on peu pas ecrire
//confirme c'est le bouton valider ou annuler

//operation sont stockable dans une variable

let x = 0;
x+= 2;
//increment de 2

let welcome = "salut la compagnie"
let title = 'Bienvenue chez nous'
let complete = welcome + " " + title;
//possible "d'additioner" les texte 

complete = `${welcome} ${title}`;

//4 booleen
//0 ou 1
// on ou off
// bon ou pas bon
//true ou false

let age = prompt('Quel est votre âge');
console.log(parseInt(age))

if (age && typeof(age) === 'number' && (age > 0 && age < 18)) {
    alert('Tu n\'es pas majeur');
} else if (age >= 18) {
    alert('Tu es majeur');
} else {
    alert("Tu n'as pas un age correct")
}

// la boucle for a 3 paramaetre

for(let i = 0; i<10;i++);
for (let i = 0; i < array.length; i++) {
    [const element = array i];
    
}