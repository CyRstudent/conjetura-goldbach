/**
 * @param {Number} n
 */
module.exports = async (n) =>{
	let test = 0;
	for (let i = 0; i < n; i++) {
		if (n % i === 0) {
			test++;
		}
	}
	if (test === 2) {
		return true;
	} else {
		return false;
	}
};
