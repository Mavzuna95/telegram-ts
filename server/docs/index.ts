const express = require('express')
const app = express()
const cors = require('cors');
// const { create } = require('domain');
const port = 3006
import { Request,Response } from "express";
var LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


app.use(cors())
app.use(express.json())


//TELEGRAM
type Contact = {
    id: number;
    name: string;
    lastname: string;
    img:string;
}
let contacts: Contact[] = [];
const contact: Contact[] | undefined = JSON.parse(localStorage.getItem("contacts")||'')

if (contact) {
    contacts = contact;
}
type Message = {
    id: number;
    recieverId:  number;
    senderId: number;
    content: string;
}
let message:Message[] = [];
const messages:Message[] | undefined = JSON.parse(localStorage.getItem("message") || '')
if (messages) {
    message = messages
}

app.get('/contacts', (req: Request, res:Response) => {
  res.send(contacts)
})


app.get("/messages", (req:Request, res:Response) => {
    res.send((message))
}) 

app.post('/new-message', (req:Request, res:Response) => {
    message.push(req.body)
    localStorage.setItem('message', JSON.stringify(message));
    res.send(JSON.stringify("message"))
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }
   )