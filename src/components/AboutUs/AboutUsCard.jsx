export default function AboutUsCard({icon, title, description, isRTL = true}) {
    return (
    <>
        <div className="md:h-96 w-full min-w-0 bg-[#EEEEEE] shadow-md p-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className={`flex flex-row items-center mb-3 ${isRTL ? 'justify-start' : 'justify-start'}`}>
                <img src={icon} alt="Icon" className="w-10 h-10 flex-shrink-0" />
                <h3 className={`text-2xl font-semibold pt-1 px-2 break-words ${isRTL ? 'text-right' : 'text-left'}`}>{title}</h3>
            </div>
            <p className={`font-medium text-justify leading-relaxed break-words ${isRTL ? 'text-right' : 'text-left'}`}>{description}</p>
        </div>
    </>
    )}