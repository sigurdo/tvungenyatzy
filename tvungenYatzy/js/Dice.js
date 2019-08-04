class SuperDice {
	constructor(diceArr) {
		this.diceArr = diceArr;
		this.keepArr = [];
		this.keepArr.length = diceArr.length;
		this.keepArr.fill(false);
		this.qtyThrows = 0;
	}

	throwAll() {
		this.keepArr.fill(false);
		this.throw();
	}

	throw() {
		this.qtyThrows++;
		if (this.qtyThrows > 3) {
			console.warn("You did "+this.qtyThrows+" rolls without resetting the throw counter");
		}
		for (var i = 0; i < this.diceArr.length; i++) {
			if (!this.keepArr[i]) {
				this.diceArr[i] = randInt(1, 6);
			}
		}
	}

	keep(index) {
		this.keepArr[index] = true;
	}

	keepNum(num, qtyMax) {
		let qtyKept = 0;
		for (var i = 0; i < this.diceArr.length; i++) {
			if (this.diceArr[i] == num) {
				this.keepArr[i] = qtyKept < qtyMax;
			}
		}
	}

	unkeep(index) {
		this.keepArr[index] = false;
	}

	unkeepAll() {
		this.keepArr.fill(false);
	}

	resetThrows() {
		this.qtyThrows = 0;
	}

	getArr() {
		return JSON.parse(JSON.stringify(this.diceArr));
	}

	setArr(diceArr) {
		if (diceArr.length == this.diceArr.length) {
			this.diceArr = JSON.parse(JSON.stringify(diceArr));
		}
	} 
}

class Dice extends SuperDice {
	constructor(numOfDice) {
		let arr = [];
		for (let n = 0; n < numOfDice; n++) {
			arr.push(randInt(1, 6));
		}
		super(arr);
		this.throw();
	}
}

class TestDice extends SuperDice {
	/*constructor(diceArr) {
		super(diceArr);
	}*/

	setArr(diceArr) {
		if (diceArr.length == this.diceArr.length) {
			this.diceArr = JSON.parse(JSON.stringify(diceArr));
		}
	} 
}