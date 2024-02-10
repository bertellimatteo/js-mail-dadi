document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  var email = document.getElementById("email").value;
  
  var authorizedEmails = ["email1@example.com", "email2@example.com", "email3@example.com"];
  
  if (authorizedEmails.includes(email)) {
      document.getElementById("message").textContent = "Accesso consentito. Benvenuto!";
  } else {
      document.getElementById("message").textContent = "Accesso negato. L'indirizzo email fornito non è autorizzato.";
  }
});
