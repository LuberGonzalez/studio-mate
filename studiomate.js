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

function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`(${i}) = ${studiomate(i)}`);
  }
}

const num = 1000;

print(num);

module.exports = studiomate;
