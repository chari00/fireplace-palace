"use client";
import { useState } from "react";
import "./MenuBarMobile.css";
import Image from "next/image";
import openButton from "/public/images/foundersImage/menu-open-button.png";
import closeButton from "/public/images/foundersImage/menu-close-button.png";
import Link from "next/link";

export default function MenuBarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <section className="mobile-menu-container">
      <button onClick={isOpen ? handleOpen : handleClose}>
        <Image src={isOpen ? closeButton : openButton} alt="button" />
      </button>

      {isOpen && (
        <div className="menu-container">
          <ul className="menu-list">
            <Link href="/">
              <li className="menu-list-item">Home</li>
            </Link>

            <Link href="/founders">
              <li className="menu-list-item">Meet the Founders</li>
            </Link>
          </ul>
        </div>
      )}
    </section>
  );
}
