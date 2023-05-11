// Mobile Menu Toggle Function

let hamburgerMenu = document.getElementById("hamburgerMenu");
let mobileNavList = document.getElementById("mobileNavList");
hamburgerMenu.addEventListener("click", () => {
  mobileNavList.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

//SVG Animation Scripts

let path = document.querySelector(".line-svg");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  var drawLength = pathLength * scrollPercentage;
  path.style.strokeDashoffset = pathLength + drawLength;
});


// Contact Form Javascript

// Get the form element
var form = document.getElementById("contact-form");

// Get the input elements and textarea
var nameInput = document.getElementById("username");
var emailInput = document.getElementById("useremail");
var messageInput = document.getElementById("usermessage");

// Get the modal element
var modal = document.getElementById("success-modal");
var overlay = document.getElementById("overlay");

// Function to display the modal with the form values
function displayModal() {
  // Get the elements to display the values in the modal
  var nameDisplay = document.getElementById("name-display");
  var emailDisplay = document.getElementById("email-display");

  // Set the values of the display elements to the form values
  nameDisplay.innerHTML = nameInput.value;
  emailDisplay.innerHTML = emailInput.value;

  // Show the modal
  modal.style.display = "block";
  overlay.style.display = "block";
}

// Function to submit the form and display the modal
function submitForm() {
  // Prevent the form from submitting
  event.preventDefault();

  // Call the displayModal function to show the values in the modal
  displayModal();
}

function closeModal() {
  // close the modal
  modal.style.display = "none";
  overlay.style.display = "none";

  //Reset the input values
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}
