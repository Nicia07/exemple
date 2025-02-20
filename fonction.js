

let button = document.getElementById("bougie");//Cette ligne sélectionne l'élément HTML avec l'ID bougie qui devrait être un bouton dans mon HTML et le stocke dans la variable button
let div = document.getElementById("boum");//Cette ligne sélectionne l'élément HTML avec l'ID #boum probablement un div dans mon HTML et le stocke dans la variable div.
let btnDecrement = document.getElementById("mam");// Cette ligne sélectionne l'élément HTML avec l'ID mam un autre bouton pour la décrémentation et le stocke dans la variable btnDecrement.
let action = 0;  // Initialise une variable `action` à 0, qui servira à stocker la valeur à afficher dans le div.

button.addEventListener("click", increment);  // Ajoute un écouteur d'événement au bouton `bougie`. Lorsque ce bouton est cliqué, la fonction `increment` est appelée.
btnDecrement.addEventListener("click", decrement);  // Ajoute un écouteur d'événement au bouton `mam`. Lorsque ce bouton est cliqué, la fonction `decrement` est appelée.

function increment() {
  if (action <= 10) {  // Vérifie si la valeur de `action` est inférieure ou égale à 10.
    div.innerHTML = action++;  // Si la condition est vraie, la valeur de `action` est affichée dans le div `boum`, puis `action` est incrémentée (post-incrément).
  }
}

function decrement() {
  if (action >= 0) {  // Vérifie si la valeur de `action` est supérieure ou égale à 0.
    div.innerHTML = action--;  // Si la condition est vraie, la valeur de `action` est affichée dans le div `boum`, puis `action` est décrémentée (post-décrément).
  }
}
