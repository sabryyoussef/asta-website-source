import { useParams } from "react-router-dom";

export default function VissionAndMission() {
    const { lang } = useParams();
    const isRTL = lang === 'ar';

    const content = {
        ar: {
            academyName: "أكاديمية المهارات التطبيقية",
            vision: "رؤيتنا",
            visionText: "الريادة والاحترافية والمهنية في بناء مجتمع مهني متطور منتج",
            mission: "رسالتنا",
            missionText: "تقديم خدمات تدريبية واستشارية للأفراد والمؤسسات وتنفيذ الاختبارات الدولية للمساهمة في تحقيق التنمية المستدامة من خلال توظيف أحدث التقنيات وفقاً لمعايير التدريب العالمية.",
            ourMission: "مهمتنا",
            ourValues: "قيمنا",
            ourStudents: "طلابنا"
        },
        en: {
            academyName: "Applied Skills Academy",
            vision: "Our Vision",
            visionText: "Leadership, professionalism and expertise in building a developed and productive professional community",
            mission: "Our Mission",
            missionText: "Providing training and consulting services for individuals and institutions and implementing international examinations to contribute to achieving sustainable development through the use of the latest technologies in accordance with global training standards.",
            ourMission: "Our Mission",
            ourValues: "Our Values",
            ourStudents: "Our Students"
        }
    };

    const pageContent = content[lang] || content.ar;

    let missions = [
        {
          title: {
            ar: "التعليم المتميز",
            en: "Excellence in Education"
          },
          description: {
            ar: "تقديم دورات تعليمية عالية الجودة تجمع بين المعرفة الأكاديمية والخبرة العملية.",
            en: "Providing high-quality educational courses that combine academic knowledge and practical experience."
          },
        },
        {
          title: {
            ar: "الابتكار والشراكة",
            en: "Innovation and Partnership"
          },
          description: {
            ar: "توظيف أحدث التقنيات التعليمية وبناء شراكات مع نخبة من أعضاء هيئة التدريس والخبراء.",
            en: "Employing the latest educational technologies and building partnerships with elite faculty members and experts."
          },
        },
        {
          title: {
            ar: "التمكين والتطوير",
            en: "Empowerment and Development"
          },
          description: {
            ar: "تسهيل وصول الطلبة إلى موارد تعليمية مرنة وشاملة تدعم تطورهم الأكاديمي والمهني بما يواكب رؤية المملكة 2030.",
            en: "Facilitating students' access to flexible and comprehensive educational resources that support their academic and professional development in line with Vision 2030."
          },
        },
      ];
      let ourStudents = [
        {
          icon: "/svgs/icons/Cap.svg",
          number: "+ 100,000",
          text: {
            ar: "خريجين",
            en: "Graduates"
          },
        },
        {
          icon: "/svgs/icons/Earth.svg",
          number: "+ 26",
          text: {
            ar: "بلد",
            en: "Countries"
          },
        },
        {
          icon: "/svgs/icons/clock.svg",
          number: "+ 206,151",
          text: {
            ar: "ساعات الدراسة",
            en: "Study Hours"
          },
        },
        {
          icon: "/svgs/icons/Person.svg",
          number: "+ 200,000",
          text: {
            ar: "طالب",
            en: "Students"
          },
        },
      ];
      let ourValues = [
        {
            icon: "/images/innovation.webp",
            title: {
                ar: "الابتكار",
                en: "Innovation"
            },
        },
        {
            icon: "/images/trustworthiness.webp",
            title: {
                ar: "الجودة والاحترافية",
                en: "Quality and Professionalism"
            },
        },
        {
            icon: "/images/secureshield.webp",
            title: {
                ar: "المصداقية",
                en: "Credibility"
            },
        },
        {
            icon: "/images/excellence.webp",
            title: {
                ar: "التنوع والتميز في تقديم البرامج التدريبية",
                en: "Diversity and Excellence in Training Programs"
            },
        },
        {
            icon: "/images/international.webp",
            title: {
                ar: "الالتزام بالمعايير الدولية",
                en: "Commitment to International Standards"
            },
        },
        {
            icon: "/images/creativity.webp",
            title: {
                ar: "الحلول الإبداعية",
                en: "Creative Solutions"
            },
        },
    ]
  return (
    <>
      <div className={`container flex flex-col items-center justify-center align-middle py-8 px-2 bg-white`} dir={isRTL ? 'rtl' : 'ltr'}>
        <h1 className={`text-[24px] font-bold my-10 ${isRTL ? 'text-right' : 'text-left'}`}>{pageContent.academyName}</h1>
        <div className="w-[2px] h-[70px] bg-[#3CBEB3] my-9"></div>
        <h2 className={`text-[24px] my-10 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>{pageContent.vision}</h2>
        <p className={`w-3/4 text-2xl font-normal text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          &quot;{pageContent.visionText}&quot;
        </p>
        <div className="w-[2px] h-[70px] bg-[#3CBEB3] my-9"></div>
        <h2 className={`text-[24px] my-10 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>{pageContent.mission}</h2>
        <p className={`w-3/4 text-2xl font-normal text-center leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
          {pageContent.missionText}
        </p>
        <div className="w-[2px] h-[70px] bg-[#3CBEB3] my-9"></div>
        <h2 className={`text-[24px] my-10 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>{pageContent.ourMission}</h2>
        <div className="flex flex-row justify-around align-middle flex-wrap gap-2">
          {missions.map((mission, index) => {
            return (
              <div
                key={index}
                className={`h-50 w-full md:w-3/10 bg-[#EEEEEE] text-center py-5 ${isRTL ? 'text-right' : 'text-left'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <h3 className={`text-2xl my-5 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
                  {typeof mission.title === 'object' ? mission.title[lang] : mission.title}
                </h3>
                <p className={`w-3/4 mx-auto font-semibold leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {typeof mission.description === 'object' ? mission.description[lang] : mission.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-[2px] h-[80px] bg-[#3CBEB3] my-9"></div>
        <h2 className={`text-[24px] my-10 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>{pageContent.ourValues}</h2>
        <div className="flex w-full justify-around align-middle flex-row flex-wrap gap-2 gap-y-4">
          {ourValues.map((value, index) => {
            return (
              <div
                key={index}
                className={`flex justify-around items-center w-full md:w-5/11 bg-linear-to-r from-[#3CBEB3] to-[#EEEEEE] text-center py-2 ${isRTL ? 'flex-row' : 'flex-row'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                  <img src={value.icon} alt="Icon" className="w-10 h-10 mx-5" />
                  <h3 className={`text-2xl w-100 md:w-full font-semibold pt-1 px-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {typeof value.title === 'object' ? value.title[lang] : value.title}
                  </h3>
              </div>
            );
          })}
        </div>
        <div className="w-[2px] h-[80px] bg-[#3CBEB3] my-9"></div>
        <h2 className={`text-[24px] my-10 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>{pageContent.ourStudents}</h2>
        <div className="flex w-full justify-around align-middle flex-row flex-wrap gap-2">
          {ourStudents.map((student, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-between items-center w-4/10 md:w-3/13 bg-[#EEEEEE] text-center py-5 ${isRTL ? 'text-right' : 'text-left'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <img
                  src={student.icon}
                  alt="Icon"
                  className="w-10 h-10 color-[#3CBEB3]"
                />
                <h3 className="text-2xl my-5 font-bold">
                  {student.number}
                </h3>
                <p className={`font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
                  {typeof student.text === 'object' ? student.text[lang] : student.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
