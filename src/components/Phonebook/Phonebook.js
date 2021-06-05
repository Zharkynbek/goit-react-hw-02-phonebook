import React, {Component} from "react"
import shortid from "shortid";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList"

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
    contacts: [],
  };
  // ============== this methode do nothing
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  // =========================================
  
  handleAddContact = (e) => {
    e.preventDefault();
    this.reset();
    const { name, number } = this.state;
    this.setState((prev) => ({
      contacts: [...prev.contacts, { name, number, id: shortid.generate() }],
    }));
  };

  deleteContacts = (contactIt) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactIt
      ),
    }));
  };

  handleChangeName = (name) => {
    this.setState({ name });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm
          onAddContact={this.handleAddContact}
          onChangeNumber={this.handleChangeNumber}
          onChangeName={this.handleChangeName}
        />
        <PhonebookList onDeleteContacts={this.deleteContacts} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Phonebook