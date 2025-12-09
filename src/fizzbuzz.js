export default function fizzBuzz(n) {
  if (typeof n !== 'number') throw new Error('Entrada no numérica');
  if (n < 0) throw new Error('Número negativo no permitido');

  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}
