function operation() {
	let dice = new Dice(5);
	let cat = new FourOfAKind();
	
	cat.play(dice);
	return cat.calcPoints(dice);
}

function operation2() {
	let dice = new Dice(5);
	dice.throwAll();
	let arr = dice.getArr();
	for (let i = 5; i <= 6; i++) {
		if (arrQtyOf(arr, i) >= 2) {
			return 1;
		}
	}
	return 0;
}

function probabilityCalculations() {
	console.log("nytt skop, nytt variabelnavn-rot");

	let sum = 0;
	let attempts = 10**6

	for (var i = 0; i < attempts; i++) {
		if (i % (10**5) == 0) {
			console.log(i+":", 100*sum/i);
		}
		let pts = operation();
		sum += pts;
	}

	console.log("Snitt:", 100*sum/attempts);
}

function allProbabilityCalculations() {
	let dice = new Dice(5);
	categories = [
		new SameNumber(1),
		new SameNumber(2),
		new SameNumber(3),
		new SameNumber(4),
		new SameNumber(5),
		new SameNumber(6),
		new OnePair(),
		new TwoPairs(),
		new ThreeOfAKind(),
		new FourOfAKind(),
		new SmallStraight(),
		new LargeStraight(),
		new House(),
		new Chance(),
		new YatzyCat()
	];

	for (let h = 0; h < categories.length; h++) {
		let sum = 0;
		let attempts = 10**5

		for (var i = 0; i < attempts; i++) {
			let cat = categories[h];
			
			cat.play(dice);
			let pts = cat.calcPoints(dice);
			sum += pts;
		}

		console.log(categories[h].catName+":", sum/attempts);
	}
}



//probabilityCalculations();

//allProbabilityCalculations();