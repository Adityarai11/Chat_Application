import React, { useEffect, useState } from 'react';
import axios from "axios";

const ChatPages = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chat");
      setChats(data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <h2>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat._id}>
            {chat.isGroupChat ? (
              <strong>Group:</strong>
            ) : (
              <strong>User:</strong>
            )}{" "}
            {chat.chatName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPages;
