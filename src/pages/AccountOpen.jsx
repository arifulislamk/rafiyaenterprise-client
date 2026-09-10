import React from "react";
import { FiUpload, FiSend } from "react-icons/fi";

const AccountOpen = () => {
  return (
    <section className="py-12 bg-[#f8faf8]">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-8">
          <p className="text-[#E31E24] font-semibold">
            DBBL Agent Banking
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#006B32] mt-2">
            নতুন একাউন্ট খোলার আবেদন
          </h1>
          <p className="text-gray-600 mt-3">
            প্রয়োজনীয় তথ্য দিয়ে অনলাইনে আবেদন করুন
          </p>
        </div>
        <form className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl font-bold text-[#006B32] mb-5">
            গ্রাহকের তথ্য
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="আপনার পূর্ণ নাম লিখুন"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#00843D]"
            />
            <input
              type="tel"
              placeholder="আপনার মোবাইল নম্বর লিখুন"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#00843D]"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <label className="border-2 border-dashed border-[#00843D]/40 bg-[#00843D]/5 rounded-xl p-4 cursor-pointer hover:bg-[#00843D]/10 transition">
              <FiUpload className="text-[#00843D] text-xl mb-2" />
              <p className="text-gray-700 font-medium">
                আপনার ছবি আপলোড করুন
              </p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
            <label className="border-2 border-dashed border-[#00843D]/40 bg-[#00843D]/5 rounded-xl p-4 cursor-pointer hover:bg-[#00843D]/10 transition">
              <FiUpload className="text-[#00843D] text-xl mb-2" />
              <p className="text-gray-700 font-medium">
                NID / জন্ম নিবন্ধনের PDF আপলোড করুন
              </p>
              <input
                type="file"
                accept="application/pdf"
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
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#E31E24]"
            />
            <input
              type="tel"
              placeholder="নমিনির মোবাইল নম্বর লিখুন"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-[#E31E24]"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <label className="border-2 border-dashed border-[#E31E24]/40 bg-[#E31E24]/5 rounded-xl p-4 cursor-pointer hover:bg-[#E31E24]/10 transition">
              <FiUpload className="text-[#E31E24] text-xl mb-2" />
              <p className="text-gray-700 font-medium">
                নমিনির ছবি আপলোড করুন
              </p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
            <label className="border-2 border-dashed border-[#E31E24]/40 bg-[#E31E24]/5 rounded-xl p-4 cursor-pointer hover:bg-[#E31E24]/10 transition">
              <FiUpload className="text-[#E31E24] text-xl mb-2" />
              <p className="text-gray-700 font-medium">
                নমিনির NID / জন্ম নিবন্ধনের PDF আপলোড করুন
              </p>
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 flex items-center gap-2 bg-[#00843D] hover:bg-[#006B32] text-white px-7 py-3 rounded-full font-semibold transition"
          >
            <FiSend />
            আবেদন জমা দিন
          </button>
        </form>
      </div>
    </section>
  );
};

export default AccountOpen;