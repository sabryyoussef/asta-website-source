import { EnvelopeIcon } from '@heroicons/react/24/outline';

function EmailConfirmationNotice ({ formData }) {
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-6 mb-8">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="hidden md:block bg-blue-100 p-3 rounded-xl">
            <EnvelopeIcon className="h-8 w-8 text-[#202C5B]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 mb-2">معلومات الإرسال</h3>
            <p className="text-gray-600 mb-2">
              بعد إكمال النموذج، سيتم إرسال البيانات تلقائياً إلى:
            </p>
            <div className="bg-white border border-blue-100 rounded-lg p-3 inline-block">
              <code className="text-[#202C5B] font-bold">info@vetbrains.edu.eg</code>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              وسيصلك نسخة على بريدك الإلكتروني ({formData.email || 'بعد إدخاله'}) كتأكيد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailConfirmationNotice;