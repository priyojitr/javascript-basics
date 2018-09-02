/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr, key) => {
	if(Array.isArray(arr))
	{
		return arr.reduce((obj, item) => {
			// fill array item in to an empty object {}
			obj[item[key]] = item;
			return obj;
		}, {});
	}
	return null;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
