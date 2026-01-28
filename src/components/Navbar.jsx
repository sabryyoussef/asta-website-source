"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import Image from "next/image";
// import { Bars3Icon } from "@heroicons/react/24/solid";
// import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { getCategories } from "@/store/slices/courseSlice";
// import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import categoriesData from "../api/Categories.json";
import Programs from "../api/Programs";
import { 
  Bars3Icon, 
  BookOpenIcon, 
  AcademicCapIcon, 
  InformationCircleIcon, 
  ClipboardDocumentCheckIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [trainersDropdown, setTrainersDropdown] = useState(false);
  const [courses, setCourses] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [profile, setProfile] = useState(false);
  const [url, setUrl] = useState(true);
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [diplomasDropdown, setDiplomasDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const trainersRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const diplomasRef = useRef(null);
  const location = useLocation();
  const { lang = 'ar' } = useParams();
  const { t } = useTranslation();
  const isRTL = lang === 'ar';

  const handleDropdownHover = (dropdownName) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredDropdown(dropdownName);
    if (dropdownName === 'courses') {
      setCourses(true);
      setDiplomasDropdown(false);
      setAboutDropdown(false);
      setTrainersDropdown(false);
    } else if (dropdownName === 'diplomas') {
      setDiplomasDropdown(true);
      setCourses(false);
      setAboutDropdown(false);
      setTrainersDropdown(false);
    } else if (dropdownName === 'about') {
      setAboutDropdown(true);
      setCourses(false);
      setDiplomasDropdown(false);
      setTrainersDropdown(false);
    }
  };

  const handleDropdownLeave = () => {
    setHoveredDropdown(null);
    timeoutRef.current = setTimeout(() => {
      setCourses(false);
      setDiplomasDropdown(false);
      setAboutDropdown(false);
      setTrainersDropdown(false);
    }, 200);
  };
  // const { categories, status, error } = useSelector(
  //   (state) => state.courses // Accessing filteredCourses directly
  // );
  
  // Transform categories data from JSON
  const categories = Object.entries(categoriesData.categories).map(([key, category]) => ({
    id: key,
    name: category[lang],
    sup_categories: category.sup_categories?.map(sub => ({
      id: sub.id,
      name: sub[lang]
    })) || []
  }));
  
  // Use localized programs data from Programs.js
  const programs = Programs;
  
//   const [isVisible, setIsVisible] = useState(true);

//   // const dispatch = useDispatch();

//   useEffect(() => {
//   let lastScrollY = window.scrollY;
//   let timeoutId;

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setIsVisible(false);
//       } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
//         setIsVisible(true);
//       }
//       lastScrollY = currentScrollY;
//     }, 150);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//     clearTimeout(timeoutId);
//   };
// }, []);
  
  // useEffect(() => {
  //   // console.log("Dispatching getCoursesByFilter...");
  //   dispatch(getCategories());
  // }, [dispatch]);

  // const { login, logout, toggleCourses, coursesText, user, token } = useAuth();
  // const refetch = async () => {
  //   if (token && !user) {
  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8000/public/api/me",
  //         {
  //           token: token,
  //         },
  //         {
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       const { user } = response.data;

  //       if (user) {
  //         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //         login(user, token); // ✅ pass both to context
  //       } else {
  //         throw new Error("لم يتم استلام رمز من الخادم");
  //       }
  //     } catch (err) {
  //       if (err.status == 401) {
  //         navigate.push("/Login");
  //         Cookies.remove("token");
  //         Cookies.remove("user");
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    if (
      location.pathname.toLowerCase().includes("courses") ||
      location.pathname.toLowerCase().includes("courses") ||
      location.pathname.toLowerCase().includes("/search")
    ) {
      setUrl(false);
    } else {
      setUrl(true);
    }
  }, [location.pathname]);

  // useEffect(() => {
  //   refetch();
  // }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (trainersRef.current && !trainersRef.current.contains(event.target)) {
        setTrainersDropdown(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
      if (coursesRef.current && !coursesRef.current.contains(event.target)) {
        setCourses(false);
      }
      // Close mobile search when clicking outside
      if (search && !event.target.closest('.mobile-search-container')) {
        setSearch(false);
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get('search') || e.currentTarget.elements[0]?.value;
    console.log(searchValue);
    
    if (searchValue.trim()) {
      // Navigate to search page with language parameter
      navigate(`/${lang}/search?q=${encodeURIComponent(searchValue)}`);
      setShowSuggestions(false);
    }
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim()) {
      const suggestions = getSearchSuggestions(value);
      setSearchSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    navigate(suggestion.url);
  };

  // Create search suggestions from categories and diplomas
  const getSearchSuggestions = (query) => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    const suggestions = [];
    
    // Add course categories first
    categories.forEach(category => {
      if (category.name.toLowerCase().includes(lowercaseQuery)) {
        suggestions.push({
          type: 'category',
          title: category.name,
          url: `/${lang}/categories/${category.id}`
        });
      }
    });
    
    // Then add individual courses from all categories
    categories.forEach(category => {
      category.sup_categories?.forEach(subCategory => {
        // Add the subcategory as a course suggestion
        if (subCategory.name.toLowerCase().includes(lowercaseQuery)) {
          suggestions.push({
            type: 'course',
            title: subCategory.name,
            url: `/${lang}/categories/${category.id}?sup_category=${encodeURIComponent(subCategory.id)}`
          });
        }
      });
    });
    
    // Add diplomas with proper language handling
    programs.forEach(program => {
      const programTitle = program.title[lang] || program.title.ar || program.title.en || program.title;
      if (programTitle.toLowerCase().includes(lowercaseQuery)) {
        suggestions.push({
          type: 'diploma',
          title: programTitle,
          url: `/${lang}/programs/${program.id}`
        });
      }
    });
    
    return suggestions.slice(0, 100); // Limit to 100 suggestions
  };

  return (
    <nav className={`w-full sticky top-0 z-30 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div
        className="opacity-100 translate-y-0 transition-all duration-500 ease-in-out shadow-md"
        style={{ position: "sticky", top: 0, direction: isRTL ? 'rtl' : 'ltr' }}
      >
      <div className="bg-gradient-to-r from-[#202C5B] via-[#226796] via-[#23A0D0] via-[#30AFC1] to-[#3CBEB3] text-white">
        <div className="h-[48px] px-4 lg:px-8">
          <div className="h-full md:container">
            <div className="flex items-center justify-between h-full max-md:hidden max-w-[1025.69px] mx-auto">
              <div className="font-medium font-GE md:text-sm lg:text-lg text-[16px]">
                {t("global.academyName")}
              </div>
              <div className="flex gap-4 items-center md:gap-2 lg:gap-4">
                <div className="flex gap-1 items-center">
                  <a
                    href="mailto:info@asta.edu.sa"
                    target="_blank"
                    className="md:text-sm lg:text-[16px] hover:opacity-80 transition-opacity"
                  >
                    info@asta.edu.sa
                  </a>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="md:w-3 md:h-3 lg:w-[14px] lg:h-[14px]"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="flex gap-1 items-center">
                  <a
                    href="tel:+966920016205"
                    target="_blank"
                    className="md:text-sm lg:text-[16px] hover:opacity-80 transition-opacity"
                    dir="ltr"
                  >
                    {t("global.phoneNumber")}
                  </a>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="md:w-3 md:h-3 lg:w-[14px] lg:h-[14px]"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex gap-1 items-center">
                  <a
                    href="https://wa.me/966555881726"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:text-sm lg:text-[16px] hover:opacity-80 transition-opacity"
                  >
                    {t("global.whatsappNumber")}
                  </a>
                  <i className="fab fa-whatsapp text-white text-lg"></i>
                </div>
                {/* Change Language */}
                <div 
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    const newPath = isRTL 
                      ? location.pathname.replace(`/${lang}`, '/en')
                      : location.pathname.replace(`/${lang}`, '/ar');
                    navigate(newPath);
                  }}
                >
                  <div>
                    <img
                      src={isRTL ? "/images/saudiFlag.webp" : "/images/uKFlag.webp"}
                      className="w-[28px]"
                      alt={isRTL ? "اللغة العربية" : "English Language"}
                    />
                  </div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[#ffffff] md:w-4 md:h-4 lg:w-[22px] lg:h-[22px]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:pt-8! pt-[8px]">
        <div className="md:container">
          <div className="hidden md:flex max-md:container items-center pb-[20px]">
            <div className="flex-shrink-0">
              <Link to={`/${lang}`}>
                <img
                  src="/images/logo.webp"
                  alt="ASTA Logo"
                  className="h-auto md:w-[120px] lg:w-[152px]"
                />
              </Link>
            </div>

            <div
              className={
                "flex items-center gap-4 md:gap-2 lg:gap-[24px] ps-[24px] grow " +
                (url ? "" : "justify-end")
              }
            >
              {url && (
                <a 
                  href={`/${lang}/certificate-checker`}
                  className="py-[12px] px-[12px] rounded-full! cursor-pointer hover:text-[#1a2555] text-white lg:text-[16px] sm:text-[14px] font-bold bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300"
                >
                  {t("header.actions.verifyCertificate")}
                </a>
              )}
              <div
                className={
                  "flex items-center gap-[24px] " + (true ? "grow" : "")
                }
              >
                {true && (
                  <div className="relative flex items-center grow">
                    <button
                      onClick={() => {
                        setSearch(!search);
                      }}
                      className="md:hidden w-[20px] h-[20px] cursor-pointer flex justify-center items-center"
                    >
                      <img src="/svgs/search.svg" alt="searchIcon" />
                    </button>
                    <Bars3Icon
                      className="w-[20px] stroke-[#23A0D0] cursor-pointer md:hidden"
                      onClick={() => {
                        setOpen(true);
                      }}
                    ></Bars3Icon>

                    <div className="max-md:hidden flex py-1 px-[12px] items-center gap-[12px] after:w-[calc(100%-2PX)] after:h-[calc(100%-2PX)] bg-red relative after:absolute after:left-[1px] after:top-[1px] rounded-3xl after:rounded-3xl after:bg-white after:z-[-1] z-1 bg-gradient-to-r from-[#202C5B44] via-[#23A0D044] to-[#3CBEB344] grow ps-[4px]">
                      <div className="bg-[#37bb93] p-2 rounded-full">
                        <img
                          src="/svgs/whiteSearch.svg"
                          className="w-[18px]"
                          alt=""
                        />
                      </div>
                      <form
                        action=""
                        className="w-full relative z-[9999]"
                        onSubmit={(e) => handleSearch(e)}
                      >
                        <input
                          type="text"
                          name="search"
                          value={searchQuery}
                          onChange={handleSearchInputChange}
                          placeholder={isRTL ? "عن ماذا تبحث؟" : "Search"}
                          className="text-[16px] font-medium placeholder:text-[#878787] text-[#202C5B] h-[28px] w-full"
                        />
                        <button type="submit" className="hidden"></button>
                      </form>
                    </div>
                  </div>
                )}
                {/* {user && token ? (
                      className="flex gap-[8px] items-center relative"
                      onClick={() => {
                        setProfile(!profile);
                      }}
                    >
                      <div className="rounded-full cursor-pointer">
                        <img
                          className="w-[44px] aspect-square"
                          src={user.img || "/images/prof.png"}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          "border-t-[transparent] border-l-[transparent] border-r-[#202C5B] border-b-[#202C5B] border-[6px] mb-[6px] duration-300 cursor-pointer " +
                          (profile ? "rotate-[225deg]" : "rotate-[45deg]")
                        }
                      ></div>
                      {profile && (
                        <div className="absolute z-50 w-max left-0 top-[100%] mt-[12px] shadow bg-[#EEEEEE] py-[12px] px-[8px] max-md:hidden rounded-[12px]">
                          <div className="bg-white! rounded-full! p-1 flex! items-center! gap-[6px] pe-[48px] mb-[12px] cursor-pointer">
                            <div className="rounded-full! flex! items-center! justify-center!">
                              <img
                                src={user.image || "/images/prof.png"}
                                alt="courses"
                                className="w-[24px] aspect-square"
                              />
                            </div>
                            <div className="text-black! font-medium! text-[16px]">
                              <Link
                                href={
                                  user.role[0] != "student"
                                    ? "/instructor/settings"
                                    : "/settings"
                                }
                              >
                                إعدادات الحساب
                              </Link>
                            </div>
                          </div>
                          <div className="space-y-2!">
                            <div className="pe-3! py-[12px]! flex! items-center! cursor-pointer justify-between! border-b border-t border-[#2FAFC2]!">
                              <div className="flex! items-center! gap-[6px]">
                                <img
                                  src="/icons/H-login/heart.svg"
                                  alt="courses"
                                  className="w-4! h-4!"
                                />
                                <span
                                  href={"/fav"}
                                  className="text-black! font-medium! text-[12px]"
                                >
                                  الدورات المفضلة
                                </span>
                              </div>
                            </div>

                            <div
                              className="pe-3! flex! items-center! justify-between! cursor-pointer"
                              onClick={() => {
                                logout();
                              }}
                            >
                              <div className="flex! items-center! gap-[6px]">
                                <img
                                  src="/icons/logout.svg"
                                  alt="paths"
                                  className="w-4! h-4!"
                                />
                                <span className="text-[#FF0004]! font-medium! text-[12px]">
                                  تسجيل الخروج
                                </span>
                              </div>
                            </div>
                            <div className="mt-[24px]">
                              <div className="text-[12px] text-[#202C5B] text-center font-bold">
                                أكاديمية المهارات<br></br>التطبيقية للتدريب
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : ( */}
                  <div className="flex items-center gap-[12px]">
                    <a
                      href="https://www.astalearn.org/"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   navigate.push("https://www.astalearn.org/");
                      // }}
                      className="py-1 md:py-2 lg:py-2 text-sm md:text-sm lg:text-base text-[#202C5B] hover:text-gradient-to-r from-cyan-500 to-emerald-400 hover:bg-[#1A2555] rounded-full hover:text-white font-bold px-3 transition duration-300"
                    >
                     {t("header.actions.signin")}
                    </a>

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate.push("/Register");
                      }}
                      className="px-3 py-[12px] text-sm md:px-3 md:py-[12px] md:text-sm lg:px-3 lg:py-[12px] lg:text-[16px] hover:text-[#1a2555] text-white font-bold rounded-full bg-gradient-to-r! from-[#23A0D0]! to-68% to-[#3CBEB3]! focus:outline-none! shadow-md! transition! hover:opacity-80! !leading-[1.25] duration-300"
                    >
                     {t("header.actions.signUp")}
                    </a>
                  </div>
                {/* )} */}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mobile Semi Header */}
            <div className="py-2! container">
              <div className="flex items-center justify-between">
                {/* Mobile Logo - Right side */}
                <div className="flex-shrink-0">
                  <Link to={`/${lang}`}>
                    <img
                      src="/images/logo.webp"
                      alt="ASTA Logo"
                      className="h-auto w-[63px]"
                    />
                  </Link>
                </div>

                {/* Mobile menu button and search - Left side */}
                <div className="flex items-center gap-3 relative mobile-search-container overflow-visible">
                  {/* Mobile search icon */}
                  <svg
                    className="w-6 h-6 font-medium text-[#23A0D0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    onClick={() => {
                      setSearch(!search);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const searchValue = formData.get('mobileSearch') || searchQuery;
                      if (searchValue.trim()) {
                        navigate(`/${lang}/search?q=${encodeURIComponent(searchValue)}`);
                        setSearch(false);
                        setShowSuggestions(false);
                      }
                    }}
                  >
                    <div
                      className={
                        "absolute top-[calc(100%+12px)] w-[240px] max-w-[calc(100vw-40px)] lg:hidden flex py-1 px-[12px] items-center gap-[12px] after:w-[calc(100%-2PX)] after:h-[calc(100%-2PX)] after:absolute after:left-[1px] after:top-[1px] rounded-3xl after:rounded-3xl after:bg-white after:z-[-1] z-[40] bg-gradient-to-r from-[#202C5B] via-[#23A0D0] to-[#3CBEB3] duration-300 " +
                        (search ? "" : "invisible opacity-0") + " " +
                        (isRTL ? "left-0" : "right-0")
                      }
                    >
                      <button type="submit" className="w-[22px] h-[22px]">
                        <img src="/svgs/search.svg" alt="" />
                      </button>
                      <input
                        type="text"
                        name="mobileSearch"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder={isRTL ? "عن ماذا تبحث؟" : "Search"}
                        className="text-[16px] font-medium placeholder:text-[#878787] text-[#202C5B] h-[36px] w-full"
                      />
                    </div>
                  </form>

                  {/* Mobile Search Suggestions */}
                  {showSuggestions && searchSuggestions.length > 0 && (
                    <div className={`absolute top-[calc(100%+64px)] w-[240px] max-w-[calc(100vw-40px)] lg:hidden bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-[50] max-h-[300px] overflow-y-auto ${isRTL ? 'left-0' : 'right-0'}`}>
                      {searchSuggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            handleSuggestionClick(suggestion);
                            setSearch(false);
                          }}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 uppercase tracking-wide flex-shrink-0">
                              {suggestion.type === 'category' ? (isRTL ? 'فئة' : 'Category') :
                               suggestion.type === 'course' ? (isRTL ? 'دورة' : 'Course') :
                               (isRTL ? 'دبلومة' : 'Diploma')}
                            </span>
                            <span className="text-sm text-gray-700 font-medium truncate">
                              {suggestion.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

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
          </div>

          {/* Navigation links - Desktop only */}
          <div className="bg-white">
          <div className="md:container w-full">
          <div className="hidden sm:flex justify-start items-center py-3 border-gray-200 bg-white  top-0">
            <div className="flex items-center">
              <Link
                to={`/${lang}`}
                className={
                  "md:text-[18px] lg:text-[20px] px-[16px] py-[8px] font-medium hover:text-[#ffffff] hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] duration-300 transition-colors !leading-[1.25] rounded-lg " +
                  (location.pathname === `/${lang}` || location.pathname === "/"
                    ? "text-[#ffffff] active-nav-link relative bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3]"
                    : "text-[#202C5B] bg-white")
                }
              >
                {t("header.nav.home")}
              </Link>
              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>
              {/* {user && token && (
                <>
                  <a
                    href={"/MyCourses"}
                    className={
                      "md:text-[18px] lg:text-[20px] px-[12px] py-[6px] font-medium hover:text-[#ffffff] hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] duration-300 transition-colors !leading-[1.25] " +
                      (location.pathname === "/MyCourses"
                        ? "text-[#ffffff] active-nav-link relative bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3]"
                        : "text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff]")
                    }
                  >
                    دوراتي
                  </a>
                  <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>
                </>
              )} */}

              {/* Courses dropdown */}
              <div className="relative" ref={coursesRef} onMouseEnter={() => handleDropdownHover('courses')} onMouseLeave={handleDropdownLeave}>
                <button
                  onClick={() => {
                    setCourses(!courses);
                    setAboutDropdown(false);
                    setTrainersDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[16px] py-[8px] font-medium hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 transition-colors !leading-[1.25] min-h-[44px] rounded-lg " +
                    (location.pathname.includes("/Courses/") || location.pathname === "/Courses"
                      ? "text-[#ffffff] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] active-nav-link relative"
                      : "text-[#202C5B] bg-white")
                  }
                >
                  {t("header.nav.courses")}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      courses ? "rotate-180" : ""
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
                {courses && (
                  <div className="absolute top-full right-0 mt-1 w-max bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20" onMouseEnter={() => setHoveredDropdown('courses')} onMouseLeave={handleDropdownLeave}>
                    <div className="py-1">
                      <a
                        href={`/${lang}/courses`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.allCourses")}
                      </a>
                      {categories && categories.map((category) => (
                        <div key={category.id} className="group" style={{ textAlign: "unset" }}>
                          <button
                            type="button"
                            onClick={() =>
                              setOpenCategoryId((prev) =>
                                prev === category.id ? null : category.id
                              )
                            }
                            className="w-full flex gap-2 px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors font-medium"
                          >
                            <span style={{ textAlign: "initial" }}>{category.name}</span>
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                openCategoryId === category.id ? "rotate-180" : ""
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
                          {category.sup_categories &&
                            category.sup_categories.length > 0 &&
                            openCategoryId === category.id && (
                              <div className="pl-4">
                                <a 
                                  href={`/${lang}/categories/${category.id}`} 
                                  className="block px-4 py-2 md:text-sm lg:text-sm hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                                >
                                  - {t("courses.certificates")}
                                </a>
                                {category.sup_categories.map((subCategory) => (
                                  <a
                                    key={subCategory.id}
                                    href={`/${lang}/categories/${category.id}?sup_category=${encodeURIComponent(
                                      subCategory.id
                                    )}`}
                                    className="block px-4 py-2 md:text-sm lg:text-sm hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                                  >
                                    - {subCategory.name}
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

              {/* Diplomas dropdown */}
              <div className="relative" ref={diplomasRef} onMouseEnter={() => handleDropdownHover('diplomas')} onMouseLeave={handleDropdownLeave}>
                <button
                  onClick={() => {
                    setDiplomasDropdown(!diplomasDropdown);
                    setCourses(false);
                    setAboutDropdown(false);
                    setTrainersDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[16px] py-[8px] font-medium hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 transition-colors !leading-[1.25] min-h-[44px] rounded-lg " +
                    (location.pathname.includes("/programs/")
                      ? "text-[#ffffff] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] active-nav-link relative"
                      : "text-[#202C5B] bg-white")
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
                  <div className="absolute top-full right-0 mt-1 pt-4 w-56 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20" onMouseEnter={() => setHoveredDropdown('diplomas')} onMouseLeave={handleDropdownLeave}>
                    <div className="py-1">
                      <a
                        href={`/${lang}/programs`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.allPrograms")}
                      </a>
                      {programs.map((program) => (
                        <a
                          key={program.id}
                          href={`/${lang}/programs/${program.id}`}
                          className="block px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
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
              <div className="relative" ref={aboutRef} onMouseEnter={() => handleDropdownHover('about')} onMouseLeave={handleDropdownLeave}>
                <button
                  onClick={() => {
                    setAboutDropdown(!aboutDropdown);
                    setTrainersDropdown(false);
                  }}
                  className={
                    "flex items-center cursor-pointer gap-1 md:text-[18px] lg:text-[20px] px-[16px] py-[8px] font-medium transition-colors !leading-[1.25] hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 min-h-[44px] rounded-lg " +
                    (false
                      ? "text-[#ffffff] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3] active-nav-link relative"
                      : "text-[#202C5B] bg-white")
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
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] z-20" onMouseEnter={() => setHoveredDropdown('about')} onMouseLeave={handleDropdownLeave}>
                    <div className="py-1">
                      <a
                        href={`/${lang}/about-us`}
                        onClick={() => setAboutDropdown(false)}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.aboutAcademy")}
                      </a>
                      <a
                        href={`/${lang}/vision&mission`}
                        onClick={() => setAboutDropdown(false)}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.vision&Mission")}
                      </a>
                      <a
                        href={`/${lang}/academic-integrity`}
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.standarts")}
                      </a>
                      {/* <a
                        href="#"
                        className="block px-4 py-2 md:text-sm lg:text-lg hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] hover:text-white duration-300 text-[#202C5B] bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-colors"
                      >
                        {t("header.nav.contact")}
                      </a> */}
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[37px] w-[1px] mx-[2px] bg-[#1a2555]"></div>

              <a
                href={`/${lang}/registration`}
                className={
                  "md:text-[18px] lg:text-[20px] px-[16px] py-[8px] font-medium hover:text-[#ffffff] hover:bg-gradient-to-r hover:from-[#23A0D0] hover:to-68% hover:to-[#3CBEB3] duration-300 transition-colors !leading-[1.25] rounded-lg " +
                  (location.pathname === `/${lang}/registration` 
                    ? "text-[#ffffff] bg-gradient-to-r from-[#23A0D0] to-68% to-[#3CBEB3]"
                    : "text-[#202C5B] bg-white")
                }
              >
                {t("header.nav.registration")}
              </a>
            </div>
          </div>
          </div>
          </div>
        
      

      {/* Mobile menu overlay */}

      <div
        className={
          "fixed! inset-0! z-50! md:hidden! h-screen duration-500 " +
          (open ? "w-full" : "w-0")
        }
      >
        <div
          className={
            "fixed! inset-0! bg-black/50! h-screen " +
            (open ? "w-full" : "w-0")
          }
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={
            "fixed! top-0! bottom-0! w-80! min-h-screen bg-[#EEEEEE]! duration-300 z-50 " +
            (open ? (isRTL ? "right-0" : "left-0") : (isRTL ? "right-0 transform translate-x-full" : "left-0 transform -translate-x-full"))
          }
        >
          {/* Mobile menu header */}
          {/* {user && token ? (
            <div></div>
          ) : ( */}
            <div className="bg-[#EEEEEE]! p-3! flex! justify-between! items-center! border-b! border-[#2FAFC2]!">
              <div className="flex! gap-3!">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate.push("/Login");
                    setOpen(false);
                  }}
                  className="text-black! text-lg! font-medium!  rounded-lg! px-3! py-2!"
                >
                 {t("header.actions.signin")}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate.push("/Register");
                    setOpen(false);
                  }}
                  className="text-black! bg-white! text-lg! font-medium! rounded-lg! px-3! py-2!"
                >
                 {t("header.actions.signUp")}
                </button>
              </div>
            </div>
          {/* )} */}

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
                href={`/${lang}/vision&mission`}
                onClick={() => setOpen(false)}
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <InformationCircleIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.nav.vision&Mission")}</span>
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

              <a
                href={`/${lang}/certificate-checker`}
                onClick={() => setOpen(false)}
                className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!"
              >
                <div className="flex! items-center! gap-3!">
                  <ClipboardDocumentCheckIcon className="w-5 h-5 text-[#202C5B]" />
                  <span className="text-black! font-medium! text-lg!">{t("header.actions.verifyCertificate")}</span>
                </div>
              </a>

              <button
                type="button"
                onClick={() => {
                  const newPath = isRTL 
                    ? location.pathname.replace(`/${lang}`, '/en')
                    : location.pathname.replace(`/${lang}`, '/ar');
                  navigate(newPath);
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
              {/* {user && token && (
                <div className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!">
                  <div className="flex! items-center! gap-3!">
                    <img
                      src="/icons/Vector.svg "
                      alt="courses"
                      className="w-4! h-4!"
                    />
                    <a
                      href={"MyCourses"}
                      className="text-black! font-medium! text-lg!"
                    >
                      {"دوراتي"}
                    </a>
                  </div>
                </div>
              )} */}

              {/* {user && token && (
                <>
                  <div className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!">
                    <div className="flex! items-center! gap-3!">
                      <img
                        src="/icons/H-login/mdi_bell.svg"
                        alt="language"
                        className="w-4! h-4!"
                      />
                      <span className="text-black! font-medium! text-lg!">
                        الاشعارات
                      </span>
                    </div>
                  </div>
                  <div className="px-3! py-[12px]! flex! items-center! justify-between! border-b border-[#2FAFC2]!">
                    <div className="flex! items-center! gap-3!">
                      <img
                        src="/icons/H-login/heart.svg"
                        alt="favourite"
                        className="w-4! h-4!"
                      />
                      <span className="text-black! font-medium! text-lg!">
                        الدورات المفضلة
                      </span>
                    </div>
                  </div>
                  <div
                    className="px-3! py-[12px]! flex! items-center! justify-between!"
                    onClick={() => {
                      logout();
                    }}
                  >
                    <div className="flex! items-center! gap-3!">
                      <img
                        src="/icons/logout.svg"
                        alt="favourite"
                        className="w-4! h-4!"
                      />
                      <span className="text-black! font-medium! text-lg!">
                        تسجيل الخروج
                      </span>
                    </div>
                  </div>
                </>
              )} */}
            </div>
          </div>
      
      {/* Global Search Suggestions Dropdown */}
      {showSuggestions && searchSuggestions.length > 0 && (
        <div className="fixed top-30 left-1/2 transform -translate-x-1/2 w-[400px] bg-white rounded-lg shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] z-[9999] max-h-60 overflow-y-auto max-lg:hidden">
          {searchSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 border-b border-gray-100 last:border-b-0"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded font-medium">
                {suggestion.type === 'category' && t('header.nav.category')}
                {suggestion.type === 'subcategory' && t('header.nav.supCategory')}
                {suggestion.type === 'diploma' && t('header.nav.diploma')}
                {suggestion.type === 'course' && t('header.nav.course')}
              </span>
              <span className="text-sm text-gray-800 font-medium">{suggestion.title}</span>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
