function CountryList() {
  let countries = [
    { name: 'Argentina', population: 458100000 },
    { name: 'Brazil', population: 212559417 },
    { name: 'Mexico', population: 128932753 },
    // Añade más países si es necesario
  ];

  const returnCountry = (countries) => {
    // Ordenar los países por su población de mayor a menor
    const sortedCountries = countries.sort((a, b) => b.population - a.population);

    console.log("Lista de países ordenados por población:");
    sortedCountries.forEach(country => {
      console.log(`${country.name} - ${country.population}`);
    });

    return null; // Ya que no estamos renderizando nada en el DOM
  }

  // Llamamos a la función que hemos definido
  return returnCountry(countries);
}

export default CountryList;
