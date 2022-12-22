

var nom = "john"
console.log(nom);
var nom = "jane"
console.log(nom);
//permet d'attribuer le nom john a la variable "nom"
//ensuite supprime le nom john pour renommer la variable "nom" en jane.

let list ='';
for (let I = 1; I < 11; I++) {
    list = list + I  
}
console.log(list)

//creer une liste de 1 a 11,puis enumère ce qui est strictement compris dans la liste entre 1 et 11

console.log("Bonjour tout le monde(sauf evan)!");
console.log(3 + 4);
console.log(nom);

//un console log pour dire bonjour,un autre qui fait une addition, et un autre qui affiche la variable "nom"

var firstName = "John"
var lastName = "Doe"
var complete = `${firstName} ${lastName}`;
console.log(complete)
//permet d'afficher le nom et le prenom a la suite

function age(a) {
    let result;
    if (a > 18){
        result = 'tu es majeur';
    } else {
        result = 'tu n\'es pas majeur';
    }
    return result;
}

console.log(age(26))
//permet de verifier si la personne est majeure ou non

let couleurs = ['rouge', 'vert', 'bleu', 'jaune', 'orange'];
for (var i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i])
}
//une liste de couleur,puis enumère tout ce qui est dans la liste


let numbers = [1,2,3,4,5];

numbers.push(6)
console.log(numbers)

numbers.pop(6)
console.log(numbers)

//creer une liste de 1 a 5, ajoute le 6,puis supprime le 6 (on aime pas les 6 ici)

number = 12
console.log(number)
function isEven(number) {
    if (number % 2 === 0){
        return true
    }
    return false
}
console.log(isEven(number))

let sommes = 0
let tableur = [4, 8, 123, 42, 98]
function total(tableur){
    for (let i = 0; i < tableur.length; i++) {
        sommes = tableur[i]+sommes;
    }
    return sommes
}
console.log(total(tableur))

//const est une valeur qui ne change pas (constante)
//let est une variable,donc peut changer 
verlan = "nurb ud tse'c tpircsavaj eL"
function reverseStr(verlan) {
 
return verlan.split("").reverse().join("")

} 
console.log(reverseStr(verlan))



//split et join sont très important,tu peux selectionner par exemple tout les r dans un mot
//choisir les mots 