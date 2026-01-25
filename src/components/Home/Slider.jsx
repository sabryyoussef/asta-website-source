    // "use client";
import React, {useEffect, useRef, useState, useMemo} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from "swiper/modules";
// // import {getCategories, getRoutes} from "@/store/slices/courseSlice.js";
// import {useDispatch, useSelector} from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // If you use Swiper's built-in navigation styles (we are using custom)
import { Link, useParams } from "react-router-dom";
// import Loading from "@/components/Loading";

// Import programs data
import ProgramsData from "../../api/Programs.json";

// Program details (remains the same)

export default function ResponsiveDataPathSlider({mainTitle}) {
    const {lang} = useParams();
    // const dispatch = useDispatch();
    const initialProgramIndex = 0;
    // const {routes, categories, status} = useSelector(
    //     (state) => state.courses
    // );
    const [currentIndex, setCurrentIndex] = useState(initialProgramIndex);
    const [currentContent, setCurrentContent] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);
    
    // Extract programs from ProgramsData using useMemo to prevent re-renders
    const categories = useMemo(() => 
        ProgramsData.map((program) => ({
            id: program.id,
            name: program.title[lang],
            description: program.subtitle[lang],
            image_url: program.image
        })), []
    );


    // TODO: Replace with actual API calls when Redux is set up
    // useEffect(() => {
    //     dispatch(getRoutes());
    //     dispatch(getCategories());
    // }, [dispatch]);


    const handleCategoryClick = (index) => {
        setCurrentIndex(index);
        setCurrentContent(categories[index]);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index, 300, false); // ✅ handles loop mode correctly
        }
    };

    const autoSlide = () => {
        const nextIndex = currentIndex + 1 >= categories.length ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        // Use the nextIndex instead of currentIndex
        swiperRef.current.swiper.slideTo(nextIndex);
        setCurrentContent(categories[nextIndex]);
    };

    // useEffect(() => {
    //     if (categories.length > 0) {
    //         setCurrentContent(categories[initialProgramIndex]);
    //     }
    // }, [categories]);


    useEffect(() => {
        const timer = setTimeout(() => {
            autoSlide();
        }, 5000);

        // Cleanup to prevent multiple timers
        return () => clearTimeout(timer);
    }, [currentIndex, categories]);

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


    // TODO: Replace with loading state when API is ready
    // if (status.getCategories == "loading" || status.getCategories == "idle") {
    //     return <Loading />;
    // }

    return (
        <section
            ref={sectionRef}
            className={`bg-gradient-to-r from-[#23a0d01a] to-[#3CBEB31A] relative! overflow-hidden! flex! items-center! justify-center! transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute! inset-0! opacity-5!">
                <div className="absolute! top-20! left-20! w-32! h-32! bg-blue-500! rounded-full! blur-3xl!"></div>
                <div className="absolute! bottom-20! right-20! w-40! h-40! bg-teal-500! rounded-full! blur-3xl!"></div>
                <div className="absolute! top-1/2! left-1/3! w-24! h-24! bg-purple-500! rounded-full! blur-2xl!"></div>
            </div>
            <div className="container">
                <div className="flex! flex-col! items-center! justify-center! py-4! sm:py-6!">
                    <div className="flex-shrink-0! w-full! sm:mt-8! mt-6! mb-6! sm:mb-8! ">
                        {mainTitle && (
                            <div className="container mx-auto text-right mb-8">
                                <h2 className="text-[24px] font-bold text-black">
                                    {mainTitle}
                                </h2>
                            </div>
                        )}
                        <div className="max-w-7xl! mx-auto!">
                            <div className="flex! items-center! justify-center! relative!">
                                <button
                                    className="category-swiper-prev! absolute! cursor-pointer left-0! top-1/2! -translate-y-1/2! z-10! w-0! h-0! border-t-[15px]! border-b-[15px]! border-r-[20px]! border-t-transparent! border-b-transparent! border-r-blue-900! hover:border-r-blue-700! transition-colors! duration-300! max-md:hidden"
                                    onClick={() => {
                                        handleCategoryClick(
                                            currentIndex + 1 > categories.length - 1
                                                ? 0
                                                : currentIndex + 1
                                        );
                                    }}
                                ></button>
                                <Swiper
                                    ref={swiperRef}
                                    modules={[Navigation, A11y]}
                                    slidesPerView="auto"
                                    spaceBetween={16}
                                    centeredSlides={false}
                                    centerInsufficientSlides={true}
                                    watchOverflow={true}
                                    onSwiper={(swiper) => (swiperRef.current = { swiper })}
                                    navigation={{
                                        prevEl: ".category-swiper-prev",
                                        nextEl: ".category-swiper-next",
                                    }}
                                    className="!overflow-hidden max-w-full px-12 sm:px-16 md:px-20 w-[calc(100%-88px)]"
                                    >
                                    {categories.map((category, index) => (
                                        <SwiperSlide key={index} className="!w-fit py-2!">
                                            <button
                                                onClick={() => handleCategoryClick(index)}
                                                className={`flex-shrink-0! cursor-pointer px-6! sm:px-8! py-2! sm:py-6! 
                                                            text-[10px]! sm:text-[18px]! font-bold transition-all! duration-300! 
                                                            whitespace-nowrap! bg-cover! bg-center! bg-no-repeat! border-[2px]! 
                                                            ${currentIndex === index
                                                            ? "border-[#1A2555]! scale-105! shadow-lg!"
                                                            : "border-transparent! hover:border-[#1A2555]!"
                                                            } text-white!`}
                                                style={{
                                                backgroundImage: "url('/images/Testmonials.png')",
                                                }}
                                            >
                                                {category.name}
                                            </button>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <button
                                    className="category-swiper-next! absolute! cursor-pointer right-0! top-1/2! -translate-y-1/2! z-10! w-0! h-0! border-t-[15px]! border-b-[15px]! border-l-[20px]! border-t-transparent! border-b-transparent! border-l-blue-900! hover:border-l-blue-700! transition-colors! duration-300! max-md:hidden"
                                    onClick={() => {
                                        handleCategoryClick(
                                            currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1
                                        );
                                    }}
                                ></button>
                            </div>
                        </div>

                    </div>

                    <div className="flex-1! flex! items-center justify-between w-full!">
                        {
                            currentContent && (
                                <div className="max-w-7xl! w-full! mx-auto! h-full! rounded-2xl! overflow-hidden!">
                                    <div
                                        className="bg-transparent backdrop-blur-xl! rounded-2xl! shadow-2xl! overflow-hidden! flex! flex-col! lg:flex-row!"
                                        dir="ltr"
                                    >
                                        <div
                                            className="order-1! lg:order-1! flex! flex-col! items-center! justify-center! w-full lg:w-[320px] h-full">
                                            <div className="rounded-2xl p-[16px] w-full h-full aspect-square">
                                                <div
                                                    className="bg-gradient-to-r from-[#23a0d01a] to-[#3CBEB31A] w-full h-full shadow-[0px_0px_12px_6px_rgba(255,255,255,0.8)] overflow-hidden flex justify-center items-center duration-300 hover:scale-[1.05]"
                                                >
                                                    <img
                                                        src={currentContent?.image_url}
                                                        alt={currentContent?.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="order-2 flex flex-col justify-start lg:justify-center items-end text-right w-full lg:w-auto grow p-4 lg:p-12 !pt-0">
                                            <h1 className="text-[24px] font-bold text-[#202C5B] leading-relaxed mb-4">
                                                {currentContent?.name}
                                            </h1>
                                            <p dir="rtl" className="text-[16px] text-justify leading-relaxed md:text-[18px] font-medium text-[#10193d] mb-4 max-w-xl">
                                                {currentContent?.description}
                                            </p>
                                            
                                            <Link
                                                to={`/${lang}/programs/${currentContent?.id}`}
                                                className="mt-auto md:py-4 py-[8px] px-[12px] cursor-pointer text-white font-semibold bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3] hover:opacity-90 md:w-[240px] w-[150px] text-center"
                                            >
                                                عرض تفاصيل الدوبلوم
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 pt-4 sm:pt-6 pb-2 w-full!">
                                            <div className="flex! justify-center! gap-2! flex-row-reverse">
                                                {categories.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleCategoryClick(index)}
                                                        className={`h-2! rounded-full! cursor-pointer transition-all! duration-300! ${index === currentIndex
                                                            ? "bg-teal-500! w-6! sm:w-8!"
                                                            : "bg-slate-300! hover:bg-slate-400! w-2!"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                </div>
        </section>
    );
}
