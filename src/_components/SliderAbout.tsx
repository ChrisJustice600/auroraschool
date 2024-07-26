/* eslint-disable @next/next/no-img-element */
"use client";

export default function Slider() {
  return (
    <div className="h-[300px] w-full md:h-full">
      {/* <Image width={50} height={500} src="/images/im1.jpeg" alt="text" /> */}
      <img
        src="/images/rfid.jpeg"
        alt=""
        className=" w-full h-full rounded-lg hover:rotate-3 transition duration-500 ease-in-out object-cover"
      />
    </div>
  );
}
