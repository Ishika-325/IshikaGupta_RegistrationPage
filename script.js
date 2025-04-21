const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const successMsg = document.getElementById("successMsg");

document.addEventListener( 'DOMContentLoaded'  , ()=> {
  document.querySelector('h1').classList.add('active');
})

window.addEventListener(document.load)


document.querySelector("form").addEventListener('submit' , function(event){
      event.preventDefault();

      let isValid = true;
      clear();

      if (!checkPhone(phone.value)) {
        show(phone, "Phone number must be 10 digits");
        isValid = false;
      }


      if (password.value.length < 6) {
        show(password, "Password must be at least 6 characters");
        isValid = false;
      }
    
      if (password.value !== confirmPassword.value) {
        show(confirmPassword, "Passwords do not match");
        isValid = false;
      }

      if (isValid) {
        successMsg.textContent = "Registration successful!";
        document.querySelector("form").reset();
      }
})


function show(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = 'block';
  }


  function clear() {
    document.querySelectorAll(".error").forEach(el => {
      el.textContent = "";
      el.style.display = "none";
    });
    successMsg.textContent = "";
  }

  function checkPhone(phone) {
    const check  = /^\d{10}$/;
    return check.test(phone);
  }