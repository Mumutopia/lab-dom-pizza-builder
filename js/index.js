// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};



// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((onePep) => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((onePep) => {
    if (state.whiteSauce) {
      document.querySelector(".sauce").classList.add("sauce-white")
      onePep.style.visibility = 'visible';
    } else {
      document.querySelector(".sauce").classList.remove("sauce-white")
      onePep.style.visibility = 'visible';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((onePep) => {
    if (state.glutenFreeCrust) {
      document.querySelector(".crust").classList.add("crust-gluten-free")
      
    } else {
      document.querySelector(".crust").classList.remove("crust-gluten-free")
      
    }
  });
}

function renderButtons() {
  if (!state.pepperoni) { document.querySelector('.btn-pepperoni').classList.remove("active") } else if (state.pepperoni) {document.querySelector('.btn-pepperoni').classList.add("active")};
  if (!state.mushrooms) { document.querySelector('.btn-mushrooms').classList.remove("active") } else if (state.mushrooms) {document.querySelector('.btn-mushrooms').classList.add("active")};
  if (!state.greenPeppers) { document.querySelector('.btn-green-peppers').classList.remove("active") } else if (state.greenPeppers) {document.querySelector('.btn-green-peppers').classList.add("active")};
  if (!state.whiteSauce) { document.querySelector('.btn-sauce').classList.remove("active") } else if (state.whiteSauce) {document.querySelector('.btn-sauce').classList.add("active")};
  if (!state.glutenFreeCrust) { document.querySelector('.btn-crust').classList.remove("active") } else if (state.glutenFreeCrust) {document.querySelector('.btn-crust').classList.add("active")};
    
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let uList = document.getElementById('ingredientsList');
  let liList = document.createElement("li");
  
  
  let displayPrice = document.getElementById('totalPrice')
  
  let totalPrice = 10;
  if (state.pepperoni) { totalPrice += ingredients.pepperoni.price;
    uList.appendChild(liList);
    liList.appendChild(document.createTextNode(ingredients.pepperoni.price + "$ " +ingredients.pepperoni.name))
    liList.setAttribute("id", "pepperoni-list");} else if (!state.pepperoni) { };
  if (state.mushrooms) { totalPrice += ingredients.mushrooms.price;
    uList.appendChild(liList);
    liList.appendChild(document.createTextNode(ingredients.mushrooms.price + "$ " +ingredients.mushrooms.name))
    liList.setAttribute("id", "mushrooms-list");} else if (!state.mushrooms) { };
  if (state.greenPeppers) { totalPrice += ingredients.greenPeppers.price;
    uList.appendChild(liList);
    liList.appendChild(document.createTextNode(ingredients.greenPeppers.price + "$ " +ingredients.greenPeppers.name))
    liList.setAttribute("id", "green-peppers-list");} else if (!state.greenPeppers) { };
  if (state.whiteSauce) { totalPrice += ingredients.whiteSauce.price;
    uList.appendChild(liList);
    liList.appendChild(document.createTextNode(ingredients.whiteSauce.price + "$ " +ingredients.whiteSauce.name))
    liList.setAttribute("id", "white-sauce-list");} else if (!state.whiteSauce) { };
  if (state.glutenFreeCrust) { totalPrice += ingredients.glutenFreeCrust.price;
    uList.appendChild(liList);
    liList.appendChild(document.createTextNode(ingredients.glutenFreeCrust.price + "$ " +ingredients.glutenFreeCrust.name))
    liList.setAttribute("id", "pepperoni-list");} else if (!state.glutenFreeCrust) { };

  displayPrice.innerHTML=totalPrice + "$";
  
  return totalPrice;

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});