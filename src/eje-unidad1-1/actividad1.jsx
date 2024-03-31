function Acc1() {
	let input = [
		{ name: "John", age: 21, city: "New York" },
		{ name: "Mike", age: 28, city: "Moscow" },
		{ name: "Danny", age: 30, city: "London" },
		{ name: "Lisa", age: 26, city: "Paris" },
		{ name: "Sophie", age: 19, city: "Berlin" },
	];


	const returnName = (input) => {
	    // Filtrar personas cuya edad esté entre 21 y 28 años
	    const filteredPersons = input.filter(person => person.age > 20 && person.age < 29);

	    // Utilizar map() para obtener solo los nombres de las personas
	    const filteredNames = filteredPersons.map(person => person.name);

	    return filteredNames;
	}

	const namesArray = returnName(input);
	console.log(namesArray);
};

export default Acc1;

