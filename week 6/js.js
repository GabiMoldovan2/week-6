var form = document.querySelector('form');
var nameInput = document.querySelector("input[name='name']");
var lastNameInput = document.querySelector('input[name="lastName"]');
var messageInput = document.querySelector('textarea[name="message"]');
var submitForm = document.querySelector('.submit-form');

var inputFields = [nameInput,lastNameInput, messageInput,submitForm];

nameInput.isValid = () => !!nameInput.value;
lastNameInput.isValid = () => !!lastNameInput.value;
messageInput.isValid = () => !!messageInput.value;


var inputFields = [nameInput,lastNameInput, messageInput,];


let shouldValidate = false;
let isFormValid = false;

var validateInputs = () => {
 
  if (!shouldValidate) return;
  
  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
     form.remove;
    submitForm.classList.remove('hidden');
    
  }
});

inputFields.forEach((input) => {input.addEventListener("input", ()=>{validateInputs();} )
});
    
//Am cautat sute de metode sa validez form-ul dar nu stiu de ce nu merge