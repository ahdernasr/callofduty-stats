// button = document.getElementById("button");
// text = document.querySelector("textarea");
// button.addEventListener("click", () => {
//   event.preventDefault();
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       data: text.value,
//     }),
//   });
//   fetch("/stats", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       data: text.value,
//     }),
//   }).then(() => {
//       location.href = "/stats"
//   })
// });

///////////////////////////DROPDOWN MENU///////////////////////////
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches("#dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  
  //////////////////////////SEARCH BUTTTON/////////////////////////////
  document.getElementById("submit").addEventListener("click", () => {
    fetch("/mwhome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById('password').value,
        default: false
      }),
    }).then(() => {
      location.href = "/mwhome";
    });
  });
  
  document.getElementById("mystats").addEventListener("click", () => {
    fetch("/mwhome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById('password').value,
        default: true
      }),
    }).then(() => {
      location.href = "/mwhome";
    });
  });