import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import standardsData from '../api/Standarts';

const StandardsPage = () => {
  const [activeStandard, setActiveStandard] = useState('integrity');
  const [isBookmarked, setIsBookmarked] = useState({});
  const standardsdata = standardsData;
  const { lang } = useParams();
  const [searchParams] = useSearchParams();
  const isRTL = lang === 'ar';

  // Handle query parameter for specific standard
  useEffect(() => {
    const standardParam = searchParams.get('standard');
    if (standardParam && standardsData[standardParam]) {
      setActiveStandard(standardParam);
    }
  }, [searchParams]);

  const activeData = standardsdata[activeStandard] || {};

  // Get localized data
  const getLocalizedData = (data) => {
    if (typeof data === 'string') {
      return data;
    }
    if (typeof data === 'object' && data !== null) {
      if (data.ar && data.en) {
        return data[lang] || data.ar;
      }
      // If object doesn't have ar/en keys, convert to string
      return JSON.stringify(data);
    }
    return data;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (activeData && activeData.pdf) {
      const a = document.createElement('a');
      a.href = activeData.pdf;
      a.download = activeData.pdf.split('/').pop();
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // Fallback to text download if no PDF is available
      const content = document.getElementById('standard-content').innerText;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${getLocalizedData(activeData.title)}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: getLocalizedData(activeData.title),
        text: getLocalizedData(activeData.title),
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isRTL ? 'تم نسخ الرابط إلى الحافظة' : 'Link copied to clipboard');
    }
  };

  const toggleBookmark = (standardId) => {
    setIsBookmarked(prev => ({
      ...prev,
      [standardId]: !prev[standardId]
    }));
  };

  const renderContentSection = (section, index) => {
    if (!activeData || !activeData.color) return null;
    
    return (
      <div key={index} className="border-b border-gray-200 pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center ">
          <div className={`p-2 rounded-lg ${activeData.color.replace('bg-', 'bg-').replace('-600', '-100')} ${isRTL ? 'ml-3' : 'mr-3'} text-white`}>
            {section.icon && <section.icon className="h-6 w-6" />}
          </div>
          {getLocalizedData(section.title)}
        </h3>
        
        {section.subtitle && (
          <p className="text-gray-700 mb-4 font-medium">{getLocalizedData(section.subtitle)}</p>
        )}
        
        {section.content && (
          <p className="text-gray-700 mb-6 leading-relaxed">{getLocalizedData(section.content)}</p>
        )}

        {section.points && Array.isArray(section.points) && (
          <div className="space-y-4">
            {section.points.map((point, idx) => {
              if (typeof point === 'string') {
                return (
                  <div key={idx} className="flex items-start">
                    <CheckCircleIcon className={`h-5 w-5 text-green-500 ${isRTL ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                    <span className="text-gray-700">{getLocalizedData(point)}</span>
                  </div>
                );
              } else if (point.category) {
                return (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-3">{getLocalizedData(point.category)}</h4>
                    <ul className={`space-y-2 ${isRTL ? 'mr-4' : 'ml-4'}`}>
                      {point.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gray-400 ${isRTL ? 'ml-2' : 'mr-2'} mt-2 flex-shrink-0`}></div>
                          <span>{getLocalizedData(item)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                // Handle object points without category (like the trainee responsibilities)
                return (
                  <div key={idx} className="flex items-start">
                    <CheckCircleIcon className={`h-5 w-5 text-green-500 ${isRTL ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                    <span className="text-gray-700">{getLocalizedData(point)}</span>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    );
  };

  const renderStandardContent = () => {
    if (!activeData || !activeData.content) return null;

    return (
      <div id="standard-content" className="bg-white rounded-2xl shadow-lg p-8">
        {/* Introduction */}
        {activeData.content.introduction && (
          <div className={`bg-gradient-to-r from-blue-50 to-blue-100 ${isRTL ? 'border-r-4' : 'border-l-4'} border-blue-500 p-6 rounded-xl mb-8`}>
            <p className="text-lg text-gray-800 leading-relaxed">{getLocalizedData(activeData.content.introduction)}</p>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-8">
          {activeData.content.sections.map((section, index) => (
            <div key={index}>
              {renderContentSection(section, index)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEO title={isRTL ? "معايير الأكاديمية | اكاديمية المهارات التطبيقية" : "Academic Standards | Applied Skills Training Academy"} />
      {/* Header */}
      {activeData && activeData.color && (
        <header className="bg-white shadow-lg">
          <div className="mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeftIcon className="h-6 w-6" />
                </button>
                <div className={`${activeData.color} p-3 rounded-xl text-white`}>
                  <activeData.icon className="h-8 w-8" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">{getLocalizedData(activeData.number)}</span>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {getLocalizedData(activeData.title)}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 hover:bg-blue-300 transition-colors"
                >
                  <ShareIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-3 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">{isRTL ? 'جميع المعايير' : 'All Standards'}</h2>
              
              <nav className="space-y-3 mb-8">
                {Object.values(standardsData).map((standard) => (
                  <button
                    key={standard.id}
                    onClick={() => setActiveStandard(standard.id)}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      activeStandard === standard.id
                        ? `${standard.color.replace('bg-', 'bg-').replace('-600', '-50')} ${standard.color}`
                        : 'hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg ${standard.color.replace('bg-', 'bg-').replace('-600', '-100')} ${isRTL ? 'ml-4' : 'mr-4'}`}>
                        <standard.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <h3 className={`${activeStandard === standard.id ? 'text-white' : 'text-gray-800'} font-semibold`}>{getLocalizedData(standard.title)}</h3>
                        <p className={`text-sm ${activeStandard === standard.id ? 'text-white' : 'text-gray-600'} mt-1`}>{getLocalizedData(standard.number)}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {renderStandardContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default StandardsPage;