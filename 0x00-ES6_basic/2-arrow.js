export default getNeighborhoodsList = () => {
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  const addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
};