  import { ShieldCheckIcon } from '@heroicons/react/24/outline';
  
  function PaymentSection({ formData, handleInputChange, errors, lang }) {
    return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <ShieldCheckIcon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{lang === 'ar' ? 'الدفع والتفاصيل' : 'Payment & Details'}</h2>
          <p className="text-gray-600">{lang === 'ar' ? 'اختر طريقة الدفع واكتب أي ملاحظات إضافية' : 'Choose payment method and add any additional notes'}</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-gray-700 mb-4 font-medium">
            {lang === 'ar' ? 'طريقة الدفع' : 'Payment Method'}
          </label>
          <div className="space-y-4">
            {[
              { id: 'full', label: {ar: 'دفع كامل', en: 'Full Payment'} },// desc: {ar: 'خصم 5% عند الدفع الكامل', en: '5% discount for full payment'}
              { id: 'installment', label: {ar: 'تقسيط', en: 'Installment'} },// desc: {ar: 'دفع على 12 شهر بدون فوائد', en: 'Pay in 12 months without interest'}
              // { id: 'bank', label: {ar: 'تحويل بنكي', en: 'Bank Transfer'} }// desc: {ar: 'خصم إضافي 2% للتحويل البنكي', en: 'Additional 2% discount for bank transfer'}
            ].map(method => (
              <div
                key={method.id}
                className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                  formData.paymentMethod === method.id
                    ? 'border-[#23A0D0] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleInputChange({ 
                  target: { name: 'paymentMethod', value: method.id } 
                })}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    formData.paymentMethod === method.id
                      ? 'border-[#23A0D0] bg-[#23A0D0]'
                      : 'border-gray-300'
                  }`}>
                    {formData.paymentMethod === method.id && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{method.label[lang]}</h3>
                    {/* <p className="text-sm text-gray-600">{method.desc[lang]}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-4 font-medium">
            {lang === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            className="w-full h-40 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#23A0D0] focus:border-transparent resize-none"
            placeholder={lang === 'ar' ? 'أي ملاحظات أو متطلبات خاصة تريد إضافتها...' : 'Any additional notes or special requirements you would like to add...'}
          ></textarea>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="w-5 h-5 rounded border-gray-300 text-[#23A0D0] focus:ring-[#23A0D0]"
          />
          <label htmlFor="agreeToTerms" className="text-gray-700">
            {lang === 'ar' ? (
              <>
                أوافق على <a href={`/${lang}/academic-integrity`} className="text-[#23A0D0] underline">الشروط والأحكام</a> و<a href={`/${lang}/academic-integrity`} className="text-[#23A0D0] underline">سياسة الخصوصية</a> *
              </>
            ) : (
              <>
                I agree to the <a href={`/${lang}/academic-integrity`} className="text-[#23A0D0] underline">terms and conditions</a> and <a href={`/${lang}/academic-integrity`} className="text-[#23A0D0] underline">privacy policy</a> *
              </>
            )}
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm mt-2">{errors.agreeToTerms}</p>
        )}
      </div>
    </div>
  );
}

export default PaymentSection;