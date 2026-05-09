"use client";
import React from "react";

import { motion } from "framer-motion";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import { RiSparklingFill } from "react-icons/ri";
import Container from "@/components/Container";
// import { Container } from "lucide-react";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative  bg-linear-to-t from-[#59168B]/40 via-[#02060F] to-[#59168B]/20 overflow-hidden flex items-center py-20 min-h-screen"
    >
      <Container>
        <div className=" grid md:grid-cols-2 gap-5   items-center ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start gap-6 "
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-[#AD46FF]/10 backdrop-blur-sm "
            >
              <span className="text-sm font-inter font-medium text-purple-300 flex items-center gap-2 ">
                <RiSparklingFill className="text-[#AD46FF] w-5 h-5" />
                AI-Powered Voice Automation
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold  leading-[1.1] font-inter text-center md:text-start text-white flex flex-col">
              AI That Answers Calls
              <span className=" bg-gradient-to-l from-[#9810FA]  to-[#C27AFF] bg-clip-text text-transparent">& Takes Orders Automatically</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[#99A1AF]  font-inter text-center md:text-start">
              Never miss a customer call again. Our AI agent answers calls,
              talks with customers, collects orders, and sends confirmation
              emails automatically.
            </p>

            {/* Buttons */}
            <div className="flex  items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-2 md:px-8 py-4 bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] rounded-full text-white border border-[#0F42FF] font-medium font-inter text-base flex items-center gap-2  hover:shadow-[#0E41FE]/70 transition-all"
              >
                Start Free Trial
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="px-2 md:px-8 py-4 border border-white/10 rounded-full text-white font-medium text-base flex items-center gap-3 backdrop-blur-sm transition-all"
              >
                <div className="w-7 h-7  flex items-center justify-center">
                  <FiPlay className="text-white" />
                </div>
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Video Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=""
          >
            <div className="relative w-full backdrop-blur-2xl shadow-2xl overflow-hidden flex items-center justify-end">
              <video
                src="/Banner.mp4"
                autoPlay
                loop
                muted
                playsInline
                className=" object-cover rounded-2xl "
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
