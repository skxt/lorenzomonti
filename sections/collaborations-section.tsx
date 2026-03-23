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
  ];
  return (
    <div className="bg-white flex justify-center">
      <div className="flex items-center md:px-20 bg-white max-w-7xl">
        <p className="text-nowrap text-gray-400 max-md:hidden">
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
                  className="h-8 w-auto opacity-70"
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
