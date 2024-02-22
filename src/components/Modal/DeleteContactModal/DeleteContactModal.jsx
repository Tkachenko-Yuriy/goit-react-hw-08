import Modal from "react-modal";
import Button from "../../Button/Button";
import css from "./DeleteContactModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "22px",
    background:
      "linear-gradient( rgba(60, 132, 206, 1) 20%, rgba(48, 238, 226, 1) 50%, rgb(47, 83, 243) 98% )",
  },
};

export default function DeleteContactModal({
  isOpen,
  onClose,
  onConfirmDelete,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Contact Modal"
      style={customStyles}
    >
      <div className={css.container}>
        <h2 className={css.title}>Confirm Deletion</h2>
        <p className={css.text}>
          Are you sure you want to delete this contact?
        </p>
        <div className={css.buttons}>
          <Button type="button" onClick={onConfirmDelete}>
            Delete
          </Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
