import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {
	const { data, loading } = useFetch();
	const [currentPage, setCurrentPage] = useState(0);
	const [paginatedFollowers, setPaginatedFollowers] = useState([]);

	useEffect(() => {
		if (loading) return;
		setPaginatedFollowers(data[currentPage]);
	}, [loading]);

	return (
		<main>
			<div className="section-title">
				<h1>{loading ? 'Loading...' : 'Pagination'}</h1>
				<div className="underline"></div>
			</div>
			<section className="followers">
				<div className="container">
					{paginatedFollowers.map((follower) => {
						return <Follower key={follower.id} {...follower} />;
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
