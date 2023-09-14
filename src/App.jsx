
import "./App.css";
import Cart from "./components/cart/Cart";
import Courses from "./components/courses/Courses";

function App() {
  

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-12">
        Course Registration
      </h1>

      <div className="flex gap-6 mt-8">
        <section className="w-3/4">
          <Courses></Courses>
        </section>

        <section className="w-1/4">
          <Cart></Cart>
        </section>
      </div>
    </div>
  );
}

export default App;
