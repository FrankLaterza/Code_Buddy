import './Chat.css';
import React, { useState } from 'react';

function Chat()  {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Create a new message object
    const newMessage = {
      text: inputText,
      user: 'Yo', // You can customize this based on the sender
    };

    // Update the messages state
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === 'You' ? 'user' : 'other'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
