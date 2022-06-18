const form = document.querySelector(".login-form");

form.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
}
