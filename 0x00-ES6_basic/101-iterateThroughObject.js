export default function iterateThroughObject(reportWithIterator) {
  const myEmployees = [];
  for (const employee of reportWithIterator) {
    myEmployees.push(employee);
  }

  return myEmployees.join(" | ");
}
