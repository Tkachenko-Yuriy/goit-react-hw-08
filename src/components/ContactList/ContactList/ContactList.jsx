import { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import DeleteContactModal from "../../Modal/DeleteContactModal/DeleteContactModal";
import EditContactModal from "../../Modal/EditContactModal/EditContactModal";
import Contact from "../Contact/Contact";
import Button from "../../Button/Button";
import css from "./ContactList.module.css";

export default function ContactList({
  items,
  onDeleteBtnClick,
  onEditBtnClick,
}) {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleDelete = (id) => {
    setContactIdToDelete(id);
    setDeleteModalIsOpen(true);
  };

  const handleEdit = (contact) => {
    setContactToEdit(contact);
    setEditModalIsOpen(true);
  };

  const confirmDelete = () => {
    onDeleteBtnClick(contactIdToDelete);
    setDeleteModalIsOpen(false);
  };

  const confirmEdit = (contact) => {
    const { id, name, number } = contact;
    onEditBtnClick({ id, updates: { name, number } });
    setEditModalIsOpen(false);
  };

  return (
    <div>
      <ul className={css.list}>
        {items.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <Contact name={name} phone={number}>
              <Button
                type="button"
                onClick={() => handleEdit({ id, name, number })}
              >
                <RiEdit2Fill />
              </Button>
              <Button type="button" onClick={() => handleDelete(id)}>
                <MdDelete />
              </Button>
            </Contact>
          </li>
        ))}
      </ul>
      {deleteModalIsOpen && (
        <DeleteContactModal
          isOpen={deleteModalIsOpen}
          onClose={() => setDeleteModalIsOpen(false)}
          onConfirmDelete={confirmDelete}
        />
      )}
      {editModalIsOpen && (
        <EditContactModal
          isOpen={editModalIsOpen}
          onClose={() => setEditModalIsOpen(false)}
          contact={contactToEdit}
          onConfirmEdit={confirmEdit}
        />
      )}
    </div>
  );
}
