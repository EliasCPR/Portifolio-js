import React from "react";

function Card() {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-1">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://dummyimage.com/600x360"
        />
        <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
            THE SUBTITLE
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            Shooting Stars
          </h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
