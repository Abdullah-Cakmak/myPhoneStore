import { useCallback, useMemo } from "react";
import classes from "./Pagination.module.css";

export default function Pagination(props) {
  const { totalItemCount, onChangePage, itemCountPerPage, currentPage } = props;

  const handlePageClick = useCallback(
    (i) => {
      onChangePage(i);
    },
    [onChangePage]
  );

  const pageNumberList = useMemo(() => {
    const list = [1];
    let currentPage = 1;
    let counter = totalItemCount;
    while (counter - itemCountPerPage > 0) {
      counter = counter - itemCountPerPage;
      list.push(++currentPage);
    }
    return list;
  }, [totalItemCount, itemCountPerPage]);

  return (
    <div className={classes.container}>
      <div
        key={"<"}
        className={classes.button}
        onClick={() => handlePageClick(pageNumberList[0])}
      >
        {"<"}
      </div>
      {pageNumberList.map((i) => (
        <div
          key={i}
          className={currentPage === i ? classes.buttonActive : classes.button}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </div>
      ))}
      <div
        key={">"}
        className={classes.button}
        onClick={() =>
          handlePageClick(pageNumberList[pageNumberList.length - 1])
        }
      >
        {">"}
      </div>
    </div>
  );
}
