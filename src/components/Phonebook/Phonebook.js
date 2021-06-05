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
    
    handleAddContact = e => {
        e.preventDefault()
        const { name, number } = this.state;
        this.setState((prev) => ({
            contacts: [...prev.contacts, {name, number, id: shortid.generate()}]
        }))
    }

    handleChangeName = name => {
        this.setState({name})
    }

    handleChangeNumber = number => {
        this.setState({number})
    }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <PhonebookList contacts={ this.state.contacts}/>
      </div>
    );
  }
}

export default Phonebook