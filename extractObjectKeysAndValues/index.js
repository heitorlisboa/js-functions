const extractObjectKeysAndValues = (object) => {
	let objectKeys = [];
	let objectValues = [];

	Object.keys(object).map((key) => {
		const value = object[key];

		if (typeof value !== "object") {
			objectKeys.push(key);
			objectValues.push(value);
		} else {
			const tmp = extractObjectKeysAndValues(value);

			objectKeys = [...objectKeys, ...tmp[0]];
			objectValues = [...objectValues, ...tmp[1]];
		}
	});

	return [objectKeys, objectValues];
};

const itersToObject = (keys, values) => {
	const object = {};

	if (keys.length !== values.length) {
		throw RangeError("Both arrays need to have the same length!");
	}

	for (index in keys) {
		Object.defineProperty(object, keys[index], {
			value: values[index],
			writable: true,
			configurable: true,
			enumerable: true,
		});
	}

	return object;
};

const myObject = {
	name: "Heitor",
	parents: {
		mom: "mom's name",
		dad: "dad's name",
	},
	level1: {
		level2: {
			level3: "random value",
		},
	},
};

const [myObjectKeys, myObjectValues] = extractObjectKeysAndValues(myObject);
const flattenedObject = itersToObject(myObjectKeys, myObjectValues);
console.log(flattenedObject)