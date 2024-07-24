/* 
Mandate a schermo la data di oggi formattata in modo differente utilizzando toLocaleString() e le sue diverse opzioni.
Create un array di oggetti con diverse opzioni per la formattazione delle date. 
Per ogni oggetto dell'array create un elemento h2 e mandatelo a schermo con la data formattata come segue:
- mercoledi 19/10/2022;
- 04:54:07 PM;
- mer 19/10/2022
*/

const date = new Date();
const options = [
  {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
  {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
  {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
];

console.log(date.toLocaleString(undefined, options[0]));

options.forEach((option) => {
  const element = document.createElement("h2");
  const text = document.createTextNode(date.toLocaleString(undefined, option));
  element.appendChild(text);
  document.querySelector("body").appendChild(element);
});
