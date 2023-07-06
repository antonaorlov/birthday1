const consentForm = document.getElementById("consent-form");
var loading = document.getElementById("loading-text");

window.addEventListener("load", () => {
  const loader = document.querySelector(".newtons-cradle");
  loader.classList, add("newtons-cradle-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("newtons-cradle");
  });
});

function func(e) {
  e.preventDefault();

  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;

  if (firstname === "anton" && lastname === "123") {
    window.location.assign("enter.html");
  } else {
    alert("Loser");
  }
}

consentForm.addEventListener("submit", func);