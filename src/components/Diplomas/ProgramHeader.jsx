  import { ArrowLeftIcon, BookOpenIcon, StarIcon, UserIcon, CalendarIcon, ClockIcon, ShareIcon, BookmarkIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { getProgramData } from '../../api/Programs';

function ProgramHeader({ program, lang }) {
  const navigate = useNavigate();
  const isRTL = lang === 'ar';
  
  // Get localized program data
  const localizedProgram = getProgramData(program, lang);

  return (
    <div className="relative bg-gradient-to-r from-[#202C5B] to-[#226796] text-white py-16 bg-no-repeat bg-cover" style={{ backgroundImage: localizedProgram.image ? `url(${localizedProgram.image})` : 'none' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#202C5B]/90 to-[#226796]/20"></div>
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -right-20 w-64 h-64 border-t-[120px] border-r-[120px] border-t-white border-r-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border-b-[180px] border-l-[180px] border-b-white border-l-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <button className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeftIcon className="h-5 w-5" />
          <span>{isRTL ? 'العودة للبرامج' : 'Back to Programs'}</span>
        </button>
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <BookOpenIcon className="h-4 w-4" />
              <span className="text-sm font-medium">{localizedProgram.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {localizedProgram.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              {localizedProgram.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              {/* <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-[#FFD166] fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-lg">{program.rating}</div>
                  <div className="text-sm text-blue-100">({program.reviews} {isRTL ? 'تقييم' : 'reviews'})</div>
                </div>
              </div> */}
              
              {/* <div className="flex items-center gap-2 text-blue-100">
                <UserIcon className="h-5 w-5" />
                <span>{localizedProgram.instructor.name}</span>
              </div> */}
            </div>
          </div>
          
          <div className="lg:w-1/3 w-full">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className='flex'>
                  <div className="text-3xl font-bold">{program.price}</div>
                  <img src="/svgs/icons/WhiteRiyal.svg" alt="" className='w-10'/>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-blue-200" />
                  <span>{isRTL ? 'يبدأ ' : 'Starts '}{program.startDate || (isRTL ? 'قريبا' : 'Soon')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 text-blue-200" />
                  <span>{localizedProgram.duration}</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <UserIcon className="h-5 w-5 text-blue-200" />
                  <span>{localizedProgram.instructor.name}</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <img src="/images/tabby-logo-1.webp" className='w-15' alt="" />
                  <img src="/images/tamaralogo_ar.webp" className='w-15' alt="" />
                </div>
              </div>
              
              <button onClick={() => navigate(`/${lang}/registration`)} className="w-full bg-gradient-to-r from-[#226796] to-[#23A0D0] text-white py-4 rounded-xl font-bold text-lg mb-4 hover:shadow-2xl transition-all duration-300">
                {isRTL ? 'سجل الآن' : 'Register Now'}
              </button>
              
              <div className="flex gap-3">
                <button
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 py-3 rounded-xl hover:bg-white/20 transition-colors"
                  onClick={() => {
                    navigator.share({
                      title: localizedProgram.title,
                      text: localizedProgram.subtitle,
                      url: window.location.href,
                    });
                  }}
                >
                  <ShareIcon className="h-5 w-5" />
                  <span>{isRTL ? 'مشاركة' : 'Share'}</span>
                </button>
                {/* <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 py-3 rounded-xl hover:bg-white/20 transition-colors">
                  <BookmarkIcon className="h-5 w-5" />
                  <span>حفظ</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
  
  export default ProgramHeader;