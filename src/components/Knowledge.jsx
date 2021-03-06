import { Airplane, Coffee, Cpu, Database, FileJs, LinuxLogo } from "phosphor-react";
import React from "react";

function CardKnow({icon, title, description}) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-3">
      <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          {icon}
        </div>
        <h2 className="text-lg text-white font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Knowledge() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <CardKnow icon={<Airplane size={32}/>} 
          title={"Aqui é um titulo"}
          description={'aqui tem uma descrição demais sobre alguma tecnologia que eu sei'}
          />
          <CardKnow icon={<Coffee size={32}/>} 
          title={"Linguagens de programação"}
          description={'java (spring boot), javascript (node: nest, express, koa), PHP (laravel), elixir (phoenix).'}
          />
          <CardKnow icon={<Database size={32}/>} 
          title={"Banco de dados"}
          description={'Banco de dados Relacionais (PostgreSQL, MariaDB, MYSQL) e não relacionais (Mongo DB).'}
          />
          <CardKnow icon={<FileJs size={32}/>} 
          title={"Aqui é um titulo"}
          description={'aqui tem uma descrição demais sobre alguma tecnologia que eu sei'}
          />
          <CardKnow icon={<Cpu size={32}/>} 
          title={"Docker"}
          description={"Experiência com docker, sei criar docker-compose's e manipular imagens e containers"}
          />
          <CardKnow icon={<LinuxLogo size={32}/>} 
          title={"Sistemas operacionais"}
          description={'Sei usar todos os sistemas operacionais, mas, atualmente uso linux (mint) para trabalhar e windows para determinadas coisas do cotidiano.'}
          />
        </div>
      </div>
    </section>
  );
}
