// Plan d'action 1: LocalStorage

// Partie 1 : Introduction + Pré-requis

console.log(localStorage);
localStorage.setItem("name", "Ali");
localStorage.getItem("name");

// Partie 2 :  Méthodes LocalStorage

console.log(localStorage);
localStorage.setItem("name", "Ali");
localStorage.getItem("name");

// Plan d'action 2: Manipulation des tableaux

// Partie 1 : Bases des tableaux

let tableau = ["ghita", "salma", "rim", "nisrin", "siham"];
console.log(tableau[0], tableau[4])
tableau.splice(1,1,"hanaa")
console.log(tableau)

// Partie 2 : Méthodes simples (push, pop, shift, unshift)

let tableau2 = ["a", "b", "c", "d"];
console.log(tableau2)
tableau2.push("aa")
console.log(tableau2)
tableau2.unshift("zz")
console.log(tableau2)
tableau2.shift()
console.log(tableau2)
tableau2.pop()
console.log(tableau2)

// LIFO (Last In, First Out)

let pile = [];
pile.push("hi")
pile.push("world")
pile.push("!")
console.log(pile)

pile.pop()
console.log(pile)
pile.pop()
console.log(pile)
pile.pop()
console.log(pile)

// FIFO (First In, First Out)

let file = [];
pile.push("hi")
pile.push("world")
pile.push("!")
console.log(pile)

pile.shift()
console.log(pile)
pile.shift()
console.log(pile)
pile.shift()
console.log(pile)

// Partie 3 : Parcours des tableaux

const array1 = ["a", "b", "c", "d"];
array1.forEach((e, index) => {
    console.log(`Index ${index} : ${e}`);
});

const array2 = [1, 2, 3, 4];
let sum =0
for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
}
console.log(sum)

const array3 = ["ghitaa", "jihane", "rim", "douaaa", "safa"];
for (let nom of array3) {
    if (nom.length > 5) {
        console.log(nom);
    }
}

// Partie 4 : Rechercher dans un tableau

const array = ["ghitaa", "mohamed", "rim", "ali", "safa"];
let recherche = array.find(nom => nom == "ali")
console.log(recherche);
recherche = array.find(nom => nom == "souad")
console.log(recherche);

const array2 = [1, 2, 3, 4];
let recherche = array2.find(n => n%2 == 0)
console.log(recherche);

let joueurs = [
    {id: 1, nom: "mohamed"},
    {id: 2, nom: "ghita"},
    {id: 3, nom: "ali"}
]
let joueur = joueurs.find(n => n.id === 2)
console.log(joueur);

Partie 5 : Filtrer un tableau

let array = [1, 12, 3, 14, 10, 19, 5, 20];
let sup = array.filter(n => n>10)
console.log(sup);

let notes = [
    {nom: "salma", note: 1},
    {nom: "ghita", note: 12},
    {nom: "salwa", note: 4}, 
    {nom: "mohamed", note: 15},
    {nom: "ali", note: 14}
];
let moyenne = notes.filter(n => n.note>=12)
console.log(moyenne);

let joueurs = [
    {nom: "salma", poste: "deffenseur"},
    {nom: "ghita", poste: "attaqueur"},
    {nom: "salwa", poste: "gardien"}, 
    {nom: "mohamed", poste: "deffensure"},
    {nom: "ali", poste: "attaqueur"}
];
let posteJoueur = joueurs.filter(n => n.poste === "attaqueur")
console.log(posteJoueur);

Partie 6 : Transformer un tableau

const arrayMap = [1, 2, 3, 4];
let mapping = arrayMap.map(n => n*n)
console.log(mapping);

const arrayEtud = [
    {nom: "salma", poste: "deffenseur"},
    {nom: "ghita", poste: "attaqueur"},
    {nom: "salwa", poste: "gardien"}, 
    {nom: "mohamed", poste: "deffensure"},
    {nom: "ali", poste: "attaqueur"}
];

let mapping = arrayEtud.map(n => n.nom)
console.log(mapping);

let mapping = arrayEtud.map(n => {
    return { 
    nom: "salma", poste: "deffenseur",
    nom: "ghita", poste: "attaqueur",
    nom: "salwa", poste: "gardien", 
    nom: "mohamed", poste: "deffensure",
    nom: "ali", poste: "attaqueur",
    isActive : true
}
});
console.log(mapping);

Partie 7 : Trier et ordonner un tableau

let array = [1,4,6,10]
array.sort((a,b) => a-b);
console.log(array);

array.sort((a,b) => b-a);
console.log(array);

let array = ["salam","cava","bikhir","mzyan"]
array.sort()
console.log(array);

let arrayEtud = [
    {nom: "salma", age: 17},
    {nom: "ghita", age: 21},
    {nom: "salwa", age: 26}, 
    {nom: "mohamed", age: 20},
    {nom: "ali", age: 18}
];

arrayEtud.sort((a,b)=> a.age - b.age)
console.log(arrayEtud);

arrayEtud.sort((a,b)=> b.age - a.age)
console.log(arrayEtud);

Partie 8 : Mise à jour et suppression dans un tableau d’objets










Partie 10 : Projet final + intégration DOM
let contact = ["ghita","ghita@gmail.com","0766527392"]
contact.splice(2,1,"0666666666")
console.log(contact)
contact.pop()
console.log(contact)
