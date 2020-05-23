// TODO: write your code here
import findBy from './func';

console.log('worked');
const finder = findBy('name', 'урон');
const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder);

console.log(results);

const r = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
].filter(finder);
console.log(r);
