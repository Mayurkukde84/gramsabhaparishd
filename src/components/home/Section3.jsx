import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Section3 = () => {

  useEffect(()=>{
AOS.init({
  duration:600,
  delay:200
})
  },[])
  return (
    
    <div className="container mx-auto p-5 mt-5 " >
      <div className="mt-12 flex flex-col md:flex-row justify-center md:space-x-8 ">

        <div  data-aos="zoom-in" data-aos-once="true" className="mb-4 md:mb-0 flex flex-col justify-center">
          <p className="text-2xl">We're on a mission to help all your problems</p>
          <Button className="bg-white text-black mt-2 w-[10rem]">DONATE NOW</Button>
        </div>

        <div data-aos="zoom-in" data-aos-once="true" className="text-center">
          <p className="text-2xl">
          <CountUp end={88984} redraw={true} duration={5}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
         </p>
          <p>Donation Campaigns are running</p>
        </div>

        <div data-aos="zoom-in" data-aos-once="true" className="text-center">
          <p className="text-2xl">
          <CountUp end={65000} redraw={true} duration={5}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
          </p>
          <p>Professional and kind volunteers</p>
        </div>

        <div data-aos="zoom-in" data-aos-once="true" className="text-center">
          <p className="text-2xl">
          <CountUp end={75000} redraw={true} duration={5}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
          </p>
          <p>Funds we raised till now on site</p>
        </div>

        <div data-aos="zoom-in" data-aos-once="true" className="text-center">
          <p className="text-2xl">
          <CountUp end={50} redraw={true} duration={5}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
          </p>
          <p>Dedicated Donors</p>
        </div>

      </div>
    </div>
  );
};

export default Section3;

