import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Bonjour, je suis MedAssist, votre assistant médical virtuel basé sur l'IA. Quels symptômes souhaitez-vous décrire ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('  https://c3ce-196-74-52-186.ngrok-free.app/diagnostiquer-llm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue })
      });

      const data = await response.json();
      const botReply = data.reponse?.trim() || "❌ Réponse vide ou non comprise.";

      const botMessage: Message = {
        id: Date.now().toString(),
        content: botReply,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: "❌ Erreur : impossible de contacter le serveur IA.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Bot className="w-6 h-6 text-medical-blue-500" />
        AkditalAI - Assistant IA
      </div>

      <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 overflow-y-auto mb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-medical-blue-100 ml-2' : 'bg-medical-green-100 mr-2'}`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-medical-blue-600" />
                  ) : (
                    <Bot className="w-4 h-4 text-medical-green-600" />
                  )}
                </div>
                <div>
                  <div className={`rounded-2xl px-4 py-2 ${message.sender === 'user' ? 'bg-medical-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-medical-green-100 flex items-center justify-center flex-shrink-0 mr-2">
                  <Bot className="w-4 h-4 text-medical-green-600" />
                </div>
                <div className="rounded-2xl px-4 py-2 bg-gray-100">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 text-medical-blue-500 animate-spin" />
                    <span className="text-gray-800">AkditalAI réfléchit...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
        <div className="flex items-end gap-2">
          <div className="relative flex-1">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={handleTextareaChange}
              placeholder="Décrivez les symptômes du patient ici..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue-500 bg-white text-gray-900 resize-none min-h-[50px] max-h-[120px]"
              rows={1}
              disabled={isLoading}
            />
            <div className="absolute right-3 bottom-3 flex items-center">
              <Sparkles className="w-5 h-5 text-medical-blue-400" />
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === '' || isLoading}
            className={`p-3 rounded-lg ${
              inputValue.trim() === '' || isLoading
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-medical-blue-600 text-white hover:bg-medical-blue-700 transition-colors'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
