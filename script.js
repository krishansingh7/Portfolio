
var typed = new Typed(".text", {
  strings: [
    "Frontend developer",
    "Web Developer",
    "Responsive Web Design",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbybpGRU7RHn8-YFI3mvcxYMhjCWWVBuxduyYaUE9h0bvyXmWfG9g_dCc3hgWEkErq0VOA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementsByClassName("msg")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Massege sent successfully";

      // alert("Thankyou for your interest, Massege sent successfully");

      setTimeout(function () {
        msg.innerHTML = "";
        form.reset();
      }, 1000);
    })
    .catch((error) => console.error("Error!", error.message));
});