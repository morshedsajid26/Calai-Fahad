import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Receipt, Activity, Clock } from "lucide-react";
import Header from "@/components/Header";
import Container from "@/components/Container";

const statsData = [
  {
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    value: "50K+",
    label: "Calls Managed",
    bg: "bg-[#9810FA]", // Purple
  },
  {
    icon: <Receipt className="w-6 h-6 text-white" />,
    value: "10K+",
    label: "Orders Processed",
    bg: "bg-[#3B82F6]", // Blue
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    value: "99.9%",
    label: "Uptime",
    bg: "bg-[#06B6D4]", // Teal
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    value: "24/7",
    label: "AI Support",
    bg: "bg-[#6366F1]", // Indigo
  },
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gradient-to-b from-[#B5B9FF]/30 to-[#2B2C49]/50 border border-[#0F42FF]/40 p-6 rounded-[20px] flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-lg"
  >
    <div className={`${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-2 shadow-md`}>
      {stat.icon}
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-white font-inter text-3xl font-bold tracking-tight">
        {stat.value}
      </h3>
      <p className="text-[#B4B6C9] font-inter text-[15px]">
        {stat.label}
      </p>
    </div>
  </motion.div>
);

const Stats = () => {
  return (
    <section  id="feature" className="py-20 relative bg-linear-to-b from-[#59168B]/20 via-[#1C398E]/20 to-[#271436]/20">
      <Container>
        <div className="mb-14">
          <Header
            titleText="Trusted by Modern Businesses"
            subtitleText="Join thousands of businesses automating their customer calls"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;