import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../assets/styles/global.css'; // Ensure this path is correct based on your folder structure

const BubbleEffect = () => {
  const bubble1 = useSpring({
    from: { transform: 'translateY(0) scale(0.8)', opacity: 0.5 },
    to: { transform: 'translateY(-100px) scale(1.2)', opacity: 1 },
    loop: { reverse: true },
    config: { duration: 5000 }
  });

  const bubble2 = useSpring({
    from: { transform: 'translateY(0) scale(0.8)', opacity: 0.5 },
    to: { transform: 'translateY(100px) scale(1.5)', opacity: 1 },
    loop: { reverse: true },
    config: { duration: 7000 }
  });

  return (
    <div className="bubble-container">
      <animated.div className="bubble" style={bubble1} />
      <animated.div className="bubble" style={bubble2} />
    </div>
  );
};

export default BubbleEffect;
