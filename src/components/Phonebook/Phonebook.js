import React, { useState } from "react";
import shortid from "shortid";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import filterContacts from "../../helpers/filterContacts";
import PhonebookFilter from "./PhonebookFilter";

export default function Phonebook() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (e) => {
    e.preventDefault();
    setContacts((prev) => [
      ...prev.contacts,
      { name, number, id: shortid.generate() },
    ]);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const deleteContacts = (contactIt) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactIt)
    );
  };

  const handleChangeName = (name) => {
    setName(name);
  };

  const handleChangeNumber = (number) => {
    setNumber(number);
  };

  const handleChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const filteredContacts = filterContacts(contacts, filter);
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm
        onAddContact={handleAddContact}
        onChangeNumber={handleChangeNumber}
        onChangeName={handleChangeName}
        name={name}
        number={number}
      />
      <PhonebookFilter
        filterName={filter}
        onChangeFilter={handleChangeFilter}
      />
      <PhonebookList
        onDeleteContacts={deleteContacts}
        contacts={filteredContacts}
      />
    </div>
  );
}
