export default function WhyUsCard({icon, title, description}) {
    return (
    <>
        <div className="min-h-[120px] w-full min-w-0 flex flex-row justify-end items-center bg-[#EEEEEE] shadow-md ps-4 py-1 mb-4">
            <img src={icon} alt="Icon" className="w-10 h-10 flex-shrink-0" />
            <div className="m-3 min-w-0 flex-1">
                <h3 className="text-2xl font-semibold pt-1 pb-2 px-2 break-words">{title}</h3>
                <p className="font-medium break-words">{description}</p>
            </div>
        </div>
    </>
    )}