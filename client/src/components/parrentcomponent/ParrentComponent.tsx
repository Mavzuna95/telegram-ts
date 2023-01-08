import React, {useState,useRef} from 'react'
import './parrent.css'
import ContactList from "../contacts/ContactList";
import MessageBox from "../messagebox/MessageBox";
import { Contact } from '../../types/types';

export default function ParrentComponent() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  // const local = JSON.parse(localStorage.getItem("selectedContact") || '')
  const [selectedContact, setSelectedContact] = useState<Contact | ''>( '')

  // useEffect(() => {
  //   localStorage.setItem(("selectedContact"), JSON.stringify(selectedContact))
  // }, [selectedContact])
  
    const setContact = (contact: Contact) => {
      setSelectedContact(contact)
    }
  return (
    <div className='parrent'>
      <ContactList setContact ={setContact}/>
      {selectedContact ?
      <MessageBox selectedContact={selectedContact}/>:
      <div className='choosen'><h3 >Выберите контакт....</h3>
            <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
        //   controls
          loop
          mode="normal"
          src="https://assets1.lottiefiles.com/packages/lf20_zvhbb9ap.json"
          style={{ width: "300px", height: "200px" }}
        ></lottie-player>
        </div>
    }
    </div>
  )
}
