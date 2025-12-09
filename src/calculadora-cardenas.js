export default function sumarCadena(cadena) {
  if (!cadena) return 0;

  let delimiters = [',', '\n'];
  let numbersString = cadena;

  // Delimitador personalizado
  if (cadena.startsWith('//')) {
    const match = cadena.match(/^\/\/(\[.*?\]|.)\n/);
    if (!match) throw new Error('Delimitador mal formado');

    const delimiterPart = match[1];
    numbersString = cadena.slice(match[0].length);

    if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
      // múltiples delimitadores
      delimiters = delimiterPart.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterPart];
    }
  }

  // Crear regex para separar
  const regex = new RegExp(delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'));

  const numbers = numbersString.split(regex).map(Number);

  // Validar negativos
  const negativos = numbers.filter(n => n < 0);
  if (negativos.length) throw new Error(`Números negativos no permitidos: ${negativos.join(',')}`);

  // Ignorar números mayores a 1000
  return numbers.filter(n => n <= 1000).reduce((a, b) => a + b, 0);
}
