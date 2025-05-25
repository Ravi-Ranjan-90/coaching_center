// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { MapPin, Star, Users, Calendar, IndianRupee, GraduationCap, ChevronRight } from 'lucide-react'; // Add icon imports
// import ReviewCard from "./ReviewCard"; // Assuming ReviewCard is a separate component
// import SimilarCoachingCard from "./similarCoachingCard"; 
// // Import any other components you need, like icons
// // const coachingCenters = [
// //     {
// //       id: 1,
// //       name: "Excellence Academy",
// //       image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
// //       location: "New York City",
// //       rating: 4.8,
// //       reviews: [
// //         { id: 1, user: "John Doe", rating: 5, comment: "Excellent teaching methodology and supportive faculty.", date: "2024-02-15" },
// //         { id: 2, user: "Sarah Smith", rating: 4, comment: "Great environment for learning. Helped me crack my exam.", date: "2024-02-10" }
// //       ],
// //       subjects: ["Mathematics", "Physics", "Chemistry"],
// //       seatsAvailable: 15,
// //       totalSeats: 50,
// //       lastDate: "2024-04-30",
// //       fees: 1200,
// //       description: "Excellence Academy is a premier coaching institute known for its exceptional teaching methodology and consistent results.",
// //       faculties: [
// //         { name: "Dr. Sarah Johnson", subject: "Physics", experience: "15 years" },
// //         { name: "Prof. Michael Chen", subject: "Mathematics", experience: "12 years" },
// //         { name: "Dr. Emily Brown", subject: "Chemistry", experience: "10 years" }
// //       ],
// //       facilities: ["Smart Classrooms", "Digital Library", "Lab Facilities", "Study Material"],
// //       category: "Science"
// //     },
// //     {
// //       id: 2,
// //       name: "Future Prep Institute",
// //       image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800",
// //       location: "Los Angeles",
// //       rating: 4.6,
// //       reviews: [
// //         { id: 1, user: "Mike Wilson", rating: 5, comment: "Best computer science coaching in the area.", date: "2024-02-20" },
// //         { id: 2, user: "Emma Davis", rating: 4, comment: "Modern teaching methods and great faculty.", date: "2024-02-18" }
// //       ],
// //       subjects: ["Computer Science", "Mathematics", "English"],
// //       seatsAvailable: 8,
// //       totalSeats: 40,
// //       lastDate: "2024-04-25",
// //       fees: 1500,
// //       description: "Future Prep Institute specializes in preparing students for competitive exams with personalized attention and modern teaching methods.",
// //       faculties: [
// //         { name: "Prof. David Wilson", subject: "Computer Science", experience: "14 years" },
// //         { name: "Dr. Lisa Wang", subject: "Mathematics", experience: "11 years" },
// //         { name: "Prof. James Miller", subject: "English", experience: "9 years" }
// //       ],
// //       facilities: ["Computer Lab", "Study Rooms", "Online Resources", "Practice Tests"],
// //       category: "Technology"
// //     }
// //   ];
  

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
//   //   facilityImages: {
//   //     Library: [
//   //       "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   //       "path/to/library-image2.jpg",
//   //     ],
//   //     "Computer Lab": [
//   //       "path/to/computer-lab-image1.jpg",
//   //       "path/to/computer-lab-image2.jpg",
//   //     ],
//   //     Cafeteria: [
//   //       "path/to/cafeteria-image1.jpg",
//   //       "path/to/cafeteria-image2.jpg",
//   //     ],
//   //     "Sports Complex": [
//   //       "path/to/sports-complex-image1.jpg",
//   //       "path/to/sports-complex-image2.jpg",
//   //     ],
//   //   },
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
//       "Digital Library": [
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

// function CenterDetails() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const center = coachingCenters.find(c => c.id === parseInt(id));

//     const [hoveredFacility, setHoveredFacility] = useState(null);
  
//     if (!center) {
//       return <div>Center not found</div>;
//     }
  

