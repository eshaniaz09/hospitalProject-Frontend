"use client";
import { useState } from 'react';
import { motion } from 'framer-motion'; // For animation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello there! 👋 It's nice to meet you!💖", sender: "bot" },
    { id: 2, text: "What brings you here today? Please use the navigation below or ask me anything about the hospital services. 👇", sender: "bot" }
  ]);
  const [userMessage, setUserMessage] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setMessages([...messages, { id: Date.now(), text: userMessage, sender: "user" }]);
      setUserMessage(""); // Clear input after sending
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 overflow-hidden z-50">
      {/* Chatbot Icon */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 100 : 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-blue-800 rounded-full p-6 cursor-pointer shadow-lg ${isOpen ? 'pointer-events-none' : ''}`}
        onClick={toggleChatbot}
      >
        <FontAwesomeIcon icon={faCommentDots} size="2x" className="text-white" />
      </motion.div>

      {/* Chatbox */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-t-lg shadow-lg p-4 w-80 md:w-96 h-[32rem] md:h-[36rem] fixed bottom-3 right-3 transform ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <FontAwesomeIcon icon={faCommentDots} size="2x" className="text-blue-800" />
            <h2 className="text-lg text-blue-800 font-semibold">Delta Dev Chatbot</h2>
          </div>
          <button onClick={toggleChatbot} className="text-red-500">
            <FontAwesomeIcon icon={faCircleXmark} size="2x" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="mt-3 flex flex-col h-[22rem] md:h-[26rem] bg-gray-100 p-4 rounded-lg overflow-y-auto">
          <h6 className="text-blue-800 font-bold flex items-center gap-2">
            <FontAwesomeIcon icon={faCommentDots} size="lg" className="text-blue-800" /> Chatbot
          </h6>
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-2 my-2 rounded-lg ${message.sender === 'bot' ? 'bg-blue-100 text-gray-700' : 'bg-purple-300 text-blue-800 '} self-${message.sender === 'user' ? 'end' : 'start'}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="mt-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message here..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow p-2 border border-gray-300 rounded-lg"
          />
          {/* Send button appears when user starts typing */}
          {userMessage && (
            <button onClick={handleSendMessage} className="text-blue-800 hover:text-blue-600">
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            </button>
          )}
        </div>

        {/* Powered By @deltaDev in the bottom-right corner within the chatbox */}
        <div className="absolute bottom-3 right-[6rem] text-right font-semibold text-gray-700">
          powered by <span className="text-blue-700">@deltaDev</span>
        </div>
      </motion.div>
    </div>
  );
}  