export default function findBy(property, value) {
  return (element) => element[property] === value;
}
