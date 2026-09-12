import React from "react";
import { FiUpload, FiSend } from "react-icons/fi";

const FdrOpen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("আপনার FDR আবেদন গ্রহণ করা হয়েছে। আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবে।");
  };

  return (
    <section className="py-12 bg-[#f8faf8]">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-8">
          <p className="text-[#E31E24] font-semibold">DBBL Agent Banking</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#006B32] mt-2">
            FDR খোলার আবেদন
          </h1>
          <p className="text-gray-600 mt-3">
            প্রয়োজনীয় তথ্য দিয়ে অনলাইনে প্রাথমিক আবেদন করুন
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-[#006B32] mb-5">
            গ্রাহকের তথ্য
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="আপনার পূর্ণ নাম লিখুন"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#00843D] focus:ring-2 focus:ring-[#00843D]/10"
            />

            <input
              type="tel"
              placeholder="আপনার মোবাইল নম্বর লিখুন"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#00843D] focus:ring-2 focus:ring-[#00843D]/10"
            />

            <input
              type="number"
              placeholder="FDR-এর পরিমাণ লিখুন (৳)"
              required
              min="1"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#00843D] focus:ring-2 focus:ring-[#00843D]/10"
            />

            <select
              required
              defaultValue=""
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 bg-white outline-none focus:border-[#00843D] focus:ring-2 focus:ring-[#00843D]/10"
            >
              <option value="" disabled>
                FDR-এর মেয়াদ নির্বাচন করুন
              </option>
              <option value="3-months">৩ মাস</option>
              <option value="6-months">৬ মাস</option>
              <option value="1-year">১ বছর</option>
              <option value="other">অন্যান্য মেয়াদ</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <label className="border-2 border-dashed border-[#00843D]/40 bg-[#00843D]/5 rounded-xl p-4 cursor-pointer hover:bg-[#00843D]/10 transition">
              <FiUpload className="text-[#00843D] text-xl mb-2" />
              <p className="text-gray-700 font-medium">আপনার ছবি আপলোড করুন</p>
              <p className="text-xs text-gray-500 mt-1">JPG / PNG</p>
              <input
                type="file"
                accept="image/*"
                required
                className="hidden"
              />
            </label>

            <label className="border-2 border-dashed border-[#00843D]/40 bg-[#00843D]/5 rounded-xl p-4 cursor-pointer hover:bg-[#00843D]/10 transition">
              <FiUpload className="text-[#00843D] text-xl mb-2" />
              <p className="text-gray-700 font-medium">
                NID / জন্ম নিবন্ধনের PDF আপলোড করুন
              </p>
              <p className="text-xs text-gray-500 mt-1">শুধু PDF</p>
              <input
                type="file"
                accept="application/pdf"
                required
                className="hidden"
              />
            </label>
          </div>

          <h2 className="text-xl font-bold text-[#006B32] mt-8 mb-5">
            নমিনির তথ্য
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="নমিনির পূর্ণ নাম লিখুন"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/10"
            />

            <input
              type="tel"
              placeholder="নমিনির মোবাইল নম্বর লিখুন"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/10"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <label className="border-2 border-dashed border-[#E31E24]/40 bg-[#E31E24]/5 rounded-xl p-4 cursor-pointer hover:bg-[#E31E24]/10 transition">
              <FiUpload className="text-[#E31E24] text-xl mb-2" />
              <p className="text-gray-700 font-medium">
                নমিনির ছবি আপলোড করুন
              </p>
              <p className="text-xs text-gray-500 mt-1">JPG / PNG</p>
              <input
                type="file"
                accept="image/*"
                required
                className="hidden"
              />
            </label>

            <label className="border-2 border-dashed border-[#E31E24]/40 bg-[#E31E24]/5 rounded-xl p-4 cursor-pointer hover:bg-[#E31E24]/10 transition">
              <FiUpload className="text-[#E31E24] text-xl mb-2" />
              <p className="text-gray-700 font-medium">
                নমিনির NID / জন্ম নিবন্ধনের PDF আপলোড করুন
              </p>
              <p className="text-xs text-gray-500 mt-1">শুধু PDF</p>
              <input
                type="file"
                accept="application/pdf"
                required
                className="hidden"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 flex items-center gap-2 bg-[#00843D] hover:bg-[#006B32] text-white px-7 py-3 rounded-full font-semibold transition"
          >
            <FiSend />
            FDR আবেদন জমা দিন
          </button>
        </form>
      </div>
    </section>
  );
};

export default FdrOpen;