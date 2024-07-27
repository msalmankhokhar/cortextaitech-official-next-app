import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Servicebox from "@/components/Servicebox";
import { faBullhorn, faLaptopCode, faCode, faRobot, faPalette, faChartLine } from "@fortawesome/free-solid-svg-icons";
import ProcedureBox from "@/components/ProcedureBox";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import TeamMember from "@/components/TeamMember";
import FooterDark from "@/components/FooterDark";
import Footer from "@/components/Footer";

export default function Home() {

  const [pageVisible, setPageVisible] = useState(false);
  useEffect(() => {
    setPageVisible(true)
  }, [])

  return (
    <>
      <header id="header">
        <Navbar />
        <section id="header-content" className="relative flex flex-col gap-7 items-center justify-center mb-10 px-5 sm:px-10 sm:flex-row pt-16 sm:py-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="header-blob absolute bottom-0 right-0 w-full left-0 sm:h-auto z-20" viewBox="0 0 1440 320">
            <path fill="#003047" fill-opacity="1" d="M0,32L30,53.3C60,75,120,117,180,149.3C240,181,300,203,360,192C420,181,480,139,540,128C600,117,660,139,720,138.7C780,139,840,117,900,138.7C960,160,1020,224,1080,240C1140,256,1200,224,1260,202.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          </svg>
          <div id="header-content-wrapper" className="flex flex-col gap-7 items-center sm:items-start justify-center relative z-20">
            <div className="flex flex-col gap-1 justify-center sm:items-stretch items-center">
              <Image className="mb-3" width={270} height={'10'} src={`/logos/Web/text-only-logo-full-white-without-tagline.png`} alt="Cortex AI Tech Logo" />
              <h1 className="text-lg sm:text-2xl leading-none font-semibold text-white">Plugging Great Ideas into Your Brand</h1>
            </div>
            <p className="text-sm sm:text-lg text-wrap max-w-lg text-gray-100 sm:text-left text-center">
              Welcome To Cortex AI Technologies, Where We Leverage Cutting-Edge
              Artificial Intelligence To Empower Businesses And Individuals Alike and we build meaningful digital experiences to help grow businesses
            </p>
            <div className="flex gap-3 items-center">
              <a href="#" className="bg-amber-500 border-2 border-amber-500 text-white py-3 px-5 font-bold rounded-full text-xs sm:text-sm leading-none">Get Started</a>
              <a href="#" className="btn-secondary border-2 border-amber-500 font-bold py-3 px-5 rounded-full text-xs sm:text-sm leading-none text-white">Discover More</a>
            </div>
          </div>
          <div className="relative">
            <Image src="/img/robot.png" className="relative z-10 2xl:z-20" width={350} height={350} alt="robot image" />
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="header-blob absolute top-0 right-0">
              <path fill="#F3B600" d="M28.4,-41.9C38.7,-31.5,50.4,-25.8,58.3,-15.6C66.2,-5.4,70.3,9.4,65.5,20.4C60.8,31.5,47.2,38.8,34.8,48.9C22.4,59,11.2,71.7,-3.4,76.5C-18,81.2,-36.1,77.8,-43,66C-49.9,54.1,-45.7,33.8,-52.2,16.4C-58.7,-1.1,-75.8,-15.6,-76,-27.8C-76.3,-40,-59.8,-49.7,-44.3,-58.4C-28.8,-67.1,-14.4,-74.7,-2.7,-71C9,-67.3,18,-52.2,28.4,-41.9Z" transform="translate(100 100)" />
            </svg>
          </div>
        </section>
      </header>

      <main id='main' className={`transition-all duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>

        <section id="services-section" className="flex flex-col gap-8 py-10 px-5 sm:px-10 bg-black">
          <h1 className="text-center flex flex-col items-center justify-center mb-10">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg text-white font-bold self-start">Services</span>
              </div>
              <span className="text-3xl font-bold text-white">What We Offer</span>
            </div>
            <p className="text-sm mt-3 text-center max-w-screen-md text-white">Working in a diverse variety of domains from Machine Learning and AI to Software Development and Marketing</p>
          </h1>
          <div id="services-container" className="flex flex-col items-center justify-center flex-wrap xs:flex-row lg:grid lg:grid-flow-row lg:grid-cols-3 gap-4 xl:flex xl:flex-row">
            <Servicebox
              service_name="Web Development"
              desc="We develop scalable web applications for your business using modern web technologies like Next.js, Django, FastAPI, React and MERN Stack"
              icon={faCode}
              color="yellow"
              img={'webdev'}
            />
            <Servicebox
              service_name="AI Model Development"
              desc="Our team develops custom AI solutions and machine learning models for enterprises and individual clients using advanced technologies"
              icon={faRobot}
              color="orange"
              img={'ai'}
            />
            <Servicebox
              service_name="Graphic Designing"
              desc="We cover your all graphics needs from planing a brand color scheme, logos, letter heads, user interfaces for Web and Mobile devices"
              icon={faPalette}
              color="red"
              img={'graphic-design'}
            />
            <Servicebox
              service_name="Data Analysis"
              desc="Cortex AI Tech offers data analysis and data annotaion / labeling services for machine learning and other purposes"
              icon={faChartLine}
              color="teal"
              img={'data-analysis'}
            />
            <Servicebox
              service_name="Software Testing"
              desc="We ensure software quality check and bug fixes before it is released to the general audience"
              icon={faLaptopCode}
              color="sky"
              img={'software-testing'}
            />
            <Servicebox
              service_name="Digital Marketing"
              desc="We help grow your business using modern ways of advertisement, google and facebook ad campaigns"
              icon={faBullhorn}
              color="green"
              img={'digital-marketing'}
            />
          </div>
          <a href="#" className="bg-amber-500 border-2 border-amber-500 text-white py-3 px-5 font-bold rounded-full self-center text-sm leading-none">View All Services</a>
        </section>

        <section id="procedure-section" className="flex flex-col gap-8 py-16 px-5 sm:px-10">
          <h1 className="text-center flex flex-col items-center justify-center mb-10">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg font-bold self-start text-white">Procedure</span>
              </div>
              <span className="text-3xl font-bold text-white">Let{`'`}s see How We Work!</span>
            </div>
            <p className="text-sm text-slate-200 mt-3 text-center max-w-screen-md">Our Process for Delivering Results” by Cortex AI Tech ensures precise, data-driven strategies for optimal outcomes, combining advanced AI technology with expert human insights.</p>
          </h1>
          <div className="flex gap-6 flex-wrap flex-col sm:flex-row items-center justify-center">
            <ProcedureBox
              title={"Book an Appointment"}
              number={1}
              content={"Reach us by using our social media channels or contact details. Book an Appointment for your concern. Our team will get back to you as soon as possible "}
            />

            <ProcedureBox
              title={"Meet our Team"}
              number={2}
              content={"Reach us by using our social media channels or contact details. Book an Appointment for your concern. Our team will get back to you as soon as possible "}
            />

            <ProcedureBox
              title={"Get Consultation"}
              number={3}
              content={"Reach us by using our social media channels or contact details. Book an Appointment for your concern. Our team will get back to you as soon as possible "}
            />

            <ProcedureBox
              title={"Start Project"}
              number={4}
              content={"Reach us by using our social media channels or contact details. Book an Appointment for your concern. Our team will get back to you as soon as possible "}
            />
          </div>
          <div className="flex gap-3 items-center self-center">
            <a href="#" className="bg-amber-400 border-2 border-amber-400 py-3 px-5 font-bold rounded-full text-xs sm:text-sm leading-none">Get Free Consultation</a>
            <a href="#" className="btn-secondary border-2 border-slate-400 font-bold py-3 px-5 rounded-full text-xs sm:text-sm leading-none text-white">Contact Us</a>
          </div>
        </section>

        <section id="team-section" className="flex flex-col gap-8 my-10 py-16 px-5 sm:px-10 relative">
          <h1 className="text-center flex flex-col items-center justify-center mb-10">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg font-bold self-start text-white">Creative Team</span>
              </div>
              <span className="text-3xl font-bold text-white">Our Team & Leadership</span>
            </div>
            {/* <p className="text-sm text-slate-500 mt-3 text-left max-w-screen-md"></p> */}
          </h1>
          <div className="flex gap-5 flex-wrap justify-center">
            <TeamMember
              name={"Ashar Sohail"}
              designation={"Founder and CEO"}
            />
            <TeamMember
              name={"Mr. Shazil"}
              designation={"Co-founder and CTO"}
              picture={true}
            />
            <TeamMember
              name={"Hammad Ali"}
              designation={"HR Manager"}
              picture={true}
            />
            <TeamMember
              name={"Muhammad Salman"}
              designation={"Web Development Lead"}
              picture={true}
            />
            <TeamMember
              name={"Ali Muhammad"}
              designation={"Junior Frontend Developer"}
              picture={true}
            />
          </div>
          <a href="#" className="bg-amber-400 border-2 border-amber-500 text-black py-3 px-5 font-bold rounded-full text-sm leading-none self-center">View all Members</a>
        </section>

        <section id="contact-section" className="flex flex-col gap-8 py-7 sm:py-16 px-5 sm:px-10">
          <h1 className="text-center flex flex-col justify-center self-center sm:mb-10">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg font-bold self-start text-white">Get Quote</span>
              </div>
              <span className="text-3xl font-bold text-white">Drop Your Concern</span>
            </div>
            {/* <p className="text-sm text-slate-500 mt-3 text-left max-w-screen-md">Drop a message for us. We will get back to you as soon as possible</p> */}
          </h1>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <ContactForm />
            {/* <Image id="contact-img" src={"/img/contact.gif"} width={400} height={400} className="aspect-square mix-blend-multiply" alt="contact us gif"/> */}
          </div>
        </section>

        <Footer />

      </main>
    </>
  );
}
