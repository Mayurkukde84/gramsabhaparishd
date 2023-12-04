import { Button } from "@material-tailwind/react";
import React from "react";

const Section2 = () => {
  return (
    <section className="container mx-auto mt-5 p-5">
      <p className="text-center">WELCOME TO NGO</p>
      <p className="text-5xl font-semibold text-pink text-center mt-2">
        We are here to help everyone in need
      </p>
      <p className="mt-10 text-2xl text-left text-blue-gray-500">
        On her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word "and" and the
        Little Blind Text should turn around and return to its own, safe
        country. But nothing the copy said could convince her and so it didn’t
        take long until a few insidious Copy Writers ambushed her, made her
        drunk with Longe and Parole and dragged her into their agency, where
        they abused her for their.
      </p>

      <div className="flex flex-col md:flex-row mt-10 md:space-x-4">
        <div className="flex mb-4 md:mb-0 md:w-1/2">
          <img
            className="h-20"
            alt="icon"
            src="../../../public/images/team-icon.svg"
          />
          <div className="ml-2">
            <p className="text-4xl">50</p>
            <p className="text-2xl">Volunteer</p>
          </div>
        </div>
        <div className="flex md:w-1/2">
          <img
            className="h-20"
            alt="icon"
            src="../../../public/images/team-icon.svg"
          />
          <div className="ml-2">
            <p className="text-4xl">25,500</p>
            <p className="text-2xl">Volunteer</p>
          </div>
        </div>
      </div>
      <Button className="mt-10 w-full md:w-auto border-rounded bg-pink">
        BECOME A VOLUNTEER
      </Button>
    </section>
  );
};

export default Section2;

