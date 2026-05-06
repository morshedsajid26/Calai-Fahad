import React from 'react';
import { Icon } from '@iconify/react';
import CallDuration from '../../components/CallDuration';
import OverallReports from '../../components/OverallReports';

let StatCard = ({ title, value, icon, iconBg = "bg-[#262626]", trend, trendText }) => {
  return (
    <div className="relative overflow-hidden bg-[#18181A] rounded-2xl p-3 border border-gray-800/50 flex flex-col h-full ">
      {/* Header */}
      <div className="flex items-center gap-3 relative z-10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}>
          <Icon icon={icon} className="text-white text-lg" />
        </div>
        <span className="text-[15px] font-medium text-gray-200">{title}</span>
      </div>

      {/* Value */}
      <div className="mt-5 mb-5 relative z-10">
        <h3 className="text-xl font-bold text-white">{value}</h3>
      </div>

      {/* Trend */}
      <div className="flex items-center justify-between mt-auto text-[11px] text-gray-400 relative z-10">
        <span className="flex items-center gap-1 font-medium">
          {trend} <Icon icon="lucide:arrow-up-right" className="text-[10px]" />
        </span>
        <span className="font-medium">{trendText}</span>
      </div>

      {/* Background Sparkline */}
      <div className="absolut bottom-0 left-0 w-full h-17 pointer-events-none opacity-80">
        <svg viewBox="0 0 200 50" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id={`gradient-${title.replace(/\s+/g, '-')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,45 C30,45 40,15 65,15 C90,15 100,40 130,40 C155,40 170,20 185,20 C195,20 198,30 200,30 L200,50 L0,50 Z" 
            fill={`url(#gradient-${title.replace(/\s+/g, '-')})`} 
          />
          <path 
            d="M0,45 C30,45 40,15 65,15 C90,15 100,40 130,40 C155,40 170,20 185,20 C195,20 198,30 200,30" 
            fill="none" 
            stroke="#0F42FF" 
            strokeWidth="2" 
          />
        </svg>
      </div>
    </div>
  );
}


export default function Dashboard() {
  
  const statsData = [
    {
      title: "Total Call Duration",
      value: "12 hr 45 min",
      icon: "lucide:phone-call",
      iconBg: "bg-[#2563EB]",
      trend: "+5.09%",
      trendText: "+1.4 this week"
    },
    {
      title: "Today Total Call",
      value: "Call 50",
      icon: "lucide:phone-incoming",
      iconBg: "bg-[#262626]",
      trend: "+5.09%",
      trendText: "+1.4 this week"
    },
    {
      title: "Call Drop Rate",
      value: "Drop Call 50",
      icon: "lucide:phone-off",
      iconBg: "bg-[#262626]",
      trend: "+5.09%",
      trendText: "+1.4 this week"
    },
    {
      title: "Total Message",
      value: "100 Message",
      icon: "lucide:message-square",
      iconBg: "bg-[#262626]",
      trend: "+5.09%",
      trendText: "+1.4 this week"
    }
  ];
  return (
    <div>
     
     <div className="grid grid-cols-12 gap-5">
      {statsData.map((stat, index) => (
        <div key={index} className="col-span-12 md:col-span-6 xl:col-span-3">
          <StatCard {...stat} />
        </div>
      ))}

      <div className="col-span-12 md:col-span-12 lg:col-span-8">
        < CallDuration />
      </div>

      <div className="col-span-12 md:col-span-12 lg:col-span-4">
        <OverallReports/>
      </div>

     </div>
    </div>
  );
}
