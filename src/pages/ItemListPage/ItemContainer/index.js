import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/actions";
import classes from "./ItemContainer.module.css";
import { useAlert } from "react-alert";

export default function ItemContainer(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const alert = useAlert();
  const basketIDList = useSelector((state) => state.basketIDList);
  const [mouseOn, setMouseOn] = useState(false);

  const inBasket = useMemo(() => {
    return item && basketIDList.find((id) => id === item.id) ? true : false;
  }, [item, basketIDList]);

  const handleBasketClick = useCallback(() => {
    dispatch(addToBasket(item.id));
    alert.info("Ürün sepete eklendi.");
  }, [dispatch, alert, item]);

  return (
    <div
      className={classes.container}
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
    >
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url("${item.img}")` }}
      ></div>
      <div className={classes.nameContainer}>{item.name}</div>
      {!mouseOn ? (
        <React.Fragment>
          <div className={classes.markAndColorContainer}>
            <span style={{ fontWeight: "bold" }}>Marka:</span>
            {item.mark}
          </div>
          <div className={classes.markAndColorContainer}>
            <span style={{ fontWeight: "bold" }}>Renk:</span>
            {item.color}
          </div>
          <div className={classes.priceContainer}>{item.price + " TL"}</div>
        </React.Fragment>
      ) : (
        <div
          className={
            !inBasket
              ? classes.basketActiveContainer
              : classes.basketDeactiveContainer
          }
          onClick={inBasket ? null : handleBasketClick}
        >
          <span>
            {inBasket ? "Bu ürünü sepete ekleyemezsiniz." : "Sepete Ekle"}
          </span>
        </div>
      )}
    </div>
  );
}
