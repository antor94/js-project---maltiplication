//users

// let user =document.querySelector('.user')
let myName = document.querySelector(".name");
let profession = document.querySelector(".profession");
let email = document.querySelector(".email");
let img = document.querySelector("img");

// address

let Address = document.querySelector(".Address");
let city = document.querySelector(".city");
let phone = document.querySelector(".phone");
let fb = document.querySelector(".fb");

// data

let remeni = {
  img: "images/mypic.png",
  name: "Antor Karmoker",
  email: "antorremenni@gmail.com",
  profession: "React Developer",
  Address: {
    city: "Gazipur",
    phone: "01768780954",
    fb: "https://www.facebook.com/antor.web.dev",
  },
};

// value asign

img.setAttribute("src", remeni.img);
myName.textContent = `name: ${remeni.name}`;
profession.textContent = `profession: ${remeni.profession}`;
email.textContent = `email: ${remeni.email}`;
city.textContent = `city: ${remeni.Address.city}`;
phone.textContent = `phone: ${remeni.Address.phone}`;
fb.innerHTML = `fb: <a href="${remeni.Address.fb}" target="_blank">${remeni.Address.fb}</a>`;

// namota

// let input = document.querySelector(".input"); // [Bug Fix]
let input = document.querySelector("input");
let button = document.querySelector(".button");
let result = document.querySelector(".result");
let error = document.querySelector(".error");

button.addEventListener("click", () => {
  const num = Number(input.value);
  if (input.value === "") {
    error.innerHTML = "Please input a number to multiply";
    error.style = "color: red;";
    result.innerHTML = ""; 
  } else {
    // error.innerHTML = ""; 
    result.innerHTML = "";
    // let number = parseInt(input.value);


    for (let i = 1; i <= 10; i++) {
      let namota = `${num} x ${i} = ${num * i} <br />`;
      result.innerHTML += namota;
      console.log(namota);
    }

    // input.value = ""; // Proper way to clear input value
  }
});
