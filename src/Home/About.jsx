import React, { useContext } from 'react';
import TextTransition, { presets } from 'react-text-transition';
const introStyle = {
  background: 'radial-gradient(circle, #FF3366, #6633FF)',
};
const TEXTS = [
  'Learning music enhances cognitive abilities and improves memory.',
  'Playing an instrument boosts creativity and fosters self-expression.',
  'Music education develops discipline and patience in children.',
  'Learning music helps children improve their coordination and motor skills.',
  'Playing music builds confidence and promotes social interaction.',
];

const About = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-base-300 " >
        <div className="p-10 rounded-xl intro hero-content flex-col lg:flex-row-reverse " style={introStyle}>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-white">
          <TextTransition className='text-xl sm:text-3xl' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;