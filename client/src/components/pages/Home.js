// // import React from 'react'

// // const Home = () => {
// //   return (
// //     <div>Home</div>
// //   )
// // }

// // export default Home


// // -----
// import React from 'react';
// import { useEffect } from 'react';
// import { CiSearch } from "react-icons/ci";
// import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
// import { Search, Star, MapPin, BookOpen, Users, Calendar, ChevronRight, Clock, GraduationCap, DollarSign, MessageSquare, ThumbsUp } from 'lucide-react';
// import { useState } from 'react';
// import CenterDetails from "./CenterDetails"; // Assuming you have this component
// import BookingPage from "./BookingPage"; 

// import summaryApi from '../../common';

// // Mock data
// // const coachingCenters = [
// //   {
// //     id: 1,
// //     name: "Excellence Academy",
// //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
// //     location: "New Delhi",
// //     rating: 4.8,
// //     reviews: [
// //       { id: 1, user: "John Doe", rating: 5, comment: "Excellent teaching methodology and supportive faculty.", date: "2024-02-15" },
// //       { id: 2, user: "Sarah Smith", rating: 4, comment: "Great environment for learning. Helped me crack my exam.", date: "2024-02-10" }
// //     ],
// //     subjects: ["Mathematics", "Physics", "Chemistry"],
// //     seatsAvailable: 15,
// //     totalSeats: 50,
// //     lastDate: "2024-04-30",
// //     fees: 1200,
// //     description: "Excellence Academy is a premier coaching institute known for its exceptional teaching methodology and consistent results.",
// //     faculties: [
// //       { name: "Dr. Sarah Johnson", subject: "Physics", experience: "15 years" },
// //       { name: "Prof. Michael Chen", subject: "Mathematics", experience: "12 years" },
// //       { name: "Dr. Emily Brown", subject: "Chemistry", experience: "10 years" }
// //     ],
// //     facilities: ["Smart Classrooms", "Digital Library", "Lab Facilities", "Study Material"],
// //     category: "Science"
// //   },
// //   {
// //     id: 2,
// //     name: "Future Prep Institute",
// //     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800",
// //     location: "jaipur",
// //     rating: 4.6,
// //     reviews: [
// //       { id: 1, user: "Mike Wilson", rating: 5, comment: "Best computer science coaching in the area.", date: "2024-02-20" },
// //       { id: 2, user: "Emma Davis", rating: 4, comment: "Modern teaching methods and great faculty.", date: "2024-02-18" }
// //     ],
// //     subjects: ["Computer Science", "Mathematics", "English"],
// //     seatsAvailable: 8,
// //     totalSeats: 40,
// //     lastDate: "2024-04-25",
// //     fees: 1500,
// //     description: "Future Prep Institute specializes in preparing students for competitive exams with personalized attention and modern teaching methods.",
// //     faculties: [
// //       { name: "Prof. David Wilson", subject: "Computer Science", experience: "14 years" },
// //       { name: "Dr. Lisa Wang", subject: "Mathematics", experience: "11 years" },
// //       { name: "Prof. James Miller", subject: "English", experience: "9 years" }
// //     ],
// //     facilities: ["Computer Lab", "Study Rooms", "Online Resources", "Practice Tests"],
// //     category: "Technology"
// //   }
// // ];

