document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupform");
  function validateForm(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Get form inputs
    var username = signupForm.querySelector('input[type="text"]').value;
    var email = signupForm.querySelector('input[type="email"]').value;
    var password = signupForm.querySelector('input[type="password"]').value;

    // Username validation: only letters, numbers, and underscores; no spaces
    var usernameRegex = /^\w+$/;
    if (!usernameRegex.test(username)) {
      alert(
        "Username can only contain letters, numbers, and underscores, and no spaces."
      );
      return false;
    }
    // Email validation: simple email regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Password validation: at least 8 characters long, one capital letter, one number, one special character
    var passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long, contain one capital letter, one number, and one special character."
      );
      return false;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    event.target.submit();
  }

  signupForm.addEventListener("submit", validateForm);
});
