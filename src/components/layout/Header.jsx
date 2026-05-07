import { FiMenu } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import Image from "../Image";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Header({ onMenuClick }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const role = localStorage.getItem("role") || "owner";

  return (
    <header className="bg-[#141416] flex items-center px-6 py-3.5 relative">
      <button
        onClick={onMenuClick}
        className="2xl:hidden p-2 rounded bg-[#2563EB] text-white cursor-pointer"
      >
        <FiMenu size={22} />
      </button>

      <div className="flex items-center justify-between w-full">

        {/* <div className="  hidden md:block relative ">

          <input
            type="text"
            placeholder="Search..."
            className="px-10 py-2.5 rounded-full border border-[#E2E8F0] outline-none  focus:ring-[#2563EB] w-[450px] text-[#64748B] placeholder:text-[#64748B]"
          />

          <FaSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-[#64748B]"/>
        </div> */}
        <div className="flex items-center gap-4">
            <h3 className="text-4xl font-medium">
                Welcome to Calai
            </h3>

            <Image
              src="/Hand.png"
              alt="hand"
              className="w-10 h-10 rounded-full object-cover"
            />
        </div>



        <div className="flex items-center ml-auto gap-4">
          {/* Notification Button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1C2242] hover:bg-[#252C55] transition-colors">
            <IoIosNotificationsOutline className="w-6 h-6 text-white" />
          </button>

          {/* Language Selector */}
          {/* <button className="flex items-center gap-2 px-3 h-10 rounded-full bg-[#1C2242] hover:bg-[#252C55] transition-colors text-white">
            <Icon icon="circle-flags:uk" className="w-6 h-6 rounded-full" />
            <span className="text-sm font-medium font-montserrat">Eng</span>
            <FaAngleDown className="w-3.5 h-3.5" />
          </button> */}

          {/* Profile Section */}
          <div className="relative ml-2">
            <div
              className="relative cursor-pointer"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <Image
                src="/logo.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#4ADE80] border-2 border-[#141416] rounded-full"></span>
            </div>

            {/* Dropdown */}
            {openDropdown && (
              <div className="absolute w-48 right-0 mt-3 p-2 bg-white rounded-lg shadow-xl border border-[#A0A0A0] z-50">
                <Link to={role === "admin" ? "/admin/settings" : "/owner/settings"} onClick={() => setOpenDropdown(false)}>
                  <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-[#0A0A0A] hover:bg-[#2D468A] hover:text-white transition cursor-pointer">
                    <Icon icon="material-symbols:settings" width="20" />
                    <span className="font-montserrat text-sm font-medium">Settings</span>
                  </button>
                </Link>

                <Link 
                to={"/auth/login"}
                onClick={() => setOpenDropdown(false)}  >


                <button
                 
                  className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-[#E7000B] hover:bg-[#2D468A] hover:text-white transition cursor-pointer"
                >
                  <Icon icon="material-symbols:logout" width="20" />
                  <span className="font-montserrat text-sm font-medium">Log Out</span>
                </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
