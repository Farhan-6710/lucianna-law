import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className="bg-mainBlue py-4">
      {" "}
      {/* Primary background color */}
      <div className="container mx-auto flex items-center justify-center">
        {" "}
        {/* Center the content */}
        <div className="flex gap-8 text-xl">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-mainBrown hover:text-white transition-colors duration-300"
          >
            {" "}
            {/* added aria-label with specific label so it isn't ambiguous */}
            <FaFacebookF aria-hidden="true" />{" "}
            {/* aria-hidden so the icon will be ignored */}
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-mainBrown hover:text-white transition-colors duration-300"
          >
            {" "}
            {/* added aria-label with specific label so it isn't ambiguous */}
            <FaXTwitter aria-hidden="true" />{" "}
            {/* aria-hidden so the icon will be ignored */}
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-mainBrown hover:text-white transition-colors duration-300"
          >
            {" "}
            {/* added aria-label with specific label so it isn't ambiguous */}
            <FaLinkedinIn aria-hidden="true" />{" "}
            {/* aria-hidden so the icon will be ignored */}
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-mainBrown hover:text-white transition-colors duration-300"
          >
            {" "}
            {/* added aria-label with specific label so it isn't ambiguous */}
            <FaInstagram aria-hidden="true" />{" "}
            {/* aria-hidden so the icon will be ignored */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
