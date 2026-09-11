import React, { useState } from "react";
import { FiPhone, FiMapPin, FiMenu, FiX } from "react-icons/fi";
import dbbllogo from "../../public/images (1).jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#006B32] hidden md:block text-white text-sm">
        <div className="max-w-7xl mx-auto px-5 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <FiMapPin />
            <span>মৌলভীর চর, দেওয়ানগঞ্জ, জামালপুর</span>
          </div>

          <div className="flex items-center gap-2">
            <FiPhone />
            <span>
              সেবা সময়: সকাল ৮টা - রাত ৮টা | বিরতি: দুপুর ১২:৩০ - ২:০০
            </span>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-4">
            <img
              src={dbbllogo}
              alt="DBBL Logo"
              className="w-16 h-16 object-contain"
            />

            <div className="border-l pl-4 border-gray-300">
              <h1 className="text-xl md:text-2xl font-bold text-[#006B32]">
                রাফিয়া এন্টারপ্রাইজ
              </h1>

              <p className="text-sm text-gray-500">
                DBBL এজেন্ট ব্যাংকিং আউটলেট
              </p>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <li>
              <Link to={"/"} className="hover:text-[#00843D] transition">
                হোম
              </Link>
            </li>

            <li>
              <a href="#about" className="hover:text-[#00843D] transition">
                আমাদের সম্পর্কে
              </a>
            </li>

            <li>
              <Link to={"/services"} href="#services" className="hover:text-[#00843D] transition">
                সেবা সমূহ
              </Link>
            </li>

            <li>
              <Link to={"/contact"} className="hover:text-[#00843D] transition">
                যোগাযোগ
              </Link>
            </li>
          </ul>

          <Link to={"/AccountOpen"}
            className="
            hidden md:block
            bg-[#00843D]
            hover:bg-[#006B32]
            text-white
            px-6
            py-3
            rounded-full
            font-semibold
            transition
            shadow-md
            "
          >
            একাউন্ট খুলুন
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-[#006B32]"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden px-5 pb-5">
            <ul className="space-y-4 text-gray-700 font-medium">
              <li>
                <a href="#home">হোম</a>
              </li>

              <li>
                <a href="#about">আমাদের সম্পর্কে</a>
              </li>

              <li>
                <Link to={"/services"} >সেবা সমূহ</Link>
              </li>

              <li>

                <Link to={"/contact"} >যোগাযোগ</Link>
              </li>
            </ul>

            <Link to={"/AccountOpen"}
              className="
                mt-5
                w-full
                bg-[#00843D]
                text-white
                py-3
                rounded-full
                font-semibold
                "
            >
              একাউন্ট খুলুন
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
