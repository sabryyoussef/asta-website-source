export default function VissionAndMission() {
    let missions = [
        {
          title: "التعليم المتميز",
          description:
            "تقديم دورات تعليمية عالية الجودة تجمع بين المعرفة الأكاديمية والخبرة العملية.",
        },
        {
          title: "الابتكار والشراكة",
          description:
            "توظيف أحدث التقنيات التعليمية وبناء شراكات مع نخبة من أعضاء هيئة التدريس والخبراء.",
        },
        {
          title: "التمكين والتطوير",
          description:
            "تسهيل وصول الطلبة إلى موارد تعليمية مرنة وشاملة تدعم تطورهم الأكاديمي والمهني بما يواكب رؤية المملكة 2030.",
        },
      ];
      let ourStudents = [
        {
          icon: "/svgs/icons/Cap.svg",
          number: "+ 100,000",
          text: "خريجين",
        },
        {
          icon: "/svgs/icons/Earth.svg",
          number: "+ 26",
          text: "بلد",
        },
        {
          icon: "/svgs/icons/clock.svg",
          number: "+ 206,151",
          text: "ساعات الدراسة",
        },
        {
          icon: "/svgs/icons/Person.svg",
          number: "+ 200,000",
          text: "طالب",
        },
      ];
      let ourValues = [
        {
            icon: "/images/innovation.png",
            title: "الابتكار",
        },
        {
            icon: "/images/trustworthiness.png",
            title: "الجودة والاحترافية",
        },
        {
            icon: "/images/secureshield.png",
            title: "المصداقية",
        },
        {
            icon: "/images/excellence.png",
            title: "التنوع والتميز في تقديم البرامج التدريبية",
        },
        {
            icon: "/images/international.png",
            title: "الالتزام بالمعايير الدولية",
        },
        {
            icon: "/images/creativity.png",
            title: "الحلول الإبداعية",
        },
    ]
  return (
    <>
      <div className="container flex flex-col items-center justify-center align-middle py-8 px-2 bg-white">
        <h1 className="text-[24px] font-bold my-10">أكاديمية المهارات التطبيقية</h1>
        <div className="w-[2px] h-[70px] bg-[#3CBEB3] my-9"></div>
        <h2 className="text-[24px] my-10 font-bold">رؤيتنا</h2>
        <p className="w-3/4 text-2xl font-normal text-center">
          &quot;الريادة والاحترافية والمهنية في بناء مجتمع مهني متطور منتج&quot;
        </p>
        <div className="w-[2px] h-[70px] bg-[#3CBEB3] my-9"></div>
        <h2 className="text-[24px] my-10 font-bold">رسالتنا</h2>
        <p className="w-3/4 text-2xl font-normal text-center leading-relaxed">
          {" "}
          تقديم خدمات تدريبية واستشارية للأفراد والمؤسسات وتنفيذ الاختبارات
          الدولية للمساهمة في تحقيق التنمية المستدامة من خلال توظيف أحدث
          التقنيات وفقاً لمعايير التدريب العالمية.
        </p>
        <div className="w-[2px] h-[70px] bg-[#3CBEB3] my-9"></div>
        <h2 className="text-[24px] my-10 font-bold">مهمتنا</h2>
        <div className="flex flex-row justify-around align-middle flex-wrap gap-2">
          {missions.map((mission, index) => {
            return (
              <div
                key={index}
                className="h-50 w-full md:w-3/10 bg-[#EEEEEE] text-center py-5"
              >
                <h3 className="text-2xl my-5 font-semibold">{mission.title}</h3>
                <p className="w-3/4 mx-auto text-center font-semibold leading-relaxed">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-[2px] h-[80px] bg-[#3CBEB3] my-9"></div>
        <h2 className="text-[24px] my-10 font-bold">قيمنا</h2>
        <div className="flex w-full justify-around align-middle flex-row flex-wrap gap-2 gap-y-4">
          {ourValues.map((value, index) => {
            return (
              <div
                key={index}
                className="flex justify-around items-center w-full md:w-5/11 bg-linear-to-r from-[#3CBEB3] to-[#EEEEEE] text-center py-2"
              >
                  <img src={value.icon} alt="Icon" className="w-10 h-10 mx-5" />
                  <h3 className="text-2xl w-100 md:w-full font-semibold pt-1 px-2">
                    {value.title}
                  </h3>
              </div>
            );
          })}
        </div>
        <div className="w-[2px] h-[80px] bg-[#3CBEB3] my-9"></div>
        <h2 className="text-[24px] my-10 font-bold">طلابنا</h2>
        <div className="flex w-full justify-around align-middle flex-row flex-wrap gap-2">
          {ourStudents.map((student, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between items-center w-4/10 md:w-3/13 bg-[#EEEEEE] text-center py-5"
              >
                <img
                  src={student.icon}
                  alt="Icon"
                  className="w-10 h-10 color-[#3CBEB3]"
                />
                <h3 className="text-2xl my-5 font-bold">
                  {student.number}
                </h3>
                <p className="font-semibold">{student.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
