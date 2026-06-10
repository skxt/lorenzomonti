import Image from "next/image";

export function GallerySection() {
  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:flex md:items-center md:gap-2 md:h-[400px] w-full max-w-4xl mt-16 md:mt-30 mx-auto px-4 md:px-0">
        <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:grow md:transition-all md:w-56 md:h-[400px] md:duration-500 md:hover:w-[50%]">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti1.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:grow md:transition-all md:w-56 md:h-[400px] md:duration-500 md:hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti2.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:grow md:transition-all md:w-56 md:h-[400px] md:duration-500 md:hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti3.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:grow md:transition-all md:w-56 md:h-[400px] md:duration-500 md:hover:w-[50%]">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti4.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:grow md:transition-all md:w-56 md:h-[400px] md:duration-500 md:hover:w-xl">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti5.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-auto md:grow md:transition-all md:w-56 md:h-[400px] md:duration-500 md:hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-0 hover:brightness-60 duration-500"
            src="/monti6.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
