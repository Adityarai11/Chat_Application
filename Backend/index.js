
import express from "express";
import dotenv from "dotenv";

import { chats } from "./data/data.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Chat server is running!");
});
app.get('/api/chat', (req, res) => {
    res.send(chats)
})
app.get('/api/chat/:id', (req, res) => {
    //console.log(req);
    const singleChat = chats.find((c) => c._id === req.params.id);
    
    res.send(singleChat)
})

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
