import React from "react";

import { Link } from "react-router-dom";
import "./styles.scss";

const Pagination = ({ count, currentPage, pageLimit, handlePageClick }) => {
  let pages = [];
  let totalPages = Math.ceil(count / pageLimit);

  for (let index = 1; index <= totalPages; index++) {
    pages.push(
      <li className="page-item" key={index}>
        <Link
          className="page-link shadow-none"
          to="#"
          onClick={() => handlePageClick(index)}
        >
          {index}
        </Link>
      </li>
    );
  }

  return (
    <React.Fragment>
      <nav className="pagination-wrapper">
        <ul className="pagination">
          {count && currentPage >= 2 && (
            <li className="page-item">
              <Link
                className="page-link shadow-none"
                to="#"
                onClick={() => handlePageClick(currentPage - 1)}
              >
                Previous
              </Link>
            </li>
          )}
          {pages.length > 1 && pages}
          {count && currentPage >= 2 && currentPage < count - 1 && (
            <li className="page-item">
              <Link
                className="page-link shadow-none"
                to="#"
                onClick={() => handlePageClick(currentPage + 1)}
              >
                Next
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
