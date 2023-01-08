import { Contact } from '../../../types/types';
import './header.css'
const HeaderChat = ({selectedContact}:{
  selectedContact: Contact;
}) => {

  return (
    <div className='header'>
      {selectedContact &&
        <div key={selectedContact.id} className='header-contact px-4'>
        <img src={selectedContact.img} className='contact-img ms-3' alt='img'/>
        <h3 className='header-name'>
          {selectedContact.name}
        </h3>     
        <h4 className='header-lastname'>
          {selectedContact.lastname}                
        </h4> 
        <a href={`${selectedContact.id}`}>
          <button className="header-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
          
          </button>
        </a>      
        </div>
        
        }
    </div>
  )
}
export default HeaderChat