// const coachingCenters = [
//   {
//     id: 1,
//     name: "Excellence Academy",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
//     location: "New Delhi",
//     rating: 4.8,
//     reviews: [
//       { id: 1, user: "John Doe", rating: 5, comment: "Excellent teaching methodology and supportive faculty.", date: "2024-02-15" },
//       { id: 2, user: "Sarah Smith", rating: 4, comment: "Great environment for learning. Helped me crack my exam.", date: "2024-02-10" }
//     ],
//     subjects: ["Mathematics", "Physics", "Chemistry"],
//     seatsAvailable: 15,
//     totalSeats: 50,
//     lastDate: "2025-04-30",
//     fees: 1200,
//     description: "Excellence Academy is a premier coaching institute known for its exceptional teaching methodology and consistent results.",
//     faculties: [
//       { name: "Dr. Sarah Johnson", subject: "Physics", experience: "15 years" },
//       { name: "Prof. Michael Chen", subject: "Mathematics", experience: "12 years" },
//       { name: "Dr. Emily Brown", subject: "Chemistry", experience: "10 years" }
//     ],
//     facilities: ["Smart Classrooms", "Digital Library", "Lab Facilities", "Study Material"],
//     category: "Science"
//   },
//   {
//     id: 2,
//     name: "Future Prep Institute",
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800",
//     location: "Jaipur",
//     rating: 4.6,
//     reviews: [
//       { id: 1, user: "Mike Wilson", rating: 5, comment: "Best computer science coaching in the area.", date: "2024-02-20" },
//       { id: 2, user: "Emma Davis", rating: 4, comment: "Modern teaching methods and great faculty.", date: "2024-02-18" }
//     ],
//     subjects: ["Computer Science", "Mathematics", "English"],
//     seatsAvailable: 8,
//     totalSeats: 40,
//     lastDate: "2025-04-25",
//     fees: 1500,
//     description: "Future Prep Institute specializes in preparing students for competitive exams with personalized attention and modern teaching methods.",
//     faculties: [
//       { name: "Prof. David Wilson", subject: "Computer Science", experience: "14 years" },
//       { name: "Dr. Lisa Wang", subject: "Mathematics", experience: "11 years" },
//       { name: "Prof. James Miller", subject: "English", experience: "9 years" }
//     ],
//     facilities: ["Computer Lab", "Study Rooms", "Online Resources", "Practice Tests"],
//     category: "Technology"
//   },
//   {
//     id: 3,
//     name: "Creative Arts Academy",
//     image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800",
//     location: "Mumbai",
//     rating: 4.9,
//     reviews: [
//       { id: 1, user: "Priya Sharma", rating: 5, comment: "Amazing art programs and talented instructors.", date: "2024-02-22" },
//       { id: 2, user: "Alex Turner", rating: 5, comment: "Best creative arts coaching in Mumbai.", date: "2024-02-19" }
//     ],
//     subjects: ["Fine Arts", "Digital Design", "Animation"],
//     seatsAvailable: 12,
//     totalSeats: 30,
//     lastDate: "2025-04-15",
//     fees: 1800,
//     description: "Creative Arts Academy offers comprehensive training in various art forms with state-of-the-art facilities and industry-experienced faculty.",
//     faculties: [
//       { name: "Prof. Rachel Adams", subject: "Fine Arts", experience: "16 years" },
//       { name: "Mr. Tom Parker", subject: "Digital Design", experience: "13 years" },
//       { name: "Ms. Sofia Garcia", subject: "Animation", experience: "11 years" }
//     ],
//     facilities: ["Art Studios", "Digital Lab", "Exhibition Space", "Materials Workshop"],
//     category: "Arts"
//   },
//   {
//     id: 4,
//     name: "Medical Prep Center",
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
//     location: "Bangalore",
//     rating: 4.7,
//     reviews: [
//       { id: 1, user: "Rahul Verma", rating: 4, comment: "Comprehensive medical entrance preparation.", date: "2024-02-25" },
//       { id: 2, user: "Lisa Chen", rating: 5, comment: "Excellent biology and chemistry faculty.", date: "2024-02-21" }
//     ],
//     subjects: ["Biology", "Chemistry", "Physics"],
//     seatsAvailable: 20,
//     totalSeats: 60,
//     lastDate: "2025-05-10",
//     fees: 2000,
//     description: "Medical Prep Center focuses on preparing students for medical entrance examinations with specialized coaching and practical exposure.",
//     faculties: [
//       { name: "Dr. Robert Kumar", subject: "Biology", experience: "18 years" },
//       { name: "Dr. Maria Santos", subject: "Chemistry", experience: "15 years" },
//       { name: "Prof. John Smith", subject: "Physics", experience: "12 years" }
//     ],
//     facilities: ["Medical Lab", "Research Center", "Library", "Mock Test Center"],
//     category: "Medical"
//   },
//   {
//     id: 5,
//     name: "Business Excellence Institute",
//     image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800",
//     location: "Chennai",
//     rating: 4.5,
//     reviews: [
//       { id: 1, user: "Arun Kumar", rating: 4, comment: "Great preparation for MBA entrance.", date: "2024-02-24" },
//       { id: 2, user: "Jenny Williams", rating: 5, comment: "Excellent case study approach.", date: "2024-02-23" }
//     ],
//     subjects: ["Business Management", "Economics", "Quantitative Analysis"],
//     seatsAvailable: 25,
//     totalSeats: 45,
//     lastDate: "2025-05-15",
//     fees: 1700,
//     description: "Business Excellence Institute provides comprehensive coaching for management entrance exams with focus on case studies and analytical skills.",
//     faculties: [
//       { name: "Prof. Andrew Clark", subject: "Business Management", experience: "17 years" },
//       { name: "Dr. Nina Patel", subject: "Economics", experience: "14 years" },
//       { name: "Mr. Steve Johnson", subject: "Quantitative Analysis", experience: "10 years" }
//     ],
//     facilities: ["Case Study Room", "Discussion Hall", "Business Library", "Analytics Lab"],
//     category: "Management"
//   },
//   {
//     id: 6,
//     name: "Language Masters",
//     image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800",
//     location: "Mumbai",
//     rating: 4.8,
//     reviews: [
//       { id: 1, user: "David Lee", rating: 5, comment: "Excellent language learning environment.", date: "2024-02-26" },
//       { id: 2, user: "Maria Rodriguez", rating: 4, comment: "Great conversational practice sessions.", date: "2024-02-22" }
//     ],
//     subjects: ["English", "French", "German", "Spanish"],
//     seatsAvailable: 30,
//     totalSeats: 75,
//     lastDate: "2025-04-20",
//     fees: 1300,
//     description: "Language Masters offers comprehensive language training with native speakers and modern learning methodologies.",
//     faculties: [
//       { name: "Ms. Claire Dubois", subject: "French", experience: "13 years" },
//       { name: "Mr. Hans Mueller", subject: "German", experience: "11 years" },
//       { name: "Ms. Isabella Garcia", subject: "Spanish", experience: "12 years" }
//     ],
//     facilities: ["Language Lab", "Conversation Rooms", "Cultural Center", "Audio-Visual Studio"],
//     category: "Languages"
//   }
// ];



// // function SearchBar() {
// //   return (
// //     <div className="max-w-4xl mx-auto mt-8 px-4">
// //       <div className="relative">
// //         <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //         <input
// //           type="text"
// //           placeholder="Search for coaching centers..."
// //           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //         />
// //       </div>
// //       <div className="flex gap-4 mt-4">
// //         <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
// //           <option>All Subjects</option>
// //           <option>Mathematics</option>
// //           <option>Physics</option>
// //           <option>Chemistry</option>
// //         </select>
// //         <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
// //           <option>Price Range</option>
// //           <option>0 - 500</option>
// //           <option>501 - 1000</option>
// //           <option>1000 - 1400</option>
// //           <option>1401+</option>
// //         </select>
// //       </div>
// //     </div>
// //   );
// // }

// function SearchBar({ searchTerm, setSearchTerm }) {
//   return (
//     <div className="max-w-3xl mx-auto mt-8 px-4">
//       <div className="relative">
//         <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for coaching centers..."
//           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//       </div>
//       {/* <div className="pt-2 rounded-r-lg bg-gray-300 px-2"><CiSearch /></div> */}
//     </div>
//   );
// }




// // function ReviewCard({ review }) {
// //   return (
// //     <div className="bg-gray-50 p-4 rounded-lg">
// //       <div className="flex items-center justify-between mb-2">
// //         <h4 className="font-semibold text-gray-900">{review.user}</h4>
// //         <div className="flex items-center">
// //           {[...Array(review.rating)].map((_, i) => (
// //             <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
// //           ))}
// //         </div>
// //       </div>
// //       <p className="text-gray-600 mb-2">{review.comment}</p>
// //       <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
// //     </div>
// //   );
// // }

// // function SimilarCoachingCard({ center, currentId }) {
// //   const navigate = useNavigate();
// //   if (center.id === parseInt(currentId)) return null;

// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-4">
// //       <img src={center.image} alt={center.name} className="w-full h-40 object-cover rounded-lg mb-4" />
// //       <h3 className="font-semibold text-gray-900 mb-2">{center.name}</h3>
// //       <div className="flex items-center mb-2">
// //         <Star className="h-4 w-4 text-yellow-400 fill-current" />
// //         <span className="ml-1 text-gray-600">{center.rating}</span>
// //       </div>
// //       <button 
// //         onClick={() => navigate(`/center/${center.id}`)}
// //         className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center"
// //       >
// //         View Details
// //         <ChevronRight className="ml-1 h-4 w-4" />
// //       </button>
// //     </div>
// //   );
// // }

