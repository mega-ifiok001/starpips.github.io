// document.addEventListener("DOMContentLoaded", function () {
//   const inputs = document.querySelectorAll(".input-box input");

//   inputs.forEach((input) => {
//     input.addEventListener("focus", handleFocus);
//     input.addEventListener("blur", handleBlur);
//     input.addEventListener("input", handleInput);


//     handleInput({ target: input });
//   });

//   function handleFocus(event) {
//     const input = event.target;
//     const inputBox = input.parentElement;
//     inputBox.classList.add("focused");
//   }

//   function handleBlur(event) {
//     const input = event.target;
//     const inputBox = input.parentElement;
//     if (!input.value) {
//       inputBox.classList.remove("focused");
//     }
//   }

//   function handleInput(event) {
//     const input = event.target;
//     const inputBox = input.parentElement;
//     if (input.value) {
//       inputBox.classList.add("focused");
//     } else {
//       inputBox.classList.remove("focused");
//     }
//   }
// });




// // form validation
// document.querySelector("Form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   var fullName = document.getElementById("fullName").value.trim();
//   var email = document.getElementById("email").value.trim();
//   var phone = document.getElementById("phone").value.trim();
//   var isValid = true;

//   // Validate full name
//   if (fullName === "") {
      
//   } else {
//     document.getElementById("fullNameBox").classList.remove("error");
//   }

//   // Validate email
//   if (email === "") {
    
//   } else {
//     document.getElementById("emailBox").classList.remove("error");
//   }

//   // Validate phone number
//   if (phone === "") {
//     isValid = false;
//     document.getElementById("phoneBox").classList.add("error");
//   } else {
//     document.getElementById("phoneBox").classList.remove("error");
//     }
    
//     if (!isValid) {
//         alert('please fill up the forms')
//     }

//   if (isValid) {
    
     

//        var xhr = new XMLHttpRequest();
//        xhr.open("POST", "", true); // Replace with your server endpoint URL
//        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

//        xhr.onreadystatechange = function () {
//          if (xhr.readyState === XMLHttpRequest.DONE) {
//            if (xhr.status === 200) {
//              alert("Form submitted successfully!");
//              console.log(xhr.responseText);
//              // You can handle the response here
//            } else {
//              alert("There was an error submitting the form.");
//              console.log(xhr.responseText);
//              // You can handle the error here
//            }
//          }
//        };

//         var data = JSON.stringify({
//           fullName: fullName,
//           email: email,
//           phone: phone,
//         });

//        xhr.send(data);

//   }
// });







// var formForm = document.querySelector('form');


// function sendEmail() {
//     Email.send({
//       Host: "smtp.elasticemail.com",
//       Username: "pluscodetechnologies@gmail.com",
//       Password: "4B5AE5A800E95F84E708B4F53CC743532318",
//       To: "ifiokaniebiet@gmail.com",
//       From: "pluscodetechnologies@gmail.com",
//       Subject: "This is the subject",
//       Body: "And this is the body",
//     }).then((message) => alert(message));
// }


// formForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   sendEmail();
// })


