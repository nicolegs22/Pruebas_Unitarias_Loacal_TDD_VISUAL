import fizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz — Casos Positivos", () => {
  test("múltiplos de 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  test("múltiplos de 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test("múltiplos de 3 y 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test("números que no son múltiplos", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});

describe("FizzBuzz — Casos Negativos", () => {
  test("entrada no numérica lanza error", () => {
    expect(() => fizzBuzz("a")).toThrow("Entrada no numérica");
  });

  test("número negativo lanza error", () => {
    expect(() => fizzBuzz(-3)).toThrow("Número negativo no permitido");
  });
});
