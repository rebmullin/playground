(function() {
  const $form = document.querySelector(".contact-form");
  const $emailInput = document.querySelector("#email");
  const $nameInput = document.querySelector("#name");

  function validateEmail() {
    if (!$emailInput.value || $emailInput.value.indexOf("@") === -1) {
      showErrorMessage($emailInput, "Please use a valid email");
      return false;
    }

    showErrorMessage($emailInput, null);
    return true;
  }

  function validateName() {
    if (!$nameInput.value) {
      showErrorMessage($nameInput, "Please use a valid name");
      return false;
    }

    showErrorMessage($nameInput, null);
    return true;
  }

  function showErrorMessage(inputField, title) {
    // Remove any existing error
    let error = inputField.parentNode.querySelector(".error");
    if (error) {
      error.remove();
    }

    // create the error message if there is no title
    if (title) {
      const message = document.createElement("span");
      message.classList.add("error");
      message.innerText = title;
      inputField.parentNode.appendChild(message);
    }
  }

  $form.addEventListener("submit", function(e) {
    e.preventDefault();
    let validName = validateName();
    let validEmail = validateEmail();
    if (validName && validEmail) {
      alert("submitted!");
    }
  });

  $emailInput.addEventListener("input", validateEmail);
  $nameInput.addEventListener("input", validateName);
})();
