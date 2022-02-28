import { createRef, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { ReactComponent as SortSVG } from "./assets/sort.svg";
import ItemContainer from "./ItemContainer";
import classes from "./ItemListPage.module.css";

const SORT_BY_NONE = -1;
const SORT_BY_ASC_PRICE = 1;
const SORT_BY_DSC_PRICE = 2;
const SORT_BY_A_Z = 3;
const SORT_BY_Z_A = 4;

const ITEM_COUNT_PER_PAGE = 12;

export default function ItemListPage() {
  const itemList = useSelector((state) => state.itemList);
  const searchString = useSelector((state) => state.searchString);
  const [sortBy, setSortBy] = useState(SORT_BY_NONE);
  const [filteredItemList, setFilteredItemList] = useState([]);
  const [openSortMenu, setOpenSortMenu] = useState(false);
  const containerRef = createRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenSortMenu(false);
      }
    },
    [containerRef, setOpenSortMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (searchString && searchString.trim()) {
      setCurrentPage(1);
    }
  }, [searchString]);

  //filter by searchString and order by price
  useEffect(() => {
    let result = [...itemList];
    if (searchString && searchString.trim()) {
      let searchStringLower = searchString.toLocaleLowerCase();
      result = result.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchStringLower)
      );
    }
    if (sortBy === SORT_BY_ASC_PRICE) {
      result.sort((item1, item2) => item1.price - item2.price);
    } else if (sortBy === SORT_BY_DSC_PRICE) {
      result.sort((item1, item2) => item2.price - item1.price);
    } else if (sortBy === SORT_BY_A_Z) {
      result.sort((item1, item2) => (item1.name > item2.name ? 1 : -1));
    } else if (sortBy === SORT_BY_Z_A) {
      result.sort((item1, item2) => (item1.name > item2.name ? -1 : 1));
    }
    setFilteredItemList(result);
  }, [itemList, searchString, sortBy, currentPage]);

  //filter by searchString and order by price
  useEffect(() => {
    let startIndex = ITEM_COUNT_PER_PAGE * (currentPage - 1);
    let endIndex = startIndex + ITEM_COUNT_PER_PAGE;
    setCurrentPageItems(filteredItemList.slice(startIndex, endIndex));
  }, [filteredItemList, currentPage]);

  return (
    <div className={classes.ItemListPage}>
      <div className={classes.itemListHeaderRow}>
        <div className={classes.itemListProductCount}>
          {searchString ? (
            <p>
              <b>"{searchString}"</b> ile ilgili <b>{filteredItemList.length}</b>{" "}
              ürün bulduk
            </p>
          ) : (
            <p>
              <b>{filteredItemList.length}</b> ürün
            </p>
          )}
        </div>
        <div
          className={classes.itemListSortContainer}
          onClick={(e) => setOpenSortMenu(!openSortMenu)}
          ref={containerRef}
        >
          <SortSVG />
          <span>Sırala</span>
          {openSortMenu ? (
            <div className={classes.dropdown}>
              <ul>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortBy(SORT_BY_ASC_PRICE);
                    setOpenSortMenu(false);
                  }}
                >
                  Artan Fiyat{" "}
                  {sortBy === SORT_BY_ASC_PRICE ? (
                    <i className="fa fa-check"></i>
                  ) : null}
                </li>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortBy(SORT_BY_DSC_PRICE);
                    setOpenSortMenu(false);
                  }}
                >
                  Azalan Fiyat{" "}
                  {sortBy === SORT_BY_DSC_PRICE ? (
                    <i className="fa fa-check"></i>
                  ) : null}
                </li>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortBy(SORT_BY_A_Z);
                    setOpenSortMenu(false);
                  }}
                >
                  A'dan Z'ye{" "}
                  {sortBy === SORT_BY_A_Z ? (
                    <i className="fa fa-check"></i>
                  ) : null}
                </li>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    setSortBy(SORT_BY_Z_A);
                    setOpenSortMenu(false);
                  }}
                >
                  Z'den A'ya{" "}
                  {sortBy === SORT_BY_Z_A ? (
                    <i className="fa fa-check"></i>
                  ) : null}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.itemListContainer}>
        {currentPageItems.map((item) => {
          return <ItemContainer key={item.id} item={item} />;
        })}
      </div>
      <Pagination
        className={classes.PaginationContainer}
        totalItemCount={filteredItemList.length}
        onChangePage={(i) => setCurrentPage(i)}
        currentPage={currentPage}
        itemCountPerPage={ITEM_COUNT_PER_PAGE}
      />
    </div>
  );
}
