import classes from "./DeleteDialog.module.css";

export default function DeleteDialog(props) {
  const { open, onClose, onDeleteClick } = props;

  return (
    <div className={classes.modal} style={{ display: open ? "block" : "none" }}>
      <div className={classes.modalContent}>
        <div className={classes.iconButtonContainer}>
          <div
            className={classes.iconButton}
            style={{ backgroundImage: `url("assets/close.png")` }}
            onClick={onClose}
          />
        </div>
        <div className={classes.modalText}>
          Ürünü silmek istediğinize emin misiniz?
        </div>
        <div className={classes.actionButtons}>
          <button
            type="button"
            className={classes.cancelButton}
            onClick={onClose}
          >
            HAYIR
          </button>
          <button
            type="button"
            className={classes.deleteButton}
            onClick={onDeleteClick}
          >
            EVET
          </button>
        </div>
      </div>
    </div>
  );
}
