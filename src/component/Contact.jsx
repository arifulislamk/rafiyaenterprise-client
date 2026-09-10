import React, { useState } from "react";
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiUser,
  FiSend,
  FiMessageSquare,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("আপনার বার্তা সফলভাবে গ্রহণ করা হয়েছে।");

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className=" py-10 md:py-20 bg-[#f8faf8]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#006B32] mt-2">
            আমরা আপনার সেবায় প্রস্তুত
          </h2>
          <div className="w-20 h-1 bg-[#E31E24] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-5 leading-relaxed">
            DBBL একাউন্ট, FDR, DPS অথবা অন্যান্য ব্যাংকিং সেবা সম্পর্কে জানতে
            আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-br from-[#006B32] to-[#00843D] text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl font-bold">রাফিয়া এন্টারপ্রাইজ</h3>

            <p className="text-white/80 mt-2">DBBL এজেন্ট ব্যাংকিং আউটলেট</p>

            <div className="w-16 h-1 bg-[#E31E24] mt-5 rounded-full"></div>

            <div className="space-y-7 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <FiMapPin className="text-xl" />
                </div>

                <div>
                  <p className="font-semibold">ঠিকানা</p>

                  <p className="text-white/80 mt-1">
                    মৌলভীর চর, দেওয়ানগঞ্জ, জামালপুর
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <FiClock className="text-xl" />
                </div>

                <div>
                  <p className="font-semibold">সেবা সময়</p>

                  <p className="text-white/80 mt-1">সকাল ৮টা - রাত ৮টা</p>

                  <p className="text-white/70 text-sm mt-1">
                    বিরতি: দুপুর ১২:৩০ - ২:০০
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <FiUser className="text-xl" />
                </div>

                <div>
                  <p className="font-semibold">পরিচালক</p>

                  <p className="text-white/80 mt-1">মোঃ রফিকুল ইসলাম</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <FiPhone className="text-xl" />
                </div>

                <div>
                  <p className="font-semibold">মোবাইল নম্বর</p>

                  <a
                    href="tel:01713544904"
                    className="text-white font-bold text-lg mt-1 inline-block hover:text-red-200 transition"
                  >
                    01713-544904
                  </a>
                </div>
              </div>
            </div>

            <a
              href="tel:01713544904"
              className="mt-9 flex items-center justify-center gap-2 bg-white text-[#006B32] font-semibold px-6 py-3 rounded-full hover:bg-[#E31E24] hover:text-white transition"
            >
              <FiPhone />
              এখনই কল করুন
            </a>
          </div>

          <div className="lg:col-span-3 bg-white rounded-3xl p-7 md:p-10 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 bg-[#00843D]/10 rounded-xl flex items-center justify-center">
                <FiMessageSquare className="text-[#00843D] text-xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  বার্তা পাঠান
                </h3>

                <p className="text-gray-500 text-sm">
                  আপনার প্রয়োজনীয় তথ্য লিখুন
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    আপনার নাম
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার নাম লিখুন"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-white outline-none focus:border-[#00843D] focus:ring-2 focus:ring-[#00843D]/10 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    মোবাইল নম্বর
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-white outline-none focus:border-[#00843D] focus:ring-2 focus:ring-[#00843D]/10 transition"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  কোন সেবা সম্পর্কে জানতে চান?
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                  w-full
                  bg-white
                  text-gray-800
                  border-2
                  border-[#00843D]/30
                  rounded-xl
                  px-4
                  py-3
                  font-medium
                  outline-none
                  cursor-pointer
                  focus:border-[#00843D]
                  focus:ring-2
                  focus:ring-[#00843D]/15
                  transition
                  "
                >
                  <option value="" className="bg-white text-gray-700">
                    সেবা নির্বাচন করুন
                  </option>
                  <option value="account" className="bg-white text-[#006B32]">
                    নতুন DBBL একাউন্ট
                  </option>
                  <option value="fdr" className="bg-white text-[#006B32]">
                    FDR খোলা
                  </option>
                  <option value="dps" className="bg-white text-[#006B32]">
                    DPS খোলা
                  </option>
                  <option value="other" className="bg-white text-[#E31E24]">
                    অন্যান্য তথ্য
                  </option>
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  আপনার বার্তা
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="আপনার প্রশ্ন বা প্রয়োজনীয় তথ্য লিখুন..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-white outline-none resize-none focus:border-[#00843D] focus:ring-2 focus:ring-[#00843D]/10 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#00843D] hover:bg-[#006B32] text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
              >
                <FiSend />
                বার্তা পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