// function CoachingCard({ center }) {
//   const navigate = useNavigate();
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//       <img src={center.image} alt={center.name} className="h-48 w-full object-cover" />
//       <div className="p-6">
//         <div className="flex justify-between items-start">
//           <h3 className="text-xl font-semibold text-gray-800">{center.name}</h3>
//           <div className="flex items-center">
//             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//             <span className="ml-1 text-gray-600">{center.rating}</span>
//           </div>
//         </div>
//         <div className="flex items-center mt-2 text-gray-600">
//           <MapPin className="h-4 w-4" />
//           <span className="ml-1">{center.location}</span>
//         </div>
//         <div className="mt-4">
//           <div className="flex items-center text-gray-600">
//             <Users className="h-4 w-4" />
//             <span className="ml-1">{center.seatsAvailable} seats available</span>
//           </div>
//           <div className="flex items-center mt-1 text-gray-600">
//             <Calendar className="h-4 w-4" />
//             <span className="ml-1">Last date: {new Date(center.lastDate).toLocaleDateString()}</span>
//           </div>
//         </div>
//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-lg font-semibold text-indigo-600">Rs{center.fees}</span>
//           <button 
//             onClick={() => navigate(`/center/${center.id}`)}
//             className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//           >
//             View Details
//             <ChevronRight className="ml-1 h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // function HomePage() {
// //   return (
// //     <main className="max-w-7xl mx-auto py-8">
// //       <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
// //         Find Your Perfect Coaching Center
// //       </h1>
// //       <p className="text-center text-gray-600 mb-8">
// //         Discover top-rated coaching centers and start your learning journey today
// //       </p>
// //       <SearchBar />
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
// //         {coachingCenters.map(center => (
// //           <CoachingCard key={center.id} center={center} />
// //         ))}
// //       </div>
// //     </main>
// //   );
// // }

// function HomePage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [subjectFilter, setSubjectFilter] = useState("All Subjects");
//   const [priceFilter, setPriceFilter] = useState("Price Range");
//   const [locationFilter, setLocationFilter] = useState("All Locations");

//   const [allCenter, setAllCenter] = useState([])
//   const fetchAllCenter = async()=>{
//     const response = await fetch(summaryApi.allCenter.url)
//     const dataResponse = await response.json()
//     setAllCenter(dataResponse?.data || [])
//   }
//   useEffect(() => {
//     fetchAllCenter()
//     }, [])

//   const filterCoachingCenters = () => {
//     return coachingCenters.filter(center => {
//       const matchesSearchTerm = center.name.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesSubject = subjectFilter === "All Subjects" || center.subjects.includes(subjectFilter);
//       const matchesLocation = locationFilter === "All Locations" || center.location === locationFilter;
//       const matchesPrice = (() => {
//         if (priceFilter === "Price Range") return true;
//         if (priceFilter === "0 - 500") return center.fees >= 0 && center.fees <= 500;
//         if (priceFilter === "501 - 1000") return center.fees > 500 && center.fees <= 1000;
//         if (priceFilter === "1000 - 1400") return center.fees > 1000 && center.fees <= 1400;
//         if (priceFilter === "1401+") return center.fees > 1400;
//         return false;
//       })();
//       return matchesSearchTerm && matchesSubject && matchesPrice && matchesLocation;
//     });
//   };
//   return (
//     <main className="max-w-7xl mx-auto py-8">
//       <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
//         Find Your Perfect Coaching Center
//       </h1>
//       <p className="text-center text-gray-600 mb-8">
//         Discover top-rated coaching centers and start your learning journey today
//       </p>
//       <SearchBar 
//         searchTerm={searchTerm} 
//         setSearchTerm={setSearchTerm} 
//       />
//       <div className="flex gap-4 mt-4 px-4">
//         <select 
//           className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={subjectFilter}
//           onChange={(e) => setSubjectFilter(e.target.value)}
//         >
//           <option>All Subjects</option>
//           <option>Mathematics</option>
//           <option>Physics</option>
//           <option>Chemistry</option>
//         </select>
//         <select 
//           className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={locationFilter}
//           onChange={(e) => setLocationFilter(e.target.value)}
//         >
//           <option>All Locations</option>
//           <option>Jaipur</option>
//           <option>New Delhi</option>
//           <option>Mumbai</option>
//           <option>Bangalore</option>
//           <option>Chennai</option>

//         </select>
//         <select 
//           className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(e.target.value)}
//         >
//           <option>Price Range</option>
//           <option>0 - 500</option>
//           <option>501 - 1000</option>
//           <option>1000 - 1400</option>
//           <option>1401+</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
//         {filterCoachingCenters().map(center => (
//           <CoachingCard key={center.id} center={center} />
//         ))}
//       </div>

//       //api wala
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
//         {allCenter.map(center => (
//           <CoachingCard key={center.id} center={center} />
//         ))}
//       </div>
//     </main>
//   );
// }


// // function CenterDetails() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const center = coachingCenters.find(c => c.id === parseInt(id));

// //   if (!center) {
// //     return <div>Center not found</div>;
// //   }

// //   const similarCenters = coachingCenters.filter(c => 
// //     c.id !== center.id && 
// //     (c.category === center.category || 
// //      c.subjects.some(s => center.subjects.includes(s)))
// //   );

