export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighboorhood = (newNeighborhood) => {
	self.sanFranciscoNeighborhoods.push(newNeighborhood);
	return self.sanFranciscoNeighborhoods;
    };
}
