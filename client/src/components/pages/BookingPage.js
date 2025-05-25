// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ThumbsUp } from 'lucide-react';
// import { useSelector } from "react-redux";

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
// //     location: "Jaipur",
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
//   // {
//   //   id: 1,
//   //   name: "Excellence Academy",
//   //   image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
//   //   location: "New Delhi",
//   //   rating: 4.8,
//   //   reviews: [
//   //     { id: 1, user: "John Doe", rating: 5, comment: "Excellent teaching methodology and supportive faculty.", date: "2024-02-15" },
//   //     { id: 2, user: "Sarah Smith", rating: 4, comment: "Great environment for learning. Helped me crack my exam.", date: "2024-02-10" }
//   //   ],
//   //   subjects: ["Mathematics", "Physics", "Chemistry"],
//   //   seatsAvailable: 15,
//   //   totalSeats: 50,
//   //   lastDate: "2024-04-30",
//   //   fees: 1200,
//   //   description: "Excellence Academy is a premier coaching institute known for its exceptional teaching methodology and consistent results.",
//   //   faculties: [
//   //     { name: "Dr. Sarah Johnson", subject: "Physics", experience: "15 years" },
//   //     { name: "Prof. Michael Chen", subject: "Mathematics", experience: "12 years" },
//   //     { name: "Dr. Emily Brown", subject: "Chemistry", experience: "10 years" }
//   //   ],
//   //   facilities: ["Smart Classrooms", "Digital Library", "Lab Facilities", "Study Material"],
//   //   category: "Science"
//   // },
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
//     lastDate: "2024-04-30",
//     fees: 1200,
//     description: "Excellence Academy is a premier coaching institute known for its exceptional teaching methodology and consistent results.",
//     faculties: [
//       { name: "Dr. Sarah Johnson", subject: "Physics", experience: "15 years" },
//       { name: "Prof. Michael Chen", subject: "Mathematics", experience: "12 years" },
//       { name: "Dr. Emily Brown", subject: "Chemistry", experience: "10 years" }
//     ],
//     facilities: ["Smart Classrooms", "Digital Library", "Lab Facilities", "Study Material"],
//     facilityImages: {
//       Library: [
//         "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         "path/to/library-image2.jpg",
//       ],
//       "Computer Lab": [
//         "path/to/computer-lab-image1.jpg",
//         "path/to/computer-lab-image2.jpg",
//       ],
//       Cafeteria: [
//         "path/to/cafeteria-image1.jpg",
//         "path/to/cafeteria-image2.jpg",
//       ],
//       "Sports Complex": [
//         "path/to/sports-complex-image1.jpg",
//         "path/to/sports-complex-image2.jpg",
//       ],
//     },
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
//     lastDate: "2024-04-25",
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
//     lastDate: "2024-04-15",
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
//     lastDate: "2024-05-10",
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
//     lastDate: "2024-05-15",
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
//     location: "Hyderabad",
//     rating: 4.8,
//     reviews: [
//       { id: 1, user: "David Lee", rating: 5, comment: "Excellent language learning environment.", date: "2024-02-26" },
//       { id: 2, user: "Maria Rodriguez", rating: 4, comment: "Great conversational practice sessions.", date: "2024-02-22" }
//     ],
//     subjects: ["English", "French", "German", "Spanish"],
//     seatsAvailable: 30,
//     totalSeats: 75,
//     lastDate: "2024-04-20",
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


// function BookingPage() {
//   const user = useSelector((state) => state.user.user);
//   console.log("User in BookingPage:", user);
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const center = coachingCenters.find(c => c.id === parseInt(id));
//     const [formData, setFormData] = useState({
//       fullName: '',
//       email: '',
//       phone: '',
//       subjects: [],
//       notes: ''
//     });
//     const [showConfirmation, setShowConfirmation] = useState(false);
  
//     if (!center) {
//       return <div>Center not found</div>;
//     }
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       navigate(`/center/${center.id}/payment`)
//       setShowConfirmation(true);
//       // Here you would typically make an API call to save the booking
//     };
  
//     if (showConfirmation) {
//       return (
//         <div className="max-w-3xl mx-auto py-8 px-4">
//           <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <ThumbsUp className="h-8 w-8 text-green-600" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
//             <p className="text-gray-600 mb-6">
//               Thank you for booking a seat at {center.name}. We have sent a confirmation email to {formData.email} with all the details.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => navigate('/')}
//                 className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
//               >
//                 Back to Home
//               </button>
//               <button
//                 onClick={() => navigate(`/center/${id}`)}
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//               >
//                 View Center Details
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     }
  
