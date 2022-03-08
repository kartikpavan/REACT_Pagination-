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
	}, [loading, currentPage]);

	const pageHandler = (index) => {
		setCurrentPage(index);
	};

	const previousPage = () => {
		setCurrentPage((oldPage) => {
			let prevPage = oldPage - 1;
			if (prevPage < 0) {
				prevPage = data.length - 1;
			}
			return prevPage;
		});
	};
	const nextPage = () => {
		setCurrentPage((oldPage) => {
			let nextPage = oldPage + 1;
			if (nextPage > data.length - 1) {
				nextPage = 0;
			}
			return nextPage;
		});
	};

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
				{loading ? (
					' '
				) : (
					<div className="btn-container">
						<button className="prev-btn" onClick={previousPage}>
							{` <- prev`}
						</button>
						{data.map((item, index) => {
							return (
								<>
									<button
										key={index}
										className={`page-btn ${
											index === currentPage ? 'active-btn' : null
										}`}
										onClick={() => pageHandler(index)}
									>
										{index + 1}
									</button>
								</>
							);
						})}
						<button className="next-btn" onClick={nextPage}>
							{`next ->`}
						</button>
					</div>
				)}
			</section>
		</main>
	);
}

export default App;