// //   return (
// //     <div className="max-w-7xl mx-auto py-8 px-4">
// //       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //         <div className="relative h-96">
// //           <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
// //           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
// //             <h1 className="text-4xl font-bold text-white">{center.name}</h1>
// //             <div className="flex items-center mt-2 text-white">
// //               <MapPin className="h-5 w-5" />
// //               <span className="ml-2">{center.location}</span>
// //               <div className="ml-4 flex items-center">
// //                 <Star className="h-5 w-5 text-yellow-400 fill-current" />
// //                 <span className="ml-1">{center.rating} ({center.reviews.length} reviews)</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="p-6">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// //             <div className="flex items-center p-4 bg-gray-50 rounded-lg">
// //               <Users className="h-8 w-8 text-indigo-600" />
// //               <div className="ml-4">
// //                 <h3 className="text-sm font-medium text-gray-500">Available Seats</h3>
// //                 <p className="text-lg font-semibold text-gray-900">{center.seatsAvailable}/{center.totalSeats}</p>
// //               </div>
// //             </div>
// //             <div className="flex items-center p-4 bg-gray-50 rounded-lg">
// //               <Calendar className="h-8 w-8 text-indigo-600" />
// //               <div className="ml-4">
// //                 <h3 className="text-sm font-medium text-gray-500">Last Date</h3>
// //                 <p className="text-lg font-semibold text-gray-900">{new Date(center.lastDate).toLocaleDateString()}</p>
// //               </div>
// //             </div>
// //             <div className="flex items-center p-4 bg-gray-50 rounded-lg">
// //               <DollarSign className="h-8 w-8 text-indigo-600" />
// //               <div className="ml-4">
// //                 <h3 className="text-sm font-medium text-gray-500">Course Fee</h3>
// //                 <p className="text-lg font-semibold text-gray-900">${center.fees}</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
// //             <p className="text-gray-600">{center.description}</p>
// //           </div>

// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects Offered</h2>
// //             <div className="flex flex-wrap gap-2">
// //               {center.subjects.map(subject => (
// //                 <span key={subject} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
// //                   {subject}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Faculty</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //               {center.faculties.map(faculty => (
// //                 <div key={faculty.name} className="p-4 bg-gray-50 rounded-lg">
// //                   <h3 className="font-semibold text-gray-900">{faculty.name}</h3>
// //                   <p className="text-gray-600">{faculty.subject}</p>
// //                   <p className="text-sm text-gray-500">{faculty.experience} experience</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //               {center.facilities.map(facility => (
// //                 <div key={facility} className="flex items-center p-3 bg-gray-50 rounded-lg">
// //                   <GraduationCap className="h-5 w-5 text-indigo-600" />
// //                   <span className="ml-2 text-gray-700">{facility}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Reviews</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               {center.reviews.map(review => (
// //                 <ReviewCard key={review.id} review={review} />
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Coaching Centers</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               {similarCenters.map(similarCenter => (
// //                 <SimilarCoachingCard key={similarCenter.id} center={similarCenter} currentId={id} />
// //               ))}
// //             </div>
// //           </div>

// //           <div className="flex justify-center mt-8">
// //             <button 
// //               onClick={() => navigate(`/center/${center.id}/book`)}
// //               className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
// //             >
// //               Book Seat Now
// //               <ChevronRight className="ml-2 h-5 w-5" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function BookingPage() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const center = coachingCenters.find(c => c.id === parseInt(id));
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     phone: '',
// //     subjects: [],
// //     notes: ''
// //   });
// //   const [showConfirmation, setShowConfirmation] = useState(false);

// //   if (!center) {
// //     return <div>Center not found</div>;
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setShowConfirmation(true);
// //     // Here you would typically make an API call to save the booking
// //   };

// //   if (showConfirmation) {
// //     return (
// //       <div className="max-w-3xl mx-auto py-8 px-4">
// //         <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// //           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <ThumbsUp className="h-8 w-8 text-green-600" />
// //           </div>
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
// //           <p className="text-gray-600 mb-6">
// //             Thank you for booking a seat at {center.name}. We have sent a confirmation email to {formData.email} with all the details.
// //           </p>
// //           <div className="flex justify-center gap-4">
// //             <button
// //               onClick={() => navigate('/')}
// //               className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
// //             >
// //               Back to Home
// //             </button>
// //             <button
// //               onClick={() => navigate(`/center/${id}`)}
// //               className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// //             >
// //               View Center Details
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-3xl mx-auto py-8 px-4">
// //       <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Seat at {center.name}</h1>
// //       <div className="bg-white rounded-xl shadow-lg p-6">
// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Full Name</label>
// //             <input
// //               type="text"
// //               required
// //               value={formData.fullName}
// //               onChange={(e) => setFormData({...formData, fullName: e.target.value})}
// //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               required
// //               value={formData.email}
// //               onChange={(e) => setFormData({...formData, email: e.target.value})}
// //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Phone</label>
// //             <input
// //               type="tel"
// //               required
// //               value={formData.phone}
// //               onChange={(e) => setFormData({...formData, phone: e.target.value})}
// //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Select Subjects</label>
// //             <select
// //               multiple
// //               required
// //               value={formData.subjects}
// //               onChange={(e) => setFormData({...formData, subjects: Array.from(e.target.selectedOptions, option => option.value)})}
// //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //             >
// //               {center.subjects.map(subject => (
// //                 <option key={subject} value={subject}>{subject}</option>
// //               ))}
// //             </select>
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
// //             <textarea
// //               value={formData.notes}
// //               onChange={(e) => setFormData({...formData, notes: e.target.value})}
// //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
// //               rows={4}
// //             ></textarea>
// //           </div>
// //           <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
// //             <div>
// //               <p className="text-lg font-semibold text-gray-900">Total Amount: ${center.fees}</p>
// //               <p className="text-sm text-gray-500">Including all taxes</p>
// //             </div>
// //             <button
// //               type="submit"
// //               className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
// //             >
// //               Proceed to Payment
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// function Home() {
//   return (
//     // <BrowserRouter>
//     //   <div className="min-h-screen bg-gray-50">
//     //     <Routes>
//     //       <Route path="/" element={<HomePage />} />
//     //       <Route path="/center/:id" element={<CenterDetails />} />
//     //       <Route path="/center/:id/book" element={<BookingPage />} />
//     //     </Routes>
//     //   </div>
//     // </BrowserRouter>
//     <>
//     <div >
//     <HomePage />
//       {/* <Link to={"/center/:id"} ><CenterDetails /></Link> */}
//     </div>
//     {/* <div >
//       <Link to={"/center/:id/book"} ><BookingPage /></Link>
//     </div> */}
//     </>
//   );
// }

// export default Home;

// <div>

// </div>


// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home


// -----
import React from 'react';
import { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Search, Star, MapPin, BookOpen, Users, Calendar, ChevronRight, Clock, GraduationCap, DollarSign, MessageSquare, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import CenterDetails from "./CenterDetails"; // Assuming you have this component
import BookingPage from "./BookingPage"; 

import summaryApi from '../../common';


function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for coaching centers..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      {/* <div className="pt-2 rounded-r-lg bg-gray-300 px-2"><CiSearch /></div> */}
    </div>
  );
}




// function ReviewCard({ review }) {
//   return (
//     <div className="bg-gray-50 p-4 rounded-lg">
//       <div className="flex items-center justify-between mb-2">
//         <h4 className="font-semibold text-gray-900">{review.user}</h4>
//         <div className="flex items-center">
//           {[...Array(review.rating)].map((_, i) => (
//             <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//           ))}
//         </div>
//       </div>
//       <p className="text-gray-600 mb-2">{review.comment}</p>
//       <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
//     </div>
//   );
// }

// function SimilarCoachingCard({ center, currentId }) {
//   const navigate = useNavigate();
//   if (center.id === parseInt(currentId)) return null;

//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <img src={center.image} alt={center.name} className="w-full h-40 object-cover rounded-lg mb-4" />
//       <h3 className="font-semibold text-gray-900 mb-2">{center.name}</h3>
//       <div className="flex items-center mb-2">
//         <Star className="h-4 w-4 text-yellow-400 fill-current" />
//         <span className="ml-1 text-gray-600">{center.rating}</span>
//       </div>
//       <button 
//         onClick={() => navigate(`/center/${center.id}`)}
//         className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center"
//       >
//         View Details
//         <ChevronRight className="ml-1 h-4 w-4" />
//       </button>
//     </div>
//   );
// }

function CoachingCard({ center }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={center.image} alt={center.name} className="h-48 w-full object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800">{center.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{center.rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="ml-1">{center.location}</span>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4" />
            <span className="ml-1">{center.seatsAvailable} seats available</span>
          </div>
          <div className="flex items-center mt-1 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span className="ml-1">Last date: {new Date(center.lastDate).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-indigo-600">Rs{center.fees}</span>
          <button 
            onClick={() => navigate(`/center/${center._id}`)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            View Details
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// function HomePage() {
//   return (
//     <main className="max-w-7xl mx-auto py-8">
//       <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
//         Find Your Perfect Coaching Center
//       </h1>
//       <p className="text-center text-gray-600 mb-8">
//         Discover top-rated coaching centers and start your learning journey today
//       </p>
//       <SearchBar />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
//         {coachingCenters.map(center => (
//           <CoachingCard key={center.id} center={center} />
//         ))}
//       </div>
//     </main>
//   );
// }

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [priceFilter, setPriceFilter] = useState("Price Range");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [examFilter, setExamFilter] = useState("All Exams");
  const [sortBy, setSortBy] = useState("Default");


  const [allCenter, setAllCenter] = useState([])
  const fetchAllCenter = async()=>{
    const response = await fetch(summaryApi.allCenter.url)
    const dataResponse = await response.json()
    setAllCenter(dataResponse?.data || [])
  }
  useEffect(() => {
    fetchAllCenter()
    }, [])
    console.log(allCenter);

  const filterCoachingCenters = () => {
    return allCenter.filter(center => {
      const matchesSearchTerm = center.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = subjectFilter === "All Subjects" || center.subjects.includes(subjectFilter);
      const matchesLocation = locationFilter === "All Locations" || center.location === locationFilter;
      const matchesExam = examFilter === "All Exams" || center.exams.includes(examFilter);
      const matchesPrice = (() => {
        if (priceFilter === "Price Range") return true;
        if (priceFilter === "0 - 50000") return center.fees >= 0 && center.fees <= 50000;
        if (priceFilter === "50001 - 100000") return center.fees > 50000 && center.fees <= 100000;
        if (priceFilter === "100000 - 140000") return center.fees > 100000 && center.fees <= 140000;
        if (priceFilter === "140001+") return center.fees > 140000;
        return false;
      })();
      return matchesSearchTerm && matchesSubject && matchesPrice && matchesLocation && matchesExam;
    });
  };

  const filteredCenters = filterCoachingCenters();
  filteredCenters.sort((a, b) => {
    if (sortBy === "Price: Low to High") {
      return a.fees - b.fees;
    }
    if (sortBy === "Price: High to Low") {
      return b.fees - a.fees;
    }
    if (sortBy === "Rating: Low to High") {
      return a.rating - b.rating;
    }
    if (sortBy === "Rating: High to Low") {
      return b.rating - a.rating;
    }
    if (sortBy === "Closing Date: Nearest First") {
      return new Date(a.lastBookingDate) - new Date(b.lastBookingDate);
    }
    if (sortBy === "Closing Date: Farthest First") {
      return new Date(b.lastBookingDate) - new Date(a.lastBookingDate);
    }
    return 0; // Default no sort
  });
  
  return (
    <main className="max-w-7xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Find Your Perfect Coaching Center
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Discover top-rated coaching centers and start your learning journey today
      </p>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <div className="flex justify-around mt-4 px-4">
      <select 
  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option>Sort</option>
  <option>Price: Low to High</option>
  <option>Price: High to Low</option>
  <option>Rating: Low to High</option>
  <option>Rating: High to Low</option>
  <option>Closing Date: Nearest First</option>
  <option>Closing Date: Farthest First</option>
</select>
      <select 
  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  value={examFilter}
  onChange={(e) => setExamFilter(e.target.value)}
>
  <option>All Exams</option>
  <option>JEE</option>
  <option>NEET</option>
  <option>CAT</option>
  <option>UPSC</option>
</select>
        <select 
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
        >
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Chemistry</option>
        </select>
        <select 
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option>All Locations</option>
          <option>Jaipur</option>
          <option>New Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Chennai</option>

        </select>
        <select 
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option>Price Range</option>
          <option>0 - 50000</option>
          <option>50001 - 100000</option>
          <option>100000 - 140000</option>
          <option>140001+</option>
        </select>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        {filterCoachingCenters().map(center => (
          <CoachingCard key={center.id} center={center} />
        ))}
      </div> */}

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        {filteredCenters.map(center => (
          <CoachingCard key={center.id} center={center} />
        ))}
      </div>
    </main>
  );
}


// function CenterDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const center = coachingCenters.find(c => c.id === parseInt(id));

//   if (!center) {
//     return <div>Center not found</div>;
//   }

//   const similarCenters = coachingCenters.filter(c => 
//     c.id !== center.id && 
//     (c.category === center.category || 
//      c.subjects.some(s => center.subjects.includes(s)))
//   );

//   return (
//     <div className="max-w-7xl mx-auto py-8 px-4">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="relative h-96">
//           <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
//             <h1 className="text-4xl font-bold text-white">{center.name}</h1>
//             <div className="flex items-center mt-2 text-white">
//               <MapPin className="h-5 w-5" />
//               <span className="ml-2">{center.location}</span>
//               <div className="ml-4 flex items-center">
//                 <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                 <span className="ml-1">{center.rating} ({center.reviews.length} reviews)</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center p-4 bg-gray-50 rounded-lg">
//               <Users className="h-8 w-8 text-indigo-600" />
//               <div className="ml-4">
//                 <h3 className="text-sm font-medium text-gray-500">Available Seats</h3>
//                 <p className="text-lg font-semibold text-gray-900">{center.seatsAvailable}/{center.totalSeats}</p>
//               </div>
//             </div>
//             <div className="flex items-center p-4 bg-gray-50 rounded-lg">
//               <Calendar className="h-8 w-8 text-indigo-600" />
//               <div className="ml-4">
//                 <h3 className="text-sm font-medium text-gray-500">Last Date</h3>
//                 <p className="text-lg font-semibold text-gray-900">{new Date(center.lastDate).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div className="flex items-center p-4 bg-gray-50 rounded-lg">
//               <DollarSign className="h-8 w-8 text-indigo-600" />
//               <div className="ml-4">
//                 <h3 className="text-sm font-medium text-gray-500">Course Fee</h3>
//                 <p className="text-lg font-semibold text-gray-900">${center.fees}</p>
//               </div>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
//             <p className="text-gray-600">{center.description}</p>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects Offered</h2>
//             <div className="flex flex-wrap gap-2">
//               {center.subjects.map(subject => (
//                 <span key={subject} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
//                   {subject}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Faculty</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {center.faculties.map(faculty => (
//                 <div key={faculty.name} className="p-4 bg-gray-50 rounded-lg">
//                   <h3 className="font-semibold text-gray-900">{faculty.name}</h3>
//                   <p className="text-gray-600">{faculty.subject}</p>
//                   <p className="text-sm text-gray-500">{faculty.experience} experience</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {center.facilities.map(facility => (
//                 <div key={facility} className="flex items-center p-3 bg-gray-50 rounded-lg">
//                   <GraduationCap className="h-5 w-5 text-indigo-600" />
//                   <span className="ml-2 text-gray-700">{facility}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Reviews</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {center.reviews.map(review => (
//                 <ReviewCard key={review.id} review={review} />
//               ))}
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Coaching Centers</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {similarCenters.map(similarCenter => (
//                 <SimilarCoachingCard key={similarCenter.id} center={similarCenter} currentId={id} />
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-center mt-8">
//             <button 
//               onClick={() => navigate(`/center/${center.id}/book`)}
//               className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
//             >
//               Book Seat Now
//               <ChevronRight className="ml-2 h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function BookingPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const center = coachingCenters.find(c => c.id === parseInt(id));
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     subjects: [],
//     notes: ''
//   });
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   if (!center) {
//     return <div>Center not found</div>;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowConfirmation(true);
//     // Here you would typically make an API call to save the booking
//   };

//   if (showConfirmation) {
//     return (
//       <div className="max-w-3xl mx-auto py-8 px-4">
//         <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <ThumbsUp className="h-8 w-8 text-green-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
//           <p className="text-gray-600 mb-6">
//             Thank you for booking a seat at {center.name}. We have sent a confirmation email to {formData.email} with all the details.
//           </p>
//           <div className="flex justify-center gap-4">
//             <button
//               onClick={() => navigate('/')}
//               className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
//             >
//               Back to Home
//             </button>
//             <button
//               onClick={() => navigate(`/center/${id}`)}
//               className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//             >
//               View Center Details
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Seat at {center.name}</h1>
//       <div className="bg-white rounded-xl shadow-lg p-6">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               required
//               value={formData.fullName}
//               onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               required
//               value={formData.phone}
//               onChange={(e) => setFormData({...formData, phone: e.target.value})}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Select Subjects</label>
//             <select
//               multiple
//               required
//               value={formData.subjects}
//               onChange={(e) => setFormData({...formData, subjects: Array.from(e.target.selectedOptions, option => option.value)})}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             >
//               {center.subjects.map(subject => (
//                 <option key={subject} value={subject}>{subject}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
//             <textarea
//               value={formData.notes}
//               onChange={(e) => setFormData({...formData, notes: e.target.value})}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               rows={4}
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//             <div>
//               <p className="text-lg font-semibold text-gray-900">Total Amount: ${center.fees}</p>
//               <p className="text-sm text-gray-500">Including all taxes</p>
//             </div>
//             <button
//               type="submit"
//               className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//             >
//               Proceed to Payment
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

function Home() {
  return (
    // <BrowserRouter>
    //   <div className="min-h-screen bg-gray-50">
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/center/:id" element={<CenterDetails />} />
    //       <Route path="/center/:id/book" element={<BookingPage />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <>
    <div >
    <HomePage />
      {/* <Link to={"/center/:id"} ><CenterDetails /></Link> */}
    </div>
    {/* <div >
      <Link to={"/center/:id/book"} ><BookingPage /></Link>
    </div> */}
    </>
  );
}

export default Home;

<div>

</div>