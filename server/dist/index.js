"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const cors = require('cors');
// const { create } = require('domain');
const port = 3006;
var LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');
app.use(cors());
app.use(express.json());
let contacts = [];
const contact = JSON.parse(localStorage.getItem("contacts") || '');
if (contact) {
    contacts = contact;
}
let message = [];
const messages = JSON.parse(localStorage.getItem("message") || '');
if (messages) {
    message = messages;
}
app.get('/contacts', (req, res) => {
    res.send(contacts);
});
app.get("/messages", (req, res) => {
    res.send((message));
});
app.post('/new-message', (req, res) => {
    message.push(req.body);
    localStorage.setItem('message', JSON.stringify(message));
    res.send(JSON.stringify("message"));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