//     return (
//       <div className="max-w-3xl mx-auto py-8 px-4">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Seat at {center.name}</h1>
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 required
//                 value={formData.fullName}
//                 onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone</label>
//               <input
//                 type="tel"
//                 required
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Subjects</label>
//               <select
//                 multiple
//                 required
//                 value={formData.subjects}
//                 onChange={(e) => setFormData({...formData, subjects: Array.from(e.target.selectedOptions, option => option.value)})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               >
//                 {center.subjects.map(subject => (
//                   <option key={subject} value={subject}>{subject}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
//               <textarea
//                 value={formData.notes}
//                 onChange={(e) => setFormData({...formData, notes: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//                 rows={4}
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//               <div>
//                 <p className="text-lg font-semibold text-gray-900">Total Amount: Rs-{center.fees}</p>
//                 <p className="text-sm text-gray-500">Including all taxes</p>
//               </div>
//               <button type="submit"
//               // onClick={() => navigate(`/center/${center.id}/payment`)}
//                 // type="submit"
//                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//               >
//                 Proceed to Payment
//               </button>

//               {/* <button
//                 type="submit"
//                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//               >
//                 Proceed to Payment
//               </button> */}
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
//   export default BookingPage;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import { ThumbsUp } from 'lucide-react';
// import { useSelector } from "react-redux";
// import summaryApi from '../../common';




// function BookingPage() {
//   const user = useSelector((state) => state.user.user);
//   const [allCenter, setAllCenter] = useState([])
//     const fetchAllCenter = async()=>{
//       const response = await fetch(summaryApi.allCenter.url)
//       const dataResponse = await response.json()
//       setAllCenter(dataResponse?.data || [])
//     }
//     useEffect(() => {
//       fetchAllCenter()
//       }, [])
//   console.log("User in BookingPage:", user);
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const center = allCenter.find(c => c._id === id);
//     const [formData, setFormData] = useState({
//       fullName: '',
//       email: '',
//       phone: '',
//       subjects: [],
//       notes: ''
//     });
//     const [showConfirmation, setShowConfirmation] = useState(false);
  
//     if (!center) {
//       return <div>Center not found</div>;
//     }
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       navigate(`/center/${center.id}/payment`)
//       setShowConfirmation(true);
//       // Here you would typically make an API call to save the booking
//     };
  
//     if (showConfirmation) {
//       return (
//         <div className="max-w-3xl mx-auto py-8 px-4">
//           <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <ThumbsUp className="h-8 w-8 text-green-600" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
//             <p className="text-gray-600 mb-6">
//               Thank you for booking a seat at {center.name}. We have sent a confirmation email to {formData.email} with all the details.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => navigate('/')}
//                 className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
//               >
//                 Back to Home
//               </button>
//               <button
//                 onClick={() => navigate(`/center/${id}`)}
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//               >
//                 View Center Details
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     }
  
//     return (
//       <div className="max-w-3xl mx-auto py-8 px-4">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Seat at {center.name}</h1>
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 required
//                 value={formData.fullName}
//                 onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone</label>
//               <input
//                 type="tel"
//                 required
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Select Subjects</label>
//               <select
//                 multiple
//                 required
//                 value={formData.subjects}
//                 onChange={(e) => setFormData({...formData, subjects: Array.from(e.target.selectedOptions, option => option.value)})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               >
//                 {center.subjects.map(subject => (
//                   <option key={subject} value={subject}>{subject}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
//               <textarea
//                 value={formData.notes}
//                 onChange={(e) => setFormData({...formData, notes: e.target.value})}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-slate-100"
//                 rows={4}
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//               <div>
//                 <p className="text-lg font-semibold text-gray-900">Total Amount: Rs-{center.fees}</p>
//                 <p className="text-sm text-gray-500">Including all taxes</p>
//               </div>
//               <button type="submit"
//               // onClick={() => navigate(`/center/${center.id}/payment`)}
//                 // type="submit"
//                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//               >
//                 Proceed to Payment
//               </button>

//               {/* <button
//                 type="submit"
//                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//               >
//                 Proceed to Payment
//               </button> */}
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
//   export default BookingPage;

// BookingPage.js
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import { ThumbsUp } from 'lucide-react';
// import { useSelector } from "react-redux";
// import summaryApi from '../../common';

