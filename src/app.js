/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["joggeres", "racom"];
let prefix = [".com", ".es", ".org", ".net"];

function generateDomainNames(pronoun, adj, noun, prefix) {
  let domainNames = [];

  // Recorrer todas las listas de pronombres, adjetivos y sustantivos
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < prefix.length; l++) {
          if (noun[k].endsWith("es") && prefix[l] === ".es") {
            // Combinar los elementos de las listas y agregar el sufijo ".com"
            let cleanNoun = noun[k].slice(0, -2);
            // Combinar los elementos de las listas sin "com" y agregar el sufijo ".com"
            let domainName = pronoun[i] + adj[j] + cleanNoun + prefix[l];
            domainNames.push(domainName);
          } else if (noun[k].endsWith("com") && prefix[l] === ".com") {
            // Combinar los elementos de las listas y agregar el sufijo ".com"
            let cleanNoun = noun[k].slice(0, -3);
            // Combinar los elementos de las listas sin "com" y agregar el sufijo ".com"
            let domainName = pronoun[i] + adj[j] + cleanNoun + prefix[l];
            domainNames.push(domainName);
          } else {
            let domainName = pronoun[i] + adj[j] + noun[k] + prefix[l];
            domainNames.push(domainName);
          }
        }
      }
    }
  }
  let randomDomain =
    domainNames[Math.floor(Math.random(domainNames) * domainNames.length)];
  return randomDomain;
}

console.log(generateDomainNames(pronoun, adj, noun, prefix));

window.onload = () => {
  let domainNameElement = document.getElementById("domainName");
  let generateButton = document.getElementById("generateButton");

  // Genera el nombre de dominio inicial y asígnalo al contenido del párrafo
  domainNameElement.textContent = generateDomainNames(
    pronoun,
    adj,
    noun,
    prefix
  );

  // Agrega un listener de evento para el clic en el botón
  generateButton.addEventListener("click", () => {
    // Genera un nuevo nombre de dominio y asígnalo al contenido del párrafo
    domainNameElement.textContent = generateDomainNames(
      pronoun,
      adj,
      noun,
      prefix
    );
  });
};
