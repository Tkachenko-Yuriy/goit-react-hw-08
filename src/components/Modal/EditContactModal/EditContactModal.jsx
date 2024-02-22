import { useState } from "react";
import Modal from "react-modal";
import Button from "../../Button/Button";
import css from "./EditContactModal.module.css";

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

export default function EditContactModal({ isOpen, onClose, onConfirmEdit, contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSave = () => {
    onConfirmEdit({ id: contact.id, name, number });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Contact Modal"
      style={customStyles}
    >
      <div className={css.container}>
        <h2 className={css.title}>Edit Contact</h2>
        <div className={css.inputContainer}>
          <label className={css.label}>Name:</label>
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={css.inputContainer}>
          <label className={css.label}>Phone number:</label>
          <input
            className={css.input}
            type="text"
            value={number}
            onChange={handlePhoneChange}
          />
        </div>
        <div className={css.buttons}>
          <Button type="button" onClick={handleSave}>Save</Button>
          <Button type="button" onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
}

