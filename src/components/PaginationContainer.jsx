import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginateContainer = () => {
	const { meta } = useLoaderData();
	const { pageCount, page } = meta.pagination;
	const pages = Array.from({ length: pageCount }, (item, idx) => {
		return idx + 1;
	});

	const { search, pathname } = useLocation();
	const navigate = useNavigate();
	const handlePageChange = (pageNumber) => {
		const searchParams = new URLSearchParams(search);
		console.log(searchParams);
		// Inject the page to the new search parameters
		searchParams.set("page", pageNumber);
		console.log(searchParams);
		navigate(`${pathname}?${searchParams.toString()}`);
	};

	if (pageCount < 2) {
		return null;
	}

	return (
		<div className="mt-16 flex justify-end">
			<div className="join">
				<button
					className="btn btn-xs sm:btn-md join-item"
					onClickCapture={() => {
						let prevPage = page - 1;
						if (prevPage < 1) {
							prevPage = pageCount;
						}
						handlePageChange(prevPage);
					}}>
					prev
				</button>
				{pages.map((pageNumber) => {
					return (
						<button
							onClickCapture={() => handlePageChange(pageNumber)}
							key={pageNumber}
							className={`btn btn-xs sm:btn-md borer-none join-item ${
								pageNumber === page ? "bg-base-300 border-base-300" : ""
							}`}>
							{pageNumber}
						</button>
					);
				})}
				<button
					className="btn btn-xs sm:btn-md join-item"
					onClickCapture={() => {
						let nextPage = page + 1;
						if (nextPage > pageCount) {
							nextPage = 1;
						}
						handlePageChange(nextPage);
					}}>
					next
				</button>
			</div>
		</div>
	);
};
export default PaginateContainer;
