const myForm = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

function isAlphanumeric(input) {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(input);
}

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = inputField.value;

  if (!isAlphanumeric(inputValue)) {
    alert("Error: Input must be alphanumeric.");
    return;
  }

  alert("Form submitted!");
  myForm.submit();
});
