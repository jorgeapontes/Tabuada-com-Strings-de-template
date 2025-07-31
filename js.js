// Seleçao de elementos

const formulario = document.querySelector("#formulario")
const numInput = document.querySelector("#num")
const multiplicadorInput = document.querySelector("#multiplicador")




const multiplicationTable = document.querySelector("#operacoes")


// Eventos
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();

    const multiplicationNumber = +numInput.value;
    const multiplicatorNumber = +multiplicadorInput.value;


    if(!multiplicationNumber || !multiplicatorNumber )return;

    createTable(multiplicationNumber, multiplicatorNumber)
})

// Funções

const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `
      <div id="row">
        <div id="operation">${number} x ${i} = </div>
        <div id="result">${result}</div>
      </div>
    `;

    const parser = new DOMParser();

    const htmltemplate = parser.parseFromString(template, "text/html")

    const row = htmltemplate.querySelector("#row")

    multiplicationTable.appendChild(row);
  }


};
