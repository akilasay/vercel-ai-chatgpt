"use client";
import { useChat } from "ai/react";
import GPTLogo from "./components/GPTLogo";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages);

  return (
 <div>
  <div>akLOGO</div>

    <div className="pt-4 pb-32">

    {messages.map(message => (
      <div key={message.id} 
                className={`border-t border-black/10 ${
          message.role === "assistant" && "bg-gray-100"
        }`}>
        <div className="max-w-3xl mx-auto py-6 flex ">
        {message.role === "assistant" && <GPTLogo />}
          <span className="ml-3">{message.content}</span>
        </div>
      </div>
    ))}

    <form className="fixed inset-x-0 bottom-10" onSubmit={handleSubmit}>
      <input 
      className="max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offser-background"
      placeholder="Send a message" value={input}
      onChange={handleInputChange}/>
    </form>
    </div>
 </div>
  

   
  )
}