//     const similarCenters = coachingCenters.filter(c => 
//       c.id !== center.id && 
//       (c.category === center.category || 
//        c.subjects.some(s => center.subjects.includes(s)))
//     );
  
//     return (
//       <div className="max-w-7xl mx-auto py-8 px-4">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="relative h-96">
//             <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
//               <h1 className="text-4xl font-bold text-white">{center.name}</h1>
//               <div className="flex items-center mt-2 text-white">
//                 <MapPin className="h-5 w-5" />
//                 <span className="ml-2">{center.location}</span>
//                 <div className="ml-4 flex items-center">
//                   <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                   <span className="ml-1">{center.rating} ({center.reviews.length} reviews)</span>
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           <div className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div className="flex items-center p-4 bg-gray-50 rounded-lg">
//                 <Users className="h-8 w-8 text-indigo-600" />
//                 <div className="ml-4">
//                   <h3 className="text-sm font-medium text-gray-500">Available Seats</h3>
//                   <p className="text-lg font-semibold text-gray-900">{center.seatsAvailable}/{center.totalSeats}</p>
//                 </div>
//               </div>
//               <div className="flex items-center p-4 bg-gray-50 rounded-lg">
//                 <Calendar className="h-8 w-8 text-indigo-600" />
//                 <div className="ml-4">
//                   <h3 className="text-sm font-medium text-gray-500">Last Date</h3>
//                   <p className="text-lg font-semibold text-gray-900">{new Date(center.lastDate).toLocaleDateString()}</p>
//                 </div>
//               </div>
//               <div className="flex items-center p-4 bg-gray-50 rounded-lg">
//                 <IndianRupee className="h-8 w-8 text-indigo-600" />
//                 <div className="ml-4">
//                   <h3 className="text-sm font-medium text-gray-500">Course Fee</h3>
//                   <p className="text-lg font-semibold text-gray-900">Rs{center.fees}</p>
//                 </div>
//               </div>
//             </div>
  
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
//               <p className="text-gray-600">{center.description}</p>
//             </div>
  
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects Offered</h2>
//               <div className="flex flex-wrap gap-2">
//                 {center.subjects.map(subject => (
//                   <span key={subject} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
//                     {subject}
//                   </span>
//                 ))}
//               </div>
//             </div>
  
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Faculty</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {center.faculties.map(faculty => (
//                   <div key={faculty.name} className="p-4 bg-gray-50 rounded-lg">
//                     <h3 className="font-semibold text-gray-900">{faculty.name}</h3>
//                     <p className="text-gray-600">{faculty.subject}</p>
//                     <p className="text-sm text-gray-500">{faculty.experience} experience</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
  
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {center.facilities.map(facility => (
//                   <div key={facility} className="flex items-center p-3 bg-gray-50 rounded-lg">
//                     <GraduationCap className="h-5 w-5 text-indigo-600" />
//                     <span className="ml-2 text-gray-700">{facility}</span>
//                   </div>
//                 ))}
//               </div>

// {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {center.facilities.map((facility) => (
//             <div
//               key={facility}
//               className="relative flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer"
//               onMouseEnter={() => setHoveredFacility(facility)}
//               onMouseLeave={() => setHoveredFacility(null)}
//             >
//               <GraduationCap className="h-5 w-5 text-indigo-600" />
//               <span className="ml-2 text-gray-700">{facility}</span>

             
//               {hoveredFacility === facility && Array.isArray(center.facilityImages[facility]) && (
//  <div className="absolute left-0 top-full mt-2 w-64 max-h-64 overflow-y-auto grid grid-cols-2 gap-2 bg-white p-2 rounded-lg shadow-lg z-50">
//     {center.facilityImages[facility].map((image, index) => (
//       <img
//         key={index}
//         src={image}
//         alt={facility}
//         className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "https://via.placeholder.com/150?text=Image+Not+Available";
//         }}
//       />
//     ))}
//   </div>
// )}


//             </div>
//           ))}
//         </div> */}
//             </div>
  
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Reviews</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {center.reviews.map(review => (
//                   <ReviewCard key={review.id} review={review} />
//                 ))}
//               </div>
//             </div>
  
//             <div className="flex justify-center mt-8">
//               <button 
//                 onClick={() => navigate(`/center/${center.id}/book`)}
//                 className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
//               >
//                 Book Seat Now
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </button>
//             </div>
            
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Coaching Centers</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {similarCenters.map(similarCenter => (
//                   <SimilarCoachingCard key={similarCenter.id} center={similarCenter} currentId={id} />
//                 ))}
//               </div>
//             </div>
  
//             {/* <div className="flex justify-center mt-8">
//               <button 
//                 onClick={() => navigate(`/center/${center.id}/book`)}
//                 className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
//               >
//                 Book Seat Now
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </button>
//             </div> */}

//             <div className="mb-8">
//     <h2 className="text-2xl font-bold text-gray-900 mb-4">Write a Review</h2>

//     <textarea
//       className="w-full p-3 border rounded-lg"
//       rows="4"
//       placeholder="Share your experience..."
//       // value={newReview}
//       // onChange={(e) => setNewReview(e.target.value)}
//     />

// <div className="flex items-center mt-2">
//                                 <label className="mr-2">Rating:</label>
//                                 <div className="flex">
//                                     {[1, 2, 3, 4, 5].map((star) => (
//                                         <Star
//                                             key={star}
//                                             className={`h-6 w-6 cursor-pointer ${star <= center.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                                             // onClick={() => setRating(star)}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>

//     <button
//       className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//       // onClick={handleReviewSubmit}
//     >
//       Submit Review
//     </button>
//   </div>

//           </div>
//         </div>
//       </div>


//     );
//   }
//   export default CenterDetails;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Star, Users, Calendar, IndianRupee, GraduationCap, ChevronRight } from 'lucide-react'; // Add icon imports
import ReviewCard from "./ReviewCard"; // Assuming ReviewCard is a separate component
import SimilarCoachingCard from "./similarCoachingCard"; 
import summaryApi from '../../common';
import { useSelector } from "react-redux";


function CenterDetails() {
    const { id } = useParams();
    const navigate = useNavigate();


    const user = useSelector((state) => state.user.user);
    const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

    const [allCenter, setAllCenter] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const fetchAllCenter = async()=>{
      const response = await fetch(summaryApi.allCenter.url)
      const dataResponse = await response.json()
      setAllCenter(dataResponse?.data || [])
    }
    useEffect(() => {
      fetchAllCenter()
      }, [])

    const center = allCenter.find(c => c._id === id);
    console.log("Route ID:", id);
console.log("Sample center ID:", allCenter[0]?._id);


    const [hoveredFacility, setHoveredFacility] = useState(null);
  
    if (!center) {
      return <div>Center not found</div>;
    }
  

// If center exists, fetch reviews; otherwise, provide an empty array as fallback
const visibleReviews = showAll ? center.reviews : (center.reviews || []).slice(0, 2);

    const handleSubmit = async () => {
      if (!user) {
        alert("You must be logged in to submit a review.");
        return;
      }
  
      const reviewData = {
        centerId: id,
        userId: user._id,
        userName: user.name, // 👈 sending user._id with the review
        rating,
        comment,
      };
  
      const response = await fetch(summaryApi.addReview.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Review submitted successfully!");
        setRating(0);
        setComment("");
      } else {
        alert(data.message);
      }
    };
  

    const similarCenters = allCenter.filter(c => 
      c._id !== center._id && 
      (c.category === center.category || 
       c.subjects.some(s => center.subjects.includes(s)))
    );
  
    return (
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-4xl font-bold text-white">{center.name}</h1>
              <div className="flex items-center mt-2 text-white">
                <MapPin className="h-5 w-5" />
                <span className="ml-2">{center.location}</span>
                <div className="ml-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{center.rating} ({center.reviews.length} reviews)</span>
                </div>
              </div>
            </div>
          </div>
  
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Available Seats</h3>
                  <p className="text-lg font-semibold text-gray-900">{center.seatsAvailable}/{center.totalSeats}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Last Date</h3>
                  <p className="text-lg font-semibold text-gray-900">{new Date(center.lastDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <IndianRupee className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Course Fee</h3>
                  <p className="text-lg font-semibold text-gray-900">Rs{center.fees}</p>
                </div>
              </div>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">{center.description}</p>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects Offered</h2>
              <div className="flex flex-wrap gap-2">
                {center.subjects.map(subject => (
                  <span key={subject} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Exams</h2>
              <div className="flex flex-wrap gap-2">
                {center.exams.map(exam => (
                  <span key={exam} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                    {exam}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Faculty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {center.faculties.map(faculty => (
                  <div key={faculty.name} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900">{faculty.name}</h3>
                    <p className="text-gray-600">{faculty.subject}</p>
                    <p className="text-sm text-gray-500">{faculty.experience} experience</p>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {center.facilities.map(facility => (
                  <div key={facility} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>

{/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {center.facilities.map((facility) => (
            <div
              key={facility}
              className="relative flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredFacility(facility)}
              onMouseLeave={() => setHoveredFacility(null)}
            >
              <GraduationCap className="h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-gray-700">{facility}</span>

             
              {hoveredFacility === facility && Array.isArray(center.facilityImages[facility]) && (
 <div className="absolute left-0 top-full mt-2 w-64 max-h-64 overflow-y-auto grid grid-cols-2 gap-2 bg-white p-2 rounded-lg shadow-lg z-50">
    {center.facilityImages[facility].map((image, index) => (
      <img
        key={index}
        src={image}
        alt={facility}
        className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150?text=Image+Not+Available";
        }}
      />
    ))}
  </div>
)}


            </div>
          ))}
        </div> */}
            </div>
  
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => navigate(`/center/${center._id}/book`)}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
              >
                Book Seat Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Reviews</h2>
          <div className="space-y-4">
      {visibleReviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}

      {center.reviews.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-indigo-600 font-medium mt-2 hover:underline"
        >
          {showAll ? "Show Less" : `Show More (${center.reviews.length - 2} more)`}
        </button>
      )}
    </div>

            </div>
  
            {/* <div className="flex justify-center mt-8">
              <button 
                onClick={() => navigate(`/center/${center._id}/book`)}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
              >
                Book Seat Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div> */}
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Coaching Centers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarCenters.map(similarCenter => (
                  <SimilarCoachingCard key={similarCenter.id} center={similarCenter} currentId={id} />
                ))}
              </div>
            </div>
  
            {/* <div className="flex justify-center mt-8">
              <button 
                onClick={() => navigate(`/center/${center.id}/book`)}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
              >
                Book Seat Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div> */}

            {/* <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Write a Review</h2>

    <textarea
      className="w-full p-3 border rounded-lg"
      rows="4"
      placeholder="Share your experience..."
      // value={newReview}
      // onChange={(e) => setNewReview(e.target.value)}
    />

<div className="flex items-center mt-2">
                                <label className="mr-2">Rating:</label>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`h-6 w-6 cursor-pointer ${star <= center.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            // onClick={() => setRating(star)}
                                        />
                                    ))}
                                </div>
                            </div>

    <button
      className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      // onClick={handleReviewSubmit}
    >
      Submit Review
    </button>
  </div> */}
  <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Write a Review</h2>

      <textarea
        className="w-full p-3 border rounded-lg"
        rows="4"
        placeholder="Share your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex items-center mt-3">
        <label className="mr-2 font-medium">Rating:</label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <Star
              key={starValue}
              className={`h-8 w-8 cursor-pointer transition-colors ${
                (hoverRating || rating) >= starValue ? "text-yellow-400" : "text-gray-300"
              }`}
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(starValue)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Submit Review
      </button>
    </div>

          </div>
        </div>
      </div>


    );
  }
  export default CenterDetails;