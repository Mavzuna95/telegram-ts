import { Message } from '../../../types/types'
import './messagelist.css'
const MessageList = ({ filtered }:{filtered: Message[]}) => {
  return (
    <div className='message-list'>
      { filtered &&
       filtered.map((filmassage) => {
        return (
          <div key={Math.random()} className='massage-name'>             
            <h5 className='content'>
              {filmassage.content}
            </h5>
          </div>
        )
      })}
    </div>
  )
}

export default MessageList