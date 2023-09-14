
import PropTypes from 'prop-types';
import CartItem from '../cart-item/CartItem';

const Cart = ({courses}) => {
    return (
        <div className='card bg-base-100 shadow-xl p-4'>
            <h1 className='text-xl font-bold text-indigo-700 mb-3'>Credit Hour Remaining: hr</h1>
            <hr />
            <div className='mb-3'>
                <h1 className='text-xl font-bold mt-4 mb-5'>Course Name</h1>
            {
                courses.map((course,idx)=><CartItem
                    key={idx}
                    course = {course} 
                ></CartItem>)
            }
            </div>
            <hr />
            <h2 className='text-base font-medium'>Total Credit Hour : </h2>
            <hr />
            <h2 className='text-base font-semibold'>Total Price :  USD</h2>
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array
};

export default Cart;