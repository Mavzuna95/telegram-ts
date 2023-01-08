import React, { useState, useEffect } from 'react'
import './messagebox.css'
import MessageInput from './messageinput/MessageInput'
import MessageList from './messagelist/MessageList'
import HeaderChat from './header/HeaderChat'
import { Contact, Message } from '../../types/types'
const MessageBoxComponent = ({selectedContact}:{selectedContact: Contact }) => {
  const[messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
fetch('http://localhost:3006/messages')
    .then(response => response.json())
    .then(message => {
      return setMessages(message)
    })
  },[])

const filtered = messages.filter((message) => {
  return message.recieverId === selectedContact.id
})

  return (
    <div className='chat-section'>
      <HeaderChat selectedContact={selectedContact}/>

      <MessageList filtered={filtered}/>
      <MessageInput selectedContact={selectedContact} messages={messages} setMessages={setMessages}/>
    </div>
  )
}

export default MessageBoxComponent;