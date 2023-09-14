// import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "../course/Course";

const Courses = () => {
  const [datas, setDatas] = useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setDatas(data))
  },[])

  return (
    <div className="grid grid-cols-3 gap-3">
      {
        datas.map((data, idx)=><Course
        key={idx}
        data={data}
        ></Course>)
      }
    </div>
  );
};

// Courses.propTypes = {

// };

export default Courses;
