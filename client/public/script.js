
const greetings = ["Hello", "Bye", "Ciao", "Cheers", "Bests"];

const divElement = function (content){
  return `<div> ${content} </div>`;
}

const loadEvent = function() {

  // Write your JavaScript code after this line

  const header3 = document.createElement("h3");
  const header3Text = document.createTextNode("Level 3 subtitle");
  header3.appendChild(header3Text);

  const mainHeader = document.getElementById("header");
  mainHeader.insertAdjacentElement("beforeend", header3);

  const bodyHTML = document.getElementById("body");
  for (const regard of greetings) {
    bodyHTML.insertAdjacentHTML("beforeend", divElement(regard));
  }

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
