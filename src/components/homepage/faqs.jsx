import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Do you ship internationally?", answer: "At the moment we only ship to the USA." },
    { question: "Why do I need an account to view the site?", answer: "This is to help ensure that all researchers who are browsing on our site are authorized researchers. This helps us to maintain compliance." },
    { question: "How long do orders take to arrive?", answer: "Orders typically ship the same day and take 3–5 business days to arrive, depending on the courier." },
     {
    question:
      "I think my package may be lost, or I'm having an order issue, what should I do?",
    answer: (
      <>
        Please contact our service team at{" "}
        <a
          href="mailto:cs@modernaminos.com"
          className="text-red-500 font-medium hover:underline"
        >
          cs@modernaminos.com
        </a>{" "}
        with your full name, order #, and issue with as much description as possible so that they may assist.
      </>
    ),
  }, ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center px-4 py-20 pt-14 bg-[#f6f4ff]"> {/* Light background from image */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        
        {/* Blue Pill Label */}
        <div className="bg-[#12608E] text-white px-6 py-1 rounded-full text-lg font-medium mb-6">
          Frequently Asked Questions
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#081f2d] mb-6">
          Need Help?
        </h2>

        {/* FAQ Container with Dark Header */}
        <div className="w-full bg-white rounded-[2rem] overflow-hidden shadow-sm">
          {/* Section Header */}
          <div className="bg-[#081f2d] text-white py-4 text-center font-bold tracking-widest text-sm uppercase">
            General Questions
          </div>

          {/* Accordion List */}
         <div className="p-6 md:p-8 space-y-3">
  {faqs.map((faq, index) => {
    const isActive = activeIndex === index;

    return (
      <div key={index} className="w-full overflow-hidden">
        
        {/* Question */}
        <button
          onClick={() => toggleFAQ(index)}
          className={`w-full flex justify-between items-center px-6 py-3 text-left transition-all duration-300
          ${isActive ? "bg-white text-[#081f2d] rounded-3xl border-[#081f2d]  border-[1.5px]" : "bg-[#0a2536] text-white rounded-3xl hover:bg-[#0c2a3d]"}`}
        >
          <span className="text-lg font-normal">
            {faq.question}
          </span>

          {/* Icon */}
          <div
            className={`w-[13px] h-[13px] p-1 flex items-center justify-center rounded-full font-bold text-sm leading-none transition-all duration-300
            ${isActive ? "bg-[#081f2d] text-white" : "bg-white  text-[#081f2d]"}`}
          >
            {isActive ? "−" : "+"}
          </div>
        </button>

        {/* Answer (Smooth animation) */}
        <div
          className={`transition-all duration-1000 ease-in-out overflow-hidden
          ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-8 py-5 bg-white text-[#0c2a3d] rounded-b-[2rem] ">
            {faq.answer}
          </div>
        </div>

      </div>
    );
  })}
</div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;