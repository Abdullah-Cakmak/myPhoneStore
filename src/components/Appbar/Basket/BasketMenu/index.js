import { useMemo } from "react";
import { useSelector } from "react-redux";
import BasketItemContainer from "./BasketItemContainer";
import classes from "./BasketMenu.module.css";

export default function BasketMenu() {
  const basketIDList = useSelector((state) => state.basketIDList);
  const itemList = useSelector((state) => state.itemList);

  const totalPrice = useMemo(() => {
    let totalPrice = 0;
    basketIDList.forEach((id) => {
      totalPrice = totalPrice + itemList.find((item) => item.id === id).price;
    });
    return totalPrice.toFixed(2);
  }, [itemList, basketIDList]);

  const renderIDList = useMemo(() => {
    let result = basketIDList.reduce((prev, next) => {
      if (prev.includes(next)) return prev;
      else {
        prev.push(next);
        return prev;
      }
    }, []);
    result.sort();
    return result;
  }, [basketIDList]);

  return (
    <div className={classes.Content}>
      <div className={classes.Left}>
        {renderIDList.map((id) => {
          return <BasketItemContainer key={id} itemId={id} />;
        })}
      </div>
      <div className={classes.totalPrice} style={{ fontWeight: "bold" }}>
        <span>Genel Toplam</span>
        <span>{totalPrice} TL</span>
      </div>
    </div>
  );
}
