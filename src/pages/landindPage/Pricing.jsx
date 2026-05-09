import React, { useState } from "react";
import { Sparkles, Check, X } from "lucide-react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import ToggleButton from "@/components/ToogleButton";

const PlanCard = ({ plan, index, isAnnual }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative bg-gradient-to-b from-[#0B1120] to-[#111827] border  ${plan.isPopular ? "border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.15)]" : "border-[#272727]"} p-6 rounded-[28px] flex flex-col gap-6  transition-all group h-full`}
  >
    {plan.isPopular && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
        <div className="bg-[#0B1120] px-4 py-1 rounded-full border border-blue-600 text-white text-[13px] font-semibold whitespace-nowrap">
          Most Popular
        </div>
      </div>
    )}
    <div className="flex flex-col gap-5">
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-medium w-fit transition-colors ${plan.isPopular ? "bg-blue-600/10 text-blue-400 border border-blue-600/40" : "bg-[#1A1A1A] text-gray-300 border border-[#272727]"}`}
      >
        {plan.name}
        <Sparkles
          className={`w-3.5 h-3.5 ${plan.isPopular ? "text-blue-400" : "text-gray-400"}`}
        />
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="text-white text-[32px] font-bold tracking-tight">
          {plan.price}
        </span>
        <span className="text-gray-500 text-sm font-medium">/{isAnnual ? 'year' : 'month'}</span>
      </div>

      <p className="text-gray-400 text-[13px] leading-relaxed min-h-[40px]">
        {plan.description}
      </p>
    </div>

    <div className="flex flex-col gap-4 mt-2 mb-6">
      {plan.features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {feature.included ? (
            <Check className="w-4 h-4 text-blue-500/80" />
          ) : (
            <X className="w-4 h-4 text-gray-600" />
          )}
          <span
            className={`text-[13px] ${feature.included ? "text-gray-300" : "text-gray-600"}`}
          >
            {feature.text}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-auto">
      <button className="w-full py-2.5 rounded-lg border border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all">
        {plan.buttonText || "Upgrade plan"}
      </button>
    </div>
  </motion.div>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: isAnnual ? "$19.99" : "$1.99",
      description: "AI Smarter Support Essential",
      features: [
        { text: "500 min call time", included: true },
        { text: "1000 sms", included: true },
        { text: "Basic summary", included: true },
        { text: "Limited Access", included: true },
      ],
      buttonText: "Upgrade Plan",
    },
    {
      name: "Classic",
      price: isAnnual ? "$39.99" : "$3.99",
      description: "AI Smarter Support Classic",
      features: [
        { text: "1500 min call time", included: true },
        { text: "10000 sms", included: false },
        { text: "Call summary", included: true },
        { text: "Limited Access", included: true },
      ],
      buttonText: "Upgrade Plan",
    },
    {
      name: "Pro Plan",
      price: isAnnual ? "$99.99" : "$9.99",
      description: "AI Smarter Support grow Faster.",
      isPopular: true,
      features: [
        { text: "3000 min call time", included: true },
        { text: "Unlimited sms", included: true },
        { text: "Call summary", included: true },
        { text: "Full Access", included: true },
      ],
      buttonText: "Upgrade Plan",
    },
    {
      name: "Advanced",
      price: isAnnual ? "$199.99" : "$19.99",
      description: "AI Smarter Support Power User.",
      features: [
        { text: "5000 min call time", included: true },
        { text: "Unlimited sms", included: true },
        { text: "Advanced AI", included: true },
        { text: "Full Access", included: true },
      ],
      buttonText: "Upgrade Plan",
    },
    {
      name: "Enterprise",
      price: isAnnual ? "$499.99" : "$49.99",
      description: "AI Smarter Support for Business.",
      features: [
        { text: "Unlimited calls", included: true },
        { text: "Unlimited sms", included: true },
        { text: "Custom AI Model", included: true },
        { text: "Dedicated Support", included: true },
      ],
      buttonText: "Upgrade Plan",
    },
  ];

  return (
    <div id="pricing" className="py-15">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Header 
          titleText={`Simple, Transparent Pricing`}
          subtitleText={`Choose the plan that fits your business needs`}
          />
        </motion.div>

        <div className="flex justify-center mt-8">
          <div className="p-1.5">
            <ToggleButton isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} isAnnual={isAnnual} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
