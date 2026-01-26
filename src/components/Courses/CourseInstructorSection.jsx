// TODO: Uncomment when instructor data is needed
// import { UserIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
// import { useParams } from 'react-router-dom';
// import { getCourseData } from '../../api/Courses';

// function InstructorSection({ course }) {
//   const { lang } = useParams();
//   const isRTL = lang === 'ar';
  
//   // Get localized course data
//   const localizedCourse = getCourseData(course, lang);

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className={`text-3xl font-bold text-gray-800 mb-8 ${isRTL ? 'border-r-4 border-[#23A0D0] pr-4' : 'border-l-4 border-[#23A0D0] pl-4'}`}>
//           {isRTL ? 'المدرب' : 'Instructor'}
//         </h2>
        
//         <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
//           <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
//             <div className="text-center">
//               {course.instructor.image ? (
//                 <img 
//                   src={course.instructor.image} 
//                   alt={course.instructor.name}
//                   className="w-40 h-40 rounded-2xl object-cover border-4 border-white shadow-lg mx-auto"
//                 />
//               ) : (
//                 <div className="w-40 h-40 rounded-2xl bg-gray-200 border-4 border-white shadow-lg mx-auto flex items-center justify-center">
//                   <UserIcon className="h-16 w-16 text-gray-400" />
//                 </div>
//               )}
//             </div>
            
//             <div className="flex-1">
//               <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">{course.instructor.name}</h3>
//                   <p className="text-[#23A0D0] font-medium">{localizedCourse.instructor.title}</p>
//                 </div>
//                 <div className="flex items-center gap-2 mt-4 md:mt-0">
//                   <span className="px-4 py-2 bg-[#23A0D0] text-white rounded-full text-sm">
//                     {isRTL ? 'خبرة' : 'Experience'} {localizedCourse.instructor.experience}
//                   </span>
//                 </div>
//               </div>
              
//               <p className="text-gray-600 leading-relaxed mb-8">
//                 {localizedCourse.instructor.bio}
//               </p>
              
//               <div className="flex flex-wrap gap-4">
//                 <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors">
//                   <UserIcon className="h-5 w-5" />
//                   <span>{isRTL ? 'عرض الملف الشخصي' : 'View Personal Profile'}</span>
//                 </button>
//                 <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
//                   <EnvelopeIcon className="h-5 w-5" />
//                   <span>{isRTL ? 'تواصل مع المدرب' : 'Contact the instructor'}</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default InstructorSection;