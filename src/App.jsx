
import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Courses from "./components/courses/Courses";

function App() {
  
  const [courses , setCourse] = useState([]);

  const handleCourse = (data) =>{
    const newData = [...courses , data];
    setCourse(newData)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-12">
        Course Registration
      </h1>

      <div className="flex gap-6 mt-8">
        <section className="w-3/4">
          <Courses 
          handleCourse={handleCourse}
          ></Courses>
        </section>

        <section className="w-1/4">
          <Cart courses={courses}></Cart>
        </section>
      </div>
    </div>
  );
}

export default App;
