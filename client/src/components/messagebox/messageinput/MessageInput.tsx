import {useState} from 'react'
import './messageinput.css'
import { Contact, Message } from '../../../types/types'

const MessageInput = ({selectedContact, messages, setMessages}:{
  selectedContact: Contact;
  messages: Message[],
  setMessages: (arr: Message[]) => void }) => {

  const[text, setText] = useState('')
  

  const sendMessage = () => {
    if (text === '') {
      alert('Заполните поля!')
    }else {
    let message: Message = {
      id: Math.random(),
      recieverId: selectedContact.id,
      senderId: 10,
      content: text,
      // img: ''
    }
     fetch('http://localhost:3006/new-message', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((response) => response.json())
.then((messages) => console.log(messages))
  setText('')
  setMessages([...messages, message])
  }  
}  
  return (
    <div className='input-section'>
      <input value={text} onChange={(e) => setText(e.target.value)} 
      className='message-input' type="text-area" />
      <button onClick={sendMessage} className='message-button'>Send</button>
    </div>
  )
}

export default MessageInput;
