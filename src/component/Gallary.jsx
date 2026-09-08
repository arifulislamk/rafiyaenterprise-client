import React, { useState } from "react";
import { FiImage, FiX } from "react-icons/fi";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

 const images = [
  {
    image: "https://i.ibb.co.com/yHkwrHm/indor-50.png",
    title: "অফিসের অভ্যন্তরীণ পরিবেশ",
    description: "সুন্দর ও গ্রাহকবান্ধব সেবা কেন্দ্র",
  },

  {
    image: "https://i.ibb.co.com/fh4ZNXp/khairul-and-nana-50.png",
    title: "রাফিয়া এন্টারপ্রাইজ পরিবার",
    description: "গ্রাহক সেবায় আমাদের প্রতিশ্রুতি",
  },

  {
    image: "https://i.ibb.co.com/n88N4sYZ/moulovir-dbl-optimized-250.png",
    title: "আমাদের শাখার দৃশ্য",
    description: "গ্রাহকদের জন্য বিশ্বস্ত DBBL এজেন্ট ব্যাংকিং সেবা",
  },

  {
    image: "https://i.ibb.co.com/20kfWstP/MOULOVIR-DVV-optimized-250.png",
    title: "রাফিয়া এন্টারপ্রাইজ",
    description: "DBBL এজেন্ট ব্যাংকিং আউটলেট, মৌলভীর চর",
  },

  {
    image: "https://i.ibb.co.com/V00pw9fZ/outddoor-optimized-250.png",
    title: "এজেন্ট ব্যাংকিং আউটলেট",
    description: "আমাদের শাখার বাইরের সুন্দর পরিবেশ",
  },
];

  return (
    <section id="gallery" className="py-20 bg-[#f8faf8]">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">

          <FiImage className="mx-auto text-4xl text-[#E31E24] mb-3" />

          <p className="text-[#E31E24] font-semibold">
            আমাদের শাখা
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#006B32] mt-2">
            রাফিয়া এন্টারপ্রাইজ এক নজরে
          </h2>

          <div className="w-20 h-1 bg-[#E31E24] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-5">
            আমাদের DBBL এজেন্ট ব্যাংকিং আউটলেটের ভিতর ও বাইরের কিছু বাস্তব ছবি।
          </p>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {
            images.map((item, index) => (

              <div
                key={index}
                onClick={() => setSelectedImage(item.image)}
                className="
                cursor-pointer
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                transition
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full
                  h-[300px]
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                  "
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#006B32]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm">
                    {item.description}
                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>



      {
        selectedImage && (

          <div
            onClick={() => setSelectedImage(null)}
            className="
            fixed
            inset-0
            z-50
            bg-black/80
            flex
            items-center
            justify-center
            p-5
            "
          >

            <button
              onClick={() => setSelectedImage(null)}
              className="
              absolute
              top-6
              right-6
              text-white
              text-4xl
              "
            >
              <FiX />
            </button>


            <img
              src={selectedImage}
              alt="Preview"
              className="
              max-w-5xl
              max-h-[90vh]
              rounded-2xl
              "
            />

          </div>

        )
      }


    </section>
  );
};

export default Gallery;