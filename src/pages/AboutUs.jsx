import React from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import AboutUsCard from "../components/AboutUs/AboutUsCard";
import WhyUsCard from "../components/AboutUs/WhyUsCard";

export default function AboutUs() {
  const { lang } = useParams();
  const isRTL = lang === 'ar';

    let CardsData = [
  // Who Are We Section
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "نقدم افضل الدورات المجانية",
      en: "We Offer the Best Free Courses"
    },
    description: {
      ar: "نحن نعمل علي العديد من الاشياء التي تجعل تجربتك لا مثيل لها, لتحصل علي المزيد من راحة البال و الرضي عند الشراء. نحن نعمل علي العديد من الاشياء التي تجعل",
      en: "We work on many things that make your experience unparalleled, so you get more peace of mind and satisfaction when purchasing. We work on many things that make"
    },
  },
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "المنصة الاولي في مجالها في الوطن العربي",
      en: "The Leading Platform in the Arab World"
    },
    description: {
      ar: "نحن نعمل علي العديد من الاشياء التي تجعل تجربتك لا مثيل لها, لتحصل علي المزيد من راحة البال و الرضي عند الشراء. نحن نعمل علي العديد من الاشياء التي تجعل",
      en: "We work on many things that make your experience unparalleled, so you get more peace of mind and satisfaction when purchasing. We work on many things that make"
    },
  },
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "منصة متنوعة الدورات",
      en: "Diverse Course Platform"
    },
    description: {
      ar: "نحن نعمل علي العديد من الاشياء التي تجعل تجربتك لا مثيل لها, لتحصل علي المزيد من راحة البال و الرضي عند الشراء. نحن نعمل علي العديد من الاشياء التي تجعل",
      en: "We work on many things that make your experience unparalleled, so you get more peace of mind and satisfaction when purchasing. We work on many things that make"
    },
  },

  // ----- Our Services - 3, 9 -----
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "الدورات القصيرة",
      en: "Short Courses"
    },
    description: {
      ar: "لدينا مجموعة متميزة ومتنوعة من الدورات القصيرة والاحترافية والتي توفر فرصًا هائلة للتطوير المهني والشخصي، وتُمكّن الأفراد من اكتساب مهارات جديدة، ومواكبة التطورات في سوق العمل، وتعزيز فرص التوظيف. حيث تتميز هذه الدورات بالمرونة في التعلم، وتمكين المتعلمين من الوصول للمعرفة في أي وقت ومن أي مكان، وفي المجالات التالية: تكنولوجيا المعلومات والأمن السيبراني- الإدارة والمال والأعمال – القانون- الضيافة والفندقة – اللغة الإنجليزية",
      en: "We have an outstanding and diverse collection of short and professional courses that provide tremendous opportunities for professional and personal development, enabling individuals to acquire new skills, keep up with developments in the job market, and enhance employment opportunities. These courses are characterized by flexibility in learning, enabling learners to access knowledge at any time and from anywhere, in the following fields: Information Technology and Cybersecurity - Management, Finance and Business - Law - Hospitality and Hotel Management - English Language"
    },
  },
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "الاختبارات الدولية",
      en: "International Examinations"
    },
    description: {
      ar: "الأكاديمية مركز اختبارات معتمد من خلال شراكات متعددة لعقد وتنفيذ الاختبارات الدولية في مجالات كثيرة ومتنوعة منها (تكنولوجيا المعلومات والأمن السيبراني- الإدارة والمال والأعمال – القانون- الضيافة والفندقة- اللغة الانجليزية)، مما يمنح للمتدربين الحصول على الشهادة الاحترافية الدولية بسهولة ويسر",
      en: "The Academy is an accredited testing center through multiple partnerships to conduct and implement international examinations in many diverse fields including (Information Technology and Cybersecurity - Management, Finance and Business - Law - Hospitality and Hotel Management - English Language), enabling trainees to obtain international professional certification easily and conveniently"
    },
  },
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "الشهادات الاحترافية",
      en: "Professional Certifications"
    },
    description: {
      ar: "تضم أكاديمية المهارات التطبيقية عديد من الشهادات الاحترافية المهنية والتي تعزز فرص الالتحاق بسوق العمل والحصول على وظيفية مناسبة لمهاراتك وقدراتك المهنية، وتساعدك على التطوير المهني والترقي في مجالات كثيرة منها (تكنولوجيا المعلومات والأمن السيبراني- الإدارة والمال والأعمال – القانون- الضيافة والفندقة- اللغة الانجليزية)",
      en: "Applied Skills Academy (ASTA) includes many professional certifications that enhance opportunities to join the job market and obtain a position suitable for your skills and professional capabilities, and help you with professional development and advancement in many fields including (Information Technology and Cybersecurity - Management, Finance and Business - Law - Hospitality and Hotel Management - English Language)"
    },
  },
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "الدبلومات المهنية",
      en: "Professional Diplomas"
    },
    description: {
      ar: "لدى الأكاديمية مجموعة متنوعة من الدبلومات المهنية الاحترافية والتي تم اختيارها بدقة فائقة لتناسب احتياجاتك المهنية والوظيفية، كما تتميز هذه الدبلومات بالمرونة والتنظيم حيث يمكن الحصول على دبلوم مشارك، أو دبلوم متوسط أو استكمال الدراسة للحصول على البكالوريوس، كما توفر هذه الدبلومات نقاطاً للخروج ونظاماً واضحاً للتجسير يتيح للمتدرب إمكانية وسهولة الخروج من الدبلوم والحصول على شهادة احترافية مهنية واستكماله فيما بعد أو الالتحاق بدبلوم آخر",
      en: "The Academy has a diverse collection of professional diplomas that have been carefully selected to suit your professional and career needs. These diplomas are characterized by flexibility and organization, where you can obtain an associate diploma, an intermediate diploma, or complete studies to obtain a bachelor's degree. These diplomas also provide exit points and a clear bridging system that enables the trainee to easily exit the diploma and obtain a professional certification and complete it later or join another diploma"
    },
  },
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "الحلول والاستشارات",
      en: "Solutions and Consultations"
    },
    description: {
      ar: "لدى الاكاديمية نخبة مميزة من الاستشاريين لتحديد الاحتياجات التدريبية للأفراد والمؤسسات وتقديم الحلول التدريبية والاستشارات الفنية، وتصميم برامج تدريبية مخصصة، وتقديم الدعم والمتابعة لتحقيق أهدافهم وتعزيز مهاراتهم وكفاءاتهم، مما يؤدي إلى تحسين الأداء وزيادة الإنتاجية",
      en: "The Academy has an elite group of consultants to identify training needs for individuals and institutions, provide training solutions and technical consultations, design customized training programs, and provide support and follow-up to achieve their goals and enhance their skills and competencies, leading to improved performance and increased productivity"
    },
  },
  {
    icon: "/svgs/icons/Vector.svg",
    title: {
      ar: "الحقائب التدريبية",
      en: "Training Packages"
    },
    description: {
      ar: "لدى الاكاديمية فريق متخصص في إعداد وتصميم وتطوير الحقائب التدريبية المتكاملة وفقاً لأحدث المعايير الدولية والتي تلبي احتياجات الافراد والمؤسسات، وتتميز بأنها مرنة وقابلة للتخصيص والتحديث لتلبية الاحتياجات المتغيرة",
      en: "The Academy has a specialized team in preparing, designing and developing integrated training packages according to the latest international standards that meet the needs of individuals and institutions, and are characterized by being flexible and customizable and updatable to meet changing needs"
    },
  },

  // ------ 9, 16 - Why Us ------ 
  {
    icon: "/svgs/icons/mdi_engine-outline.svg",
    title: {
      ar: "الشراكات الدولية والإقليمية",
      en: "International and Regional Partnerships"
    },
    description: {
      ar: "الأكاديمية الأولى والرائدة في عقد الشراكات الدولية مع الجهات التدريبية الدولية والإقليمية.",
      en: "The first and leading academy in establishing international partnerships with international and regional training institutions."
    },
  },
  {
    icon: "/svgs/icons/mdi_engine-outline.svg",
    title: {
      ar: "مركز اختبارات معتمد",
      en: "Accredited Testing Center"
    },
    description: {
      ar: "نوفر لك الوقت والجهد والمال من خلال الالتحاق بالاختبارات الدولية لدينا.",
      en: "We save you time, effort and money by joining our international examinations."
    },
  },
  {
    icon: "/svgs/icons/mdi_engine-outline.svg",
    title: {
      ar: "التركيز على المهارات",
      en: "Skills Focus"
    },
    description: {
      ar: "تتيح فرصًا للتطبيق العملي والتدريب الميداني والمحاكاة لتعزيز فهم المتدربين لبيئة العمل واكتساب المهارات بسهولة ويسر.",
      en: "Provides opportunities for practical application, field training and simulation to enhance trainees' understanding of the work environment and acquire skills easily and smoothly."
    },
  },
  {
    icon: "/svgs/icons/mdi_engine-outline.svg",
    title: {
      ar: "محتوى تدريبي متميز",
      en: "Distinguished Training Content"
    },
    description: {
      ar: "تصميم الحقائب التدريبية والمقررات لتناسب متطلبات سوق العمل واحتياجات الأفراد والمؤسسات.",
      en: "Designing training packages and courses to suit labor market requirements and the needs of individuals and institutions."
    },
  },{
    icon: "/svgs/icons/mdi_engine-outline.svg",
    title: {
      ar: "فريق عمل متخصص",
      en: "Specialized Team"
    },
    description: {
      ar: "تضم الأكاديمية فريقًا متخصصًا من الخبراء المحليين والدوليين والمدربين المتخصصين في مختلف المسارات المهنية والبرامج التدريبية.",
      en: "The Academy includes a specialized team of local and international experts and trainers specialized in various career paths and training programs."
    },
  },{
    icon: "/svgs/icons/mdi_engine-outline.svg",
    title: {
      ar: "خدمة عملاء مميزة",
      en: "Excellent Customer Service"
    },
    description: {
      ar: "تتميز الأكاديمية بقنوات اتصال جيدة وفعالة مع عملائها لتلبية احتياجاتهم من خلال بيئة تدريبية ديناميكية تعزز من جودة المخرجات وكفاءة الأداء.",
      en: "The Academy is distinguished by good and effective communication channels with its clients to meet their needs through a dynamic training environment that enhances the quality of outputs and performance efficiency."
    },
  },
  ];


  const aboutUsContent = {
    ar: {
      whoAreWe: "من نحن؟",
      description: "أكاديمية المهارات التطبيقية للتدريب (ASTA) أكاديمية رائدة في مجال التدريب والاستشارات المتنوعة ومتخصصة في تقديم البرامج التدريبية للشهادات الاحترافية المهنية الدولية، والدورات القصيرة والدبلومات المهنية وعقد وتنفيذ الاختبارات الدولية المختلفة من خلال الشراكات الاستراتيجية الدولية. تقوم فلسفة التدريب في أكاديمية المهارات التطبيقية للتدريب (ASTA) على الجودة والاحترافية والابتكارية في تصميم البرامج التدريبية والدبلومات المهنية وعقد وتنفيذ الاختبارات الدولية بدقة عالية لتتوافق مع أفضل الممارسات العالمية وتزويد المتدربين بالمهارات والمعرفة التي يحتاجون إليها لمواجهة التحديات المعاصرة من خلال مدربين أكفاء ومتخصصين.",
      ourServices: "خدماتنا",
      ourGoal: "هدفنا ان نكون المنصة التعليمية الرائدة في المملكة العربية السعودية التي تمكّن الطلبة والباحثين من اكتساب المعرفة والمهارات الحديثة عبر بيئة تعليمية رقمية مبتكرة، تواكب احتياجات سوق العمل وتسهم في بناء مجتمع معرفي متطور.",
      whyUs: "لماذا نحن؟"
    },
    en: {
      whoAreWe: "Who Are We?",
      description: "Applied Skills Academy for Training (ASTA) is a leading academy in the field of training and diverse consulting, specialized in providing training programs for international professional certifications, short courses and professional diplomas, and conducting and implementing various international examinations through strategic international partnerships. The training philosophy at Applied Skills Academy for Training (ASTA) is based on quality, professionalism and innovation in designing training programs and professional diplomas and conducting and implementing international examinations with high precision to comply with best global practices and provide trainees with the skills and knowledge they need to face contemporary challenges through qualified and specialized trainers.",
      ourServices: "Our Services",
      ourGoal: "Our goal is to be the leading educational platform in the Kingdom of Saudi Arabia that enables students and researchers to acquire knowledge and modern skills through an innovative digital educational environment that meets the needs of the labor market and contributes to building a developed knowledge society.",
      whyUs: "Why Us?"
    }
  };

  const content = aboutUsContent[lang] || aboutUsContent.ar;

  return (
    <>
      <SEO 
        titleAr="عن الأكاديمية | اكاديمية المهارات التطبيقية"
        titleEn="About the Academy | Applied Skills Training Academy"
        descriptionAr="تعرف على اكاديمية المهارات التطبيقية ورؤيتنا ورسالتنا"
        descriptionEn="Learn about Applied Skills Training Academy, our vision and mission"
        url={`https://asta.edu.sa/${lang}/about-us`}
        isRTL={isRTL}
      />
      {/* WHo Are We Section */}
      <div className={`container max-w-[1300px] mx-auto flex flex-col items-center justify-center px-2 bg-white overflow-x-hidden`} dir={isRTL ? 'rtl' : 'ltr'}>
        <h1 className={`text-[24px] font-bold mt-10 mb-5 ${isRTL ? 'text-right' : 'text-left'}`}>{content.whoAreWe}</h1>
        <h1 className={`text-2xl my-10 text-justify leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
          {content.description}
        </h1>
        {/* Services Section */}
        <h1 className={`text-[24px] font-bold mt-10 mb-5 ${isRTL ? 'text-right' : 'text-left'}`}>{content.ourServices}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {CardsData.slice(3, 9).map((item, index) => (
            <AboutUsCard
              key={index}
              icon={item.icon}
              title={typeof item.title === 'object' ? item.title[lang] : item.title}
              description={typeof item.description === 'object' ? item.description[lang] : item.description}
              isRTL={isRTL}
            />
          ))}
        </div>
        <h1 className={`text-2xl mt-10 mb-5 text-justify leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
          {content.ourGoal}
        </h1>
        {/* Why Us Section */}
        <h1 className={`text-[24px] font-bold my-10 ${isRTL ? 'text-right' : 'text-left'}`}>{content.whyUs}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {CardsData.slice(9, 16).map((item, index) => (
            <WhyUsCard
              key={index}
              icon={item.icon}
              title={typeof item.title === 'object' ? item.title[lang] : item.title}
              description={typeof item.description === 'object' ? item.description[lang] : item.description}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </>
  );
}
