import sumarCadena from "./calculadoracadenas.js";

describe("Calculadora de cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(sumarCadena("")).toEqual(0);
  });

  it("deberia retornar el numero  para una cadena de solo un numero", () => {
    expect(sumarCadena("3")).toEqual(3);
  });

  it("deberia retornar la suma de los numero de una cadena de dos numeros separados por coma", () => {
    expect(sumarCadena("3,4")).toEqual(7);
  });

  it("deberia retornar la suma de los numero de una cadena de varios numeros separados por coma", () => {
    expect(sumarCadena("3,4,7,1")).toEqual(15);
  });
});
