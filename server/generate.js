const { faker } = require('@faker-js/faker');

var database = { characters: []};

for (var i = 1; i <= 50; i++){
  database.characters.push({
    id: i,
    name: faker.name.firstName(),
    status: faker.lorem.word(),
    species: faker.lorem.word(),
    gender: faker.lorem.word(),
    origin: faker.lorem.word(),
    location: faker.address.city(),
    image: faker.image.image(267, 267)
  });
}

console.log(JSON.stringify(database));
