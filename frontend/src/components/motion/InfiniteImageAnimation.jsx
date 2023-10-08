import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const InfiniteImageAnimation = ({ img, className }) => {
    const animationVariants = {
        initial: {
            x: 0,
            y: 0,
        },
        animate: {
            x: [0, 7, 0, -5, 0], // Animation values for left, top, right, bottom, and back to left
            y: [0, -8, 0, 4, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop', // 'loop' instead of 'reverse' to create a smoother loop
            },
        },
    };

    return (
        <motion.img
            src={img} // Replace with the path to your image
            alt="Infinite Animation"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            className={className}
        />
    );
};

export default InfiniteImageAnimation;

InfiniteImageAnimation.propTypes = {
    img: PropTypes.string.isRequired,
    className: PropTypes.string,
};