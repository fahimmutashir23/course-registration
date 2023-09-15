
import PropTypes from 'prop-types';

const CartItem = ({course}) => {
    const {course_name} = course;
    return (
            <li className='text-base font-normal list-decimal'>{course_name}</li>      
    );
};

CartItem.propTypes = {
    course: PropTypes.object
};

export default CartItem;