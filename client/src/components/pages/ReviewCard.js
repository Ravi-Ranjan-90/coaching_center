// import { Search, Star, MapPin, BookOpen, Users, Calendar, ChevronRight, Clock, GraduationCap, DollarSign, MessageSquare, ThumbsUp } from 'lucide-react';
// function ReviewCard({ review }) {
//     return (
//       <div className="bg-gray-50 p-4 rounded-lg">
//         <div className="flex items-center justify-between mb-2">
//           <h4 className="font-semibold text-gray-900">{review.user}</h4>
//           <div className="flex items-center">
//             {[...Array(review.rating)].map((_, i) => (
//               <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//             ))}
//           </div>
//         </div>
//         <p className="text-gray-600 mb-2">{review.comment}</p>
//         <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
//       </div>
//     );
//   }
// export default ReviewCard

import { Star } from "lucide-react";

function ReviewCard({ review }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full font-semibold text-sm uppercase">
            {review.userName ? review.userName.charAt(0) : "U"}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{review.userName || "Anonymous"}</h4>
            <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;
