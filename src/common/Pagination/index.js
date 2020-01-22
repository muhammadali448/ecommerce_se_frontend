import React from "react";
import "./styles.css";
const Pagination = ({ pages, paginate }) => {
  const [active, setActive] = React.useState(1);
  const pageNumbers = [];
  for (let index = 0; index < pages; index++) {
    pageNumbers.push(index + 1);
  }
  const handleClick = no => () => {
    paginate(no);
    setActive(no);
  };
  return (
    <div className="center">
      <ul className="pagination">
        {pageNumbers.map(no => (
          <li
            key={no}
            className={active === no ? "active" : ""}
            onClick={handleClick(no)}
          >
            {no}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
