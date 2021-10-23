let firstNameById=window.document.getElementById('first_name');
window.console.log(firstNameById);

let firstNameByClass = document.getElementsByClassName("input--style-4")[0];
console.log(firstNameByClass);

let firstNameByName = document.getElementsByName('first_name')[0];
console.log(firstNameByName);

let firstNameByTagName = document.getElementsByTagName("input")[0];
console.log(firstNameByTagName);

let firstNameByQuerySelectorId = document.querySelector('#first_name');
console.log(firstNameByQuerySelectorId);

let firstNameByQuerySelectorClass = document.querySelector("input--style-4");
console.log(firstNameByQuerySelectorClass);

let firstNameByQuerySelectorAllClass = document.querySelectorAll('.unput--style-4')[0];
console.log(firstNameByQuerySelectorAllClass);

let last_name = document.getElementById("last_name");
console.log(last_name);


//////////////*********PROPERTY  VS ATTRIBUTE*********////////////

let idAttr = firstNameById.getAttribute("id");
console.log(idAttr);

let classAttr = firstNameById.getAttribute("class");
console.log(classAttr);

//firstNameById.setAttribute("class","redColorClass");

let classProp = firstNameById.className;
console.log(classProp);

firstNameById.value="Halil";
last_name.value="Alaka";

let fullAd =document.getElementById("full_name");
let email = document.getElementsByName("email")[0];

//console.log(firstNameById);
fullAd.value= `${firstNameById.value.toUpperCase()} ${last_name.value.toUpperCase()}`;
console.log(fullAd.value);

email.value = `${firstNameById.value.toLowerCase()}.${last_name.value.toLowerCase()}@clarusway.com`;
console.log(email.value);


//////********  innerText,  innerHTML, textContent */////////////////////

let headerDiv = document.getElementById("headerId");
console.log(headerDiv);

console.log(headerDiv.innerHTML);
console.log(headerDiv.innerText);
console.log(headerDiv.textContent);

//headerDiv.innerText=`<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo"/>`;
headerDiv.innerHTML+=`<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo"/>`;

let logo=document.createElement("img");
logo.setAttribute("src","img/logo.png");
logo.setAttribute("class","headerLogo");

logo.style.width="50px";
logo.style.height="50px";
logo.className="headerLogo";
logo.classList.add('headerClass');
logo.classList.remove("headerClass");
console.log(logo.classList);

console.log(logo);

headerDiv.appendChild(logo);

let pathList=["Fullstack","aws","Data science","cybersecurity"];
let pathSelectBox=document.querySelector("#paths");

///for

// for(let i=0; i<pathList.length;i++){
//     pathSelectBox.innerHTML+=`<option>${pathList[i]}</option>`;
// }

///for of

// for(item of pathList){
//     pathSelectBox.innerHTML+=`<option>${item}</option>`;
// }

///for each

pathList.forEach(element => {
    pathSelectBox.innerHTML+=`<option>${element}</option>`
    
});

let lastNameInput =document.getElementsByName('last_name')[0];
console.log(lastNameInput);

let span = document.querySelector("#charCount");
console.log(span);

const showRemainChar=()=>{
    span.innerText =lastNameInput.value.length +"/40";

}

lastNameInput.addEventListener("keyup", showRemainChar);


// let date =document.getElementsByName("birthday")[0];
// date.addEventListener("change",()=>{
//     alert(date.value);
// });

let selectBox= document.querySelector("#paths");
const getSelectedItem=()=>{
    let selectedName =selectBox.options[selectBox.selectedIndex].innerText;
    alert(selectedName);
}
selectBox.onchange= getSelectedItem;









