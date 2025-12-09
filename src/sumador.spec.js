import sumar from "./sumador.js";

describe("Sumar", () => {
  it("debería sumar dos números", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
