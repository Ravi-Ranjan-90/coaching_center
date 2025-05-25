import { Search, Star, MapPin, BookOpen, Users, Calendar, ChevronRight, Clock, GraduationCap, DollarSign, MessageSquare, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SimilarCoachingCard({ center, currentId }) {
    const navigate = useNavigate();
    // if (center.id === parseInt(currentId)) return null;
    if (center._id === currentId) return null;

  
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={center.image} alt={center.name} className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="font-semibold text-gray-900 mb-2">{center.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">{center.rating}</span>
        </div>
        <button 
          onClick={() => navigate(`/center/${center._id}`)}
          className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center"
        >
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    );
  }
  export default SimilarCoachingCard