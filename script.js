let firstName = document.getElementById('js-fname');
let lastName = document.getElementById('js-lname');
let country = document.getElementById('js-country');
let phoneNumber = document.getElementById('js-phnNo');
let state = document.getElementById('js-state');
let city = document.getElementById('js-city');
let village = document.getElementById('js-village');
let clearBtn = document.getElementById('clearBtn');

let userDetails = [];

if(JSON.parse(localStorage.getItem("user"))){
  userDetails = JSON.parse(localStorage.getItem("user"));
  console.log(userDetails);
} else {
  let fnameValue = prompt("Enter Your First Name : ")
  let lnameValue = prompt("Enter Your Last Name : ")
  let countryValue = prompt("Country: ")
  let phnNoValue = prompt("Phone Number: ");
  let stateValue = prompt("State : ")
  let cityValue = prompt("City : ")
  let villageValue = prompt("Village : ")
  let newUser = {
      name: fnameValue + " " + lnameValue,
      country: countryValue,
      mobile: phnNoValue,
      state: stateValue,
      city: cityValue,
      village: villageValue 
  }
  firstName.innerText = fnameValue;
  lastName.innerText = lnameValue;
  country.innerText = countryValue;
  phoneNumber.innerText = phnNoValue;
  state.innerText = stateValue;
  city.innerText = cityValue;
  village.innerText = villageValue;

  userDetails.push(newUser);
  localStorage.setItem("user", JSON.stringify(userDetails));
} 

clearBtn.addEventListener('click', function() {
  localStorage.removeItem("user");
  window.location.reload();
});
