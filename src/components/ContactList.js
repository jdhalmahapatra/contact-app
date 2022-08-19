import React from 'react'
import ContactCard from './ContactCard'


const ContactList =(props)=> {
    debugger;
    const deleteHandler = (id) => {
        props.removeContactHandler(id)
        console.log(id)
    }


    const rednderContactList = props.contact.map((contact, index) => {
        return (
            <ContactCard key={index} contact={contact} deleteHandler={deleteHandler}/>
        )
    })
    return(
        <div className='ui celled list'>
            {rednderContactList}
        </div>
    )
}

export default ContactList