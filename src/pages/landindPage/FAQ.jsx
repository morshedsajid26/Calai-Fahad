"use client";
import React from "react";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import FAQdropdown from "@/components/FAQdropdown";
import Header from "@/components/Header";

const faqs = [
  {
    question: "How does the AI work?",
    answer:
      "Our AI is powered by advanced GPT-4 technology, trained specifically for business operations. It understands natural language, maintains context across conversations, and learns from your business rules to provide accurate responses and take appropriate actions like creating quotes, scheduling bookings, and updating your CRM.",
  },
  {
    question: "Can I customize the AI responses?",
    answer:
      "Yes! You have full control over how AI responds. You can set custom response templates, define business rules, configure pricing logic, and train the AI on your specific products and services. The AI adapts to your brand voice and business processes.",
  },
  {
    question: "How fast is the setup process?",
    answer:
      "Most businesses are fully operational within 5–10 minutes. Simply connect your communication channels (WhatsApp, SMS, etc.), configure your basic business rules, and the AI is ready to handle customer conversations. Our team provides free migration support if you need help.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "We support all major communication channels: WhatsApp Business, SMS, Facebook Messenger, Instagram DM, Telegram, web chat widget, and email. All conversations appear in one unified inbox, and AI responds across all channels automatically.",
  },
  {
    question: "What happens if the AI doesn't understand something?",
    answer:
      "The AI is designed to handle complex conversations, but if it encounters something it can't answer, it will automatically escalate to your team. You can also set up custom fallback responses and specify when human intervention is needed.",
  },
  
];

const FAQ = () => {
  return (
    <section id="faq" className="py-10 bg-black">
      <Container>
        <div className="flex flex-col items-center">
          <Header
            titleText="FAQ"
            subtitleText="Everything you need to know about Calai"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="mt-8 w-full flex flex-col gap-2"
          >
            {faqs.map((faq, index) => (
              <FAQdropdown
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
