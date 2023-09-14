import PropTypes from "prop-types";

const Course = ({ data }) => {
  console.log(data);
  const {
    course_name,
    course_credit,
    course_price,
    course_description,
    cover_img,
  } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="px-3 pt-5">
          <img
            src={cover_img}
            alt="cover image"
            className="rounded-lg"
          />
        </div>
        <div className=" px-3 py-4 space-y-3 h-40">
          <h2 className="card-title">{course_name}</h2>
          <p>{course_description}</p>
        </div>
        <div className="w-full px-3 py-4">
            <button className="btn btn-primary w-full">Select</button>
          </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  data: PropTypes.object,
};

export default Course;
