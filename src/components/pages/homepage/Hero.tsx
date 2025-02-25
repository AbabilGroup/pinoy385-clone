"use client";

import { Typewriter } from "react-simple-typewriter";
import FlipCard from "./FlipCard";

const Hero = () => {
  return (
    <section className="space-y-20">
      <div className="container max-w-[1300px]">
        <video className="h-auto w-full" src="/video.mp4" loop autoPlay muted />
      </div>

      <div className="container">
        <h1 className="mx-auto max-w-[1000px] text-center text-4xl font-bold text-black text-opacity-60">
          <Typewriter
            words={[
              "Reliable, transparent, and safe process of hiring reliable workers",
            ]}
            cursor
          />
        </h1>

        <p className="mx-auto mt-5 max-w-[760px] text-center text-lg font-light">
          PINOY 385, the leading intermediary services and staffing agency for
          employment of Filipino workers, has successfully and efficiently
          provided necessary personnel to many companies and enabled safe growth
          and fulfillment of set goals.
        </p>

        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 pb-60 pt-20 lg:grid-cols-3">
          <FlipCard
            title="Experience"
            description="Our reliability and efficiency are confirmed by years of experience and numerous satisfied clients."
          />
          <FlipCard
            title="Reliability"
            description="Workers from the Philippines are a synonym for efficient, reliable, and adaptable employees ready to work in different industries."
          />
          <FlipCard
            title="Expertise"
            description="We provide complete services ranging from the initial idea to the final completion and employment. We provide continuous education for employers and employees during integration into the work and social environment."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
