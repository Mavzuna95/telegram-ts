import { Contact } from '../../types/types';
import './contactlist.css'
import {useState, useEffect} from 'react'
  const ContactList = ({setContact}:{
    setContact:(contact: Contact) => void
  }) => {

  const [contacts, setContacts] = useState<Contact[]>([])

  useEffect(() => {
    fetch('http://localhost:3006/contacts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(contact => setContacts(contact))
},[])
const onClickBtn = () => {
  localStorage.removeItem('auth')
  window.location.reload()
 }
  return (
    <div className='contact-list'>
    <button className='logoff ms-4' onClick={onClickBtn}>Выход</button>
    {
      contacts &&
    contacts.map(contact => {
      return (
        <div key={contact.id} onClick={() => setContact(contact)} className='contact'>
          <img src={contact.img} className='contact-img' alt='img'/>
          <span className='contact-name'>
           {contact.name}
          </span>
          <span className='contact-lastname'>
            {contact.lastname}
          </span>
        </div>
      )
    })}
  </div>

  )
}
export default ContactList