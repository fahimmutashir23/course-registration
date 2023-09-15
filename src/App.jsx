import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Courses from "./components/courses/Courses";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourse] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleCourse = (data) => {
    const isexist = courses.find((course) => course.course_id === data.course_id);

    if(isexist){
      toast("don't access multiple course")
    }
    else{
      const newData = [...courses, data];
      setCourse(newData);
  
      const newCredit = credit + data.course_credit;
      setCredit(newCredit);
  
      const total = price + data.course_price;
      setPrice(total);
    }

      
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-12">
        Course Registration
      </h1>

      <div className="flex gap-6 mt-8">
        <section className="w-3/4">
          <Courses handleCourse={handleCourse}></Courses>
        </section>

        <section className="w-1/4">
          <Cart
            courses={courses}
            credit={credit}
            price={price}
          ></Cart>
        </section>
      </div>
    </div>
  );
}

export default App;
