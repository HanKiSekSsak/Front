let recipeForm = document.getElementById("secret-form");
let recipeName = document.getElementById("recipe-name");



let SelectRecipe = (e)=>{
    if(!e.target.innerHTML.includes('class=\"content\"')){
        let html = e.target.parentElement.innerHTML;
        let htmlArr = html.split("<p>");
        let name = htmlArr[1].split("</p>")[0];
        
        recipeName.value = name;
        recipeForm.submit();
    }
}
