import { render } from "react-dom";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
	const { meta } = useLoaderData();
	const { pageCount, page } = meta.pagination;

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
	const addPageButton = ({ pageNumber, activeClass }) => {
		return (
			<button
				onClickCapture={() => handlePageChange(pageNumber)}
				key={pageNumber}
				className={`btn btn-xs sm:btn-md borer-none join-item ${
					activeClass ? "bg-base-300 border-base-300" : ""
				}`}>
				{pageNumber}
			</button>
		);
	};

	const renderPageButtons = () => {
		const pageButtons = [];
		// first button
		pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

		if (page > 4) {
			pageButtons.push(
				<button className="join-item btn btn-xs sm:btn-md" key="dots-12">
					...
				</button>
			);
		}

		// active / current page
		if (page !== 1 && page !== pageCount) {
			pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
		}

		if (page < pageCount - 4) {
			pageButtons.push(
				<button className="join-item btn btn-xs sm:btn-md" key="dots-12">
					...
				</button>
			);
		}

		// last button
		pageButtons.push(
			addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
		);
		return pageButtons;
	};

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
				{renderPageButtons()}
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
export default ComplexPaginationContainer;
