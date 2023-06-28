import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Intro from './intro';

const Uppercontent = () => {
  return (
    <>
      <div className="hero max-h-screen">
        <style>
          {`
            .carousel .slider-wrapper {
              background: linear-gradient(to right, #FF3366, #6633FF);
              height: 200%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }

            .carousel .slide {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
            }

            .carousel .slide h1 {
              font-size: 3rem;
            }

            .carousel .slide p {
              font-size: 1.5rem;
              margin-bottom: 2rem;
            }

            .carousel .slide button {
              font-size: 1 rem;
            }
          `}
        </style>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} emulateTouch>
          {/* Slide 1 */}
          <div className="slide">
            <div className="hero-overlay bg-opacity-60 text-white me-auto"></div>
            <div className="hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold mx-auto text-white">Welcome to Our Music School</h1>
                <p className="mb-5 text-white">
                  Unlock your musical potential and embark on a journey of creativity and expression at our renowned
                  music school.
                </p>
                <button className="btn bg-red-500 font-dark" onClick={() => window.my_modal_1.showModal()}>
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">Discover Your Passion for Music</h1>
                <p className="mb-5 text-white">
                  Immerse yourself in the world of music and discover the joy of playing instruments, creating melodies,
                  and expressing yourself through sound.
                </p>
                <button className="btn bg-red-500 font-dark" onClick={() => window.my_modal_2.showModal()}>
                  Join Us Now
                </button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">Experience Musical Excellence</h1>
                <p className="mb-5 text-white">
                  Our music school is committed to providing exceptional instruction, fostering creativity, and nurturing
                  musical talent.
                </p>
                <button className="btn bg-red-500 font-dark" onClick={() => window.my_modal_3.showModal()}>
                  Enroll Today
                </button>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="slide">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">Music Gallery</h1>
                <p className="mb-5 text-white">Browse through our students gallery and experience the beauty of music.</p>
                <button className="btn bg-red-500 font-dark">Explore Now</button>
              </div>
            </div>
          </div>
        </Carousel>
        
        {/* Modals */}
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Double Welcome!</h3>
            <p className="py-4">If you are a music lover, please scroll down to see more.</p>
            <div className="modal-action">
              <button className="btn bg-red-500 font-dark">Close</button>
            </div>
          </form>
        </dialog>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Join Us Now!</h3>
            <p className="py-4">
              Take the first step towards your musical journey. Join our passionate community and explore the world of
              music.
            </p>
            <div className="modal-action">
              <button className="btn bg-red-500 font-dark">Close</button>
            </div>
          </form>
        </dialog>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Enroll Today!</h3>
            <p className="py-4">
              Experience the highest level of musical education and unlock your full potential as a musician.
            </p>
            <div className="modal-action">
              <button className="btn bg-red-500 font-dark">Close</button>
            </div>
          </form>
        </dialog>
      </div>

      <Intro />
    </>
  );
};

export default Uppercontent;
