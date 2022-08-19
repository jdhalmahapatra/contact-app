import React, {useState, useEffect} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {uuid} from 'uuidv4'

import './App.css';
function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }
  useEffect(() => {
    debugger;
    
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //localStorage.clear()
    //setContacts(prevContacts => ([prevContacts, ...retreiveContacts]))
    setContacts(retreiveContacts)
  }, [])

  useEffect(() => {
    debugger;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
       <Header/>
       <AddContact addContactHandler={addContactHandler}/>
       <ContactList contact={contacts} removeContactHandler={removeContactHandler}/>
    </div>
  );
}

export default App;
