"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import Loading from "@/components/Loading";
import PartnersData from "../../api/Partners.json";
import { useParams } from "react-router-dom";

export default function PartnersSection() {
  const swiperRef = useRef(null)
  const [partners, setPartners] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { lang } = useParams();
  const isRTL = lang === 'ar';
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

  useEffect(() => {
    // Use JSON data instead of API call
    setPartners(PartnersData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  // Use JSON data directly
  const displayImages = partners.map((partner) => partner.image);

  return (
    <div ref={sectionRef} className={`bg-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full h-full mb-[12px] md:mb-8! text-center">
        <h2
          className="py-2! md:text-[32px] font-bold text-white mx-auto"
          style={{
            background:
              "linear-gradient(to right, #202C5B 0%, #226796 20%, #23A0D0 50%, #30AFC1 80%, #3CBEB3 100%)",
            display: "block",
          }}
        >
          {isRTL ? "شركاؤنا" : "Our Partners"}
        </h2>
      </div>

      <div className="container">
        <div
          className="relative mx-auto!"
          onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
        >
          {isVisible && (
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            resizeObserver={false}
            spaceBetween={6}
            slidesPerView={4}
            loop={true}
            dir={isRTL ? "rtl" : "ltr"}
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
          )}

          {/* Navigation Arrows */}
        </div>
      </div>
    </div>
  );
}
