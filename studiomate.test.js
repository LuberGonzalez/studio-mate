const studiomate = require("./studiomate");

describe("studiomate", () => {
  test("Imprimir error cuando no sea un parametro, no sea numero dentro de la funcion", () => {
    const expected = "Error no es un numero, compruebe";
    const result = studiomate("10");
    expect(expected).toBe(result);
  });

  test("Imprimir, cuando el numero sea: 1", () => {
    const expected = 1;
    const result = studiomate(1);
    expect(expected).toBe(result);
  });

  test("Imprimir Studio si el numero recibido es: 3", () => {
    const expected = "Studio";
    const result = studiomate(3);
    expect(expected).toBe(result);
  });

  test("Imprimir Studio si el numero recibido es multiplo del 3", () => {
    const expected = "Studio";
    const result = studiomate(6);
    expect(expected).toBe(result);
  });

  test("Imprimir Mate si el numero recibido es: 5", () => {
    const expected = "Mate";
    const result = studiomate(5);
    expect(expected).toBe(result);
  });

  test("Imprimir Mate si el numero recibido es multiplo del 5", () => {
    const expected = "Mate";
    const result = studiomate(10);
    expect(expected).toBe(result);
  });

  test("Imprimir StudioMate si el numero recibido es multiplo de 3 y de 5", () => {
    const expected = "StudioMate";
    const result = studiomate(15);
    expect(expected).toBe(result);
  });
});
