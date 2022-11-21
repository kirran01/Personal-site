// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  console.log("out?");
};

function copyEmail() {
  // Get the text field
  //alert("copied!");
  var copyText = document.getElementById("myEmail");
  let buttonEmailElement = document.getElementById("buttonEmail");
  buttonEmailElement.innerText = "copied!";
  buttonEmailElement.style = "background-color:green";
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  setTimeout(() => {
    buttonEmailElement.innerText = "copy";
    buttonEmailElement.style = "background-color:black";
  }, 2000);
}

function copyPhone() {
  // Get the text field
  var copyText = document.getElementById("myPhone");
  let buttonPhoneElement = document.getElementById("buttonPhone");
  buttonPhoneElement.innerText = "copied!";
  buttonPhoneElement.style = "background-color:green";

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  setTimeout(() => {
    buttonPhoneElement.innerText = "copy";
    buttonPhoneElement.style = "background-color:black";
  }, 2000);
}
