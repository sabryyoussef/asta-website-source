import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsupButton";
import CallButton from "../components/CallButton";
import AIBotButton from "../components/AIBotButton";

export default function SharedLayout() {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang !== "en" && lang !== "ar") return;

     i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang, i18n]);

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <WhatsAppButton />
            <CallButton />
            <AIBotButton />
        </div>
    );
}

