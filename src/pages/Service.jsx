import React from "react";
import {
  FiUserPlus,
  FiTrendingUp,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiUserPlus />,
      title: "নতুন DBBL একাউন্ট",
      description:
        "প্রয়োজনীয় কাগজপত্রসহ সহজ প্রক্রিয়ায় নতুন Dutch-Bangla Bank একাউন্ট খোলার সেবা প্রদান করা হয়।",
    },
    {
      icon: <FiTrendingUp />,
      title: "FDR সেবা",
      description:
        "আপনার সঞ্চয় নিরাপদ ও পরিকল্পিতভাবে সংরক্ষণের জন্য DBBL FDR খোলার প্রয়োজনীয় সহায়তা প্রদান করা হয়।",
    },
    {
      icon: <FiCreditCard />,
      title: "DPS সেবা",
      description:
        "নিয়মিত সঞ্চয়ের জন্য DBBL DPS খোলার প্রক্রিয়ায় প্রয়োজনীয় তথ্য ও সহায়তা পাওয়া যায়।",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f8faf8]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#E31E24] font-semibold mb-2">
            আমাদের সেবা
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006B32]">
            আপনার প্রয়োজনীয় ব্যাংকিং সেবা
          </h2>

          <div className="w-20 h-1 bg-[#E31E24] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-5 leading-relaxed">
            রাফিয়া এন্টারপ্রাইজে DBBL এজেন্ট ব্যাংকিংয়ের গুরুত্বপূর্ণ
            সেবাগুলো সহজ, নির্ভরযোগ্য ও গ্রাহকবান্ধবভাবে প্রদান করা হয়।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {services.map((service, index) => (
            <div
              key={index}
              className="
              group
              bg-white
              border
              border-gray-100
              rounded-3xl
              p-7
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-[#00843D]/10
                text-[#00843D]
                flex
                items-center
                justify-center
                text-2xl
                group-hover:bg-[#00843D]
                group-hover:text-white
                transition
                "
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#006B32] mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {service.description}
              </p>

              <a
                href="#contact"
                className="
                inline-flex
                items-center
                gap-2
                mt-6
                font-semibold
                text-[#E31E24]
                hover:text-[#00843D]
                transition
                "
              >
                বিস্তারিত জানুন
                <FiArrowRight />
              </a>

            </div>
          ))}

        </div>

        <div
          className="
          mt-12
          rounded-3xl
          bg-gradient-to-r
          from-[#006B32]
          to-[#00843D]
          px-6
          py-7
          md:px-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
          "
        >

          <div className="text-white">
            <h3 className="text-2xl font-bold">
              ব্যাংকিং সেবা সম্পর্কে জানতে চান?
            </h3>

            <p className="text-white/80 mt-2">
              প্রয়োজনীয় তথ্যের জন্য রাফিয়া এন্টারপ্রাইজে সরাসরি যোগাযোগ করুন।
            </p>
          </div>

          <a
            href="#contact"
            className="
            shrink-0
            bg-white
            text-[#00843D]
            px-7
            py-3
            rounded-full
            font-semibold
            hover:bg-[#E31E24]
            hover:text-white
            transition
            "
          >
            যোগাযোগ করুন
          </a>

        </div>

      </div>
    </section>
  );
};

export default Services;