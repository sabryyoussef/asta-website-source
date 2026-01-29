export default function WhyUsCard({icon, title, description, isRTL = true}) {
    return (
    <>
        <div className={`min-h-[120px] w-full min-w-0 flex flex-row items-center bg-[#EEEEEE] shadow-md py-1 mb-4 ${isRTL ? 'justify-end ps-4' : 'justify-start pe-4'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            <img src={icon} alt="Icon" className="w-10 h-10 flex-shrink-0" />
            <div className="m-3 min-w-0 flex-1">
                <h3 className={`text-2xl font-semibold pt-1 pb-2 px-2 break-words ${isRTL ? 'text-right' : 'text-left'}`}>{title}</h3>
                <p className={`font-medium break-words ${isRTL ? 'text-right' : 'text-left'}`}>{description}</p>
            </div>
        </div>
    </>
    )}