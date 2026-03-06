import { useState } from "react";

const PAYMENT_METHODS = [
  { id: "instapay", ar: "إنستاباي", en: "Instapay" },
  { id: "cash", ar: "نقداً", en: "Cash" },
];

const labels = {
  ar: {
    title: "إضافة معلومات الفواتير",
    item: "البرنامج / الدورة",
    amountDue: "المبلغ المستحق",
    currency: "ج.م",
    email: "البريد الإلكتروني",
    emailPlaceholder: "أدخل البريد الإلكتروني",
    phone: "رقم الجوال",
    phonePlaceholder: "أدخل رقم الجوال",
    cardholderName: "اسم المحول",
    cardholderPlaceholder: "أدخل اسم المحول",
    cardNumber: "رقم مرجع التحويل",
    cardNumberPlaceholder: "أدخل رقم المرجع",
    expiry: "تاريخ التحويل",
    expiryPlaceholder: "أدخل تاريخ التحويل",
    cvv: "رقم Instapay",
    cvvPlaceholder: "أدخل رقم Instapay",
    cancel: "إلغاء",
    payNow: "ادفع الآن",
    closeAria: "إغلاق",
    perPayment: "لكل عملية",
    installmentNote: "استخدم Instapay لإتمام الدفع فوراً",
  },
  en: {
    title: "Add billing information",
    item: "Item",
    amountDue: "Amount due",
    currency: "EGP",
    email: "Email",
    emailPlaceholder: "Enter your email",
    phone: "Phone number",
    phonePlaceholder: "Enter your phone number",
    cardholderName: "Payer Name",
    cardholderPlaceholder: "Enter payer name",
    cardNumber: "Transfer Reference",
    cardNumberPlaceholder: "Enter transfer reference",
    expiry: "Transfer Date",
    expiryPlaceholder: "Enter transfer date",
    cvv: "Instapay Number",
    cvvPlaceholder: "Enter Instapay number",
    cancel: "Cancel",
    payNow: "Pay now",
    closeAria: "Close",
    perPayment: "Per transaction",
    installmentNote: "Use Instapay to complete payment instantly",
  },
};

export default function PaymentModal({
  isOpen: controlledOpen,
  onOpen,
  onClose,
  onPay,
  amount,
  itemName,
  showTrigger = true,
  triggerLabel = "Open modal",
  lang = "en",
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("instapay");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const isControlled = controlledOpen !== undefined;

  const handleExpiryChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    setExpiry(digits.length <= 2 ? digits : `${digits.slice(0, 2)}/${digits.slice(2)}`);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value.replace(/\D/g, "").slice(0, 3));
  };

  const isOpen = isControlled ? controlledOpen : internalOpen;

  const installmentAmount = null;

  const openModal = () => (isControlled ? onOpen?.() : setInternalOpen(true));
  const closeModal = () => {
    if (isControlled) onClose?.();
    else setInternalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const handlePayNow = () => {
    onPay?.();
    closeModal();
  };

  if (!isOpen && !showTrigger) return null;

  const isAr = lang === "ar";
  const t = labels[isAr ? "ar" : "en"];

  return (
    <div>
      <div id="payment-modal" className={!isOpen ? "hidden" : undefined}>
        <div
          className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto"
          onClick={handleBackdropClick}
        >
          <div
            dir={isAr ? "rtl" : "ltr"}
            className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center pb-3 border-b border-gray-300">
              <h3 className="text-slate-900 text-xl font-semibold flex-1">
                {t.title}
              </h3>
              <button
                type="button"
                aria-label={t.closeAria}
                onClick={closeModal}
                className="p-1 shrink-0 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-gray-400 hover:fill-red-500 transition-colors"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  />
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>

            {(amount != null || itemName) && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-gray-200">
                {itemName && (
                  <p className="text-sm text-slate-600 mb-1">
                    {t.item}: {itemName}
                  </p>
                )}
                {amount != null && (
                  <p className="text-lg font-semibold text-slate-900">
                    {t.amountDue}:{" "}
                    {typeof amount === "number"
                      ? amount.toLocaleString(isAr ? "ar-EG" : "en-US")
                      : amount}{" "}
                    {t.currency}
                  </p>
                )}
              </div>
            )}

            <div className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="max-sm:col-span-full">
                  <label className="text-sm text-slate-900 font-medium block mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    autoComplete="email"
                    className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div className="max-sm:col-span-full">
                  <label className="text-sm text-slate-900 font-medium block mb-2">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    autoComplete="tel"
                    className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>

              <hr className="my-8 border-gray-300" />

              <div className="flex items-center flex-wrap gap-6 mb-6">
                {PAYMENT_METHODS.map((method) => (
                  <div key={method.id} className="flex items-center">
                    <input
                      type="radio"
                      name="pay-method"
                      id={`pay-${method.id}`}
                      value={method.id}
                      checked={selectedPaymentMethod === method.id}
                      onChange={() => setSelectedPaymentMethod(method.id)}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <label
                      htmlFor={`pay-${method.id}`}
                      className="text-sm text-slate-900 font-medium ms-3 cursor-pointer"
                    >
                      {isAr ? method.ar : method.en}
                    </label>
                  </div>
                ))}
              </div>

              {selectedPaymentMethod === "instapay" && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-slate-700">{t.installmentNote}</p>
                  <p className="text-base font-semibold text-slate-900 mt-2">
                    {t.perPayment}: {typeof amount === "number" ? amount.toLocaleString(isAr ? "ar-EG" : "en-US") : amount} {t.currency}
                  </p>
                </div>
              )}

              {(selectedPaymentMethod === "instapay") && (
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="max-sm:col-span-full">
                    <label className="text-sm text-slate-900 font-medium block mb-2">
                      {t.cardholderName}
                    </label>
                    <input
                      type="text"
                      placeholder={t.cardholderPlaceholder}
                      className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div className="max-sm:col-span-full">
                    <label className="text-sm text-slate-900 font-medium block mb-2">
                      {t.cardNumber}
                    </label>
                    <input
                      type="text"
                      placeholder={t.cardNumberPlaceholder}
                      className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-900 font-medium block mb-2">
                      {t.expiry}
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={expiry}
                      onChange={handleExpiryChange}
                      className="px-3 py-2.5 bg-white border border-gray-400 text-slate-900 w-20 text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-900 font-medium block mb-2">
                      {t.cvv}
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      placeholder="CVV"
                      maxLength={3}
                      value={cvv}
                      onChange={handleCvvChange}
                      className="px-3 py-2.5 bg-white border border-gray-400 text-slate-900 w-16 text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                </div>
              )}
            </div>

            <hr className="my-8 border-gray-300" />

            <div className={`flex gap-4 ${isAr ? "flex-row-reverse" : "justify-end"}`}>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-200 hover:bg-gray-300 text-slate-900 cursor-pointer"
              >
                {t.cancel}
              </button>
              <button
                type="button"
                onClick={handlePayNow}
                className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                {t.payNow}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showTrigger && (
        <button
          type="button"
          onClick={openModal}
          className="mt-4 mx-auto block px-4 py-2 rounded-lg text-white text-sm font-medium border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
        >
          {triggerLabel}
        </button>
      )}
    </div>
  );
}
