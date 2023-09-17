import './Chat.css';
import React, { useState, useEffect } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

function Chat() {
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

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSendMessage();
      }
    };

    // Attach the Enter key listener to the document
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleSendMessage]); // Add handleSendMessage to the dependency array

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message, index) => (

          <div style={ (message.user === "You") ? {display: "flex", justifyContent: "flex-end"} : {display: "flex", justifyContent: "flex-  start"}}>
            <div
              key={index}
              className={`message ${message.user === 'You' ? 'user' : 'other'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          className="Input"
          type="text"
          placeholder="Talk to me..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage} className="butt">
          <AiOutlineSend />
        </button>
      </div>
      {/* <button onClick={sendMessageGpt}>GPT</button> */}
    </div>
  );
}

export default Chat;


