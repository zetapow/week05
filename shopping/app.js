const elementIDs = {
   itemInput: 'item',
   quantityInput: 'quantity',
   listDisplay: 'list-display',
   shoppingBasket: 'shopping-basket',
   itemsToBuy: 'items-to-buy',
};

// Object.keys(elements).forEach((key) => {
//    elements[key] = document.getElementById(elements[key]);
// });
const itemInput = document.getElementById(elementIDs.itemInput);
const quantityInput = document.getElementById(elementIDs.quantityInput);
const listDisplay = document.getElementById(elementIDs.listDisplay);

const shoppingBasket = document.getElementById(elementIDs.shoppingBasket);
const itemsToBuyDisplay = document.getElementById(elementIDs.itemsToBuy);

const shoppingList = [
   { item: 'apple', quantity: 11 },
   { item: 'banana', quantity: 11 },
];
displayList();

/* --------------------------------------------------------------------------- */
/*  Shopping List section  */
function addItem(event) {
   /* Prevent default behaviour of button (submit form and refresh) */
   event.preventDefault();

   // Create object and add object to shoppingList array
   const itemToAdd = {
      item: itemInput.value,
      quantity: quantityInput.value,
   };

   shoppingList.push(itemToAdd);
   displayList();

   // Clear values after adding to list
   itemInput.value = '';
   quantityInput.value = '';
}

function displayList() {
   // Clear display
   listDisplay.innerHTML = '';

   // each item in ShoppingList array, display item, quantity and delete button
   for (const groceryItem of shoppingList) {
      // listDisplay.innerHTML += `<p> ${groceryItem.item} - Qty: ${groceryItem.quantity} </p>`;
      listDisplay.innerHTML += `${groceryItem.item} - Qty: ${
         groceryItem.quantity
      } <span style='cursor:pointer' onclick=
      'deleteItem(${shoppingList.indexOf(
         groceryItem
      )})'> - <i class="fa-solid fa-trash"></i></span><br/>`;
   }
}

function deleteItem(itemToDelete) {
   // Delete item with splice
   shoppingList.splice(itemToDelete, 1);
   displayList();
}

/* --------------------------------------------------------------------------- */
/* -------------- Shopping List section-------------------------------------  */

const addToBasket = (event) => {
   event.preventDefault();

   const basketArray = shoppingBasket.value
      .toLowerCase()
      .split(',')
      // .map((item) => item.trim());
      .split(/,\s*/);

   //  filter() returns new array of elements that contain pass condition

   const itemsToBuy = shoppingList.filter((groceryItem) => {
      /* Check if basket includes the shopping list (of looping element. If element does not exist in basket array, it is already in basket so is not returned*/

      return !basketArray.includes(groceryItem.item.toLowerCase().trim());
   });

   if (itemsToBuy.length === 0) {
      itemsToBuyDisplay.innerHTML = `<p>** You got everything on the list 👍 **</p>`;
   } else {
      // if items to buy !empty, display all items in array
      itemsToBuyDisplay.innerHTML = `<p>There are items you still get to get:</p>`;

      // display itemsToBuy
      itemsToBuy.forEach((groceryItem) => {
         // Update HTML to currently rendered, + new string
         itemsToBuyDisplay.innerHTML += `<p>${groceryItem.item} - Qty: ${groceryItem.quantity}</p>`;
      });
   }
};
