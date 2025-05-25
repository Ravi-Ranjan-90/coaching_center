// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import {CgClose} from "react-icons/cg";
// import summaryApi from "../common";
// const UploadDetails = (
//     {onClose}
// ) => {
//     const [formData, setFormData] = useState({
//         name: "",
//         image: "",
//         location: "",
//         rating: "",
//         subjects: "",
//         exams: "",
//         seatsAvailable: "",
//         totalSeats: "",
//         lastDate: "",
//         fees: "",
//         description: "",
//         faculties: [{ name: "", subject: "", experience: "" }],
//         facilities: "",
//         category: [],
//         // reviews: [{ user: "", rating: "", comment: "", date: "" }],
//       });

//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };

//       const handleFacultyChange = (index, e) => {
//         const { name, value } = e.target;
//         const updatedFaculties = [...formData.faculties];
//         updatedFaculties[index][name] = value;
//         setFormData({ ...formData, faculties: updatedFaculties });
//     };

//     const addFaculty = () => {
//         setFormData({ ...formData, faculties: [...formData.faculties, { name: "", subject: "", experience: "" }] });
//     };

//     const removeFaculty = (index) => {
//         const updatedFaculties = formData.faculties.filter((_, i) => i !== index);
//         setFormData({ ...formData, faculties: updatedFaculties });
//     };
     
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(summaryApi.uploadCenter.url,{
//       method: summaryApi.uploadCenter.method,
//       credentials: "include",
//       headers: {
//       "Content-Type": "application/json"
//       },
//       body : JSON.stringify(formData)
//   })
//   const responseData  = await response.json()
//   // if(response.success){
//   //   toast.success(responseData?.message)
//   // }
//   // if(response.error()){
//   //   toast.error(responseData?.message)
//   // }
//   if (response.ok) { // Check if HTTP status is 200-299
//     toast.success(responseData?.message || "Uploaded successfully!");
// } else {
//     toast.error(responseData?.message || "Failed to upload.");
// }

//     console.log(formData);
//     }
//     const handleCategoryChange = (e) => {
//         const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
//         setFormData({ ...formData, category: selectedOptions });
//     };
//   return (
//     <div className='fixed bg-slate-200 bg-opacity-35 w-full h-full top-0 left-0 right-0 flex justify-center items-center'>
//         <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]'>
//             <div className='flex justify-between items-center'>
//                 <h2 className='font-bold'>uploadDetails</h2>
//                 <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
//                     <CgClose/>
//                 </div>
//             </div>

           
//         <form onSubmit={handleSubmit} className="grid p-4 gap-2 overflow-y-scroll h-full">
//           {/* Name */}
//           <label className="block font-medium">Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded bg-slate-100" required />

//           {/* Image URL */}
//           <label className="block font-medium">Image URL</label>
//           <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//           {/* Location */}
//           <label className="block font-medium">Location</label>
//           <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//           {/* Rating */}
//           {/* <label className="block font-medium">Rating (out of 5)</label>
//           <input type="number" name="rating" value={formData.rating} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" min="1" max="5" step="0.1" required /> */}

//           {/* Subjects */}
//           <label className="block font-medium">Subjects (comma separated)</label>
//           <input type="text" name="subjects" value={formData.subjects} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//           {/* Exams */}
//           <label className="block font-medium">Exams (comma separated)</label>
//           <input type="text" name="exams" value={formData.exams} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//            {/* Facilities */}
//            <label className="block font-medium">Facilities (comma separated)</label>
//           <input
//             type="text"
//             name="facilities"
//             value={formData.facilities}
//             onChange={handleChange}
//             className="w-full border p-2 rounded bg-slate-100"
//             required
//           />

//           {/* Seats Available */}
//           <label className="block font-medium">Seats Available</label>
//           <input type="number" name="seatsAvailable" value={formData.seatsAvailable} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//           {/* Total Seats */}
//           <label className="block font-medium">Total Seats</label>
//           <input type="number" name="totalSeats" value={formData.totalSeats} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//           {/* Last Date */}
//           <label className="block font-medium">Last Date</label>
//           <input type="date" name="lastDate" value={formData.lastDate} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//           {/* Fees */}
//           <label className="block font-medium">Fees</label>
//           <input type="number" name="fees" value={formData.fees} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required />

//           {/* Description */}
//           <label className="block font-medium">Description</label>
//           <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded h-20 resize-none  bg-slate-100" required />

//           {/* Facilities */}
//           {/* <label className="block font-medium">Facilities (comma separated)</label>
//           <input type="text" name="facilities" value={formData.facilities} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required /> */}
//           {/* Faculties Section */}
//           <h3 className="font-bold mt-4">Faculties</h3>
//                     {formData.faculties.map((faculty, index) => (
//                         <div key={index} className="border p-2 rounded mb-2">
//                             <label className="block font-medium">Name</label>
//                             <input type="text" name="name" value={faculty.name} onChange={(e) => handleFacultyChange(index, e)} className="w-full border p-2 rounded" />

//                             <label className="block font-medium">Subject</label>
//                             <input type="text" name="subject" value={faculty.subject} onChange={(e) => handleFacultyChange(index, e)} className="w-full border p-2 rounded" />

//                             <label className="block font-medium">Experience (years)</label>
//                             <input type="text" name="experience" value={faculty.experience} onChange={(e) => handleFacultyChange(index, e)} className="w-full border p-2 rounded" />
                       
//                             {/* Remove Faculty Button */}
//                             <button type="button" onClick={() => removeFaculty(index)} className="bg-red-500 text-white px-3 py-1 rounded mt-2 w-full">Remove Faculty</button>
//                         </div>
//                     ))}
//                     <button type="button" onClick={addFaculty} className="w-full bg-blue-500 text-white p-2 rounded mt-2">Add Faculty</button>

//           {/* Category */}
//   {/*         <label className="block font-medium">Category (comma separated)</label>
//           <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded  bg-slate-100" required /> */}
//           <label className="block font-medium">Category</label>
//                     <select name="category" multiple value={formData.category} onChange={handleCategoryChange} className="w-full border p-2 rounded h-10">
//                         <option value="science">Science</option>
//                         <option value="arts">Arts</option>
//                         <option value="commerce">Commerce</option>
//                         <option value="engineering">Engineering</option>
//                         <option value="medical">Medical</option>
//                     </select>
//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
//             Upload Coaching Center
//           </button>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default UploadDetails;

import React, { useState } from "react";
import { toast } from "react-toastify";
import { CgClose } from "react-icons/cg";
import summaryApi from "../common";

const UploadDetails = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    rating: "",
    subjects: "",
    exams: "",
    seatsAvailable: "",
    totalSeats: "",
    lastDate: "",
    fees: "",
    description: "",
    faculties: [{ name: "", subject: "", experience: "" }],
    facilities: "",
    category: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFacultyChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFaculties = [...formData.faculties];
    updatedFaculties[index][name] = value;
    setFormData({ ...formData, faculties: updatedFaculties });
  };

  const addFaculty = () => {
    setFormData({
      ...formData,
      faculties: [...formData.faculties, { name: "", subject: "", experience: "" }],
    });
  };

  const removeFaculty = (index) => {
    const updatedFaculties = formData.faculties.filter((_, i) => i !== index);
    setFormData({ ...formData, faculties: updatedFaculties });
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, category: selectedOptions });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated fields to arrays
    const facilitiesArray = formData.facilities.split(",").map((item) => item.trim());
    const subjectsArray = formData.subjects.split(",").map((item) => item.trim());
    const examsArray = formData.exams.split(",").map((item) => item.trim());

    // Update formData with arrays
    const updatedFormData = {
      ...formData,
      facilities: facilitiesArray,
      subjects: subjectsArray,
      exams: examsArray,
    };

    const response = await fetch(summaryApi.uploadCenter.url, {
      method: summaryApi.uploadCenter.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    });

    const responseData = await response.json();

    if (response.ok) {
      toast.success(responseData?.message || "Uploaded successfully!");
    } else {
      toast.error(responseData?.message || "Failed to upload.");
    }

    console.log(updatedFormData);
  };

  return (
    <div className="fixed bg-slate-200 bg-opacity-35 w-full h-full top-0 left-0 right-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Upload Details</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid p-4 gap-2 overflow-y-scroll h-full">
          {/* Name */}
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-slate-100"
            required
          />

          {/* Image URL */}
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Location */}
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Subjects */}
          <label className="block font-medium">Subjects (comma separated)</label>
          <input
            type="text"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Exams */}
          <label className="block font-medium">Exams (comma separated)</label>
          <input
            type="text"
            name="exams"
            value={formData.exams}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Facilities */}
          <label className="block font-medium">Facilities (comma separated)</label>
          <input
            type="text"
            name="facilities"
            value={formData.facilities}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-slate-100"
            required
          />

          {/* Seats Available */}
          <label className="block font-medium">Seats Available</label>
          <input
            type="number"
            name="seatsAvailable"
            value={formData.seatsAvailable}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Total Seats */}
          <label className="block font-medium">Total Seats</label>
          <input
            type="number"
            name="totalSeats"
            value={formData.totalSeats}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Last Date */}
          <label className="block font-medium">Last Date</label>
          <input
            type="date"
            name="lastDate"
            value={formData.lastDate}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Fees */}
          <label className="block font-medium">Fees</label>
          <input
            type="number"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
            className="w-full border p-2 rounded  bg-slate-100"
            required
          />

          {/* Description */}
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded h-20 resize-none  bg-slate-100"
            required
          />

          {/* Faculties Section */}
          <h3 className="font-bold mt-4">Faculties</h3>
          {formData.faculties.map((faculty, index) => (
            <div key={index} className="border p-2 rounded mb-2">
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={faculty.name}
                onChange={(e) => handleFacultyChange(index, e)}
                className="w-full border p-2 rounded"
              />

              <label className="block font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={faculty.subject}
                onChange={(e) => handleFacultyChange(index, e)}
                className="w-full border p-2 rounded"
              />

              <label className="block font-medium">Experience (years)</label>
              <input
                type="text"
                name="experience"
                value={faculty.experience}
                onChange={(e) => handleFacultyChange(index, e)}
                className="w-full border p-2 rounded"
              />

              <button
                type="button"
                onClick={() => removeFaculty(index)}
                className="bg-red-500 text-white px-3 py-1 rounded mt-2 w-full"
              >
                Remove Faculty
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFaculty}
            className="w-full bg-blue-500 text-white p-2 rounded mt-2"
          >
            Add Faculty
          </button>

          {/* Category */}
          <label className="block font-medium">Category</label>
          <select
            name="category"
            multiple
            value={formData.category}
            onChange={handleCategoryChange}
            className="w-full border p-2 rounded h-10"
          >
            <option value="science">Science</option>
            <option value="arts">Arts</option>
            <option value="commerce">Commerce</option>
            <option value="engineering">Engineering</option>
            <option value="medical">Medical</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Upload Coaching Center
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadDetails;
