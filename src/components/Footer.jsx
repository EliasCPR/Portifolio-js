import {
  BracketsCurly,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-400 body-font relative bottom-0 flex justify-between w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <BracketsCurly fontSize={60} />
          <span className="ml-3 text-xl">Portifólio</span>
        </p>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2022 Elias Oliveira —
          <a
            href="./"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @dev_zin
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/profile.php?id=100038417583504"
            className="text-gray-400"
          >
            <FacebookLogo fontSize={30} className="hover:text-blue-700" />
          </a>
          <a className="ml-3 text-gray-400">
            <TwitterLogo fontSize={30} className="hover:text-blue-300" />
          </a>
          <a className="ml-3 text-gray-400" href="https://www.instagram.com/dev.zin/">
            <InstagramLogo fontSize={30} className="hover:text-purple-600" />
          </a>
          <a className="ml-3 text-gray-400" href="https://www.linkedin.com/in/elias-oliveira-9aa4b51b1/">
            <LinkedinLogo fontSize={30} className="hover:text-blue-600" />
          </a>
        </span>
      </div>
    </footer>
  );
}
