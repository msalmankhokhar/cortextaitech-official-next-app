import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Servicebox from "@/components/Servicebox";
import Particles from "react-tsparticles";
import { faBullhorn, faLaptopCode, faCode, faRobot, faPalette, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [opacity, setOpacity] = useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setOpacity(100)
    }, 10);
  }, [])

  return (
    <>
      <Navbar />
      <main id='main' className={`transition-all duration-300 opacity-${opacity}`}>
        <section id="header-content" className=" relative flex flex-col gap-7 items-center justify-center px-10">
          <div id="header-content-wrapper" className="flex flex-col gap-7 items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Plugging Great Ideas into Your Brand</h1>
            <p className="text-lg text-wrap text-center max-w-screen-lg text-white">
              Welcome To Cortex AI Technologies, Where We Leverage Cutting-Edge
              Artificial Intelligence To Empower Businesses And Individuals Alike and we build meaningful digital experiences to help grow businesses
            </p>
            <div className="flex gap-3 items-center">
              <a href="#" className="bg-amber-500 border-2 border-amber-500 text-white py-3 px-5 font-bold rounded-full text-sm leading-none">Get Started</a>
              <a href="#" className="btn-secondary border-2 border-amber-500 font-bold py-3 px-5 rounded-full text-sm leading-none text-white">Discover More</a>
            </div>
          </div>
        </section>

        <section id="services-section" className="flex flex-col gap-8 my-10 px-10">
          <h1 className="text-center flex justify-center">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg text-slate-800 font-bold self-start">Services</span>
              </div>
              <span className="text-3xl font-bold">What We Offer</span>
            </div>
          </h1>
          <div id="services-container" className="grid grid-flow-row grid-cols-3 items-center justify-center gap-4">
            <Servicebox
            service_name="Web Development" 
            desc="Our Business plan is a written document describing our work activities"
            icon={faCode}
            color="yellow"
            />
            <Servicebox
            service_name="AI Model Development" 
            desc="Our Business plan is a written document describing our work activities"
            icon={faRobot}
            color="orange"
            />
            <Servicebox
            service_name="Graphic Designing" 
            desc="Our Business plan is a written document describing our work activities"
            icon={faPalette}
            color="red"
            />
            <Servicebox
            service_name="Data Analysis" 
            desc="Our Business plan is a written document describing our work activities"
            icon={faChartLine}
            color="teal"
            />
            <Servicebox
            service_name="Software Testing" 
            desc="Our Business plan is a written document describing our work activities"
            icon={faLaptopCode}
            color="sky"
            />
            <Servicebox
            service_name="Digital Marketing" 
            desc="Our Business plan is a written document describing our work activities"
            icon={faBullhorn}
            color="green"
            />
          </div>
          <a href="#" className="bg-amber-500 border-2 border-amber-500 text-white py-3 px-5 font-bold rounded-full self-center text-sm leading-none">View All Services</a>
        </section>
      </main>
    </>
  );
}
