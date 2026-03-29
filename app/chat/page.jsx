"use client"

import { useState } from "react"

export default function ChatPage() {

  const [messages, setMessages] = useState([
    { text: "Hello 👋", sender: "other" },
    { text: "Hi! How are you?", sender: "me" }
  ])

  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return

    setMessages([...messages, { text: input, sender: "me" }])
    setInput("")
  }

  return (
    <div className="chat-container">

      {/* Header */}
      <div className="chat-header">
        <h3>Course Chat</h3>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.sender === "me"
                ? "message message-me"
                : "message message-other"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>

    </div>
  )
}