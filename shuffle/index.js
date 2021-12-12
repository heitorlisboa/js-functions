const shuffle = (list) => {
	let i = list.length;

	while (i != 0) {
		let j = parseInt(Math.random() * i--);

		[list[i], list[j]] = [list[j], list[i]];
	}
};
