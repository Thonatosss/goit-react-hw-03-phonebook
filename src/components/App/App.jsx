import React, { Component } from 'react';
import { UserForm } from '../Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { PhonebookWrapper} from '../Form/Form.styled';

class App extends Component {
  state = {
    contacts: [
      
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, { contacts }) {
    if (this.state.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  addContact = data => {
    const { contacts } = this.state;
    console.log(data);
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const formattedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(formattedFilter)
    );

    return (
      <PhonebookWrapper>
        <h1>Phonebook</h1>
        <UserForm getData={this.addContact} />
        <h2>Find contact by name</h2>
        <Filter value={filter} filterChange={this.changeFilter} />
        {contacts.length === 0 ? (
          <p>You don't have contacts </p>
        ) : (
          <Contacts
            data={filteredContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </PhonebookWrapper>
    );
  }
}

export { App };
