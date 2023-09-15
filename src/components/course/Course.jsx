import PropTypes from "prop-types";
import { BsBook, BsCurrencyDollar } from "react-icons/bs";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = ({ datas, handleCourse }) => {

  const {
    course_name,
    course_credit,
    course_price,
    course_description,
    cover_img,
  } = datas;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="px-3 pt-5">
          <img src={cover_img} alt="cover image" className="rounded-lg" />
        </div>
        <div className=" px-3 py-4 space-y-3 h-40">
          <h2 className="card-title">{course_name}</h2>
          <p>{course_description}</p>
        </div>
        <div className="px-3 py-4 flex justify-between">
          <div className="flex items-center">
            <span><BsCurrencyDollar></BsCurrencyDollar></span><p className="font-medium text-base">Price: {course_price}</p>
            </div>
          <div className="flex items-center gap-2">
            <span><BsBook></BsBook></span><p className="font-medium text-base">Credit: {course_credit} hrs</p>
            </div>
        </div>
        <div className="w-full px-3 py-4">
          <button
          onClick={()=>handleCourse(datas)}
           className="btn btn-primary w-full">Select</button>
           <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  data: PropTypes.object,
  handleCourse: PropTypes.func
};

export default Course;
