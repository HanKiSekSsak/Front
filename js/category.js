let secretForm = document.getElementById('secret-form');
let category = document.getElementById('form-category');

let SubmitList = (e)=>{
    category.value = e.target.innerHTML;
    secretForm.submit();
}