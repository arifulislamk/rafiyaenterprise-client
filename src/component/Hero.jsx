import React from "react";
import dbbllogo from "../../public/images (1).jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      bg-gradient-to-r
      from-[#006B32]
      via-[#00843D]
      to-[#E31E24]
      "
    >

      <div className="max-w-7xl mx-auto px-5 py-20">

        <div className="grid md:grid-cols-2 items-center gap-12">


          <div className="text-white">


            <div className="flex items-center gap-4 mb-6">

              <div className="bg-white rounded-xl p-2 shadow-lg">

                <img
                  src={dbbllogo}
                  alt="DBBL Logo"
                  className="w-20 h-20 object-contain"
                />

              </div>


              <div>

                <p className="font-bold text-xl">
                  DBBL এজেন্ট ব্যাংকিং
                </p>

                <p className="text-white/80 text-sm">
                  বিশ্বস্ত ব্যাংকিং সেবা আপনার পাশে
                </p>

              </div>


            </div>



            <h1 className="
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
            ">
              রাফিয়া এন্টারপ্রাইজ
            </h1>



            <h2 className="
            mt-5
            text-2xl
            font-semibold
            ">
              আপনার বিশ্বস্ত DBBL এজেন্ট ব্যাংকিং সেবা
            </h2>



            <p className="
            mt-5
            text-white/90
            max-w-xl
            leading-relaxed
            ">
              মৌলভীর চর, দেওয়ানগঞ্জ, জামালপুরে অবস্থিত রাফিয়া এন্টারপ্রাইজ
              একটি বিশ্বস্ত DBBL এজেন্ট ব্যাংকিং আউটলেট।
              এখানে নতুন DBBL একাউন্ট খোলা, FDR এবং DPS সেবা
              সহজ ও নির্ভরযোগ্যভাবে প্রদান করা হয়।
            </p>




            <div className="
            flex
            flex-wrap
            gap-4
            mt-8
            ">


              <div className="
              bg-white/20
              backdrop-blur-sm
              px-5
              py-3
              rounded-xl
              ">

                <p className="text-sm">
                  সেবা সময়
                </p>

                <p className="font-bold">
                  সকাল ৮টা - রাত ৮টা
                </p>

              </div>



              <div className="
              bg-white/20
              backdrop-blur-sm
              px-5
              py-3
              rounded-xl
              ">

                <p className="text-sm">
                  ঠিকানা
                </p>

                <p className="font-bold">
                  মৌলভীর চর, দেওয়ানগঞ্জ
                </p>

              </div>


            </div>





            <div className="
            flex
            gap-4
            mt-8
            ">


              <button
              className="
              bg-white
              text-[#00843D]
              px-8
              py-3
              rounded-full
              font-semibold
              shadow-lg
              hover:bg-gray-100
              transition
              "
              >
                নতুন একাউন্ট খুলুন
              </button>



              <button
              className="
              border-2
              border-white
              text-white
              px-8
              py-3
              rounded-full
              font-semibold
              hover:bg-white
              hover:text-[#E31E24]
              transition
              "
              >
                যোগাযোগ করুন
              </button>


            </div>


          </div>





          <div className="flex justify-center">


            <div className="
            bg-white
            rounded-[35px]
            p-10
            shadow-2xl
            ">


              <img
                src={dbbllogo}
                alt="Dutch Bangla Bank"
                className="w-64 object-contain"
              />



              <h3 className="
              text-center
              mt-6
              text-2xl
              font-bold
              text-[#006B32]
              ">
                রাফিয়া এন্টারপ্রাইজ
              </h3>



              <p className="
              text-center
              mt-2
              text-gray-600
              ">
                DBBL এজেন্ট ব্যাংকিং আউটলেট
              </p>



              <div className="
              mt-5
              h-1
              w-24
              bg-[#E31E24]
              mx-auto
              rounded-full
              ">
              </div>



              <p className="
              text-center
              mt-5
              text-sm
              text-gray-500
              ">
                পরিচালক ও এজেন্ট মালিক
                <br />
                মোঃ রফিকুল ইসলাম
              </p>


            </div>


          </div>


        </div>

      </div>

    </section>
  );
};

export default Hero;