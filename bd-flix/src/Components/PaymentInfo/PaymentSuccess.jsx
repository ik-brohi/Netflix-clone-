import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <animated.div style={animation} className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center">
        <FiCheckCircle className="w-16 h-16 text-white" />
      </animated.div>
      <animated.h1 style={animation} className="text-4xl font-bold mt-8">Payment Successful</animated.h1>
      <animated.p style={animation} className="text-lg mt-4 text-gray-500">
        Thank you for your purchase! Your transaction has been completed successfully.
      </animated.p>
      <Link to='/'>
      <animated.button style={animation} className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
        Continue watching movie
      </animated.button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
