import './Chat.css';
import React, { useState } from 'react';
import chatRequest from './apis/gpt';

function Chat()  {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  function handleInputChange(e) {
    setInputText(e.target.value);
  };

  function handleSendMessage() {
    if (inputText.trim() === '') return;

    // Create a new message object
    const newMessage = {
      text: inputText,
      user: 'You',
    };

    // Update the messages state
    setMessages([...messages, newMessage]);

    chatRequest(inputText, messages, setMessages);
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
          placeholder="Talk to me..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {/* <button onClick={sendMessageGpt}>GPT</button> */}
    </div>
  );
};

export default Chat;
