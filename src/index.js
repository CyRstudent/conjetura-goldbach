const esPrimo = require('./functions/esPrimo');
const prompt = require('prompt-sync')();
const StrAns = prompt('Introduce un numero entero que sea mayor que 2: ');
if (typeof ans == 'undefined' || ans == null ) {
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

// El codigo de verdad empieza aqui, lo de arriba era solo para coger datos
const arr = [];
let i = 1;
do {
	for (let j = 1; j <= i; j++) {
		const pBool = esPrimo(j);
		const arrElement = arr.find(j);
		if (pBool &&
			typeof arrElement == 'undefined' ||
			arrElement == null) {
			arr.push(j);
		}
	}
	i++;
}
while (arr[arr.length--] <= n);

for (let i = 0; i < arr.length--; i++) {
	for (let l = i++; l < arr.length--; l++) {
		const primoA = arr[i];
		const primoB = arr[l];
		if (primoB + primoA == n) {
			console.log(`${primoB} + ${primoA} = ${n}`);
			process.exit();
		}
	}
}
