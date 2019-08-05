class Category {
	//constructor() {}
	play(dice) {}
}

class SameNumber extends Category {
	constructor(number) {
		super();
		this.number = number;
		let arr = ["Nullere", "Enere", "Toere", "Treere", "Firere", "Femmere", "Seksere"];
		this.catName = arr[number];
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		for (let h = 0; h < 3; h++) {
			dice.throw();
			let arr = dice.getArr();
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == this.number) {
					dice.keep(i);
				}
			}
		}
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		let points = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == this.number) {
				points += arr[i];
			}
		}

		return points;
	}
}

class Sum extends Category {
	constructor() {
		super();
		this.catName = "Sum";
	}

	calcPoints(pointsArr, col) {
		return sumMatrix(pointsArr, col, 0, 5);
	}
}

class Bonus extends Category {
	constructor() {
		super();
		this.catName = "Bonus";
	}

	calcPoints(pointsArr, col) {
		if (pointsArr[6][col] >= 42) {
			return 50;
		}
		else {
			return 0;
		}
	}
}

class OnePair extends Category {
	constructor() {
		super();
		this.catName = "1 par";
	}

	play1(dice) {
		dice.resetThrows();
		dice.throwAll();
		let arr = dice.getArr();

		for (var num = 4; num <= 6; num++) {
			if (arrQtyOf(arr, num) >= 2) {
				dice.unkeepAll();
				dice.keep(arr.indexOf(num));
				arr[arr.indexOf(num)] = 0;
				dice.keep(arr.indexOf(num));
			}
		}

		dice.throw();
		arr = dice.getArr();

		for (var num = 4; num <= 6; num++) {
			if (arrQtyOf(arr, num) >= 2) {
				dice.unkeepAll();
				dice.keep(arr.indexOf(num));
				arr[arr.indexOf(num)] = 0;
				dice.keep(arr.indexOf(num));
			}
		}

		dice.throw();
	}

	play2(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		for (let h = 0; h < 3; h++) {
			dice.throw();
			let arr = dice.getArr();
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == 6) {
					dice.keep(i);
				}
			}

			if (arrQtyOf(arr, 5) >= 2) {
				dice.keep(arr.indexOf(5));
				arr[arr.indexOf(5)] = 0;
				dice.keep(arr.indexOf(5));
			}

			else if (arrQtyOf(arr, 4) >= 2) {
				dice.keep(arr.indexOf(4));
				arr[arr.indexOf(4)] = 0;
				dice.keep(arr.indexOf(4));
			}
		}
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		{//Første kast:
			dice.throw();
			dice.unkeepAll();
			let arr = dice.getArr();

			if (arrQtyOf(arr, 6) >= 2) {return;}
			else if (arrQtyOf(arr, 6) == 1) {
				dice.keep(arr.indexOf(6));
			}

			if (arrQtyOf(arr, 5) >= 2) {
				dice.keep(arr.indexOf(5));
				arr[arr.indexOf(5)] = 0;
				dice.keep(arr.indexOf(5));
			}
			else if (arrQtyOf(arr, 5) == 1) {
				dice.keep(arr.indexOf(5));
			}
		}

		{//Andre kast:
			dice.throw();
			dice.unkeepAll();
			let arr = dice.getArr();

			if (arrQtyOf(arr, 6) >= 2) {return;}
			else if (arrQtyOf(arr, 6) == 1) {
				dice.keep(arr.indexOf(6));
			}

			if (arrQtyOf(arr, 5) >= 2) {
				dice.keep(arr.indexOf(5));
				arr[arr.indexOf(5)] = 0;
				dice.keep(arr.indexOf(5));
			}
			else if (arrQtyOf(arr, 5) == 1) {
				dice.keep(arr.indexOf(5));
			}
			
			if (arrQtyOf(arr, 4) >= 2) {
				dice.keep(arr.indexOf(4));
				arr[arr.indexOf(4)] = 0;
				dice.keep(arr.indexOf(4));
			}
		}

		//Tredje kast:
		dice.throw();
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		let pts = 0;
		for (var num = 1; num <= 6; num++) {
			if (arrQtyOf(arr, num) >= 2) {
				pts = 2 * num;
			}
		}

		return pts;
	}
}

