/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	if(Array.isArray(arr))
	{
		// resultant array to be printed
		let res = [];
		res = arr.reduce((accumulator, currentValue) => {
			// recursive call to function 'flatten' with current array
			return accumulator.concat(Array.isArray(currentValue) ? flatten(currentValue) : currentValue);
		}, []);
		return res;
	}
	return null;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
