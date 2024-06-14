import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-lime-100">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              href="/"
              className="leading-6 text-lime-600 hover:text-lime-900"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="leading-6 text-lime-600 hover:text-lime-900"
            >
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="leading-6 text-lime-600 hover:text-lime-900"
            >
              Works
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="leading-6 text-lime-600 hover:text-lime-900"
            >
              Achievement
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="leading-6 text-lime-600 hover:text-lime-900"
            >
              Contact
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="/" className="text-lime-600 hover:text-lime-900">
            <span className="sr-only">Linkedin</span>
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href="/" className="text-lime-600 hover:text-lime-900">
            <span className="sr-only">Github</span>
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link href="/" className="text-lime-600 hover:text-lime-900">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link href="/" className="text-lime-600 hover:text-lime-900">
            <span className="sr-only">GitHub</span>
            <FaStackOverflow className="w-6 h-6" />
          </Link>
          <Link href="/" className="text-lime-600 hover:text-lime-900">
            <span className="sr-only">Dribbble</span>
            <FaDribbble className="w-6 h-6" />
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-lime-600">
          prasenjitpriyan@icloud.com
          <br />
          Copyright © {currentYear} - All right reserved by Prasenjit.
        </p>
      </div>
    </section>
  );
};

export default Footer;
