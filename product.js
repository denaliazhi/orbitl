// Toggle navigation menu
const nav = document.querySelector(".mobile-nav");
const navButton = nav.querySelector("button");
const options = nav.querySelector("ul");

let isOpen = false;

navButton.addEventListener("click", (e) => {
  isOpen = !isOpen;
  if (isOpen) {
    options.style.display = "flex";
    button.style.backgroundImage =
      "url('assets/close-menu.png')";
  } else {
    options.style.display = "none";
    button.style.backgroundImage =
      "url('assets/show-menu.png')";
  }
});

// Temporary access blocker
const signIn = document.querySelector(
  "#access-blocked"
);
const formButton = signIn.querySelector("button");
const formInput = signIn.querySelector("input");
const error = signIn.querySelector(".error");

const content = document.querySelector(
  "#access-granted"
);
console.log(formButton);
formButton.addEventListener("click", (e) => {
  console.log("Here", formInput.value);
  // Hey! You shouldn't be here
  // Proper user authentication coming soon...
  if (formInput.value === "Orbitl2026!") {
    content.style.display = "flex";
    content.style.visibility = "visible";
    signIn.style.display = "none";
    signIn.style.visibility = "hidden";
  } else {
    error.style.opacity = "1";
  }
});
