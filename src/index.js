const prompt = require('prompt-sync')();
const StrAns = prompt('Introduce un numero entero que sea mayor que 2: ');
if (typeof StrAns == 'undefined' || StrAns == null ) {
	// eslint-disable-next-line max-len
	console.log('Tienes que introducir algo primero. ¿Es tan dificil para ti leer?');
	process.exit(0);
}
// eslint-disable-next-line prefer-const
let n = Number(StrAns);
if (isNaN(n) || n == null) {
	console.log('Te he pedido que introduzcas un numero, payaso');
	process.exit(0);
}
