import { Navbars } from "../navbar/Navbars";
import image1 from '../../../public/images/bosa-charity-img1.jpg'
import Section2 from "./Section2";
import Section3 from "./Section3";
const HeroSection = () => {
    const backgroundImageUrl = `url(${image1})`;
  return (
    <div>
      <section className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30"
      style={{ backgroundImage: backgroundImageUrl }}
      >
      
        {/* <div className="flex items-center h-20  ">
          <div className="mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end ">
            <div className="text-4xl font-light uppercase absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
              My Site
            </div>

            <nav className="flex gap-5">
              <a>Home</a>
              <a>Login</a>
              <a>Signup</a>
            </nav>
          </div>
        </div> */}

        <div className="flex-1 flex items-center">
          <div className="text-center mx-auto">
            <h1 className="text-6xl font-semibold">Lend the helping hand get involved</h1>
            {/* <p className="font-light text-3xl mt-5">The land of opportunity.</p> */}
            <a
              className="px-5 py-2 inline-block bg-pink text-white hover:bg-yellow-900 transition-colors mt-10"
              href=""
            >
              BECOME A VOLUNTEER
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white ">
       <Section2/>
      </section>
      <section className="bg-pink">
      <Section3/>
      </section>

    
    </div>
  );
};

export default HeroSection;
