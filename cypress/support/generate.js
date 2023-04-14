import { faker } from '@faker-js/faker';

function generateData() {
  const userName = faker.name.sex() + faker.name.lastName() + faker.animal.crocodilia();
  const password = 'Mystanggt500!';

  return { userName, password };
}

module.exports = { generateData };