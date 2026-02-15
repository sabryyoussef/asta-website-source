import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ClockIcon,
  BookOpenIcon,
  TrophyIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { getProgramData } from '../../api/Programs.js';

const PROGRAM_ID = 3;

const AdvertisingSection = () => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const safeLang = lang === 'en' ? 'en' : 'ar';
  const program = useMemo(() => getProgramData(PROGRAM_ID, safeLang), [safeLang]);
  const isRTL = safeLang === 'ar';

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Advertising Single Card - rendered synchronously to avoid CLS */}
        {program?.id != null && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className={`flex flex-col ${isRTL ? 'md:flex-row' : 'md:flex-row'}`}>
              {/* Content Section */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {program?.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-gray-600 text-lg mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {program?.overview?.substring(0, 150)}...
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`flex items-center text-gray-700`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${isRTL ? 'ml-3' : 'mr-3'} from-blue-500 to-purple-600`}>
                        <ClockIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <p className="font-semibold">{isRTL ? 'المدة' : 'Duration'}</p>
                        <p className="text-sm text-gray-600">{program?.duration}</p>
                      </div>
                    </div>
                    <div className={`flex items-center text-gray-700`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${isRTL ? 'ml-3' : 'mr-3'} from-green-500 to-teal-600`}>
                        <BookOpenIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <p className="font-semibold">{isRTL ? 'المستوى' : 'Level'}</p>
                        <p className="text-sm text-gray-600">{program?.level}</p>
                      </div>
                    </div>
                    <div className={`flex items-center text-gray-700`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${isRTL ? 'ml-3' : 'mr-3'} from-orange-500 to-red-600`}>
                        <TrophyIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <p className="font-semibold">{isRTL ? 'الشهادة' : 'Certificate'}</p>
                        <p className="text-sm text-gray-600">{isRTL ? 'دبلوم معتمد' : 'Certified Diploma'}</p>
                      </div>
                    </div>
                    <div className={`flex items-center text-gray-700`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${isRTL ? 'ml-3' : 'mr-3'} from-purple-500 to-pink-600`}>
                        <UserGroupIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className={isRTL ? 'text-right' : 'text-left'}>
                        <p className="font-semibold">{isRTL ? 'الساعات' : 'Hours'}</p>
                        <p className="text-sm text-gray-600">{program?.creditHours ? `${program.creditHours} ${isRTL ? 'ساعة' : 'hour'}` : isRTL ? 'غير محدد' : 'Not specified'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price and CTA Section */}
                <div className={`flex flex-col sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''} items-start sm:items-center justify-between gap-4`}>
                  {/* <div>
                      <>
                        <span className="text-3xl font-bold text-blue-600">
                          {program.price} ر.س
                        </span>
                      </>
                  </div> */}
                  <button 
                    onClick={() => {
                      // Redirect to program detail page
                      const programId = program?.id || '1';
                      window.location.href = `/${lang}/programs/${programId}`;
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    {isRTL ? 'تفاصيل البرنامج' : 'Program Details'}
                  </button>
                </div>
              </div>

              {/* Image Section - fixed aspect ratio reserves space to prevent CLS when image loads */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[3/2] bg-gradient-to-br from-blue-500 to-purple-600">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdvertisingSection;
