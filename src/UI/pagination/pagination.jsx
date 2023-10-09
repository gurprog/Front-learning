import React from "react";

const Pagination = ({ page, pagesArray, changePage }) => {
  return (
    <div>
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
