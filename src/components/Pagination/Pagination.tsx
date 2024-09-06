const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, '...', totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage, '...', totalPages];
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-end items-center my-2">
      <button
        className={`px-1 py-1 mx-1 ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      {getPageNumbers().map((number, index) =>
        number === '...' ? (
          <span key={index} className="px-3 py-1 mx-1">
            ...
          </span>
        ) : (
          <button
            key={number}
            className={`px-2 py-1 mx-1 text-sm ${
              number === currentPage
                ? 'bg-blue-500 text-white rounded-full'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ),
      )}

      <button
        className={`px-3 py-1 mx-1 ${
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
