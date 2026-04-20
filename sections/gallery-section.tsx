import Image from "next/image";

export function GallerySection() {
  return (
    <>
      <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl my-10 mx-auto">
        <div className="relative grow transition-all w-56 overflow-hidden h-[400px] duration-500 hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative grow transition-all w-56 overflow-hidden h-[400px] duration-500 hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti2.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative grow transition-all w-56 overflow-hidden h-[400px] duration-500 hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti3.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative grow transition-all w-56 overflow-hidden h-[400px] duration-500 hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti4.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative grow transition-all w-56 overflow-hidden h-[400px] duration-500 hover:w-xl">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-50 hover:brightness-60 duration-500"
            src="/monti5.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
        <div className="relative grow transition-all w-56 overflow-hidden h-[400px] duration-500 hover:w-full">
          <Image
            className="h-full w-full object-cover object-center rounded-2xl grayscale brightness-90 hover:grayscale-0 hover:brightness-60 duration-500"
            src="/monti7.jpeg"
            alt="image"
            width={800}
            height={800}
          />
        </div>
      </div>
    </>
  );
}
