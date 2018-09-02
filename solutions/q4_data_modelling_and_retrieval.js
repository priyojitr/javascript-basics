// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

const fruits = [
    {
        name: 'Apple',
        color: 'Red',
        pricePerKg: 80
    },
    {
        name: 'Strawberry',
        color: 'Pink',
        pricePerKg: 45
    },
	{
        name: 'Banana',
        color: 'Yellow',
        pricePerKg: 50
    },
    {
        name: 'Orange',
        color: 'Orange',
        pricePerKg: 30
    }
];
// filtering fruit list based on fruit name provided
function searchFruit(fruitsObj, fruitName)
{
    return fruitsObj.filter(x => x.name === fruitName);
}
// fruit name: user provided
let fruitName = 'Banana';
// get fruit details
let getFruit = searchFruit(fruits, fruitName);
// build output string
let outputString = `Fruit name is ${getFruit[0].name}`;
outputString = outputString + ` color is ${getFruit[0].color}`;
outputString = outputString + ` & price is ${getFruit[0].pricePerKg} /kg.`;

return outputString;

