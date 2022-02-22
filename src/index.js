const esPrimo = require('./functions/esPrimo');

const prompt = require('prompt-sync')();
const StrAns = prompt('Introduce un numero entero que sea mayor que 2: ');

let l = 0;
const checkPoint = async () =>{
	l++;
	console.log(`Checkpoint #${l}`);
};

// eslint-disable-next-line no-extend-native
if (typeof StrAns == 'undefined'||
	StrAns == null) {
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
checkPoint();
const arr = [];
let ArrSize = 0;

const push = async (element) =>{
	arr.push(element);
	ArrSize++;
	return arr;
};

// Functions go outside, code goes inside
// Simple, am i right?
checkPoint();
(async () =>{
	// Counting that 1 is a prime number, we will push it right away
	checkPoint();
	await push(1);
	/**
	 * As ArrSize var will be decreased by 1, we will counteract the var
	 * The var is saved for various purposes
	 * This loops basically pushes all prime number till the latest element-
	 * is equal or more than n
	 *
	*/
	ArrSize++;
	checkPoint();
	for (let i = 2; n >= arr[ArrSize--]; i++) {
		const boolN = await esPrimo(i);
		if (boolN == true) {
			await push(i);
		}
	}
	checkPoint();
	const lastElement = arr[ArrSize--];
	ArrSize++;
	if (lastElement >= n) {
		arr.pop();
	}
	checkPoint();
	/**
	 * Starts iterating over the array
	 * We have to use a "for" loop for index purposes
	 */
	ArrSize++;
	for (let i = 0; i < ArrSize--; i++) {
		ArrSize++;
		for (let j = 0; j < ArrSize--; j++) {
			const res = arr[i] + arr[j];
			if (res === n) {
				console.log(`${arr[i]} + ${arr[j]} = ${n}`);
				// eslint-disable-next-line max-len
				console.log('El teorema de goldbach funciona aqui. ¿Eres capaz de demonstrar que puede funcionar con todos los numeros del infinito?');
			}
		}
	}
	checkPoint();
})();
