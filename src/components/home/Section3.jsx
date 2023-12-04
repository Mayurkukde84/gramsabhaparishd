import React from "react";
import { Button } from "@material-tailwind/react";

const Section3 = () => {
  return (
    <div className="container mx-auto p-5 mt-5 ">
      <div className="mt-12 flex flex-col md:flex-row justify-center md:space-x-4">

        <div className="mb-4 md:mb-0 flex flex-col justify-center">
          <p className="text-2xl">We're on a mission to help all your problems</p>
          <Button className="bg-white text-black mt-2">DONATE NOW</Button>
        </div>

        <div className="text-center">
          <p className="text-2xl">88,984</p>
          <p>Donation Campaigns are running</p>
        </div>

        <div className="text-center">
          <p className="text-2xl">65,000</p>
          <p>Professional and kind volunteers</p>
        </div>

        <div className="text-center">
          <p className="text-2xl">77,000</p>
          <p>Funds we raised till now on site</p>
        </div>

        <div className="text-center">
          <p className="text-2xl">50</p>
          <p>Dedicated Donors</p>
        </div>

      </div>
    </div>
  );
};

export default Section3;

