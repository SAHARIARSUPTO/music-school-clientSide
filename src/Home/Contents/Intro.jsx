const Intro = () => {
    const introStyle = {
      background: 'radial-gradient(circle, #FF3366, #6633FF)',
    };
  
    return (
      <div className="hero min-h-screen bg-base-300 " >
        <div className="p-10 rounded-xl intro hero-content flex-col lg:flex-row-reverse" style={introStyle}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqWoHgaylpBOrOT5_Jpy9S7ge2xj7Q23TDAMeC_ijscryTMWTH78Og8webrbf9bYqu7g&usqp=CAU" className="max-w-lg rounded-lg shadow-2xl" />
          <div className="flex-grow">
            <h1 className="text-5xl font-bold text-white">Our Missions!</h1>
            <p className="py-6 text-white">Unlock your musical potential and embark on a journey of creativity and expression at our renowned music school.
              
              Whether you are a beginner or an experienced musician, our dedicated instructors are here to guide you through your musical education and help you achieve your goals.
              
              Explore a wide range of musical genres, from classical to contemporary, and develop your skills in playing instruments, singing, music theory, composition, and more.
              
              Join our vibrant community of passionate musicians and experience the joy of making music together. Are you ready to take your musical talents to new heights?
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Intro;
  