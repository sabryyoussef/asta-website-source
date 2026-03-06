import {
  ShieldCheckIcon,
  LockClosedIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  CalendarIcon,
  EnvelopeIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  LifebuoyIcon,
  IdentificationIcon,
  ComputerDesktopIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon,
  CogIcon,
  PhoneIcon,
  UserIcon,
  CurrencyDollarIcon,
  ReceiptRefundIcon
} from '@heroicons/react/24/outline';

const standardsData = {
    integrity: {
      id: 'integrity',
      title: {
        ar: 'سياسة وقوانين النزاهة في بيئة التدريب الإلكتروني',
        en: 'Integrity Policy and Regulations in E-Learning Environment'
      },
      icon: ShieldCheckIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار الأول',
        en: 'First Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/FirstStandart.pdf',
      content: {
        introduction: {
          ar: 'تهدف هذه السياسة إلى تعزيز قيم النزاهة الأكاديمية وضمان بيئة تدريبية عادلة ومحترمة، تحافظ على حقوق الملكية الفكرية وتمنع جميع أشكال الغش والانتحال.',
          en: 'This policy aims to promote academic integrity values and ensure a fair and respectful training environment that preserves intellectual property rights and prevents all forms of cheating and plagiarism.'
        },
        sections: [
          {
            title: {
              ar: 'أولاً: التعريف بالنزاهة الأكاديمية',
              en: 'First: Definition of Academic Integrity'
            },
            content: {
              ar: 'النزاهة الأكاديمية هي الالتزام بقيم الصدق، الأمانة، والمسؤولية في جميع جوانب العملية التدريبية، بما يشمل الواجبات، الاختبارات، المشاريع، الأنشطة، والتفاعل في بيئة التدريب الإلكتروني.',
              en: 'Academic integrity is the commitment to values of honesty, trustworthiness, and responsibility in all aspects of the training process, including assignments, tests, projects, activities, and interaction in the e-learning environment.'
            },
            icon: ShieldCheckIcon,
          },
          {
            title: {
              ar: 'ثانيًا: المخالفات الشائعة للنزاهة',
              en: 'Second: Common Integrity Violations'
            },
            subtitle: {
              ar: 'لها أشكال متعددة منها:',
              en: 'They have multiple forms including:'
            },
            points: [
              {
                category: {
                  ar: '1- الانتحال (Plagiarism):',
                  en: '1- Plagiarism:'
                },
                items: [
                  {
                    ar: 'نسخ أو اقتباس محتوى دون الإشارة إلى مصدره.',
                    en: 'Copying or quoting content without referencing its source.'
                  },
                  {
                    ar: 'إنتحال صفة وشخصية الغير في أي من الأمور التي لها علاقة بالأكاديمية وشؤونها.',
                    en: 'Impersonating others in any matters related to the academy and its affairs.'
                  },
                  {
                    ar: 'استخدام إجابات أو تقارير من الآخرين وتقديمها على أنها عمل شخصي.',
                    en: 'Using answers or reports from others and presenting them as personal work.'
                  }
                ]
              },
              {
                category: {
                  ar: '2- الغش (Cheating):',
                  en: '2- Cheating:'
                },
                items: [
                  {
                    ar: 'استخدام مصادر غير مصرّح بها أثناء الاختبارات أو الأنشطة.',
                    en: 'Using unauthorized sources during tests or activities.'
                  },
                  {
                    ar: 'التعاون مع الآخرين في أداء مهام فردية.',
                    en: 'Cooperating with others in performing individual tasks.'
                  },
                  {
                    ar: 'الغش في الاختبار بأي وسيلة كانت، أو شروع أو اشتراك فيه، أو المساعدة عليه، أو الحصول على أية معلومات خاصة بمحتوى الاختبار بطرق غير مشروعة.',
                    en: 'Cheating on tests by any means, attempting or participating in cheating, assisting in it, or obtaining any information about test content through illegitimate means.'
                  },
                  {
                    ar: 'استخدام أجهزة اتصال أو تصنت أو تسجيل أثناء الاختبارات.',
                    en: 'Using communication devices, eavesdropping, or recording during tests.'
                  }
                ]
              },
              {
                category: {
                  ar: '3- التحايل على أنظمة التدريب:',
                  en: '3- Bypassing Training Systems:'
                },
                items: [
                  {
                    ar: 'تسجيل الدخول باسم متدرب آخر.',
                    en: 'Logging in using another trainee\'s account.'
                  },
                  {
                    ar: 'فتح أكثر من حساب بهدف الغش أو التلاعب.',
                    en: 'Creating multiple accounts for cheating or manipulation purposes.'
                  }
                ]
              },
              {
                category: {
                  ar: '4- تزوير البيانات:',
                  en: '4- Data Forgery:'
                },
                items: [
                  {
                    ar: 'تعديل النتائج، أو الادعاء بإنهاء المهام دون القيام بها.',
                    en: 'Modifying results or claiming task completion without actually doing them.'
                  },
                  {
                    ar: 'تقديم أعذار كاذبة للحصول على تمديد أو إعادة اختبار.',
                    en: 'Providing false excuses to obtain extensions or test retakes.'
                  },
                  {
                    ar: 'إعطاء وثائق أو مستندات تخص الأكاديمية للغير بقصد استخدامها بطرق غير مشروعة، أو التحدث باسم الأكاديمية بصفة غير رسمية.',
                    en: 'Providing academy documents to others for illegitimate use or speaking on behalf of the academy unofficially.'
                  },
                  {
                    ar: 'الاطلاع دون وجه حق على المعلومات السرية الخاصة بأي من منسوبي الأكاديمية أو نشرها أو إرشاد الآخرين بكيفية الحصول عليها.',
                    en: 'Unauthorized access to confidential information of academy personnel, its publication, or guiding others on how to obtain it.'
                  },
                  {
                    ar: 'تزوير المستندات أو الشهادات أو الوثائق أو استعمالها بعد تزويرها سواء كانت صادرة من الأكاديمية أو من خارجها ما دامت لها صلة بعلاقة المتدرب بالأكاديمية، أو بإجراءات الدراسة بها، أو إتلاف كل أو بعض محتوياتها عمداً، أو إتباع طرق غير مشروعة للحصول عليها.',
                    en: 'Forging documents, certificates, or papers or using forged ones, whether issued by the academy or externally, as long as related to the trainee\'s relationship with the academy or its study procedures, intentionally damaging all or part of their contents, or using illegitimate methods to obtain them.'
                  }
                ]
              },
              {
                category: {
                  ar: '5- سوء استخدام المنصة:',
                  en: '5- Platform Misuse:'
                },
                items: [
                  {
                    ar: 'نشر محتوى غير لائق أو مسيء.',
                    en: 'Publishing inappropriate or offensive content.'
                  },
                  {
                    ar: 'اختراق النظام أو محاولة تعطيله.',
                    en: 'Hacking the system or attempting to disable it.'
                  },
                  {
                    ar: 'يحظر نشر أي محتوى يتعرض لأشخاص أو جهات بهدف الإساءة إليهم.',
                    en: 'Publishing any content targeting individuals or entities for the purpose of insulting them is prohibited.'
                  },
                  {
                    ar: 'يحظر نشر أي محتوى مخالف للإسلام والقيم والعادات والأخلاق السائدة في المجتمع السعودي.',
                    en: 'Publishing any content contrary to Islam, values, customs, and prevailing morals in Saudi society is prohibited.'
                  },
                  {
                    ar: 'يحظر نشر أي محتوى سياسي يضر بمصالح الوطن ووحدة شعبه.',
                    en: 'Publishing any political content harmful to the nation\'s interests and its people\'s unity is prohibited.'
                  },
                  {
                    ar: 'يحظر نشر أي محتوى (عنصري- طائفي- قبلي) يؤثر على الوحدة الوطنية.',
                    en: 'Publishing any (racist, sectarian, tribal) content affecting national unity is prohibited.'
                  },
                  {
                    ar: 'يحظر نشر أو الترويج لأي محتوى ذا أهداف تجارية أو ربحية.',
                    en: 'Publishing or promoting any content with commercial or profit objectives is prohibited.'
                  }
                ]
              }
            ],
            icon: ExclamationTriangleIcon,
          },
          {
            title: {
              ar: 'ثالثًا: مسؤوليات المتدرب في بيئة التعليم الإلكتروني',
              en: 'Third: Trainee Responsibilities in E-Learning Environment'
            },
            points: [
              {
                ar: 'الالتزام بأداء جميع الأنشطة بجهد ذاتي.',
                en: 'Commitment to performing all activities through self-effort.'
              },
              {
                ar: 'احترام حقوق الملكية الفكرية.',
                en: 'Respecting intellectual property rights.'
              },
              {
                ar: 'الحفاظ على سرية بيانات الدخول وعدم مشاركتها مع الآخرين.',
                en: 'Maintaining login data confidentiality and not sharing it with others.'
              },
              {
                ar: 'الإبلاغ عن أي سلوك غير نزيه يتم ملاحظته.',
                en: 'Reporting any observed dishonest behavior.'
              },
              {
                ar: 'الالتزام بجدول ومواعيد المحاضرات والتدريبات العملية.',
                en: 'Adhering to schedules and timings of lectures and practical training.'
              }
            ],
            icon: UserIcon,
          },
          {
            title: {
              ar: 'رابعًا: العقوبات المحتملة',
              en: 'Fourth: Potential Penalties'
            },
            subtitle: {
              ar: 'وفقًا لدرجة وخطورة المخالفة، قد تشمل العقوبات ما يلي:',
              en: 'Depending on the degree and severity of the violation, penalties may include:'
            },
            points: [
              {
                ar: 'تنبيه أو إنذار رسمي.',
                en: 'Warning or official notice.'
              },
              {
                ar: 'خصم درجات أو إلغاء النشاط التدريبي.',
                en: 'Deduction of grades or cancellation of training activity.'
              },
              {
                ar: 'الحرمان من دخول الاختبار.',
                en: 'Deprivation from entering the test.'
              },
              {
                ar: 'الإقصاء المؤقت أو النهائي من البرنامج التدريبي.',
                en: 'Temporary or permanent exclusion from the training program.'
              },
              {
                ar: 'إبلاغ الجهات الأمنية إذا كانت المخالفة تمس الوطن وتهدد أمنه واستقراره.',
                en: 'Reporting to security authorities if the violation affects the nation and threatens its security and stability.'
              }
            ],
            icon: LockClosedIcon,
          },
          {
            title: {
              ar: 'خامسًا: مسؤوليات الأكاديمية تجاه المتدربين',
              en: 'Fifth: Academy Responsibilities Towards Trainees'
            },
            points: [
              {
                ar: 'توعية المتدربين بسياسات النزاهة منذ البداية.',
                en: 'Awareness of trainees about integrity policies from the beginning.'
              },
              {
                ar: 'تهيئة بيئة تعليمية تدريبية عادلة وتنافسية.',
                en: 'Preparing a fair and competitive educational training environment.'
              },
              {
                ar: 'مراقبة النشاطات التدريبية وضمان الشفافية.',
                en: 'Monitoring training activities and ensuring transparency.'
              },
              {
                ar: 'التحقيق العادل في أي بلاغات أو شكاوى تتعلق بالنزاهة.',
                en: 'Fair investigation of any reports or complaints related to integrity.'
              }
            ],
            icon: ShieldCheckIcon,
          },
          {
            title: {
              ar: 'سادسًا: آليات التحقق من النزاهة',
              en: 'Sixth: Integrity Verification Mechanisms'
            },
            points: [
              {
                ar: 'استخدام تقنيات كشف الانتحال.',
                en: 'Using plagiarism detection technologies.'
              },
              {
                ar: 'مراقبة الاختبارات إلكترونيًا عند الحاجة.',
                en: 'Electronic monitoring of tests when needed.'
              },
              {
                ar: 'مراجعة تفاعل المتدرب وسجلات الدخول.',
                en: 'Reviewing trainee interaction and login records.'
              },
              {
                ar: 'إجراء مقابلات شفهية أو تقييمات مباشرة للتأكد من صحة الأداء.',
                en: 'Conducting oral interviews or direct assessments to verify performance authenticity.'
              }
            ],
            icon: MagnifyingGlassIcon,
          }
        ]
      }
    },
    privacy: {
      id: 'privacy',
      title: {
        ar: 'سياسة الخصوصية في بيئة التدريب الإلكتروني',
        en: 'Privacy Policy in E-Learning Environment'
      },
      icon: LockClosedIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار الثاني',
        en: 'Second Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/SecondStandart.pdf',
      content: {
        introduction: {
          ar: 'تهدف هذه السياسة إلى حماية بيانات المتدربين وضمان الخصوصية والأمان في التعامل مع جميع المعلومات الشخصية التي يتم جمعها خلال عملية التدريب الإلكتروني.',
          en: 'This policy aims to protect trainees\' data and ensure privacy and security in handling all personal information collected during the e-learning process.'
        },
        sections: [
          {
            title: {
              ar: 'أولاً: البيانات التي يتم جمعها',
              en: 'First: Data Collected'
            },
            content: {
              ar: 'قد تشمل البيانات التي يتم جمعها من المتدرب ما يلي:',
              en: 'Data collected from trainees may include:'
            },
            points: [
              {
                ar: 'الاسم الكامل.',
                en: 'Full name.'
              },
              {
                ar: 'البريد الإلكتروني.',
                en: 'Email address.'
              },
              {
                ar: 'رقم الهوية أو رقم الموظف (إن وجد).',
                en: 'ID number or employee number (if applicable).'
              },
              {
                ar: 'معلومات الاتصال (الهاتف، العنوان).',
                en: 'Contact information (phone, address).'
              },
              {
                ar: 'بيانات الدخول للمنصة (اسم المستخدم وكلمة المرور).',
                en: 'Platform login data (username and password).'
              },
              {
                ar: 'التقدم الأكاديمي والتقييمات.',
                en: 'Academic progress and evaluations.'
              },
              {
                ar: 'أوقات الدخول والنشاطات المنجزة على المنصة.',
                en: 'Login times and completed activities on the platform.'
              },
              {
                ar: 'المراسلات والدعم الفني.',
                en: 'Correspondence and technical support.'
              }
            ],
            icon: DocumentTextIcon,
          },
          {
            title: {
              ar: 'ثانيًا: كيفية استخدام البيانات',
              en: 'Second: How Data is Used'
            },
            content: {
              ar: 'تُستخدم البيانات للأغراض التالية:',
              en: 'Data is used for the following purposes:'
            },
            points: [
              {
                ar: 'إدارة الحسابات وتسهيل الوصول إلى الدورات التدريبية.',
                en: 'Managing accounts and facilitating access to training courses.'
              },
              {
                ar: 'تحسين جودة التدريب والخدمات المقدمة.',
                en: 'Improving training quality and services provided.'
              },
              {
                ar: 'إصدار الشهادات والتقارير.',
                en: 'Issuing certificates and reports.'
              },
              {
                ar: 'التواصل مع المتدرب حول المحتوى أو التحديثات أو الدعم الفني.',
                en: 'Communicating with trainees about content, updates, or technical support.'
              },
              {
                ar: 'التحليل الإحصائي وتحسين تجربة المتدربين.',
                en: 'Statistical analysis and improving trainee experience.'
              },
              {
                ar: 'الالتزام بالمتطلبات القانونية أو المؤسسية.',
                en: 'Compliance with legal or institutional requirements.'
              }
            ],
            icon: ChartBarIcon,
          },
          {
            title: {
              ar: 'ثالثًا: حماية البيانات',
              en: 'Third: Data Protection'
            },
            points: [
              {
                ar: 'يتم تخزين البيانات على خوادم آمنة.',
                en: 'Data is stored on secure servers.'
              },
              {
                ar: 'تُستخدم بروتوكولات التشفير عند تبادل البيانات الحساسة.',
                en: 'Encryption protocols are used when exchanging sensitive data.'
              },
              {
                ar: 'لا يتم مشاركة البيانات مع أي طرف ثالث دون إذن صريح من المتدرب، إلا إذا تطلب الأمر ذلك قانونيًا أو إداريًا.',
                en: 'Data is not shared with any third party without explicit trainee consent, unless legally or administratively required.'
              },
              {
                ar: 'يُمنح حق الوصول إلى البيانات فقط للموظفين المخوّلين بتسجيل المتدربين في الدورات والبرامج التدريبية.',
                en: 'Access to data is granted only to authorized employees responsible for registering trainees in courses and training programs.'
              }
            ],
            icon: LockClosedIcon,
          },
          {
            title: {
              ar: 'رابعًا: حقوق المتدرب',
              en: 'Fourth: Trainee Rights'
            },
            points: [
              {
                ar: 'الاطلاع على البيانات: يحق للمتدرب طلب نسخة من بياناته المخزّنة.',
                en: 'Access to Data: The trainee has the right to request a copy of their stored data.'
              },
              {
                ar: 'تحديث البيانات: يمكن للمتدرب تحديث بياناته الشخصية في أي وقت.',
                en: 'Data Update: The trainee can update their personal data at any time.'
              },
              {
                ar: 'حذف الحساب: يمكن تقديم طلب لحذف الحساب والبيانات المرتبطة به، ما لم تكن مطلوبة للاحتفاظ لأغراض إدارية أو قانونية.',
                en: 'Account Deletion: A request can be submitted to delete the account and associated data, unless required for retention for administrative or legal purposes.'
              },
              {
                ar: 'الاعتراض على استخدام البيانات: يمكن للمتدرب الاعتراض على استخدام بياناته لأغراض تسويقية أو تحليلية.',
                en: 'Objection to Data Use: The trainee can object to the use of their data for marketing or analytical purposes.'
              }
            ],
            icon: UserIcon,
          },
          {
            title: {
              ar: 'خامسًا: ملفات تعريف الارتباط (Cookies)',
              en: 'Fifth: Cookies'
            },
            content: {
              ar: 'قد تستخدم المنصة ملفات تعريف الارتباط لتتبع وتحسين أداء المتدرب داخل المنصة. ويحق للمتدرب التحكم في إعدادات المتصفح لتعطيل هذه الملفات إذا رغب.',
              en: 'The platform may use cookies to track and improve trainee performance within the platform. The trainee has the right to control browser settings to disable these files if desired.'
            },
            icon: CogIcon,
          },
          {
            title: {
              ar: 'سادسًا: التعديلات على سياسة الخصوصية',
              en: 'Sixth: Privacy Policy Amendments'
            },
            content: {
              ar: 'تحتفظ الأكاديمية بالحق في تعديل سياسة الخصوصية عند الحاجة، وسيتم إشعار المتدربين بالتغييرات من خلال المنصة أو عبر البريد الإلكتروني.',
              en: 'The academy reserves the right to amend the privacy policy when needed, and trainees will be notified of changes through the platform or via email.'
            },
            icon: ExclamationTriangleIcon,
          }
        ]
      }
    },
    supervision: {
      id: 'supervision',
      title: {
        ar: 'أدوار ومسؤوليات الكادر الإشرافي',
        en: 'Supervisory Staff Roles and Responsibilities'
      },
      icon: UserGroupIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار الثالث',
        en: 'Third Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/ThirdStandart.pdf',
      content: {
        introduction: {
          ar: 'يهدف هذا المعيار إلى توضيح أدوار ومسؤوليات الكادر الإشرافي في بيئة التدريب الإلكتروني، وضمان تنفيذ البرامج التدريبية بكفاءة وجودة عالية.',
          en: 'This standard aims to clarify the roles and responsibilities of supervisory staff in the e-learning environment, ensuring efficient and high-quality implementation of training programs.'
        },
        sections: [
          {
            title: {
              ar: 'أولًا: تعريف الحضور الإلكتروني',
              en: 'First: Definition of Electronic Attendance'
            },
            content: {
              ar: 'يُقصد بالحضور الإلكتروني تسجيل دخول المتدرب إلى منصة التدريب وحضوره الفعلي للجلسات المباشرة وغير المباشرة أو إتمامه للأنشطة المطلوبة خلال فترة زمنية محددة.',
              en: 'Electronic attendance means the trainee logging into the training platform and their actual attendance of direct and indirect sessions or completion of required activities within a specified time period.'
            },
            icon: CalendarIcon,
          },
          {
            title: {
              ar: 'ثانيًا: طرق توثيق الحضور',
              en: 'Second: Methods of Documenting Attendance'
            },
            points: [
              {
                category: {
                  ar: '1- الجلسات المباشرة (Live Sessions)/ المتزامنة:',
                  en: '1- Live Sessions/Synchronous:'
                },
                items: [
                  {
                    ar: 'يتم تسجيل الحضور تلقائيًا عند الدخول للجلسة باستخدام رابط الدخول الشخصي.',
                    en: 'Attendance is automatically recorded when entering the session using the personal login link.'
                  },
                  {
                    ar: 'يشترط التواجد لمدة لا تقل عن (75٪) من زمن الجلسة لاعتبار المتدرب "حاضرًا".',
                    en: 'Presence for at least 75% of the session duration is required for the trainee to be considered "present".'
                  }
                ]
              },
              {
                category: {
                  ar: '2- الدورات المسجلة / غير المتزامنة:',
                  en: '2- Recorded Courses/Asynchronous:'
                },
                items: [
                  {
                    ar: 'يعتبر الحضور بإتمام مشاهدة المحتوى وإجراء الأنشطة التفاعلية والاختبارات.',
                    en: 'Attendance is considered by completing content viewing, interactive activities, and tests.'
                  },
                  {
                    ar: 'يمكن قياس الحضور بعدد الساعات التي قضاها المتدرب على المنصة، أو عدد الوحدات التدريبية المكتملة.',
                    en: 'Attendance can be measured by the number of hours spent by the trainee on the platform, or the number of completed training units.'
                  }
                ]
              },
              {
                category: {
                  ar: '3- المهام والاختبارات:',
                  en: '3- Assignments and Tests:'
                },
                items: [
                  {
                    ar: 'تسليم المهام والاختبارات في الوقت المحدد يعتبر من عناصر الحضور والالتزام.',
                    en: 'Submitting assignments and tests on time is considered part of attendance and commitment.'
                  }
                ]
              }
            ],
            icon: DocumentTextIcon,
          },
          {
            title: {
              ar: 'ثالثًا: شروط الالتزام بالحضور',
              en: 'Third: Attendance Commitment Conditions'
            },
            points: [
              {
                ar: 'يُشترط تحقيق نسبة حضور لا تقل عن (75%) من إجمالي الساعات التدريبية للحصول على شهادة إتمام الدورة.',
                en: 'Achieving an attendance rate of at least 75% of total training hours is required to obtain a course completion certificate.'
              },
              {
                ar: 'التغيب بدون عذر رسمي قد يؤثر على تقييم المتدرب أو يؤدي إلى حرمانه من الشهادة.',
                en: 'Absence without official excuse may affect trainee evaluation or lead to certificate deprivation.'
              },
              {
                ar: 'الأعذار المقبولة تشمل الحالات الصحية، الطارئة، أو ظروف العمل الموثقة.',
                en: 'Accepted excuses include health conditions, emergencies, or documented work circumstances.'
              }
            ],
            icon: CheckCircleIcon,
          },
          {
            title: {
              ar: 'رابعًا: آلية الإبلاغ عن الغياب',
              en: 'Fourth: Absence Reporting Mechanism'
            },
            points: [
              {
                ar: 'يجب على المتدرب إبلاغ المشرف عبر البريد الإلكتروني أو نموذج الأعذار قبل الجلسة أو خلال 24 ساعة من حدوث الغياب.',
                en: 'The trainee must notify the supervisor via email or excuse form before the session or within 24 hours of absence occurrence.'
              },
              {
                ar: 'إرفاق ما يثبت العذر إن أمكن (تقرير طبي، خطاب جهة العمل، إلخ).',
                en: 'Attaching proof of excuse if possible (medical report, employer letter, etc.).'
              }
            ],
            icon: EnvelopeIcon,
          },
          {
            title: {
              ar: 'خامسًا: التأخير والانقطاع',
              en: 'Fifth: Delay and Interruption'
            },
            points: [
              {
                ar: 'يُعتبر المتدرب "متأخرًا" إذا دخل الجلسة بعد مرور أكثر من (15 دقيقة) من بدايتها.',
                en: 'The trainee is considered "late" if they enter the session more than 15 minutes after its start.'
              },
              {
                ar: 'الانقطاع المتكرر أثناء الجلسات (الخروج والدخول أو عدم التفاعل) يؤثر على التقييم النهائي للحضور.',
                en: 'Repeated interruptions during sessions (exiting and entering or lack of interaction) affects the final attendance evaluation.'
              }
            ],
            icon: ClockIcon,
          },
          {
            title: {
              ar: 'سادسًا: العواقب المترتبة على الغياب',
              en: 'Sixth: Consequences of Absence'
            },
            subtitle: {
              ar: 'بحسب سياسات الأكاديمية، قد تشمل العواقب ما يلي:',
              en: 'According to academy policies, consequences may include:'
            },
            points: [
              {
                ar: 'التنبيه أو إرسال إشعار رسمي.',
                en: 'Warning or sending official notice.'
              },
              {
                ar: 'حرمان من شهادة الدورة.',
                en: 'Deprivation from course certificate.'
              },
              {
                ar: 'فقدان نقاط تقييم مرتبطة بالحضور.',
                en: 'Loss of evaluation points related to attendance.'
              },
              {
                ar: 'استبعاد من البرامج التدريبية المستقبلية في حال التكرار.',
                en: 'Exclusion from future training programs in case of repetition.'
              },
              {
                ar: 'حرمان من دخول الاختبار النهائي في البرامج التأهيلية والدبلوم.',
                en: 'Deprivation from entering the final test in qualification programs and diplomas.'
              }
            ],
            icon: ExclamationTriangleIcon,
          },
          {
            title: {
              ar: 'سابعًا: الالتزام والتقييم',
              en: 'Seventh: Commitment and Evaluation'
            },
            points: [
              {
                ar: 'يعتبر الحضور الإلكتروني جزءًا من تقييم الأداء العام للمتدرب.',
                en: 'Electronic attendance is considered part of the trainee\'s overall performance evaluation.'
              },
              {
                ar: 'الالتزام بالحضور يعكس الجدية والاحترام تجاه العملية التدريبية.',
                en: 'Commitment to attendance reflects seriousness and respect towards the training process.'
              }
            ],
            icon: ChartBarIcon,
          },
          {
            title: {
              ar: 'ثامنًا: نمط الحضور',
              en: 'Eighth: Attendance Pattern'
            },
            content: {
              ar: 'لا يكتب في الشهادة نمط الحضور، حيث أن الحضور الإلكتروني معادلاً للحضور العادي.',
              en: 'The attendance pattern is not written on the certificate, as electronic attendance is equivalent to regular attendance.'
            },
            icon: AcademicCapIcon,
          }
        ]
      }
    },
    attendance: {
      id: 'attendance',
      title: {
        ar: 'سياسة الحضور الإلكتروني في بيئة التدريب الإلكتروني',
        en: 'Electronic Attendance Policy in E-Learning Environment'
      },
      icon: CalendarIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار الرابع',
        en: 'Fourth Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/FourthStandart.pdf',
      content: {
        introduction: {
          ar: 'تهدف هذه السياسة إلى توضيح القواعد والإجراءات المتعلقة بالحضور في الدورات التدريبية الإلكترونية والبرامج التدريبية، بما يضمن التزام المتدربين وتحقيق الاستفادة القصوى من المحتوى التدريبي.',
          en: 'This policy aims to clarify rules and procedures related to attendance in electronic training courses and training programs, ensuring trainee commitment and maximum benefit from training content.'
        },
        sections: [
          {
            title: {
              ar: 'أولًا: تعريف الحضور الإلكتروني',
              en: 'First: Definition of Electronic Attendance'
            },
            content: {
              ar: 'يُقصد بالحضور الإلكتروني تسجيل دخول المتدرب إلى منصة التدريب وحضوره الفعلي للجلسات المباشرة وغير المباشرة أو إتمامه للأنشطة المطلوبة خلال فترة زمنية محددة.',
              en: 'Electronic attendance means the trainee logging into the training platform and their actual attendance of direct and indirect sessions or completion of required activities within a specified time period.'
            },
            icon: CalendarIcon,
          },
          {
            title: {
              ar: 'ثانيًا: طرق توثيق الحضور',
              en: 'Second: Methods of Documenting Attendance'
            },
            points: [
              {
                category: {
                  ar: '1- الجلسات المباشرة (Live Sessions)/ المتزامنة:',
                  en: '1- Live Sessions/Synchronous:'
                },
                items: [
                  {
                    ar: 'يتم تسجيل الحضور تلقائيًا عند الدخول للجلسة باستخدام رابط الدخول الشخصي.',
                    en: 'Attendance is automatically recorded when entering the session using the personal login link.'
                  },
                  {
                    ar: 'يشترط التواجد لمدة لا تقل عن (75٪) من زمن الجلسة لاعتبار المتدرب "حاضرًا".',
                    en: 'Presence for at least 75% of the session duration is required for the trainee to be considered "present".'
                  }
                ]
              },
              {
                category: {
                  ar: '2- الدورات المسجلة / غير المتزامنة:',
                  en: '2- Recorded Courses/Asynchronous:'
                },
                items: [
                  {
                    ar: 'يعتبر الحضور بإتمام مشاهدة المحتوى وإجراء الأنشطة التفاعلية والاختبارات.',
                    en: 'Attendance is considered by completing content viewing, interactive activities, and tests.'
                  },
                  {
                    ar: 'يمكن قياس الحضور بعدد الساعات التي قضاها المتدرب على المنصة، أو عدد الوحدات التدريبية المكتملة.',
                    en: 'Attendance can be measured by the number of hours spent by the trainee on the platform, or the number of completed training units.'
                  }
                ]
              },
              {
                category: {
                  ar: '3- المهام والاختبارات:',
                  en: '3- Assignments and Tests:'
                },
                items: [
                  {
                    ar: 'تسليم المهام والاختبارات في الوقت المحدد يعتبر من عناصر الحضور والالتزام.',
                    en: 'Submitting assignments and tests on time is considered part of attendance and commitment.'
                  }
                ]
              }
            ],
            icon: DocumentTextIcon,
          },
          {
            title: {
              ar: 'ثالثًا: شروط الالتزام بالحضور',
              en: 'Third: Attendance Commitment Conditions'
            },
            points: [
              {
                ar: 'يُشترط تحقيق نسبة حضور لا تقل عن (75%) من إجمالي الساعات التدريبية للحصول على شهادة إتمام الدورة.',
                en: 'Achieving an attendance rate of at least 75% of total training hours is required to obtain a course completion certificate.'
              },
              {
                ar: 'التغيب بدون عذر رسمي قد يؤثر على تقييم المتدرب أو يؤدي إلى حرمانه من الشهادة.',
                en: 'Absence without official excuse may affect trainee evaluation or lead to certificate deprivation.'
              },
              {
                ar: 'الأعذار المقبولة تشمل الحالات الصحية، الطارئة، أو ظروف العمل الموثقة.',
                en: 'Accepted excuses include health conditions, emergencies, or documented work circumstances.'
              }
            ],
            icon: CheckCircleIcon,
          },
          {
            title: {
              ar: 'رابعًا: آلية الإبلاغ عن الغياب',
              en: 'Fourth: Absence Reporting Mechanism'
            },
            points: [
              {
                ar: 'يجب على المتدرب إبلاغ المشرف عبر البريد الإلكتروني أو نموذج الأعذار قبل الجلسة أو خلال 24 ساعة من حدوث الغياب.',
                en: 'The trainee must notify the supervisor via email or excuse form before the session or within 24 hours of absence occurrence.'
              },
              {
                ar: 'إرفاق ما يثبت العذر إن أمكن (تقرير طبي، خطاب جهة العمل، إلخ).',
                en: 'Attaching proof of excuse if possible (medical report, employer letter, etc.).'
              }
            ],
            icon: EnvelopeIcon,
          },
          {
            title: {
              ar: 'خامسًا: التأخير والانقطاع',
              en: 'Fifth: Delay and Interruption'
            },
            points: [
              {
                ar: 'يُعتبر المتدرب "متأخرًا" إذا دخل الجلسة بعد مرور أكثر من (15 دقيقة) من بدايتها.',
                en: 'The trainee is considered "late" if they enter the session more than 15 minutes after its start.'
              },
              {
                ar: 'الانقطاع المتكرر أثناء الجلسات (الخروج والدخول أو عدم التفاعل) يؤثر على التقييم النهائي للحضور.',
                en: 'Repeated interruptions during sessions (exiting and entering or lack of interaction) affects the final attendance evaluation.'
              }
            ],
            icon: ClockIcon,
          },
          {
            title: {
              ar: 'سادسًا: العواقب المترتبة على الغياب',
              en: 'Sixth: Consequences of Absence'
            },
            subtitle: {
              ar: 'بحسب سياسات الأكاديمية، قد تشمل العواقب ما يلي:',
              en: 'According to academy policies, consequences may include:'
            },
            points: [
              {
                ar: 'التنبيه أو إرسال إشعار رسمي.',
                en: 'Warning or sending official notice.'
              },
              {
                ar: 'حرمان من شهادة الدورة.',
                en: 'Deprivation from course certificate.'
              },
              {
                ar: 'فقدان نقاط تقييم مرتبطة بالحضور.',
                en: 'Loss of evaluation points related to attendance.'
              },
              {
                ar: 'استبعاد من البرامج التدريبية المستقبلية في حال التكرار.',
                en: 'Exclusion from future training programs in case of repetition.'
              },
              {
                ar: 'حرمان من دخول الاختبار النهائي في البرامج التأهيلية والدبلوم.',
                en: 'Deprivation from entering the final test in qualification programs and diplomas.'
              }
            ],
            icon: ExclamationTriangleIcon,
          },
          {
            title: {
              ar: 'سابعًا: الالتزام والتقييم',
              en: 'Seventh: Commitment and Evaluation'
            },
            points: [
              {
                ar: 'يعتبر الحضور الإلكتروني جزءًا من تقييم الأداء العام للمتدرب.',
                en: 'Electronic attendance is considered part of the trainee\'s overall performance evaluation.'
              },
              {
                ar: 'الالتزام بالحضور يعكس الجدية والاحترام تجاه العملية التدريبية.',
                en: 'Commitment to attendance reflects seriousness and respect towards the training process.'
              }
            ],
            icon: ChartBarIcon,
          },
          {
            title: {
              ar: 'ثامنًا: نمط الحضور',
              en: 'Eighth: Attendance Pattern'
            },
            content: {
              ar: 'لا يكتب في الشهادة نمط الحضور، حيث أن الحضور الإلكتروني معادلاً للحضور العادي.',
              en: 'The attendance pattern is not written on the certificate, as electronic attendance is equivalent to regular attendance.'
            },
            icon: AcademicCapIcon,
          }
        ]
      }
    },
    communication: {
      id: 'communication',
      title: {
        ar: 'سياسة التواصل بين المستفيدين في بيئة التدريب الإلكتروني',
        en: 'Communication Policy Among Beneficiaries in E-Learning Environment'
      },
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار الخامس',
        en: 'Fifth Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/FifthStandart.pdf',
      content: {
        introduction: {
          ar: 'تسعى الأكاديمية إلى توفير بيئة إلكترونية تفاعلية وآمنة، تُعزز من روح التعاون والاحترام بين جميع المستفيدين (المتدربين، المدربين، والإداريين). وتحدد هذه السياسة ضوابط وأخلاقيات التواصل بين المستفيدين ضمن بيئة التدريب الإلكتروني.',
          en: 'The academy seeks to provide an interactive and secure electronic environment that promotes the spirit of cooperation and respect among all beneficiaries (trainees, trainers, and administrators). This policy defines controls and ethics for communication among beneficiaries within the e-learning environment.'
        },
        sections: [
          {
            title: {
              ar: 'أولاً: أهداف السياسة',
              en: 'First: Policy Objectives'
            },
            points: [
              {
                ar: 'تعزيز التواصل الفعّال والاحترام المتبادل بين المتدربين.',
                en: 'Enhancing effective communication and mutual respect among trainees.'
              },
              {
                ar: 'تنظيم سلوكيات التفاعل الإلكتروني بما يضمن سلامة الجميع.',
                en: 'Regulating electronic interaction behaviors to ensure everyone\'s safety.'
              },
              {
                ar: 'منع أي شكل من أشكال الإساءة أو التعدي أو التمييز.',
                en: 'Preventing any form of abuse, infringement, or discrimination.'
              },
              {
                ar: 'توفير إطار واضح للرد على الاستفسارات والمشاركة في النقاشات.',
                en: 'Providing a clear framework for responding to inquiries and participating in discussions.'
              }
            ],
            icon: ChatBubbleLeftRightIcon,
          },
          {
            title: {
              ar: 'ثانيًا: قواعد وضوابط التواصل',
              en: 'Second: Communication Rules and Controls'
            },
            points: [
              {
                category: {
                  ar: '1- الاحترام المتبادل:',
                  en: '1- Mutual Respect:'
                },
                items: [
                  {
                    ar: 'يجب استخدام لغة مهذبة ومحترمة في جميع أشكال التواصل، سواءً عبر المنتديات، المحادثات المباشرة، أو البريد الإلكتروني.',
                    en: 'Polite and respectful language must be used in all forms of communication, whether through forums, direct chats, or email.'
                  },
                  {
                    ar: 'يُمنع استخدام أي ألفاظ نابية، مهينة، أو جارحة.',
                    en: 'Using any offensive, derogatory, or hurtful words is prohibited.'
                  }
                ]
              },
              {
                category: {
                  ar: '2- التواصل المهني:',
                  en: '2- Professional Communication:'
                },
                items: [
                  {
                    ar: 'يجب أن يكون الحوار ضمن حدود التدريب ومرتبط بموضوعات الدورة، او البرنامج التدريبي',
                    en: 'Dialogue must be within training boundaries and related to course topics or training program.'
                  },
                  {
                    ar: 'تجنّب النقاشات الجانبية أو المواضيع الحساسة (السياسة، الدين، العرق، إلخ).',
                    en: 'Avoiding side discussions or sensitive topics (politics, religion, race, etc.).'
                  }
                ]
              },
              {
                category: {
                  ar: '3- الخصوصية والسرية:',
                  en: '3- Privacy and Confidentiality:'
                },
                items: [
                  {
                    ar: 'يُمنع مشاركة بيانات شخصية لأي متدرب أو مدرب دون إذن مسبق.',
                    en: 'Sharing personal data of any trainee or trainer without prior permission is prohibited.'
                  },
                  {
                    ar: 'احترام سرية المراسلات والمناقشات الخاصة.',
                    en: 'Respecting the confidentiality of correspondence and private discussions.'
                  }
                ]
              },
              {
                category: {
                  ar: '4- المسؤولية الفردية:',
                  en: '4- Individual Responsibility:'
                },
                items: [
                  {
                    ar: 'كل متدرب مسؤول عن محتوى ما يشاركه.',
                    en: 'Each trainee is responsible for the content they share.'
                  },
                  {
                    ar: 'يُمنع نشر روابط غير موثوقة أو محتوى غير متعلق بالدورة.',
                    en: 'Publishing unreliable links or content unrelated to the course is prohibited.'
                  }
                ]
              },
              {
                category: {
                  ar: '5- الزمن والردود:',
                  en: '5- Timing and Responses:'
                },
                items: [
                  {
                    ar: 'الالتزام بالرد على الزملاء أو استفسارات المجموعة خلال مدة زمنية معقولة (24–48 ساعة).',
                    en: 'Committing to respond to colleagues or group inquiries within a reasonable time period (24-48 hours).'
                  },
                  {
                    ar: 'يُفضل استخدام القنوات المخصصة للتواصل (مثل المنتديات، البريد الداخلي، أو المراسلة داخل المنصة).',
                    en: 'Using designated communication channels is preferred (such as forums, internal mail, or in-platform messaging).'
                  }
                ]
              }
            ],
            icon: DocumentTextIcon,
          },
          {
            title: {
              ar: 'ثالثًا: المخالفات والسلوك غير المقبول',
              en: 'Third: Violations and Unacceptable Behavior'
            },
            points: [
              {
                ar: 'التحرش أو التنمر اللفظي.',
                en: 'Harassment or verbal bullying.'
              },
              {
                ar: 'إرسال رسائل جماعية أو دعائية دون إذن.',
                en: 'Sending mass or promotional messages without permission.'
              },
              {
                ar: 'التحدث باسم جهة أخرى أو انتحال هوية.',
                en: 'Speaking on behalf of another entity or identity theft.'
              },
              {
                ar: 'نشر إشاعات أو معلومات مضللة.',
                en: 'Spreading rumors or misleading information.'
              }
            ],
            icon: ExclamationTriangleIcon,
          },
          {
            title: {
              ar: 'رابعًا: الإجراءات عند حدوث مخالفة',
              en: 'Fourth: Actions When Violation Occurs'
            },
            subtitle: {
              ar: 'بحسب نوع المخالفة، قد تتخذ الجهة الإجراءات التالية:',
              en: 'Depending on the type of violation, the entity may take the following actions:'
            },
            points: [
              {
                ar: 'تنبيه أو تحذير رسمي.',
                en: 'Warning or official caution.'
              },
              {
                ar: 'حظر مؤقت من استخدام أدوات التواصل.',
                en: 'Temporary ban from using communication tools.'
              },
              {
                ar: 'استبعاد من الدورة التدريبية.',
                en: 'Exclusion from the training course.'
              },
              {
                ar: 'رفع تقرير إلى الجهة الإدارية أو القانونية المختصة إن لزم الأمر.',
                en: 'Reporting to the relevant administrative or legal authority if necessary.'
              }
            ],
            icon: ShieldCheckIcon,
          },
          {
            title: {
              ar: 'خامسًا: توصيات عامة للمستفيدين',
              en: 'Fifth: General Recommendations for Beneficiaries'
            },
            points: [
              {
                ar: 'كن إيجابيًا ومشجعًا في مشاركاتك.',
                en: 'Be positive and encouraging in your contributions.'
              },
              {
                ar: 'استمع قبل أن ترد، وكن مستعدًا لتقبل وجهات النظر المختلفة.',
                en: 'Listen before responding, and be prepared to accept different viewpoints.'
              },
              {
                ar: 'احترم وقت الآخرين ولا ترسل رسائل في أوقات غير مناسبة.',
                en: 'Respect others\' time and do not send messages at inappropriate times.'
              }
            ],
            icon: CheckCircleIcon,
          },
          {
            title: {
              ar: 'سادسًا: الدعم والإبلاغ',
              en: 'Sixth: Support and Reporting'
            },
            points: [
              {
                ar: 'في حال واجهت أي سلوك غير لائق، يمكنك الإبلاغ عبر [البريد الإلكتروني / نموذج الإبلاغ في المنصة].',
                en: 'If you encounter any inappropriate behavior, you can report via [email / reporting form on the platform].'
              },
              {
                ar: 'تلتزم إدارة الأكاديمية بسرية البلاغات واتخاذ الإجراءات اللازمة.',
                en: 'The academy management commits to confidentiality of reports and taking necessary actions.'
              }
            ],
            icon: LifebuoyIcon,
          }
        ]
      }
    },
    identity: {
      id: 'identity',
      title: {
        ar: 'سياسة ونظام التحقق من هوية المستفيد',
        en: 'Beneficiary Identity Verification Policy and System'
      },
      icon: IdentificationIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار السادس',
        en: 'Sixth Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/SixthStandart.pdf',
      content: {
        introduction: {
          ar: 'تهدف إلى ضمان النزاهة ومنع انتحال الشخصية، وتعتمد على آليات مثل التحقق الثنائي عبر الجوال/البريد الإلكتروني، أو الربط بالهوية الوطنية، أو بوابات الهوية الرقمية (مثل نفاذ)، مما يؤكد أن الشخص الذي يتدرب هو صاحب الحساب ويضمن مصداقية الشهادات، وتتضمن عادةً إجراءات إضافية مثل الأسئلة الأمنية أو مطابقة البيانات الرسمية.',
          en: 'Aims to ensure integrity and prevent identity theft, relying on mechanisms such as two-factor verification via mobile/email, linking to national identity, or digital identity portals (like Nafath), confirming that the person training is the account owner and ensuring certificate credibility, typically including additional procedures like security questions or matching official data.'
        },
        sections: [
          {
            title: {
              ar: 'أولاً: تسجيل الدخول الآمن',
              en: 'First: Secure Login'
            },
            points: [
              {
                ar: 'إرسال رمز تحقق (OTP) عبر البريد الإلكتروني أو رسالة نصية للجوال عند كل تسجيل دخول.',
                en: 'Sending a verification code (OTP) via email or SMS to mobile at each login.'
              },
              {
                ar: 'استخدام رابط فريد للتحقق عبر البريد الإلكتروني.',
                en: 'Using a unique verification link via email.'
              }
            ],
            icon: LockClosedIcon,
          },
          {
            title: {
              ar: 'ثانيًا: الربط بالهويات الرسمية',
              en: 'Second: Linking to Official Identities'
            },
            points: [
              {
                ar: 'الربط بالهوية الوطنية أو بيانات تسجيل رسمية مسجلة مسبقاً.',
                en: 'Linking to national identity or officially registered registration data.'
              },
              {
                ar: 'استخدام بوابات الهوية الوطنية الموحدة (نفاذ) للمصادقة.',
                en: 'Using unified national identity portals (Nafath) for authentication.'
              }
            ],
            icon: IdentificationIcon,
          },
          {
            title: {
              ar: 'ثالثًا: الإجراءات الإضافية',
              en: 'Third: Additional Procedures'
            },
            points: [
              {
                ar: 'طرح أسئلة أمان شخصية.',
                en: 'Asking personal security questions.'
              },
              {
                ar: 'مقارنة بيانات المسجل والوصول إلى التحقق الكامل منها.',
                en: 'Comparing registrant data and accessing their complete verification.'
              }
            ],
            icon: MagnifyingGlassIcon,
          },
          {
            title: {
              ar: 'رابعًا: الالتزام والمساءلة',
              en: 'Fourth: Commitment and Accountability'
            },
            points: [
              {
                ar: 'تعهد المستفيد بالالتزام بقواعد النزاهة وتجنب الغش.',
                en: 'Beneficiary pledge to adhere to integrity rules and avoid cheating.'
              },
              {
                ar: 'تحديد عقوبات لانتهاك سياسات النزاهة.',
                en: 'Specifying penalties for violating integrity policies.'
              }
            ],
            icon: ShieldCheckIcon,
          },
          {
            title: {
              ar: 'خامسًا: حماية البيانات',
              en: 'Fifth: Data Protection'
            },
            content: {
              ar: 'التعامل مع بيانات المتدربين بسرية تامة وفق المعايير الأمنية داخل الأكاديمية.',
              en: 'Handling trainee data with complete confidentiality according to security standards within the academy.'
            },
            icon: LockClosedIcon,
          },
          {
            title: {
              ar: 'سادسًا: أهمية التحقق من هوية المستفيد',
              en: 'Sixth: Importance of Beneficiary Identity Verification'
            },
            points: [
              {
                ar: 'ضمان نزاهة الشهادات: التأكد من أن الشهادة تعكس مهارات الشخص نفسه، وليس شخصاً آخر.',
                en: 'Ensuring certificate integrity: Confirming that the certificate reflects the skills of the actual person, not someone else.'
              },
              {
                ar: 'تعزيز مصداقية التدريب: رفع الثقة في مخرجات البرامج التدريبية الإلكترونية.',
                en: 'Enhancing training credibility: Increasing trust in the outcomes of electronic training programs.'
              }
            ],
            icon: AcademicCapIcon,
          }
        ]
      }
    },
    platform: {
      id: 'platform',
      title: {
        ar: 'استخدام المنصة التدريبية',
        en: 'Training Platform Usage'
      },
      icon: ComputerDesktopIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار السابع',
        en: 'Seventh Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/SeventhStandart.pdf',
      content: {
        introduction: {
          ar: 'تلتزم الأكاديمية بتوفير دليل إرشادي للمتدربين بهدف تحقيق أعلى إستفادة من التدريب الإلكتروني على النحو التالي:',
          en: 'The academy is committed to providing a guidance manual for trainees to achieve maximum benefit from e-learning as follows:'
        },
        sections: [
          {
            title: {
              ar: 'أولاً: الدخول لأول مرة إلى المنصة',
              en: 'First: First-Time Login to the Platform'
            },
            points: [
              {
                ar: 'يظهر المساعد الرقمي للإجابة عن الاسئلة والاستفسارات.',
                en: 'The digital assistant appears to answer questions and inquiries.'
              },
              {
                ar: 'يحولك مباشرة إلى ما تبحث عنه.',
                en: 'Directs you immediately to what you\'re looking for.'
              },
              {
                ar: 'يقدم لك الإجابة السريعة عما تبحث عنه، مع تزويدك بمعلومات واضحة ومرتبطة ببحثك على المنصة.',
                en: 'Provides you with quick answers to what you\'re searching for, giving you clear information related to your search on the platform.'
              },
              {
                ar: 'دليل ارشادي مصور يمكن تحميله أو تصفحه للإطلاع على كيفية استخدام المنصة.',
                en: 'A pictorial guide that can be downloaded or browsed to learn how to use the platform.'
              }
            ],
            icon: QuestionMarkCircleIcon,
          },
          {
            title: {
              ar: 'ثانياً: بدء التسجيل وحتى التخرج',
              en: 'Second: From Registration Start Until Graduation'
            },
            subtitle: {
              ar: 'تلتزم الأكاديمية بوضع خطة تدريبية للمتدربين بهدف المساعدة منذ بدء التسجيل وحتى مرحلة التخرج كالتالي:',
              en: 'The academy commits to developing a training plan for trainees to assist from registration start until graduation stage as follows:'
            },
            points: [
              {
                ar: 'التسجيل والتفعيل: إرسال الروابط للمتدربين قبل بدء الدورة بيومين.',
                en: 'Registration and Activation: Sending links to trainees two days before the course starts.'
              },
              {
                ar: 'آلية استخدام المنصة الإلكترونية: تدريب المتدربين على آلية استخدام المنصة وشرح لوحة التحكم قبل الدورة التدريبية بيوم واحد.',
                en: 'Electronic Platform Usage Mechanism: Training trainees on platform usage mechanism and control panel explanation one day before the training course.'
              },
              {
                ar: 'مواعيد الجلسات التدريبية: تعريف المتدربين بمواعيد بدء الجلسات التدريبية ومواعيد انتهائها قبل الدورة التدريبية بيوم واحد.',
                en: 'Training Session Timings: Introducing trainees to training session start and end timings one day before the training course.'
              },
              {
                ar: 'أنظمة وسياسات الدورات التدريبية: تعريف المتدربين بالسياسات والإجراءات الخاصة بنظام التدريب الإلكتروني قبل بدء الدورة التدريبية.',
                en: 'Training Course Systems and Policies: Introducing trainees to policies and procedures specific to the e-learning system before the training course starts.'
              },
              {
                ar: 'الدعم والمساندة: التواصل مع المختصين في حالة وجود خلل ما أثناء تنفيذ الدورة التدريبية.',
                en: 'Support and Assistance: Communicating with specialists in case of any malfunction during course implementation.'
              },
              {
                ar: 'التقييم: ارسال روابط استبيان لتقييم المدربين وبيئة التدريب الإلكترونية بعد الانتهاء من الدورة التدريبية.',
                en: 'Evaluation: Sending survey links to evaluate trainers and e-learning environment after course completion.'
              }
            ],
            icon: CalendarIcon,
          },
          {
            title: {
              ar: 'ثالثاً: أنماط التدريب',
              en: 'Third: Training Patterns'
            },
            points: [
              {
                category: {
                  ar: 'التدريب المتزامن',
                  en: 'Synchronous Training'
                },
                items: [
                  {
                    ar: 'حصول المتدرب على تغذية راجعة فورية.',
                    en: 'Trainee receiving immediate feedback.'
                  },
                  {
                    ar: 'حصول المتدرب على توجيهات للتسجيل في أي دورة تدريبية أو برنامج تدريبي.',
                    en: 'Trainee receiving guidance for registration in any training course or program.'
                  },
                  {
                    ar: 'حصول المتدرب على إخطار بإتمام عمليات التسجيل في الدورات أو البرامج التدريبية.',
                    en: 'Trainee receiving notification of completion of registration processes in courses or training programs.'
                  },
                  {
                    ar: 'حصول المتدرب على دليل التفاعل مع المحتوى التدريبي والأنشطة والواجبات وفقاً للجدول التدريبي.',
                    en: 'Trainee receiving a guide for interacting with training content, activities, and assignments according to the training schedule.'
                  },
                  {
                    ar: 'حصول المتدرب على دليل التعامل مع الفصول الافتراضية والمحتوى الافتراضي.',
                    en: 'Trainee receiving a guide for handling virtual classrooms and virtual content.'
                  }
                ]
              },
              {
                category: {
                  ar: 'التدريب غير المتزامن',
                  en: 'Asynchronous Training'
                },
                items: [
                  {
                    ar: 'حصول المتدرب على تغذية راجعة مؤجلة.',
                    en: 'Trainee receiving delayed feedback.'
                  },
                  {
                    ar: 'حصول المتدرب على توجيهات مصورة تساعده في عملية التسجيل في الدورات أو البرامج التدريبية.',
                    en: 'Trainee receiving pictorial guidance assisting in the registration process for courses or training programs.'
                  },
                  {
                    ar: 'حصول المتدرب على دليل يوضح ألية رفع التكليفات والواجبات والأنشطة وفقاً للجدول التدريبي.',
                    en: 'Trainee receiving a guide explaining the mechanism for uploading assignments, duties, and activities according to the training schedule.'
                  }
                ]
              }
            ],
            icon: VideoCameraIcon,
          }
        ]
      }
    },
    support: {
      id: 'support',
      title: {
        ar: 'الدعم الفني في بيئة التدريب الإلكتروني',
        en: 'Technical Support in E-Learning Environment'
      },
      icon: LifebuoyIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار الثامن',
        en: 'Eighth Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/EighthStandart.pdf',
      content: {
        introduction: {
          ar: '',
          en: ''
        },
        sections: [
          {
            title: {
              ar: 'أولاً: الهدف من الدعم الفني',
              en: 'First: Technical Support Objective'
            },
            subtitle: {
              ar: 'يهدف فريق الدعم الفني إلى:',
              en: 'The technical support team aims to:'
            },
            points: [
              {
                ar: 'توفير المساعدة التقنية للمستخدمين (متدربين ومدربين).',
                en: 'Provide technical assistance to users (trainees and trainers).'
              },
              {
                ar: 'ضمان استقرار المنصة الإلكترونية وتوفير بيئة تدريبية فعالة وآمنة.',
                en: 'Ensure platform stability and provide an effective and secure training environment.'
              },
              {
                ar: 'التدخل السريع لمعالجة الأعطال التقنية التي تعيق العملية التدريبية.',
                en: 'Intervene quickly to address technical malfunctions that hinder the training process.'
              }
            ],
            icon: LifebuoyIcon,
          },
          {
            title: {
              ar: 'ثانيًا: خدمات الدعم الفني',
              en: 'Second: Technical Support Services'
            },
            subtitle: {
              ar: 'تشمل خدمات الدعم الفني:',
              en: 'Technical support services include:'
            },
            points: [
              {
                ar: 'المساعدة في تسجيل الدخول واستعادة الحسابات.',
                en: 'Assistance with login and account recovery.'
              },
              {
                ar: 'حل مشاكل تحميل المحتوى أو مشاهدته.',
                en: 'Solving content upload or viewing problems.'
              },
              {
                ar: 'دعم استخدام أدوات المنصة (الفصول المباشرة، رفع المهام، الاختبارات، الشهادات).',
                en: 'Support in using platform tools (live classes, assignment uploads, tests, certificates).'
              },
              {
                ar: 'مساعدة المدربين في إعداد الجلسات وتشغيل أدوات العرض التقديمي.',
                en: 'Assisting trainers in preparing sessions and operating presentation tools.'
              },
              {
                ar: 'حل مشاكل الصوت والصورة خلال الجلسات.',
                en: 'Solving audio and video problems during sessions.'
              },
              {
                ar: 'متابعة أعطال تقنية عامة مثل التوقف المفاجئ أو بطء المنصة.',
                en: 'Following up on general technical malfunctions such as sudden stops or platform slowness.'
              }
            ],
            icon: CogIcon,
          },
          {
            title: {
              ar: 'ثالثًا: قنوات التواصل مع الدعم الفني',
              en: 'Third: Communication Channels with Technical Support'
            },
            subtitle: {
              ar: 'توفر الأكاديمية نموذجاً واضحاً يشمل:',
              en: 'The academy provides a clear model including:'
            },
            points: [
              {
                ar: 'البريد الإلكتروني: info@vetbrains.edu.eg',
                en: 'Email: info@vetbrains.edu.eg'
              },
              {
                ar: 'رقم الجوال الموحد: +20/1003670502',
                en: 'Unified Mobile Number: +20/1003670502'
              },
              {
                ar: 'الدردشة المباشرة: عبر المنصة أثناء أوقات الدوام.',
                en: 'Direct Chat: Through the platform during working hours.'
              },
              {
                ar: 'الاتصال الهاتفي: من الساعة 8 صباحًا إلى 5 مساءً.',
                en: 'Phone Call: From 8 AM to 5 PM.'
              },
              {
                ar: 'نموذج الدعم الإلكتروني: مرفق داخل لوحة المستخدم.',
                en: 'Electronic Support Form: Attached within the user panel.'
              }
            ],
            icon: PhoneIcon,
          },
          {
            title: {
              ar: 'رابعاً: الأدلة الإرشادية للمدرب و المتدرب',
              en: 'Fourth: Guidance Manuals for Trainer and Trainee'
            },
            subtitle: {
              ar: 'توفر الأكاديمية نموذجين منفصلين ومتكاملين لـ أدلة إرشادية إلكترونية لكل من:',
              en: 'The academy provides two separate and integrated models of electronic guidance manuals for each of:'
            },
            points: [
              {
                ar: 'المدرب في بيئة التدريب الإلكتروني',
                en: 'The Trainer in E-Learning Environment'
              },
              {
                ar: 'المتدرب في بيئة التدريب الإلكتروني',
                en: 'The Trainee in E-Learning Environment'
              }
            ],
            icon: DocumentTextIcon,
          },
          {
            title: {
              ar: '1- الدليل الإرشادي للمدرب في بيئة التدريب الإلكتروني',
              en: '1- Guidance Manual for Trainer in E-Learning Environment'
            },
            points: [
              {
                category: {
                  ar: 'قبل بدء التدريب',
                  en: 'Before Training Start'
                },
                items: [
                  {
                    ar: 'التأكد من جاهزية المحتوى التدريبي بصيغة إلكترونية مناسبة PDF، فيديو، عروض تقديمية….',
                    en: 'Ensuring training content readiness in suitable electronic format (PDF, video, presentations…).'
                  },
                  {
                    ar: 'تحميل المحتوى على المنصة قبل بدء الدورة بوقت كافٍ.',
                    en: 'Uploading content to the platform sufficiently before the course starts.'
                  },
                  {
                    ar: 'إعداد خطة التدريب والزمن المخصص لكل جلسة.',
                    en: 'Preparing training plan and time allocated for each session.'
                  },
                  {
                    ar: 'اختبار الأدوات التقنية (الميكروفون، الكاميرا، العرض التقديمي، الاتصال بالإنترنت).',
                    en: 'Testing technical tools (microphone, camera, presentation, internet connection).'
                  }
                ]
              },
              {
                category: {
                  ar: 'أثناء الجلسات التدريبية',
                  en: 'During Training Sessions'
                },
                items: [
                  {
                    ar: 'بدء الجلسة في الوقت المحدد.',
                    en: 'Starting the session on time.'
                  },
                  {
                    ar: 'الترحيب بالمتدربين وتعريفهم بأهداف الجلسة.',
                    en: 'Welcoming trainees and introducing them to session objectives.'
                  },
                  {
                    ar: 'تشجيع التفاعل من خلال الأسئلة، الاستبيانات، وغرف النقاش.',
                    en: 'Encouraging interaction through questions, surveys, and discussion rooms.'
                  },
                  {
                    ar: 'استخدام أدوات المنصة بفعالية (مشاركة الشاشة، السبورة البيضاء، الاستطلاعات).',
                    en: 'Effectively using platform tools (screen sharing, whiteboard, polls).'
                  },
                  {
                    ar: 'التعامل مع المداخلات غير اللائقة بشكل مهني وفق سياسة التواصل.',
                    en: 'Dealing with inappropriate interventions professionally according to communication policy.'
                  }
                ]
              },
              {
                category: {
                  ar: 'بعد انتهاء الجلسة',
                  en: 'After Session Ends'
                },
                items: [
                  {
                    ar: 'مشاركة ملخص الجلسة أو التسجيل (إن وجد).',
                    en: 'Sharing session summary or recording (if available).'
                  },
                  {
                    ar: 'إرسال الواجبات أو المهام المرافقة.',
                    en: 'Sending accompanying assignments or tasks.'
                  },
                  {
                    ar: 'متابعة تقييم المتدربين وإنجازاتهم داخل المنصة.',
                    en: 'Following up on trainee evaluation and their achievements within the platform.'
                  },
                  {
                    ar: 'الرد على استفسارات المتدربين في الوقت المناسب.',
                    en: 'Responding to trainee inquiries in a timely manner.'
                  }
                ]
              },
              {
                category: {
                  ar: 'الجوانب التقنية والتنظيمية',
                  en: 'Technical and Organizational Aspects'
                },
                items: [
                  {
                    ar: 'حماية بيانات المتدربين وعدم مشاركتها.',
                    en: 'Protecting trainee data and not sharing it.'
                  },
                  {
                    ar: 'متابعة تقارير الحضور والتفاعل.',
                    en: 'Following up on attendance and interaction reports.'
                  },
                  {
                    ar: 'إبلاغ الدعم الفني فور وجود أي مشكلة تقنية.',
                    en: 'Notifying technical support immediately upon any technical problem.'
                  }
                ]
              }
            ],
            icon: UserIcon,
          },
          {
            title: {
              ar: '2- الدليل الإرشادي للمتدرب في بيئة التدريب الإلكتروني',
              en: '2- Guidance Manual for Trainee in E-Learning Environment'
            },
            points: [
              {
                category: {
                  ar: 'قبل بدء التدريب',
                  en: 'Before Training Start'
                },
                items: [
                  {
                    ar: 'التأكد من توفر جهاز مناسب واتصال إنترنت مستقر.',
                    en: 'Ensuring availability of suitable device and stable internet connection.'
                  },
                  {
                    ar: 'تحميل تطبيق/منصة التدريب المعتمدة.',
                    en: 'Downloading the approved training application/platform.'
                  },
                  {
                    ar: 'التسجيل المسبق في الدورة والتأكد من الحصول على بيانات الدخول.',
                    en: 'Pre-registering in the course and ensuring obtaining login credentials.'
                  },
                  {
                    ar: 'الاطلاع على جدول الدورة ومواعيد الجلسات.',
                    en: 'Reviewing the course schedule and session timings.'
                  }
                ]
              },
              {
                category: {
                  ar: 'أثناء الجلسات التدريبية',
                  en: 'During Training Sessions'
                },
                items: [
                  {
                    ar: 'الدخول في الوقت المحدد.',
                    en: 'Logging in on time.'
                  },
                  {
                    ar: 'كتم الميكروفون أثناء الشرح لتجنب الضوضاء.',
                    en: 'Muting the microphone during explanation to avoid noise.'
                  },
                  {
                    ar: 'التفاعل مع المدرب عند الحاجة باستخدام أدوات المنصة (رفع اليد، الدردشة).',
                    en: 'Interacting with the trainer when needed using platform tools (raising hand, chat).'
                  },
                  {
                    ar: 'تدوين الملاحظات المهمة من الجلسة.',
                    en: 'Taking important notes from the session.'
                  },
                  {
                    ar: 'احترام آراء الآخرين والالتزام بسياسة التواصل.',
                    en: 'Respecting others\' opinions and adhering to communication policy.'
                  }
                ]
              },
              {
                category: {
                  ar: 'بعد الجلسات التدريبية',
                  en: 'After Training Sessions'
                },
                items: [
                  {
                    ar: 'إنجاز الأنشطة والمهام المطلوبة ضمن الوقت المحدد.',
                    en: 'Completing required activities and tasks within the specified time.'
                  },
                  {
                    ar: 'مراجعة المحتوى التدريبي المُسجّل (إن توفر).',
                    en: 'Reviewing recorded training content (if available).'
                  },
                  {
                    ar: 'متابعة التقييمات والملاحظات من المدرب.',
                    en: 'Following up on evaluations and notes from the trainer.'
                  },
                  {
                    ar: 'طرح الأسئلة أو الاستفسارات عبر قنوات الدعم أو منتدى الدورة.',
                    en: 'Asking questions or inquiries through support channels or course forum.'
                  }
                ]
              },
              {
                category: {
                  ar: 'الجوانب التقنية والسلوكية',
                  en: 'Technical and Behavioral Aspects'
                },
                items: [
                  {
                    ar: 'عدم مشاركة معلومات الدخول مع أي شخص.',
                    en: 'Not sharing login information with anyone.'
                  },
                  {
                    ar: 'التأكد من تحديث البرامج المستخدمة.',
                    en: 'Ensuring updating of used software.'
                  },
                  {
                    ar: 'الالتزام بسياسات النزاهة والحضور في بيئة التدريب.',
                    en: 'Adhering to integrity and attendance policies in the training environment.'
                  }
                ]
              }
            ],
            icon: UserIcon,
          }
        ]
      }
    },
    refund: {
      id: 'refund',
      title: {
        ar: 'سياسة الإلغاء والانسحاب والتأجيل',
        en: 'Cancellation, Withdrawal, and Postponement Policy'
      },
      icon: ReceiptRefundIcon,
      color: 'bg-gradient-to-r from-[#23A0D0] to-[#3CBEB3]',
      number: {
        ar: 'المعيار التاسع',
        en: 'Ninth Standard'
      },
      lastUpdated: 'ديسمبر 2024',
      pdf: '/files/NinthStandart.pdf',
      content: {
        introduction: {
          ar: 'تضع هذه السياسة الإطار النظامي والتنظيمي الذي ينظم حقوق والتزامات كل من الأكاديمية والمتدرب، لضمان تقديم خدمات تدريبية عالية الجودة وبما يتوافق مع الأنظمة المعمول بها.',
          en: 'This policy establishes the regulatory and organizational framework that regulates the rights and obligations of both the academy and the trainee, to ensure the provision of high-quality training services in accordance with applicable regulations.'
        },
        sections: [
          {
            title: {
              ar: 'أولًا: الدورات التطويرية والتأهيلية',
              en: 'First: Developmental and Qualification Courses'
            },
            points: [
              {
                category: {
                  ar: 'الإلغاء قبل بدء الدورة',
                  en: 'Cancellation Before Course Start'
                },
                items: [
                  {
                    ar: 'في حال رغبة المتدرب بإلغاء التسجيل قبل تاريخ بدء الدورة، يحق للأكاديمية خصم رسوم إدارية تصل إلى 30% من قيمة الرسوم المدفوعة.',
                    en: 'If the trainee wishes to cancel registration before the course start date, the academy has the right to deduct administrative fees up to 30% of the paid fees value.'
                  },
                  {
                    ar: 'لا يتم استرداد كامل المبلغ المدفوع في هذه المرحلة نظرًا لما يتم ترتيبه من تجهيزات مسبقة لحجز المقعد وإعداد البرنامج.',
                    en: 'The full paid amount is not refunded at this stage due to the pre-arranged preparations for seat reservation and program preparation.'
                  }
                ]
              },
              {
                category: {
                  ar: 'الإلغاء بعد تفعيل الدورة',
                  en: 'Cancellation After Course Activation'
                },
                items: [
                  {
                    ar: 'بمجرد تفعيل الدورة وإضافتها إلى حساب المشارك يُعد ذلك بمثابة بدء تقديم الخدمة، ولا يمكن استرداد قيمة الدورة لأي سبب كان.',
                    en: 'Once the course is activated and added to the participant\'s account, this is considered as service commencement, and the course value cannot be refunded for any reason.'
                  }
                ]
              },
              {
                category: {
                  ar: 'الاسترداد خلال يوم واحد من السداد',
                  en: 'Refund Within One Day of Payment'
                },
                items: [
                  {
                    ar: 'في حال طلب الاسترداد خلال يوم واحد من إجراء عملية الدفع، تتم معالجة الطلب خلال مدة أقصاها 15 يوم عمل.',
                    en: 'If refund is requested within one day of payment processing, the request is processed within a maximum period of 15 working days.'
                  },
                  {
                    ar: 'يتم خصم 30% من المبلغ المدفوع باعتبارها رسومًا إدارية لمعالجة الطلب وتجهيز الخدمة.',
                    en: '30% of the paid amount is deducted as administrative fees for processing the request and preparing the service.'
                  }
                ]
              },
              {
                category: {
                  ar: 'الخدمات المقدمة بالكامل',
                  en: 'Fully Provided Services'
                },
                items: [
                  {
                    ar: 'لا يحق للمتدرب طلب استرداد الرسوم في حال تم تقديم الخدمة كاملة أو استكمال محتوى الدورة أو تسليم المتطلبات المتفق عليها.',
                    en: 'The trainee is not entitled to request fee refund if the service has been fully provided or course content completed or agreed requirements delivered.'
                  },
                  {
                    ar: 'تتيح الأكاديمية خيار تحويل الرسوم إلى دورة أخرى، مع دفع الفارق (إن وجد)، شريطة تقديم الطلب قبل بدء الدورة.',
                    en: 'The academy allows the option of transferring fees to another course, with payment of the difference (if any), provided that the request is submitted before the course starts.'
                  }
                ]
              },
              {
                category: {
                  ar: 'الاشتراك عبر أنظمة الدفع (تابي – تمارا)',
                  en: 'Subscription Through Payment Systems (TABI - TAMARA)'
                },
                items: [
                  {
                    ar: 'في حالة الاشتراك عبر خدمات الدفع المقدمة من "تابي" أو "تمارا"، يعتبر الطلب نهائيًا، ولا يمكن إلغاؤه أو استرداد قيمته، التزامًا بسياسات الجهات المشغّلة.',
                    en: 'In case of subscription through payment services provided by "TABI" or "TAMARA", the order is considered final, and cannot be canceled or its value refunded, in compliance with the operating entities\' policies.'
                  }
                ]
              }
            ],
            icon: CurrencyDollarIcon,
          },
          {
            title: {
              ar: 'ثانياً: البرامج التأهيلية والدبلوم',
              en: 'Second: Qualification Programs and Diplomas'
            },
            content: {
              ar: 'يجوز للمتدرب الانسحاب أو الاعتذار عن تكملة البرنامج ، ويطبق عليه سياسة إعادة الرسوم كالتالي:',
              en: 'The trainee may withdraw or apologize for completing the program, and the fee refund policy applies as follows:'
            },
            points: [
              {
                ar: 'رسوم التسجيل في البرنامج التأهيلي أو الدبلوم غير مستردة.',
                en: 'Registration fees for the qualification program or diploma are non-refundable.'
              },
              {
                ar: 'يخصم (15%) من الرسوم في حال الانسحاب أو الاعتذار عن البرنامج قبل بدء الدراسة وفقاً للتقويم التدريبي.',
                en: '15% of the fees are deducted in case of withdrawal or apology from the program before the start of study according to the training calendar.'
              },
              {
                ar: 'يخصم (25%) من الرسوم خلال الأسابيع الثلاثة الأولى من بداية الفصل الدراسي وفقاً للتقويم التدريبي.',
                en: '25% of the fees are deducted during the first three weeks from the beginning of the semester according to the training calendar.'
              },
              {
                ar: 'لا تعاد الرسوم للمتدرب في حال الانسحاب أو الإعتذار بعد مضي الأسبوع الثالث وفقاً للتقويم التدريبي.',
                en: 'Fees are not returned to the trainee in case of withdrawal or apology after the third week according to the training calendar.'
              },
              {
                ar: 'إذا تقدم المتدرب بطلب تأجيل القبول فيجوز له ترحيل الرسوم الدراسية للفصل التالي.',
                en: 'If the trainee submits a request to postpone acceptance, they may defer tuition fees to the next semester.'
              }
            ],
            icon: CalendarIcon,
          },
          {
            title: {
              ar: 'ثالثاً: أحكام عامة',
              en: 'Third: General Provisions'
            },
            points: [
              {
                ar: 'تُعد هذه السياسة جزءًا لا يتجزأ من عقد تقديم الخدمة، ويُعد السداد موافقة كاملة على جميع الشروط المذكورة.',
                en: 'This policy is considered an integral part of the service provision contract, and payment is considered complete acceptance of all mentioned terms.'
              },
              {
                ar: 'تهدف هذه السياسة إلى تنظيم العلاقة بشكل عادل وشفاف، وتقديم خدمات تدريبية وفق أعلى المعايير.',
                en: 'This policy aims to regulate the relationship fairly and transparently, and provide training services according to the highest standards.'
              },
              {
                ar: 'يحق للأكاديمية تحديث هذه السياسة عند الحاجة، وسيتم الإعلان عن ذلك عند تطبيق أي تعديل.',
                en: 'The academy has the right to update this policy when needed, and this will be announced when any amendment is applied.'
              }
            ],
            icon: ShieldCheckIcon,
          }
        ]
      }
    },
  };

export default standardsData;