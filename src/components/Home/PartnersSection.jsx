"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import Loading from "@/components/Loading";

export default function PartnersSection() {
  const swiperRef = useRef(null)
  const [partners, setPartners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/partners"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch partners");
        }
        const data = await response.json();
        setPartners(data.data);
      } catch (err) {
        console.error("Error fetching partners:", err);
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  // Use API data if available, otherwise use static data
  const displayImages = partners.map((partner) => partner.image_url);

  return (
    <div className="bg-white">
      <div className="w-full h-full mb-[12px] md:mb-8! text-center">
        <h2
          className="py-2! md:text-[32px] font-bold text-white mx-auto"
          style={{
            background:
              "linear-gradient(to right, #202C5B 0%, #226796 20%, #23A0D0 50%, #30AFC1 80%, #3CBEB3 100%)",
            display: "block",
          }}
        >
          شركاؤنا
        </h2>
      </div>

      <div className="container">
        <div className="relative mx-auto!"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={6}
            slidesPerView={4}
            observer={true}
            observeParents={true}
            loop={true}
            autoplay={{
              delay: 0,
            }}
            speed={4000}
            navigation={{
              nextEl: ".partners-next",
              prevEl: ".partners-prev",
            }}
            breakpoints={{
              460: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 16,
              },
            }}
            className="brand-linear md:!mx-[32px] !mx-[16px]"
          >
            {displayImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center hover:scale-[1.1] duration-300 w-full aspect-square">
                  <img
                    src={image}
                    alt={partners[index]?.name || `Partner ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
        </div>
      </div>
    </div>
  );
}
