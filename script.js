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
  console.log("out");
  //   document.getElementById("copyEmail").innerText = "copy";
  //   document.getElementById("copyEmail").style = "background-color:black";
};

function copyEmail() {
  // Get the text field
  var copyText = document.getElementById("myEmail");
  document.getElementById("copyEmail").innerText = "copied!";
  document.getElementById("copyEmail").style = "background-color:green";

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

function copyPhone() {
  // Get the text field
  var copyText = document.getElementById("myPhone");
  document.getElementById("copyPhone").innerText = "copied!";
  document.getElementById("copyPhone").style = "background-color:green";

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