class TwoPairs extends Category {
	constructor() {
		super();
		this.catName = "2 par";
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		{//Første kast:
			dice.throw();
			dice.unkeepAll();
			let arr = dice.getArr();
			let pairs = 0;

			for (let n = 2; n <= 6; n++) {
				if (arrQtyOf(arr, n) >= 2) {
					pairs++;
					dice.keep(arr.indexOf(n));
					arr[arr.indexOf(n)] = 0;
					dice.keep(arr.indexOf(n));
				}
			}

			if (arrQtyOf(arr, 6) == 1) {
				dice.keep(arr.indexOf(6));
			}
			if (arrQtyOf(arr, 5) == 1) {
				dice.keep(arr.indexOf(5));
			}
			else if (arrQtyOf(arr, 4) == 1) {
				dice.keep(arr.indexOf(4));
			}
		}

		{//Andre kast:
			dice.throw();
			dice.unkeepAll();
			let arr = dice.getArr();
			let pairs = 0;

			for (let n = 1; n <= 6; n++) {
				if (arrQtyOf(arr, n) >= 2) {
					pairs++;
					dice.keep(arr.indexOf(n));
					arr[arr.indexOf(n)] = 0;
					dice.keep(arr.indexOf(n));
				}
			}

			if (arrQtyOf(arr, 6) == 1) {
				dice.keep(arr.indexOf(6));
			}
			else if (arrQtyOf(arr, 5) == 1) {
				dice.keep(arr.indexOf(5));
			}
			else if (arrQtyOf(arr, 4) == 1) {
				dice.keep(arr.indexOf(4));
			}
			else if (arrQtyOf(arr, 3) == 1) {
				dice.keep(arr.indexOf(3));
			}
		}

		//Tredje kast:
		dice.throw();
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		let pts = 0;
		for (var num = 1; num <= 5; num++) {
			if (arrQtyOf(arr, num) >= 2) {
				for (var num2 = num + 1; num2 <= 6; num2++) {
					if (arrQtyOf(arr, num2) >= 2) {
						pts = 2 * num + 2 * num2;
					}
				}
			}
		}

		return pts;
	}
}

class ThreeOfAKind extends Category {
	constructor() {
		super();
		this.catName = "3 like";
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		{//Første kast:
			dice.throw();
			let arr = dice.getArr();
			let numsKept = 0;

			for (let n = 6; n >= 3; n--) {
				if (arrQtyOf(arr, n) >= 3) {
					dice.keepNum(n, 3);
					numsKept += 3;
					break;
				}
			}

			for (let n = 6; n >= 4; n--) {
				if (arrQtyOf(arr, n) == 2) {
					dice.keepNum(n, 2);
					numsKept += 2;
					break;
				}
			}

			if (numsKept == 0 && arrQtyOf(arr, 6) == 1) {
				dice.keepNum(6, 1);
			}
			else if (numsKept == 0 && arrQtyOf(arr, 5) == 1) {
				dice.keepNum(5, 1);
			}
			else if (numsKept == 0 && arrQtyOf(arr, 4) == 1) {
				dice.keepNum(4, 1);
			}
		}

		{//Andre kast:
			dice.throw();
			dice.unkeepAll();
			let arr = dice.getArr();
			let numsKept = 0;

			for (let n = 6; n >= 2; n--) {
				if (arrQtyOf(arr, n) >= 3) {
					dice.keepNum(n, 3);
					numsKept += 3;
					break;
				}
			}

			for (let n = 6; n >= 3; n--) {
				if (arrQtyOf(arr, n) == 2) {
					dice.keepNum(n, 2);
					numsKept += 2;
					break;
				}
			}

			if (numsKept == 0 && arrQtyOf(arr, 6) == 1) {
				dice.keepNum(6, 1);
			}
		}

		//Tredje kast:
		dice.throw();
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		for (let n = 1; n <= 6; n++) {
			if (arrQtyOf(arr, n) >= 3) {
				return 3 * n;
			}
		}
		return 0;
	}
}

class FourOfAKind extends Category {
	constructor() {
		super();
		this.catName = "4 like";
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		{//Første kast:
			dice.throw();
			let arr = dice.getArr();
			let numsKept = 0;

			for (let n = 6; n >= 1; n--) {
				if (arrQtyOf(arr, n) >= 4) {
					dice.keepNum(n, 4);
					numsKept += 4;
					break;
				}
			}

			for (let n = 6; n >= 2; n--) {
				if (arrQtyOf(arr, n) == 3) {
					dice.keepNum(n, 3);
					numsKept += 3;
					break;
				}
			}

			if (numsKept == 0) {
				for (let n = 6; n >= 3; n--) {
					if (arrQtyOf(arr, n) == 2) {
						dice.keepNum(n, 2);
						numsKept += 2;
						break;
					}
				}
			}

			if (numsKept == 0 && arrQtyOf(arr, 6) == 1) {
				dice.keepNum(6, 1);
			}
		}

		{//Andre kast:
			dice.throw();
			dice.unkeepAll();
			let arr = dice.getArr();
			let numsKept = 0;

			for (let n = 6; n >= 1; n--) {
				if (arrQtyOf(arr, n) >= 4) {
					dice.keepNum(n, 4);
					numsKept += 4;
					break;
				}
			}

			for (let n = 6; n >= 2; n--) {
				if (arrQtyOf(arr, n) == 3) {
					dice.keepNum(n, 3);
					numsKept += 3;
					break;
				}
			}

			if (numsKept == 0) {
				for (let n = 6; n >= 3; n--) {
					if (arrQtyOf(arr, n) == 2) {
						dice.keepNum(n, 2);
						numsKept += 2;
						break;
					}
				}
			}

			if (numsKept == 0 && arrQtyOf(arr, 6) == 1) {
				dice.keepNum(6, 1);
			}
		}

		//Tredje kast:
		dice.throw();
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		for (let n = 1; n <= 6; n++) {
			if (arrQtyOf(arr, n) >= 4) {
				return 4 * n;
			}
		}
		return 0;
	}
}

