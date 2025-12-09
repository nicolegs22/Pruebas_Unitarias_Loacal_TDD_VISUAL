
import sumarCadena from "./calculadora-cardenas.js";

describe("Calculadora de Cadenas — Casos Positivos", () => {
  test("cadena vacía retorna 0", () => {
    expect(sumarCadena("")).toEqual(0);
  });

  test("un solo número retorna el mismo número", () => {
    expect(sumarCadena("3")).toEqual(3);
  });

  test("suma de dos números separados por coma", () => {
    expect(sumarCadena("3,4")).toEqual(7);
  });

  test("suma de varios números separados por coma", () => {
    expect(sumarCadena("3,4,7,1")).toEqual(15);
  });

  test("ignorar números mayores a 1000", () => {
    expect(sumarCadena("2,1001,7,1")).toEqual(10);
  });

  test("delimitador personalizado", () => {
    expect(sumarCadena("//;\n1;2")).toEqual(3);
  });

  test("múltiples delimitadores", () => {
    expect(sumarCadena("//[;][%]\n1;2%3")).toEqual(6);
  });
});

describe("Calculadora de Cadenas — Casos Negativos", () => {
  test("números negativos lanzan error", () => {
    expect(() => sumarCadena("1,-2,3,-4")).toThrow("Números negativos no permitidos: -2,-4");
  });

  test("delimitador mal formado lanza error", () => {
    expect(() => sumarCadena("//[;2\n1;2")).toThrow("Delimitador mal formado");
  });
});
