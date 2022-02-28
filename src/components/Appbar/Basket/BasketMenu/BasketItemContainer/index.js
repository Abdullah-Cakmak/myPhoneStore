import { Fragment, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./BasketItemContainer.module.css";
import { useAlert } from "react-alert";
import { removeFromBasket } from "../../../../../redux/actions";
import DeleteDialog from "../DeleteDialog";

export default function BasketItemContainer(props) {
  const { itemId } = props;
  const itemList = useSelector((state) => state.itemList);
  const alert = useAlert();
  const dispatch = useDispatch();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const item = useMemo(() => {
    return itemList.find((item) => item.id === itemId);
  }, [itemList, itemId]);

  const confirmDelete = useCallback(() => {
    dispatch(removeFromBasket(itemId, 1));
    alert.info("Ürün sepetinizden silindi.");
  }, [dispatch, alert, itemId]);

  const handleDeleteClick = useCallback(
    (e) => {
      e.stopPropagation();
      setOpenDeleteDialog(true);
    },
    [setOpenDeleteDialog]
  );

  return (
    <Fragment>
      <DeleteDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onDeleteClick={confirmDelete}
      />
      <div className={classes.Content}>
        <div
          className={classes.itemImage}
          style={{ backgroundImage: `url("${item.img}")` }}
        />
        <div className={classes.itemLeftSection}>
          <div className={classes.itemName}>{item.name}</div>
          <div className={classes.itemDelete} onClick={handleDeleteClick}>
            Kaldır
          </div>
        </div>
        <div className={classes.itemRightSection}>
          <div className={classes.itemPrice}>{item.price} TL</div>
        </div>
      </div>
    </Fragment>
  );
}
