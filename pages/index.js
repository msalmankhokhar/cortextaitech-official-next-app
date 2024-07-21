import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Servicebox from "@/components/Servicebox";
import { faBullhorn, faLaptopCode, faCode, faRobot, faPalette, faChartLine, faPhone, faLocation, faMapLocation, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import ProcedureBox from "@/components/ProcedureBox";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import ContactDetail from "@/components/ContactDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import TeamMember from "@/components/TeamMember";

export default function Home() {

  const [pageVisible, setPageVisible] = useState(false);
  useEffect(() => {
    setPageVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      <main id='main' className={`transition-all duration-500 ${pageVisible ? 'opacity-100' : 'opacity-0'}`}>

        <section id="header-content" className=" relative flex flex-col gap-7 items-center justify-center px-10">
          <div id="header-content-wrapper" className="flex flex-col gap-7 items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Plugging Great Ideas into Your Brand</h1>
            <p className="text-lg text-wrap text-center max-w-screen-lg text-gray-100">
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
          <h1 className="text-center flex flex-col items-center justify-center mb-10">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg text-slate-800 font-bold self-start">Services</span>
              </div>
              <span className="text-3xl font-bold">What We Offer</span>
            </div>
            <p className="text-sm text-slate-700 mt-3 text-center max-w-screen-md">Working in a diverse variety of domains from Machine Learning and AI to Software Development and Marketing</p>
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

        <section id="procedure-section" className="flex flex-col gap-8 mt-20 py-16 px-10 bg-slate-100">
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
          <div className="flex gap-5">
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
            <a href="#" className="bg-amber-500 border-2 border-amber-500 text-white py-3 px-5 font-bold rounded-full text-sm leading-none">Get Free Consultation</a>
            <a href="#" className="btn-secondary border-2 border-slate-400 font-bold py-3 px-5 rounded-full text-sm leading-none text-white">Contact Us</a>
          </div>
        </section>

        <section id="contact-section" className="flex flex-col gap-8 my-10 py-16 px-10">
        <h1 className="text-center flex flex-col items-center justify-center mb-10">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg font-bold self-start text-slate-700">Creative Team</span>
              </div>
              <span className="text-3xl font-bold text-slate-800">Meet our Brilliant Minds</span>
            </div>
            {/* <p className="text-sm text-slate-500 mt-3 text-left max-w-screen-md"></p> */}
          </h1>
          <div className="flex gap-5 justify-center">
            <TeamMember
              name={"Ashar Sohail"}
              designation={"Founder and CEO"}
              picFormat="jpg"
            />
            <TeamMember
              name={"Mr. Shazil"}
              designation={"Co-founder and CTO"}
              picture={true}
              picFormat="jpeg"
            />
            <TeamMember
              name={"Hammad Ali"}
              designation={"HR Manager"}
              picture={true}
              picFormat="jpg"
            />
            <TeamMember
              name={"Muhammad Salman"}
              designation={"Web Development Lead"}
              picFormat="jpeg"
              picture={true}
            />
          </div>
        </section>

        <section id="contact-section" className="flex flex-col gap-8 my-10 py-16 px-10">
          <h1 className="text-center flex flex-col justify-center mb-10">
            <div className="flex flex-col w-fit">
              <div className="flex gap-3 items-center">
                <div className="heading-line bg-amber-500"></div>
                <span className="text-lg font-bold self-start text-slate-700">Get Quote</span>
              </div>
              <span className="text-3xl font-bold text-slate-800">Drop Your Concern below</span>
            </div>
            {/* <p className="text-sm text-slate-500 mt-3 text-left max-w-screen-md">Drop a message for us. We will get back to you as soon as possible</p> */}
          </h1>
          <div className="flex justify-center">
            <ContactForm />
            <Image id="contact-img" src={"/img/contact.gif"} width={500} height={500} className="aspect-square mix-blend-multiply"/>
          </div>
        </section>

        <footer id="footer" className="flex flex-col px-28 bg-slate-800">
          <div className="py-14 flex justify-between border-b border-slate-400">
            <div className="flex flex-col gap-3">
              <Logo textColor="white"/>
              <p className="text-sm text-white max-w-xs">Cortex AI Tech is a cutting-edge technology company dedicated to advancing AI technology and providing high-quality services to businesses at reasonable costs.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-bold text-white">Quick Links</h1>
              <ul className="flex flex-col gap-1">
                <li><a href="#" className="text-white text-xs">Home</a></li>
                <li><a href="#" className="text-white text-xs">Careers</a></li>
                <li><a href="#" className="text-white text-xs">Support</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-bold text-white">Quick Links</h1>
              <ul className="flex flex-col gap-1">
                <li><a href="#" className="text-white text-xs">Web Development</a></li>
                <li><a href="#" className="text-white text-xs">Data Analysis</a></li>
                <li><a href="#" className="text-white text-xs">App Development</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-bold text-white">Contact Us</h1>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700">
                    <FontAwesomeIcon icon={faPhone} className="text-white text-xs"/>
                  </div>
                  <span className="text-white text-xs">+92 318 6456552</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white text-xs"/>
                  </div>
                  <span className="text-white text-xs">info@cortexaitech.com</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700">
                    <FontAwesomeIcon icon={faMapLocation} className="text-white text-xs"/>
                  </div>
                  <span className="text-white text-xs">Sector H/9-2 Islamabad, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-5">
            <p className="text-xs text-center text-gray-200">{`Copyright 2024. All Rights Reserved`}</p>
          </div>
        </footer>

      </main>
    </>
  );
}
