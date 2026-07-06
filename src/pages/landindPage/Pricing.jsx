import React from "react";
import { Sparkles, Check, X, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const PlanCard = ({ plan, index }) => {
  const isPopular = plan.name?.toLowerCase() === "pro" || plan.isPopular;
  const priceValue = plan.priceMonthly;
  const priceDisplay =
    priceValue !== undefined ? `${priceValue}` : plan.price || "0";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-gradient-to-b from-[#0B1120] to-[#111827] border  ${isPopular ? "border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.15)]" : "border-[#272727]"} p-6 rounded-[28px] flex flex-col gap-6  transition-all group h-full`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="bg-[#0B1120] px-4 py-1 rounded-full border border-blue-600 text-white text-[13px] font-semibold whitespace-nowrap">
            Most Popular
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-medium w-fit transition-colors ${isPopular ? "bg-blue-600/10 text-blue-400 border border-blue-600/40" : "bg-[#1A1A1A] text-gray-300 border border-[#272727]"}`}
        >
          {plan.name}
          <Sparkles
            className={`w-3.5 h-3.5 ${isPopular ? "text-blue-400" : "text-gray-400"}`}
          />
        </div>

        <div className="flex items-baseline gap-1.5">
          <span className="text-white text-[32px] font-bold tracking-tight">
            £{priceDisplay}
          </span>
          <span className="text-gray-500 text-sm font-medium">/month</span>
        </div>

        <p className="text-gray-400 text-[13px] leading-relaxed min-h-[40px]">
          {plan.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-2 mb-6">
        {plan.features?.map((feature, idx) => {
          const text = typeof feature === "string" ? feature : feature.text;
          const included =
            typeof feature === "string" ? true : feature.included;
          return (
            <div key={idx} className="flex items-center gap-3">
              {included ? (
                <Check className="w-4 h-4 text-blue-500/80 shrink-0 mt-0.5" />
              ) : (
                <X className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
              )}
              <span
                className={`text-[13px] leading-tight ${included ? "text-gray-300" : "text-gray-600"}`}
              >
                {text}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-auto">
        <button className="w-full py-2.5 rounded-lg border border-[#0F42FF] bg-linear-to-t from-[#00135B] via-[#02060F] to-[#00104E] text-sm text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all cursor-pointer">
          {plan.buttonText || "Upgrade plan"}
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const axiosPublic = useAxiosPublic();
  const { data: plansResponse, isLoading } = useQuery({
    queryKey: ["publicPlans"],
    queryFn: async () => {
      const res = await axiosPublic.get("/free-route/plans");
      return res.data;
    },
  });

  const plans = plansResponse?.data || [];

  return (
    <div id="pricing" className="py-15">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <Header
            titleText={`Simple, Transparent Pricing`}
            subtitleText={`Choose the plan that fits your business needs`}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10 justify-center">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-12">
              <Loader2 className="animate-spin text-[#0F42FF] w-8 h-8" />
            </div>
          ) : plans.length > 0 ? (
            plans.map((plan, index) => (
              <PlanCard key={plan.id || index} plan={plan} index={index} />
            ))
          ) : (
            <div className="col-span-full flex justify-center py-12">
              <span className="text-gray-400">
                No plans available right now.
              </span>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
