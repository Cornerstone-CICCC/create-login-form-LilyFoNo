document.addEventListener('DOMContentLoaded', ()=>{
    const eyes = document.getElementById("eyes_icons_container");
    const password = document.getElementById("password");
    const myform = document.getElementById("Form");
    const eyeClosed = document.getElementById("eyeClosed");
    const eyeOpened = document.getElementById("eyeOpened");
    const email = document.getElementById("email");
    const remind = document.getElementById("remind");

    eyes.addEventListener("click", () => {
      if (password.type === "password") {
        password.type = "text";
        eyeClosed.style.display = "none";
        eyeOpened.style.display = "block";
      } else {
        password.type = "password";
        eyeClosed.style.display = "block";
        eyeOpened.style.display = "none";
      }
    });

    myform.addEventListener("submit", event => {
      event.preventDefault();
      const data = Object.fromEntries (new FormData(event.target))
      console.table(data)
      password.value='';
      email.value='';
      remind.value='';
    });








})