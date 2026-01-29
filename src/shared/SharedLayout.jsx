import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsupButton";
import CallButton from "../components/CallButton";
import AIBotButton from "../components/AIBotButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NotFound from "../pages/NotFound";

export default function SharedLayout() {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    // Call all hooks first (Rules of Hooks)
    useEffect(() => {
        // Only change language if it's valid
        if (lang === "en" || lang === "ar") {
            i18n.changeLanguage(lang);
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        }
    }, [lang, i18n]);

    // Show 404 for invalid language parameters (after all hooks)
    if (lang !== "en" && lang !== "ar") {
        return <NotFound lang={lang} />;
    }

    return (
        <div>
            <Navbar />
            {/* <Header /> */}
            <Outlet />
            <Footer />
            <WhatsAppButton />
            <CallButton />
            <AIBotButton />
            <ScrollToTopButton />
        </div>
    );
}