class SmallStraight extends Category {
	constructor() {
		super();
		this.catName = "Liten straight";
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		let checkArr = [1, 2, 3, 4, 5];

		for (var n = 0; n < 3; n++) {
			dice.throw();
			let arr = dice.getArr();
			for (var i = 0; i < arr.length; i++) {
				if (checkArr.includes(arr[i])) {
					dice.keep(i);
					let index = checkArr.indexOf(arr[i]);
					checkArr.splice(index, 1);
				}
			}
		}
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		arr.sort(function(a, b) {
			return a - b;
		});

		if (JSON.stringify(arr) == JSON.stringify([1, 2, 3, 4, 5])) {
			return sumArr(arr);
		}

		return 0;
	}
}

class LargeStraight extends Category {
	constructor() {
		super();
		this.catName = "Stor straight";
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		let checkArr = [2, 3, 4, 5, 6];

		for (var n = 0; n < 3; n++) {
			dice.throw();
			let arr = dice.getArr();
			for (var i = 0; i < arr.length; i++) {
				if (checkArr.includes(arr[i])) {
					dice.keep(i);
					let index = checkArr.indexOf(arr[i]);
					checkArr.splice(index, 1);
				}
			}
		}
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		arr.sort(function(a, b) {
			return a - b;
		});

		if (JSON.stringify(arr) == JSON.stringify([2, 3, 4, 5, 6])) {
			return sumArr(arr);
		}

		return 0;
	}
}

class House extends Category {
	constructor() {
		super();
		this.catName = "Hus";
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		{//Første kast:
			dice.throw();
			let arr = dice.getArr();
			let numsKept = 0;
			for (let n = 6; n >= 1; n--) {
				if (arrQtyOf(arr, n) >= 3) {
					dice.keepNum(n, 3);
					numsKept += 3;
				}
			}
			
			for (let n = 6; n >= 1; n--) {
				if (arrQtyOf(arr, n) == 2) {
					dice.keepNum(n, 2);
					numsKept += 2;
				}
			}

			if (numsKept < 4) {
				for (let n = 6; n >= 6; n--) {
					if (arrQtyOf(arr, n) == 1) {
						dice.keepNum(n, 1);
						numsKept += 1;
					}
				}
			}
		}

		{//Andre kast:
			dice.throw();
			let arr = dice.getArr();
			let numsKept = 0;
			for (let n = 6; n >= 1; n--) {
				if (arrQtyOf(arr, n) >= 3) {
					dice.keepNum(n, 3);
					numsKept += 3;
				}
			}
			
			for (let n = 6; n >= 1; n--) {
				if (arrQtyOf(arr, n) == 2) {
					dice.keepNum(n, 2);
					numsKept += 2;
				}
			}

			if (numsKept < 4) {
				for (let n = 6; n >= 6; n--) {
					if (arrQtyOf(arr, n) == 1) {
						dice.keepNum(n, 1);
						numsKept += 1;
					}
				}
			}
		}

		//Tredje kast:
		dice.throw();
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		let bottom = 0;
		let top = 0;

		for (let n = 1; n <= 6; n++) {
			if (arrQtyOf(arr, n) == 3) {
				bottom = 3 * n;
			}
			else if (arrQtyOf(arr, n) == 2) {
				top = 2 * n;
			}
		}

		if (bottom && top) {
			return bottom + top;
		}
		return 0;
	}
}

class Chance extends Category {
	constructor() {
		super();
		this.catName = "Sjanse";
	}

	play(dice) {
		dice.resetThrows();
		dice.throwAll();
		let arr = dice.getArr();
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > 4) {
				dice.keep(i);
			}
		}

		dice.throw();
		arr = dice.getArr();
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > 3) {
				dice.keep(i);
			}
		}

		dice.throw();
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		return sumArr(arr);
	}
}

class YatzyCat extends Category {
	constructor() {
		super();
		this.catName = "<b>Yatzy</b>";
	}

	play(dice) {
		dice.resetThrows();
		dice.unkeepAll();

		for (var n = 0; n < 3; n++) {
			dice.throw();
			dice.unkeepAll();
			let arr = dice.getArr();
			let numToKeep = mode(arr);

			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == numToKeep) {
					dice.keep(i);
				}
			}
		}
	}

	calcPoints(dice) {
		let arr = dice.getArr();
		if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] && arr[0] == arr[4]) {
			return 50;
		}
		return 0;
	}
}