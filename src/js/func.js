export default function findBy(property, value) {
  return (element) => {
    if (element[property] === value) {
      return true;
    }
    return false;
  };
}
