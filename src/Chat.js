import './Chat.css';
import React, { useState } from 'react';
import {AiOutlineSend} from 'react-icons/ai'



function Chat()  {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [borderDimensions, setBorderDimensions] = useState({width: 0, height: 0});

const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");

// Add an event listener to the input field
inputField.addEventListener("keydown", function(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === "Enter") {
    // Prevent the default behavior of the Enter key (e.g., form submission)
    event.preventDefault();

    // Trigger a click event on the button
    submitButton.click();
  }
});

  const handleInputChange = (e) => {
    const newText = e.target.value
    setInputText(newText);

    const textInput = document.getElementsByClassName('message');
    setBorderDimensions({
      width: textInput.scrollWidth,
      height: textInput.scrollHeight
    });
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
          className = "Input"
          type="text"
          placeholder="Talk to me..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}
          className = "butt"
        ><AiOutlineSend/></button>
      </div>
    </div>
  );
};

export default Chat;
