// For git commit
let ingredientBtn = document.getElementById('ingredient-btn');
let categoryBtn = document.getElementById('category-btn');
let barcodeBtn = document.getElementById('barcode-btn');


let IngredientMove = ()=>{
    location.href = "/ingredient";
}

let CategoryMove = ()=>{
    location.href = "/category";
}

let BarcodeMove = ()=>{
    location.href = "/barcode";
}

window.onload = ()=>{
    ingredientBtn.addEventListener("click", IngredientMove);
    categoryBtn.addEventListener("click", CategoryMove);
    barcodeBtn.addEventListener("click", BarcodeMove);
}