import Fuse from "fuse.js";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  addContact,
  deleteContact,
  updateContact,
} from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import Title from "../../components/Title/Title";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchForm/SearchBox";
import ContactList from "../../components/ContactList/ContactList/ContactList";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id, updates) => {
    dispatch(updateContact(id, updates));
  };

  const handleFilterChange = (value) => {
    setSearchTerm(value);
  };

  const options = {
    includeScore: true,
    keys: ["name", "number"],
    threshold: 0,
  };
  const fuse = new Fuse(contacts, options);
  const searchResults = fuse.search(searchTerm);
  const filteredContacts = searchTerm
    ? searchResults.map((result) => result.item)
    : contacts;

  const handleAddNewContact = (values) => {
    const uniqueContactName = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const uniqueContactNumber = contacts.some(
      (contact) => contact.number === values.number
    );
    if (uniqueContactName && uniqueContactNumber) {
      toast.error("This contact is already in the contact book.");
      return;
    }
    if (uniqueContactNumber) {
      toast.error("This contact number is already in the contact book.");
      return;
    }
    dispatch(addContact(values));
    toast.success("Congratulations, the contact has been successfully added.");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Toaster />
      <Title text="Phonebook"></Title>
      <ContactForm onChange={handleAddNewContact} />
      <SearchBox
        label="Find contacts by name or phone number"
        onChange={handleFilterChange}
      />
      <ContactList
        items={filteredContacts}
        onDeleteBtnClick={handleDelete}
        onEditBtnClick={handleEdit}
      />
    </div>
  );
}
