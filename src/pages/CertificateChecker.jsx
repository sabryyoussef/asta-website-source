// "use client";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Search, CheckCircle, Loader2, RefreshCw } from "lucide-react";
// import { checkCertificate } from "@/store/slices/userDataSlice";
// import { toast } from "react-hot-toast";

export default function CertificateChecker() {
  // const [code, setCode] = useState("");
  // const dispatch = useDispatch();

  // const certificate = useSelector((state) => state.student.certificate.data);
  // const status = useSelector((state) => state.student.certificate.status);
  // const error = useSelector((state) => state.student.certificate.error);

  // const loading = status === "loading";

  // useEffect(() => {
  //   if (status === "succeeded" && certificate) {
  //     if (certificate.certificate_exists) {
  //       toast.success(
    //       <div className="text-right">
    //         <p className="font-semibold mb-1">تم التحقق من الشهادة بنجاح</p>
    //         <p className="text-sm opacity-90">
    //           {certificate.certificate?.course?.title}
    //         </p>
    //         <p className="text-xs opacity-75 mt-1">
    //           الكود: {certificate.certificate?.code}
    //         </p>
    //       </div>,
    //       {
    //         duration: 5000,
    //         style: {
    //           background: "#10b981",
    //           color: "#fff",
    //         },
    //       }
    //     );
    //   } else {
    //     toast.error("الشهادة غير موجودة في النظام", {
    //       duration: 4000,
    //       style: {
    //         background: "#ef4444",
    //         color: "#fff",
    //       },
    //     });
    //   }
    // }

    // if (status === "failed" && error) {
    //   toast.error(error || "حدث خطأ أثناء التحقق من الشهادة. حاول مرة أخرى", {
    //     duration: 4000,
    //   });
    // }
  // }, [status, certificate, error]);

  // const handleSubmit = () => {
  //   if (!code.trim() || loading) return;
  //   dispatch(checkCertificate(code.trim()));
  // };

  // const handleReset = () => {
  //   setCode("");
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     // handleSubmit();
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ backgroundColor: "#E5F7FA" }}
            >
              <Search className="w-8 h-8" style={{ color: "#2BAAC7" }} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              التحقق من الشهادة
            </h1>
            <p className="text-gray-600">أدخل كود الشهادة للتحقق من صحتها</p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                كود الشهادة
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="مثال: CERT-2024-12345"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition text-right"
                onFocus={(e) => {
                  e.target.style.borderColor = "#2BAAC7";
                  e.target.style.boxShadow =
                    "0 0 0 3px rgba(43, 170, 199, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db";
                  e.target.style.boxShadow = "none";
                }}
                disabled={loading}
                dir="ltr"
              />
            </div>

            {status === "succeeded" &&
              certificate &&
              certificate.certificate_exists && (
                <div
                  className="flex items-start gap-3 p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300"
                  style={{
                    backgroundColor: "#E5F7FA",
                    borderColor: "#2BAAC7",
                    borderWidth: "1px",
                  }}
                >
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#2BAAC7" }}
                  />
                  <div className="flex-1">
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: "#147A8F" }}
                    >
                      تم التحقق من الشهادة بنجاح
                    </p>
                    {certificate.certificate && (
                      <div
                        className="text-sm space-y-1.5"
                        style={{ color: "#1A8FA5" }}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">الكود:</span>
                          <span className="text-left" dir="ltr">
                            {certificate.certificate.code}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">الدورة:</span>
                          <span className="text-right">
                            {certificate.certificate.course?.title}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">تاريخ الإصدار:</span>
                          <span className="text-right">
                            {new Date(
                              certificate.certificate.issued_at
                            ).toLocaleDateString("ar-EG", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                disabled={loading || !code.trim()}
                className="flex-1 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor:
                    loading || !code.trim() ? "#94a3b8" : "#2BAAC7",
                }}
                onMouseEnter={(e) => {
                  if (!loading && code.trim()) {
                    e.target.style.backgroundColor = "#1A8FA5";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading && code.trim()) {
                    e.target.style.backgroundColor = "#2BAAC7";
                  }
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري التحقق...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    تحقق من الشهادة
                  </>
                )}
              </button>

              {(status === "succeeded" || status === "failed") && (
                <button
                  onClick={handleReset}
                  className="px-4 py-3 border rounded-lg font-medium transition flex items-center justify-center"
                  style={{
                    borderColor: "#2BAAC7",
                    color: "#2BAAC7",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#E5F7FA";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                  title="البحث عن شهادة أخرى"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
