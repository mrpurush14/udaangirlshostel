import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  ExternalLink, 
  Calendar,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { HOSTEL_CONTACT, BRANCHES } from '../data/hostelData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickAction?: {
    type: 'whatsapp' | 'call' | 'book';
    label: string;
    url?: string;
  };
}

export const LiveChatWidget: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: "Namaste! Welcome to Udaan Girls' Hostel 👋 I'm your virtual admissions assistant. How can I help you today?",
      time: 'Just now'
    }
  ]);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const quickPrompts = [
    {
      label: '💰 Room Fees & Sharing',
      answer: 'Our all-inclusive fees start from ₹6,000/mo (4-sharing), ₹6,500/mo (triple sharing), ₹7,500/mo (double sharing), and ₹8,000/mo (single deluxe). All rates include 3 fresh daily meals (Breakfast, Lunch, Dinner), Wi-Fi, 100% power backup, and housekeeping with zero brokerage!'
    },
    {
      label: '🍲 Food Menu & Timings',
      answer: 'Our official mess serves nutritious homely meals: Aloo/Sattu Parathas, Kadhi Chawal, Rajma, Chicken/Paneer, Anda/Paneer, Kheer Puri, Khichdi Chokha, and Kela Kofta prepared with pure RO water and fresh vegetables!'
    },
    {
      label: '🔒 Gate Timings & Safety',
      answer: 'Safety is #1 at Udaan. Main gate closes strictly at 8:00 PM. We have 24x7 resident female wardens on-site, continuous CCTV surveillance, and strict no-male-visitor policies on resident floors.'
    },
    {
      label: '📍 Location & Allen Proximity',
      answer: 'Branch 1 (Om Enclave, Boring Road) is just 2–3 minutes walk from Allen Career Institute, Carrier Planner, and Atal Path! Branch 2 (North SK Puri) is next to Rahul Nursing Home and ideal for Patna Women\'s College.'
    },
    {
      label: '📅 Can I visit today?',
      answer: 'Yes! Guided room visits are open everyday from 9:00 AM to 7:30 PM. Parents and students are warmly welcome to inspect the rooms, kitchen, and facilities.'
    }
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Formulate automatic response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let botReply = "Thank you for reaching out! Our branch manager can assist you immediately on WhatsApp or call.";
      let action: Message['quickAction'] = {
        type: 'whatsapp',
        label: 'Chat on WhatsApp with Warden',
        url: `https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello, I was chatting on the website: ' + text)}`
      };

      if (lower.includes('fee') || lower.includes('price') || lower.includes('rent') || lower.includes('cost')) {
        botReply = "Our monthly fees range from ₹6,000 to ₹8,000 depending on single, double, triple, or 4-sharing (with AC or Non-AC options). All packages include 3 fresh daily meals, Wi-Fi, electricity backup, and laundry machine access!";
      } else if (lower.includes('food') || lower.includes('mess') || lower.includes('meal') || lower.includes('lunch') || lower.includes('dinner')) {
        botReply = "We provide 3 fresh, hygienic meals daily (Breakfast, Lunch, and Dinner) with special Sunday dishes and pure RO drinking water!";
      } else if (lower.includes('gate') || lower.includes('curfew') || lower.includes('time') || lower.includes('safe') || lower.includes('security')) {
        botReply = "Hostel gate closes at 8:00 PM. We have on-site female wardens, biometric logging, and 24x7 CCTV monitoring throughout the premises.";
      } else if (lower.includes('visit') || lower.includes('see') || lower.includes('book') || lower.includes('room')) {
        botReply = "You can schedule a visit today between 9:00 AM and 7:30 PM! Would you like to fill our booking form or connect on WhatsApp?";
        action = {
          type: 'book',
          label: 'Open Booking Form'
        };
      }

      const botMsg: Message = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickAction: action
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <aside aria-label="Admissions help desk" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#931c51] to-[#c72c68] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-[#931c51]/50 hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-amber-300/80"
          aria-label="Open Admissions Live Chat"
        >
          <div className="relative">
            <img
              src="/assets/aistudio/hostel_logo_d4e3810a.jpeg"
              alt="Live Chat"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-white"
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-[#931c51] rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#931c51] rounded-full"></span>
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold leading-tight flex items-center gap-1">
              Live Support Desk
            </span>
            <span className="text-[10px] text-rose-100 font-medium leading-none">
              Online • Ask Any Question
            </span>
          </div>

          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-1.5 bg-amber-400 text-stone-900 font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#931c51] to-[#c72c68] p-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/aistudio/hostel_logo_d4e3810a.jpeg"
                  alt="Udaan Hostel Desk"
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-300"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#931c51] rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight font-['Playfair_Display',serif]">
                  Udaan Girls' Hostel
                </h4>
                <p className="text-[11px] text-rose-100 font-medium flex items-center gap-1">
                  <span>Admissions & Warden Desk</span> • <span className="text-emerald-300">Online</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Strip */}
          <div className="bg-rose-50 px-3.5 py-1.5 text-[11px] text-[#931c51] font-semibold flex items-center justify-between border-b border-rose-100">
            <span>📍 Boring Road & North SK Puri, Patna</span>
            <a
              href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
              className="text-stone-700 hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#931c51]" /> {HOSTEL_CONTACT.primaryPhone}
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-stone-50/60 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#931c51] text-white rounded-br-xs shadow-xs'
                      : 'bg-white text-stone-800 border border-stone-200 rounded-bl-xs shadow-xs'
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Optional Quick Action button attached to bot reply */}
                  {m.quickAction && (
                    <div className="mt-2.5 pt-2 border-t border-stone-100">
                      {m.quickAction.type === 'whatsapp' ? (
                        <a
                          href={m.quickAction.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>{m.quickAction.label}</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenBooking();
                          }}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#931c51] hover:bg-[#7a1341] text-white text-[11px] font-bold py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{m.quickAction.label}</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-stone-400 mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Chips */}
          <div className="p-2.5 bg-white border-t border-stone-100 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleSend(q.label);
                }}
                className="whitespace-nowrap bg-stone-100 hover:bg-rose-50 hover:text-[#931c51] hover:border-rose-200 border border-stone-200 text-stone-700 text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors cursor-pointer"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question or query..."
              className="flex-1 text-xs bg-stone-100 border border-stone-200 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#931c51]"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              className="bg-[#931c51] hover:bg-[#7a1341] disabled:opacity-40 text-white p-2.5 rounded-xl transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </aside>
  );
};
