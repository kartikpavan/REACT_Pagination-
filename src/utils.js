const paginate = (followers) => {
	const itemPerPage = 7;
	const pages = Math.ceil(followers.length / itemPerPage); // expected output :20

	//Array.from is used to create iterables from objects
	const newArray = Array.from({ length: pages }, (_, index) => {
		//first arg is the item which we dont care about
		const start = index * itemPerPage;
		return followers.slice(start, start + itemPerPage); //pulling out items from original array and applying slice method
	});
	return newArray;
};

export default paginate;
