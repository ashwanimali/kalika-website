import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "High-Quality Delivery",
    subheading:
      "We focus on clean design, robust code, and measurable results. Every feature is built with performance, security, and long-term growth in mind.",
  },
  {
    heading: "Transparent Communication",
    subheading:
      "No confusion, no delays. You get clear updates, honest timelines, and direct communication throughout the project lifecycle.",
  },
  {
    heading: "Trusted & Reliable",
    subheading:
      "From startups to growing businesses, our systems are stable, secure, and built to perform—so you can focus on growth without stress.",
  },
];

const Why = () => {
  return (
    <div id="about mb-[5rem]">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:pt-0 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="lg:-ml-64">
            <Image
              src={getImagePath("/assets/why/iPad.png")}
              alt="iPad-image"
              width={4000}
              height={900}
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 lg:text-center lg:text-start">
              Why Choose Us
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight lg:text-center text-beach lg:text-start">
              We help businesses grow faster by replacing repetitive manual work with smart, reliable automation.
              Our solutions are designed to save time, reduce errors, and scale with your vision.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src={getImagePath("/assets/why/check.svg")}
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
