import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import { addContact, deleteContact } from "../../redux/contacts/operations";
import { selectContacts, selectFilter } from "../../redux/contacts/selectors";
import { setFilter } from "../../redux/contacts/filterSlice";
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
  const filter = useSelector(selectFilter);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter((contact) => {
    const normalizeFilter = filter.toLowerCase();
    return contact.name.toLowerCase().includes(normalizeFilter) || contact.number.includes(normalizeFilter);
  });

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
      <SearchBox label="Find contacts by name or phone number" onChange={handleFilterChange} />
      <ContactList items={filteredContacts} onClick={handleDelete} />
    </div>
  );
}
