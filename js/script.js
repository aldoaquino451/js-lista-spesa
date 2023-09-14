/*
  1. Salva in un array gli elementi della lista spesa
  2. Richiama l'elemento ul nell'html e resettalo
  3. Crea l'elemtento li
  4. Aggiugni un elemento li per ogni elemento della lista
*/

// 1.
const shoppingArr = [
  'mela',
  'pera',
  'banana',
  'yogurt',
  'cereali',
  'latte',
  'biscotti'
]

// 2.
const shoppingContainer = document.querySelector('#shopping-list');
shoppingContainer.innerHTML = '';

// 3.
const shoppingItem = document.createElement('li');

// 4.
let counter = 0;

while ( counter < shoppingArr.length ) {
  shoppingContainer.innerHTML += `<li class="item">${shoppingArr[counter]}</li>`
  counter ++ ;
}

//// 4.
// for ( i = 0; i < shoppingArr.length; i++ ) {
//   shoppingContainer.innerHTML += `<li class="item">${shoppingArr[i]}</li>`;
// };
