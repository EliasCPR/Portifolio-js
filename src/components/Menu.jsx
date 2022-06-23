import { Desktop, Kanban, ShareNetwork, User } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Step({ text, icon, to }) {
  return (
    <NavLink
      to={to}
      className={`sm:px-6 py-1 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 tracking-wider rounded-t 
     `}
    >
      {icon}
      <p className="pl-1">{text}</p>
    </NavLink>
  );
}

export default function Menu() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap">
          <Step to={"/"} text={"Quem sou ?"} icon={<User fontSize={32} />} />
          <Step
            to={"/projects"}
            text={"Projetos"}
            icon={<Kanban size={32} />}
          />
          <Step
            to={"/services"}
            text={"Serviços"}
            icon={<ShareNetwork size={32} />}
          />
          <Step
            to={"/know"}
            text={"Conhecimentos"}
            icon={<Desktop size={32} />}
          />
        </div>
      </div>
    </section>
  );
}
