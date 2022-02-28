import classes from "./Basket.module.css";
import { useSelector } from "react-redux";
import { createRef, useCallback, useEffect, useState } from "react";
import BasketMenu from "./BasketMenu";

export default function Basket() {
  const basketIDList = useSelector((state) => state.basketIDList);
  const [basketMenuOpen, setBasketMenuOpen] = useState(false);
  const basketButtonContainerRef = createRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (
        basketButtonContainerRef.current &&
        !basketButtonContainerRef.current.contains(event.target)
      ) {
        setBasketMenuOpen(false);
      }
    },
    [basketButtonContainerRef, setBasketMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={classes.appBarRow1BasketButton}
      onClick={() => setBasketMenuOpen(!basketMenuOpen)}
      ref={basketButtonContainerRef}
    >
      <span>Sepetim</span>
      {basketIDList.length > 0 ? (
        <span className={classes.appBarRow1BasketBadge}>
          {basketIDList.length}
        </span>
      ) : null}
      {basketMenuOpen ? (
        <div
          className={classes.appBarRow1BasketMenu}
          onClick={(e) => e.stopPropagation()}
        >
          <BasketMenu />
        </div>
      ) : null}
    </div>
  );
}
