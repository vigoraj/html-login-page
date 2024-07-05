"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const displayname = document.getElementById("displayname");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");

    if (userInput.value !== "" && passInput.value !== "") {
      localStorage.setItem("Name", userInput.value);
      window.location.href = "dashboard.html";
    } else {
      alert("Username / Password is Required!");
      userInput.focus();
    }
  });

  // dashboard page
});

const user = localStorage.getItem("Name");
const checkbox = document.getElementById("rememberMe");

// checkbox.checked = true
displayname.innerHTML = user;

const logout = () => {
  localStorage.removeItem("Name");
  window.location.href = "index.html";
};

// const sidebarCollapse = () => {
//   const collapseBtn = document.getElementById("sidebar-collapse");
//   collapseBtn.classList.add("hide");
// };