// function BookingPage() {
//   const user = useSelector((state) => state.user.user);
//   const [allCenter, setAllCenter] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [error, setError] = useState(null);

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetchAllCenter = async () => {
//     try {
//       const response = await fetch(summaryApi.allCenter.url);
//       const dataResponse = await response.json();
//       setAllCenter(dataResponse?.data || []);
//     } catch (err) {
//       console.error("Failed to fetch centers", err);
//     }
//   };

//   useEffect(() => {
//     fetchAllCenter();
//   }, []);

//   const center = allCenter.find(c => c._id === id);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     subjects: [],
//     notes: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user || !user._id) {
//       alert("You must be logged in to book.");
//       return;
//     }

//     const bookingPayload = {
//       userId: user._id,
//       coachingCenterId: center._id,
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       subjects: formData.subjects,
//       notes: formData.notes,
//     };

//     try {
//       setLoading(true);
//       setError(null);

//       const res = await fetch(summaryApi.booking.url, {
//         method: summaryApi.booking.method,
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(bookingPayload)
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Failed to book seat");

//       setShowConfirmation(true);
//       setLoading(false);

//       // Optionally, redirect after a delay
//       setTimeout(() => {
//         navigate(`/center/${center._id}/payment`);
//       }, 2000);

//     } catch (err) {
//       setLoading(false);
//       setError(err.message);
//     }
//   };

//   if (!center) return <div>Loading center...</div>;

//   if (showConfirmation) {
//     return (
//       <div className="max-w-3xl mx-auto py-8 px-4">
//         <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <ThumbsUp className="h-8 w-8 text-green-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
//           <p className="text-gray-600 mb-6">
//             Thank you for booking a seat at {center.name}. A confirmation email has been sent to {formData.email}.
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
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               required
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Select Subjects</label>
//             <select
//               multiple
//               required
//               value={formData.subjects}
//               onChange={(e) =>
//                 setFormData({ ...formData, subjects: Array.from(e.target.selectedOptions, option => option.value) })
//               }
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
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
//               onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//               rows={4}
//             ></textarea>
//           </div>

//           <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//             <div>
//               <p className="text-lg font-semibold text-gray-900">Total Amount: ₹{center.fees}</p>
//               <p className="text-sm text-gray-500">Including all taxes</p>
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
//             >
//               {loading ? "Booking..." : "Proceed to Payment"}
//             </button>
//           </div>

//           {error && <p className="text-red-600 font-medium">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookingPage;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import { ThumbsUp } from 'lucide-react';
// import { useSelector } from "react-redux";
// import summaryApi from '../../common';

// function BookingPage() {
//   const user = useSelector((state) => state.user.user);
//   const [allCenter, setAllCenter] = useState([]);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     subjects: [],
//     notes: ''
//   });

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetchAllCenter = async () => {
//     try {
//       const response = await fetch(summaryApi.allCenter.url);
//       const dataResponse = await response.json();
//       setAllCenter(dataResponse?.data || []);
//     } catch (err) {
//       console.error("Failed to fetch centers", err);
//     }
//   };

//   useEffect(() => {
//     fetchAllCenter();
//   }, []);

//   const center = allCenter.find(c => c._id === id);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!user || !user._id) {
//       alert("You must be logged in to book.");
//       return;
//     }

//     const bookingPayload = {
//       userId: user._id,
//       coachingCenterId: center._id,
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       subjects: formData.subjects,
//       notes: formData.notes,
//       amount: center.fees
//     };

//     navigate(`/center/${center._id}/payment`, { state: { bookingPayload } });
    
    
//   };

//   if (!center) return <div>Loading center...</div>;

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
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               required
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Select Subjects</label>
//             <select
//               multiple
//               required
//               value={formData.subjects}
//               onChange={(e) =>
//                 setFormData({ ...formData, subjects: Array.from(e.target.selectedOptions, option => option.value) })
//               }
             
              
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//             >
//             {center.subjects[0]?.split(", ").map(subject => (
//   <option key={subject} value={subject}>{subject}</option>
// ))}

//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
//             <textarea
//               value={formData.notes}
//               onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
//               rows={4}
//             ></textarea>
//           </div>

//           <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//             <div>
//               <p className="text-lg font-semibold text-gray-900">Total Amount: ₹{center.fees}</p>
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

// export default BookingPage;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import summaryApi from '../../common';

function BookingPage() {
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  const [allCenter, setAllCenter] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const prefill = location.state?.formData;
    return prefill || {
      fullName: '',
      email: '',
      phone: '',
      examss: [],
      notes: ''
    };
  });

  const fetchAllCenter = async () => {
    try {
      const response = await fetch(summaryApi.allCenter.url);
      const dataResponse = await response.json();
      setAllCenter(dataResponse?.data || []);
    } catch (err) {
      console.error("Failed to fetch centers", err);
    }
  };

  useEffect(() => {
    fetchAllCenter();
  }, []);

  const center = allCenter.find(c => c._id === id);
  console.log("center",center);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      alert("You must be logged in to book.");
      return;
    }

    const bookingPayload = {
      userId: user._id,
      coachingCenterId: center._id,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      exams: formData.subjects,
      notes: formData.notes,
      amount: center.fees
    };

    navigate(`/center/${center._id}/payment`, {
      state: { bookingPayload }
    });
  };

  if (!center) return <div>Loading center...</div>;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Book a Seat at {center.name}</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Exam</label>
            <select
              multiple
              required
              value={formData.exams}
              onChange={(e) =>
                setFormData({ ...formData, subjects: Array.from(e.target.selectedOptions, option => option.value) })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              {/* {center.subjects[0]?.split(", ").map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))} */}
              {center.exams.map((exams) => ( // Directly map over center.subjects array
    <option key={exams} value={exams}>
      {exams}
    </option>
    ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100"
              rows={4}
            ></textarea>
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-lg font-semibold text-gray-900">Total Amount: ₹{center.fees}</p>
              <p className="text-sm text-gray-500">Including all taxes</p>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
