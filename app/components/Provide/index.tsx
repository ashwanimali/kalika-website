import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "../../../lib/utils";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: getImagePath("/assets/provide/marketing.svg"),
    country: "Mobile Apps",
    paragraph: "Custom native (Android & iOS) and Flutter-based mobile applications with smooth performance, modern UI, and user-friendly experiences.",
  },
  {
    imgSrc: getImagePath("/assets/provide/graphic.svg"),
    country: "Web Applications",
    paragraph: "Secure, scalable, and high-performance web applications tailored to your business needs using modern technologies.",
  },
  {
    imgSrc: getImagePath("/assets/provide/marketing.svg"),
    country: "Digital & Social Media Marketing",
    paragraph: "Grow your brand online with SEO, social media marketing, paid ads, and content strategies that drive real engagement.",
  },
  {
    imgSrc: getImagePath("/assets/provide/uidesign.svg"),
    country: "Desktop Software",
    paragraph: "Powerful desktop applications for Windows and macOS to manage business operations efficiently and securely.",
  }
];

const Provide = () => {
  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex">
            <div className="flex flex-col align-middle p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                What We Do Best.
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                Kalika Innovations offers complete technology and digital solutions for businesses of all sizes. From software development to design and marketing, we help you build strong digital products that deliver real results.
              </h4>
              <Link
                href={"/"}
                className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
              >
                Learn more{" "}
                <Image
                  src={getImagePath("/assets/provide/arrow.svg")}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
