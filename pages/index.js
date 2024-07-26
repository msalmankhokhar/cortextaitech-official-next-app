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
      <Navbar />
      <main id='main' className={`transition-all duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>

        <section id="header-content" className=" relative flex flex-col gap-7 items-center justify-center px-5 sm:px-10 py-10">
          <div id="header-content-wrapper" className="flex flex-col gap-7 items-center justify-center">
            <div className="flex flex-col gap-1 items-center justify-center">
              <Image className="mb-3" width={270} height={'10'} src={`/logos/Web/text-only-logo-full-white-without-tagline.png`} alt="Cortex AI Tech Logo" />
              <h1 className="text-lg text-center sm:text-2xl leading-none font-semibold text-white">Plugging Great Ideas into Your Brand</h1>
            </div>
            <p className="text-sm sm:text-lg text-wrap text-center max-w-screen-lg text-gray-100">
              Welcome To Cortex AI Technologies, Where We Leverage Cutting-Edge
              Artificial Intelligence To Empower Businesses And Individuals Alike and we build meaningful digital experiences to help grow businesses
            </p>
            <div className="flex gap-3 items-center">
              <a href="#" className="bg-amber-500 border-2 border-amber-500 text-white py-3 px-5 font-bold rounded-full text-xs sm:text-sm leading-none">Get Started</a>
              <a href="#" className="btn-secondary border-2 border-amber-500 font-bold py-3 px-5 rounded-full text-xs sm:text-sm leading-none text-white">Discover More</a>
            </div>
          </div>
        </section>

        <section id="services-section" className="flex flex-col gap-8 my-10 px-5 sm:px-10">
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
          <div id="services-container" className="flex flex-col items-center justify-center flex-wrap xs:flex-row lg:grid lf:grid-flow-row grid-cols-3 gap-4 xl:flex-row">
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

        <section id="procedure-section" className="flex flex-col gap-8 mt-20 py-16 px-5 sm:px-10 bg-slate-100">
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

        <section id="team-section" className="flex flex-col gap-8 my-10 py-16 px-5 sm:px-10">
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

        <section id="contact-section" className="flex flex-col gap-8 sm:my-10 py-7 sm:py-16 px-5 sm:px-10">
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
