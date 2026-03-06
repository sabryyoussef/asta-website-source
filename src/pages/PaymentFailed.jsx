import { XCircleIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";

export default function PaymentFailed() {
  const { lang = "ar" } = useParams();
  const isRTL = lang === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <SEO
        titleAr="فشل الدفع | عقول بيطرية"
        titleEn="Payment Failed | Vet Brains"
        descriptionAr="فشلت عملية الدفع"
        descriptionEn="Payment failed"
        url={`https://vetbrains.edu.eg/${lang}/payment-failed`}
        isRTL={isRTL}
      />
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-100 to-rose-100 flex items-center justify-center">
          <XCircleIcon className="h-14 w-14 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-3">
          {isRTL ? "فشلت عملية الدفع" : "Payment Failed"}
        </h1>
        <p className="text-slate-600 mb-8">
          {isRTL
            ? "عذراً، لم تتم عملية الدفع. يرجى المحاولة مرة أخرى أو التواصل معنا للمساعدة."
            : "Sorry, your payment could not be processed. Please try again or contact us for assistance."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/${lang}`}
            className="px-6 py-3 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {isRTL ? "العودة للرئيسية" : "Back to Home"}
          </Link>
          <Link
            to={`/${lang}/payment-test`}
            className="px-6 py-3 rounded-lg text-sm font-medium border-2 border-slate-300 text-slate-700 hover:border-slate-400 transition-colors"
          >
            {isRTL ? "إعادة المحاولة" : "Try Again"}
          </Link>
        </div>
      </div>
    </div>
  );
}
