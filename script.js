//  Event Handling
document.getElementById("messageBtn").addEventListener("click", function() {
  document.getElementById("messageArea").textContent = "You clicked the button!";
});



document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("increaseCounter").addEventListener("click", function() {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});


// Form Validation


document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from refreshing page

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let message = "";


  if (name.length < 3) {
    message += "Name must be at least 3 characters long.<br>";
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message += "Please enter a valid email.<br>";
  }

 
  if (password.length < 6) {
    message += "Password must be at least 6 characters long.<br>";
  }

  
  if (message !== "") {
    document.getElementById("formMessage").innerHTML = message;
    document.getElementById("formMessage").style.color = "red";
  } else {
    document.getElementById("formMessage").innerHTML = "✅ Form submitted successfully!";
    document.getElementById("formMessage").style.color = "green";
  }
});
