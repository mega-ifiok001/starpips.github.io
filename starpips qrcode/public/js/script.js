const contactform = document.querySelector("form");

let Fname = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

contactform.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = {
    Fname: Fname.value,
    email: email.value,
    phone: phone.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      if (xhr.responseText.trim() === "Success") {
        alert("Email sent");
        Fname.value = "";
        email.value = "";
        phone.value = "";
      } else {
        alert("Email was not sent");
      }
    } else {
      alert("Error: " + xhr.status);
    }
  };
  xhr.onerror = function () {
    alert("Request failed");
  };
  xhr.send(JSON.stringify(formData));
});
