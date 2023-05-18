function randInt(from, to) {
	return Math.floor(Math.random()*(to + 1 - from)) + from;
}

function matrixOfZeros(rows, cols) {
	let res = [];
	res.length = rows;
	for (var i = 0; i < res.length; i++) {
		res[i] = [];
		res[i].length = cols;
		res[i].fill(0);
	}

	return res;
}

function sumMatrix(matrix, col, fromRow, untilRow) {
	let sum = 0;
	for (var i = fromRow; i <= untilRow; i++) {
		sum += matrix[i][col];
	}

	return sum;
}

function mode(arr) {//Finner typetallet i et array
	let appearences = {};
	for (var i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (appearences[num] == undefined) {
			appearences[num] = 1;
		}
		else {
			appearences[num] += 1;
		}
	}

	let maxQty = 0;
	let maxNum;
	for (let num in appearences) {
		let qty = appearences[num];
		if (qty >= maxQty) {
			maxQty = qty;
			maxNum = num;
		}
	}

	return maxNum;
}

function sumArr(arr) {
	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function arrQtyOf(arr, num) {
	let qty = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			qty++;
		}
	}

	return qty;
}