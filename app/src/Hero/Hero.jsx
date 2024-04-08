import Image from "next/image";
import "../Hero/Hero.css";
import heroImg from "../images/hero-mobile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero-banner">
        <Image className="hero-img" src={heroImg} alt="fireplace" />
        <div className="banner-container">
          <h1 className="title">
            Discover the <br />
            Perfect Fireplace ...
          </h1>
          <div className="btnContainer">
            <Link href="/contact">
              <button className="btn">Book a consultation</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
