import { useState } from "react";
import DeleteContactModal from "../../Modal/DeleteContactModal";
import Contact from "../Contact/Contact";
import Button from "../../Button/Button";
import css from "./ContactList.module.css";

export default function ContactList({ items, onClick }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);

  const handleDelete = (id) => {
    setContactIdToDelete(id);
    setModalIsOpen(true);
  };

  const confirmDelete = () => {
    onClick(contactIdToDelete);
    setModalIsOpen(false);
  };

  return (
    <div>
      <ul className={css.list}>
        {items.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <Contact name={name} phone={number}>
              <Button
                text="Delete"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Contact>
          </li>
        ))}
      </ul>
      {modalIsOpen && (
        <DeleteContactModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          onConfirmDelete={confirmDelete}
        />
      )}
    </div>
  );
}
