import findBy from '../func';

test('Есть и поле, и значение, все работает корректно', () => {
  const finder = findBy('name', 'урон');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);
  expect(results).toEqual([{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }]);
});

test('поля нет ни в одном из объектов - выводим пустой массив', () => {
  const finder = findBy('trololo', 'урон');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);
  expect(results).toEqual([]);
});

test('поле есть, но такого значения нет - выводим пустой массив', () => {
  const finder = findBy('name', 'лучник');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);
  expect(results).toEqual([]);
});
