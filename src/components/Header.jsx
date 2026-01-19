"use client";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
// data
import CategoriesData from "../api/Categories.json";
import Programs, { getProgramData } from "../api/Programs";


export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [diplomasDropdown, setDiplomasDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [studnetServicesDropdown, setStudentServicesDropdown] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState(null);
  // const router = useRouter();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation();
  
  const programsRef = useRef(null);
  const programs = Programs.map(program => getProgramData(program, lang))
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const localizeLabel = (value) => {
    if (!value) return "";
    if (typeof value === "string") return value;
    if (typeof value === "object") return value?.[lang] ?? value?.ar ?? value?.en ?? "";
    return String(value);
  };

  const categories = Object.entries(CategoriesData?.categories || {}).map(([id, categoryData]) => ({
    id,
    label: localizeLabel(categoryData),
    sup_categories: (categoryData?.sup_categories || []).map((supCat) => ({
      id: supCat.id,
      label: localizeLabel(supCat),
    })),
  }));


  const switchLang = (newLang) => {
    const newPath = location.pathname.replace(
      `/${lang}`,
      `/${newLang}`
    );
    navigate(newPath);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.elements[0].value);
    navigate(`/${lang}/search?q=${encodeURIComponent(e.currentTarget.elements[0].value)}`);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (programsRef.current && !programsRef.current.contains(event.target)) {
        setDiplomasDropdown(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setCoursesDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // the Navbar
    <nav className="w-full sticky top-0 z-30 border-b-2 gradient-border">
      {/* Top Bar */}
       <div className="header-top hidden md:block bg-gradient-to-r from-[#202c5b] via-[#23a0d0] to-[#3cbeb3] py-3">
          <div className="container max-w-[1300px] mx-auto px-2">
            <div className="header-top-content flex justify-between items-center gap-5 text-sm">
              <div className="contact-info flex gap-5">
                <div className="flex items-center gap-3">
                  <a
                  href="tel:+966920016205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <PhoneIcon className="w-4 h-4 text-white" />
                  <span>{t('global.phoneNumber')}</span>
                </a>
                <i className="fab fa-whatsapp text-white text-lg"></i>
                <a
                  href="https://wa.me/966555881726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <span>{t('global.whatsappNumber')}</span>
                </a>
              </div>

                <a
                  href="mailto:info@asta.edu.sa"
                  className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <EnvelopeIcon className="w-4 h-4 text-white" />
                  <span>info@asta.edu.sa</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/rz5CqRh3B1XkF3pC9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <MapPinIcon className="w-4 h-4 text-white" />
                  <span>{t("footer.address")}</span>
                </a>
              </div>
              <div className="social-links flex gap-4">
                <a
                  href="https://x.com/astaacademysa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/school/asta-academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/@astaacademysa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/astaacademysa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:-translate-y-0.5 transition-transform"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* Main Nav */}
      <div className="md:hidden bg-white md:pt-8! pt-[8px]">
        <div className="mx-auto px-2">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mobile Semi Header */}
            <div className="py-2! container">
              <div className="flex items-center justify-between">
                {/* Mobile Logo - Right side */}
                <div className="flex-shrink-0">
                  <a href={`/${lang}/`}>
                    <img
                      src="/svgs/ASTA_Nav_Logo.svg"
                      alt="ASTA Logo"
                      width={63}
                      height={17}
                      // priority
                      className="h-auto"
                    />
                  </a>
                </div>

                {/* Mobile menu button and search - Left side */}
                <div className="flex items-center gap-3 relative">
                  {/* Mobile menu button */}
                  <svg
                    className="w-6 h-6 text-[#23A0D0] cursor-pointer"
                    onClick={() => setOpen(true)}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          {/* Desktop Menu */}
          <div className="bg-white">
          <div className="mx-auto px-2">
          <div className="hidden sm:flex justify-between items-center py-3 border-gray-200 bg-white top-0">
            <div className="flex-shrink-0">
              <a href={`/${lang}/`}>
                <img
                  src="/svgs/ASTA_Nav_Logo.svg"
                  alt="ASTA Logo"
                  width={152}
                  height={42}
                  className="h-auto md:w-[120px] lg:w-[152px] md:mx-8"
                />
              </a>
            </div>
            <div className="flex items-center">
              <a
                href={`/${lang}/`}
                className={
                  "md:text-[18px] lg:text-[20px] px-[12px] py-[6px] font-medium hover:text-[#4fd1c5] duration-300 transition-colors !leading-[1.25] " +
                  (pathname === `/${lang}/`
                    ? "text-[#4fd1c5]"
                    : "text-[#202C5B]")
                }
              >
                {t("header.nav.home")}
              </a>
              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* Diplomas dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setCoursesDropdown(!coursesDropdown);
                    setDiplomasDropdown(false);
                    setAboutDropdown(false);
                    setStudentServicesDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (false
                    ? "text-[#4fd1c5]"
                    : "text-[#202C5B]")
                  }
                >
                   {t("header.nav.courses")}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      coursesDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {coursesDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/courses`}
                        className="block px-4 py-2 md:text-sm lg:text-base hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.allCourses")}
                      </a>
                      {categories.map((category) => (
                        <div key={category.id} className="group" style={{ textAlign: "unset" }}>
                          <button
                            type="button"
                            onClick={() =>
                              setOpenCategoryId((prev) =>
                                prev === category.id ? null : category.id
                              )
                            }
                            className="w-full flex gap-2 px-4 py-2 md:text-sm lg:text-base hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors font-medium"
                          >
                            <span style={{ textAlign: "initial" }}>{category.label}</span>
                            <ChevronDownIcon
                              className={`w-4 h-4 transition-transform ${
                                openCategoryId === category.id ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {category.sup_categories &&
                            category.sup_categories.length > 0 &&
                            openCategoryId === category.id && (
                              <div className="pl-4">
                                <a href={`/${lang}/categories/${category.id}`} className="block px-4 py-2 md:text-sm lg:text-sm hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                                >
                                  - {t("courses.certificates")}
                                </a>
                                {category.sup_categories.map((supCategory) => (
                                  <a
                                    key={supCategory.id}
                                    href={`/${lang}/categories/${category.id}?sup_category=${encodeURIComponent(
                                      supCategory.id
                                    )}`}
                                    className="block px-4 py-2 md:text-sm lg:text-sm hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                                  >
                                    - {supCategory.label}
                                  </a>
                                ))}
                                <div className="min-h-[1px] w-full bg-[#1a2555] my-2"></div>

                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* Student services dropdown */}
              {/* <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setStudentServicesDropdown(!studnetServicesDropdown);
                    setDiplomasDropdown(false);
                    setCoursesDropdown(false);
                    setAboutDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (false
                      ? "text-[#4fd1c5]"
                      : "text-[#202C5B]")
                  }
                >
                   {t("header.nav.student-services")}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      studnetServicesDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {studnetServicesDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/student-services`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.allServices")} 
                      </a>
                    </div>
                  </div>
                )}
              </div> */}

              {/* <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div> */}

              {/* Diplomas dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setDiplomasDropdown(!diplomasDropdown);
                    setCoursesDropdown(false);
                    setAboutDropdown(false);
                    setStudentServicesDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (false
                      ? "text-[#4fd1c5]"
                      : "text-[#202C5B]")
                  }
                >
                   {t("header.nav.diplomas")}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      diplomasDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {diplomasDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/programs`}
                        className="block px-4 py-2 md:text-sm lg:text-base hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.allPrograms")}
                      </a>
                      {/* map for every dimploma */}
                      {programs.map((program) => (
                        <a
                          key={program.id}
                          href={`/${lang}/programs/${program.id}`}
                          className="block px-4 py-2 md:text-sm lg:text-base hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                        >
                          {program.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* About dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => {
                    setAboutDropdown(!aboutDropdown);
                    setDiplomasDropdown(false);
                    setCoursesDropdown(false);
                    setStudentServicesDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[12px] font-medium transition-colors !leading-[1.25] hover:text-[#4fd1c5] duration-300 min-h-[44px] " +
                    (pathname.startsWith("/about-us")
                      ? "text-[#4fd1c5]"
                      : "text-[#202C5B]")
                  }
                >
                  {t("header.nav.about")}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      aboutDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {aboutDropdown && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20">
                    <div className="py-1">
                      <a
                        href={`/${lang}/about-us`}
                        className="block px-4 py-2 md:text-sm lg:text-base hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.aboutAcademy")}
                      </a>
                      <a
                        href={`/${lang}/academic-integrity`}
                        className="block px-4 py-2 md:text-sm lg:text-base hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.standarts")}
                      </a>
                      {/* <a
                        href="#"
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:text-[#4fd1c5] duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.contact")}
                      </a> */}
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              {/* registeration */}
                <a
                href={`/${lang}/registration`}
                className={
                  "md:text-[18px] lg:text-[20px] px-[12px] py-[6px] font-medium hover:text-[#4fd1c5] duration-300 transition-colors !leading-[1.25] " +
                  (pathname === `/${lang}/registration`
                    ? "text-[#4fd1c5]"
                    : "text-[#202C5B]")
                }
              >
                {t("header.nav.registration")}
              </a>
            </div>
            <div>
              <button onClick={() => navigate(`/${lang}/`)} className="mx-2 py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-white lg:text-[16px] sm:text-[14px] font-bold bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300">
                {t("header.actions.verifyCertificate")}
              </button>
              {/* <button onClick={() => router.push("/en")} className="mx-2 py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-white lg:text-[16px] sm:text-[14px] font-bold bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300">
                 EN
              </button> */}
              <LanguageToggle />
            </div>
          </div>
          </div>
          </div>
          {/* Mobile menu overlay */}

      <div
        className={
          "fixed! inset-0! z-50! md:hidden! min-h-screen duration-500 " +
          (open ? "w-full" : "w-0")
        }
      >
        <div
          className={
            "fixed! inset-0! bg-black/50! min-h-screen " +
            (open ? "w-full" : "w-0")
          }
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={
            "fixed! flex flex-col inset-y-0 w-80! min-h-screen bg-[#EEEEEE]! duration-300 " +
            (open ? "right-0" : "right-0 transform translate-x-[100%]")
          }
        >
          {/* Mobile menu header */}
          <div className="p-3! space-y-3! flex flex-col grow">
            <div className="flex items-center justify-between px-3! py-2!">
              <a href={`/${lang}/`} onClick={() => setOpen(false)} className="flex items-center gap-2">
                <img
                  src="/svgs/ASTA_Nav_Logo.svg"
                  alt="ASTA Logo"
                  width={63}
                  height={17}
                  className="h-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#23A0D0]"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <div className="space-y-2!">
              <a
                href={`/${lang}/courses`}
                onClick={() => setOpen(false)}
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <BookOpenIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.mobile.courses")}</span>
                </div>
              </a>

              <a
                href={`/${lang}/programs`}
                onClick={() => setOpen(false)}
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <AcademicCapIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.nav.diplomas")}</span>
                </div>
              </a>
{/* 
              <a
                href={`/${lang}/student-services`}
                onClick={() => setOpen(false)}
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <UserGroupIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.nav.student-services")}</span>
                </div>
              </a> */}

              <a
                href={`/${lang}/about-us`}
                onClick={() => setOpen(false)}
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <InformationCircleIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.nav.about")}</span>
                </div>
              </a>

              <a
                href={`/${lang}/registration`}
                onClick={() => setOpen(false)}
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <ClipboardDocumentCheckIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.nav.registration")}</span>
                </div>
              </a>

              <button
                type="button"
                onClick={() => {
                  switchLang(lang === "en" ? "ar" : "en");
                  setOpen(false);
                }}
                className="w-full px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <GlobeAltIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.mobile.changeLanguage")}</span>
                </div>
                <span className="text-[#202C5B] font-bold!">{lang === "en" ? "AR" : "EN"}</span>
              </button>
            </div>
            <div className=" mt-auto p-3! text-center!">
              <div className="text-black! font-medium! mb-3 text-lg!">
                {t("header.footer.academyName")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
