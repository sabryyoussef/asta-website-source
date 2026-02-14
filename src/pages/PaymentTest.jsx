import { useState } from "react";
import { useParams } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";

const TEST_AMOUNT = 10;

export default function PaymentTest() {
  const { lang = "ar" } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const isRTL = lang === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">
          {isRTL ? "صفحة اختبار الدفع" : "Payment test page"}
        </h1>
        <p className="text-slate-600">
          {isRTL ? "المبلغ المعروض للمدفوعات (تجريبي)" : "Amount shown for payment (test)"}
        </p>
        <p className="text-3xl font-semibold text-slate-900">
          {TEST_AMOUNT.toLocaleString(isRTL ? "ar-SA" : "en-US")} {isRTL ? "ر.س" : "SAR"}
        </p>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {isRTL ? "فتح نافذة الدفع" : "Open payment modal"}
        </button>
      </div>

      <PaymentModal
        isOpen={modalOpen}
        onOpen={() => setModalOpen(true)}
        onClose={() => setModalOpen(false)}
        onPay={() => console.log("Pay clicked (test)")}
        amount={TEST_AMOUNT}
        itemName={isRTL ? "دفع تجريبي" : "Test payment"}
        showTrigger={false}
        lang={lang}
      />
    </div>
  );
}
