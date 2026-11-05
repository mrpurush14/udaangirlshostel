import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { FAQS, HOSTEL_CONTACT } from '../data/hostelData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-[#931c51] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Clear answers to everything parents and residents ask before joining Udaan Girls' Hostel.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-stone-50/70 border border-stone-200/90 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-[#931c51] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-rose-100 border-rose-300 text-[#931c51]' : 'text-stone-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/50 bg-white/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-rose-50/80 rounded-2xl p-6 border border-rose-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-stone-900">
              Still have a specific query or custom request?
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Our warden and branch manager are just a phone call away.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${HOSTEL_CONTACT.primaryPhone}`}
              className="inline-flex items-center gap-1.5 bg-[#931c51] hover:bg-[#7a1341] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${HOSTEL_CONTACT.whatsappNumber}?text=Hi%2C%20I%20have%20a%20question%20about%20Udaan%20Girls%20Hostel`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
