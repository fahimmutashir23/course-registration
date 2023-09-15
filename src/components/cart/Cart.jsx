import PropTypes from "prop-types";
import CartItem from "../cart-item/CartItem";

const Cart = ({ courses, credit, price }) => {
  
  const remaining = 20 - credit;
  
  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <h1 className="text-xl font-bold text-indigo-700 mb-3">
        Credit Hour Remaining: {remaining}hr
      </h1>
      <hr />
      <div className="mb-3">
        <h1 className="text-xl font-bold mt-4 mb-5">Course Name</h1>
        <ol className="ml-5">
          {courses.map((course, idx) => (
            <CartItem key={idx} course={course}></CartItem>
          ))}
        </ol>
      </div>
      <hr />
      <h2 className="text-base font-medium my-3">
        Total Credit Hour : {credit}
      </h2>
      <hr />
      <h2 className="text-base font-semibold my-3">
        Total Price : {price} USD
      </h2>
    </div>
  );
};

Cart.propTypes = {
  courses: PropTypes.array,
  credit: PropTypes.number,
  price: PropTypes.number,
};

export default Cart;
