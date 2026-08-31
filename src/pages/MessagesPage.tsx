import { useState, useEffect, useRef } from "react"
import { initialMessages } from "../types"
import type { Message } from "../types"

const getHostReply = (guestMessage: string): string => {
  const message = guestMessage.toLowerCase()

  if (message.includes("terrace") || message.includes("garden")) {
    return "Yes, the terrace is open all evening — feel free to enjoy it whenever you like!"
  }

  if (message.includes("check-in") || message.includes("arrive")) {
    return "Check-in is from 15:00 — ring the brass bell by the blue door when you arrive."
  }

  if (message.includes("wifi") || message.includes("password")) {
    return "The Wi-Fi network is 'Le Soleil · Guest' — you'll find the password on your Wifi info card."
  }

  if (message.includes("breakfast")) {
    return "Breakfast is served 8–10:30 on the terrace. Let me know if you have any dietary notes!"
  }

  if (message.includes("thank")) {
    return "You're so welcome, Lucia. Looking forward to having you!"
  }

  return "Thanks for your message! I'll get back to you personally soon."
}

const MessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chatMessages")
    return saved ? JSON.parse(saved) : initialMessages
  })

  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages, isTyping])

  const handleSend = (text?: string) => {
    const messageToSend = text ?? inputText

    if (messageToSend.trim() === "" || isTyping) return

    const guestMessage: Message = {
      id: crypto.randomUUID(),
      sender: "guest",
      text: messageToSend,
      timestamp: "Just now",
    }

    setMessages((prev) => [...prev, guestMessage])
    setInputText("")
    setIsTyping(true)

    setTimeout(() => {
      const hostMessage: Message = {
        id: crypto.randomUUID(),
        sender: "host",
        text: getHostReply(messageToSend),
        timestamp: "Just now",
      }

      setMessages((prev) => [...prev, hostMessage])
      setIsTyping(false)
    }, 1500)
  }

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
  }, [messages])

  const quickMessages = [
    "What time is check-in?",
    "What is the Wi-Fi password?",
    "What time is breakfast?",
    "Can I use the terrace?",
  ]

  const handleClearChat = () => {
    setMessages(initialMessages)
    localStorage.removeItem("chatMessages")
  }

  return (
    <div className="flex flex-col gap-3 px-1 sm:px-0">
      <div className="mb-6">
  <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">Messages</p>
  <h1 className="font-fraunces text-2xl text-neutral-900 mt-1">A note to your host.</h1>
      </div>
      
      {/* Messages */}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "guest"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`max-w-[85%] wrap-break-word rounded-2xl px-4 py-2 sm:max-w-xs ${
              message.sender === "guest"
                ? "bg-terracotta-600 text-neutral-100"
                : "bg-neutral-100 text-neutral-800"
            }`}
          >
            <p className="font-dm-sans text-sm leading-relaxed">
              {message.text}
            </p>

            <p className="mt-1 text-right font-dm-mono text-[10px] opacity-70">
              {message.timestamp}
            </p>
          </div>
        </div>
      ))}

      {/* Bottom section */}
      <div className="mt-4 space-y-3">
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="rounded-2xl bg-neutral-100 px-4 py-3">
              <p className="font-dm-mono text-xs text-neutral-500">
                Maison Soleil is typing...
              </p>
            </div>
          </div>
        )}

        {/* Quick messages */}
        <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
          {quickMessages.map((message) => (
            <button
              key={message}
              onClick={() => handleSend(message)}
              disabled={isTyping}
              className="shrink-0 rounded-full border border-neutral-300 px-3 py-1.5 font-dm-sans text-xs text-neutral-600 transition hover:border-terracotta-600 hover:text-terracotta-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {message}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend()
              }
            }}
            placeholder="Type a message..."
            disabled={isTyping}
            className="min-w-0 flex-1 rounded-full border border-neutral-300 px-4 py-2 font-dm-sans text-sm outline-none focus:border-terracotta-600 disabled:bg-neutral-50"
          />

          <button
            onClick={() => handleSend()}
            disabled={inputText.trim() === "" || isTyping}
            className="shrink-0 rounded-full bg-terracotta-600 px-4 py-2 font-dm-sans text-sm text-neutral-50 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5"
          >
            Send
          </button>
        </div>

        {/* Reset */}
        <div className="flex justify-center sm:justify-start">
          <button
            onClick={handleClearChat}
            className="font-dm-mono text-xs uppercase tracking-widest text-neutral-500 transition hover:text-terracotta-600"
          >
            Reset conversation
          </button>
        </div>
      </div>

      <div ref={bottomRef} />
    </div>
  )
}

export default MessagesPage