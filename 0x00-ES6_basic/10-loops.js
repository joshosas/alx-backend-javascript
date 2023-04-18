export default function appendToEachArrayValue(array, appendString) {
  const myNewArray = [];
  for (const value of array) {
    myNewArray.push(appendString + value);
  }

  return myNewArray;
}
