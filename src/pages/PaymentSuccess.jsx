import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";

export default function PaymentSuccess() {
  const { lang = "ar" } = useParams();
  const isRTL = lang === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <SEO
        titleAr="تم الدفع بنجاح | اكاديمية المهارات التطبيقية"
        titleEn="Payment Successful | Applied Skills Training Academy"
        descriptionAr="تمت عملية الدفع بنجاح"
        descriptionEn="Payment completed successfully"
        url={`https://asta.edu.sa/${lang}/payment-success`}
        isRTL={isRTL}
      />
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
          <CheckCircleIcon className="h-14 w-14 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-3">
          {isRTL ? "تمت عملية الدفع بنجاح" : "Payment Successful"}
        </h1>
        <p className="text-slate-600 mb-8">
          {isRTL
            ? "شكراً لك، تم استلام دفعتك بنجاح. سنتواصل معك قريباً."
            : "Thank you, your payment has been received successfully. We will contact you soon."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/${lang}`}
            className="px-6 py-3 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {isRTL ? "العودة للرئيسية" : "Back to Home"}
          </Link>
          <Link
            to={`/${lang}/registration`}
            className="px-6 py-3 rounded-lg text-sm font-medium border-2 border-slate-300 text-slate-700 hover:border-slate-400 transition-colors"
          >
            {isRTL ? "تسجيل جديد" : "New Registration"}
          </Link>
        </div>
      </div>
    </div>
  );
}
