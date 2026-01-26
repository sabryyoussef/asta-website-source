export default function AboutUsCard({icon, title, description}) {
    return (
    <>
        <div className="md:h-96 w-full min-w-0 bg-[#EEEEEE] shadow-md p-4">
            <div className="flex flex-row justify-start items-center mb-3">
                <img src={icon} alt="Icon" className="w-10 h-10 flex-shrink-0" />
                <h3 className="text-2xl font-semibold pt-1 px-2 break-words">{title}</h3>
            </div>
            <p className="font-medium text-justify leading-relaxed break-words">{description}</p>
        </div>
    </>
    )}