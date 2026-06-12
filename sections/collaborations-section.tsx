import Marquee from "react-fast-marquee";
import NextImage from "next/image";

export const CollaborationsSection = () => {
  const companyLogos = [
    { src: "/logo-irccs.png", alt: "IRCCS" },
    { src: "/logo-mcavantgarde.png", alt: "MCAVANTGARDE" },
    { src: "/logo-rigenera.png", alt: "RIGENERA" },
    { src: "/logo-sviz.png", alt: "SVIZ" },
    { src: "/logo-sms.png", alt: "SMS" },
    { src: "/logo-venini.png", alt: "Venini" },
    { src: "/logo-aiclinics.jpg", alt: "AICLINICS" },
  ];
  return (
    <div className="bg-white flex justify-center w-full">
      <div className="flex items-center lg:px-20 bg-white w-full max-w-full lg:max-w-[80%] px-4 lg:px-0">
        <p className="text-nowrap text-gray-400 max-lg:hidden me-5">
          Collabora con:
        </p>
        <Marquee
          gradient={true}
          gradientColor="#fff"
          speed={30}
          pauseOnHover={true}
        >
          {[...companyLogos, ...companyLogos, ...companyLogos].map(
            (logo, i) => (
              <div key={i} className="mx-8 py-8">
                <NextImage
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto opacity-90"
                  height={200}
                  width={200}
                />
              </div>
            ),
          )}
        </Marquee>
      </div>
    </div>
  );
};
