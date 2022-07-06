// For git commit
let ingredientBtn = document.getElementById('ingredient-btn');
let categoryBtn = document.getElementById('category-btn');


let IngredientMove = ()=>{
    location.href = "/ingredient";
}

let CategoryMove = ()=>{
    location.href = "/category";
}

window.onload = ()=>{
    ingredientBtn.addEventListener("click", IngredientMove);
    categoryBtn.addEventListener("click", CategoryMove);
}