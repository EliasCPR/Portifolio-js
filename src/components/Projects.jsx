import React from "react";

function Card({subtitle, description}) {
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
            {subtitle}
          </h2>
          <p className="leading-relaxed">
            {description}
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
        <Card subtitle={'EveryPets'} description={'Sistema criado para facilitar a vida de prestadores de serviços para pets e donos de pets'}/>
        <Card subtitle={'FastParking'} description={'Sistema que via facilitar a vida de trabalhadores de estacionamento onde '}/>
        <Card subtitle={'Icatalogo'} description={'Sistema de criado para fazer catalogo de produtos e visualização+'}/>
      </div>
    </section>
  );
}
