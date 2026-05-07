"use client";
import React from "react";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import FAQdropdown from "@/components/FAQdropdown";
import Header from "@/components/Header";

const faqs = [
  {
    question: "How does the AI calling work?",
    answer:
      "When a customer calls your number, our AI agent picks up instantly. It uses advanced voice AI (GPT-4o) to understand natural speech, collect order details, and respond in a human-like voice — all in real time with no delays.",
  },
  {
    question: "Can I monitor call usage?",
    answer:
      "Yes! Your dashboard gives you real-time visibility into every call — duration, transcript, order details, AI minute usage, and more. You'll always know exactly what's happening.",
  },
  {
    question: "Does it support custom APIs?",
    answer:
      "Absolutely. Our Business and Enterprise plans include full REST API access. You can integrate VoiceAI with your existing POS, CRM, or any custom backend system.",
  },
  {
    question: "Can customers receive confirmation emails?",
    answer:
      "Yes — automatically. The moment an order is confirmed, VoiceAI sends a branded confirmation email to the customer with the full order summary, total amount, and estimated time.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never share your data with third parties. API keys are hashed and stored securely.",
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
