const createElementP = (props) => {
  const { id, styles, inner } = props;
  const $p = document.createElement("p");

  $p.classList.add("text");

  $p.classList.add(`${styles}`);

  $p.id = id;

  $p.innerHTML = inner;

  return $p;
};

const studiomate = (num) => {
  const divisible = (divisor, num) => num % divisor === 0;

  if (typeof num !== "number") {
    return "Error no es un numero, compruebe";
  }

  if (num === 0) return 0;

  if (divisible(3, num) && divisible(5, num)) {
    return "StudioMate";
  }

  if (divisible(3, num)) {
    return "Studio";
  }

  if (divisible(5, num)) {
    return "Mate";
  }

  return num;
};

const print = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(`(${i}) = ${studiomate(i)}`);
  }
};
//   print(num);
const num = 1000;

const printElement = (element) => {
  for (let i = 0; i <= num; i++) {
    const $p = createElementP({
      id: i,
      styles: `${studiomate(i)}`,
      inner: `
                <span class="number">${i} => </span> ${studiomate(i)}
            `,
    });

    element.append($p);
  }
};

document.addEventListener("DOMContentLoaded", (e) => {
  const $containerNumber = document.querySelector(".container-number");

  const $fragment = new DocumentFragment();

  const $spanNumber = document.querySelector(".num");

  printElement($fragment);

  $containerNumber.appendChild($fragment);

  $spanNumber.innerHTML = `${num}`;
});
