/* eslint-disable react/prop-types */

function Pagination({ currentPage, pages, pageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button disabled={currentPage === 1} onClick={() => pageChange(currentPage - 1)}>
        Previous
      </button>
      {pageNumbers.map(page => (
        <button key={page} onClick={() => pageChange(page)}>
          {page}
        </button>
      ))}
      <button disabled={currentPage === pages} onClick={() => pageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
