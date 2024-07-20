import Image from "next/image";
import MikeAndMandy from "/public/images/foundersImage/founder-mike-and-mandy.png";
import Link from "next/link";
import FoundersCard from "../foundersCard/FoundersCard";
import "../founders/founder.css";

export default function Founders() {
  return (
    <>
      <div id="founders">
        <Link href="/founders"></Link>
        <div className="mike-mandy-banner">
          <h1 className="banner-text">
            Meet the artisans behind our masterpieces!
          </h1>
          <h1 className="banner-name">Mike and Mandy</h1>
        </div>
        <Image className="mike-mandy" src={MikeAndMandy} alt="Mike and Mandy" />
      </div>
      <FoundersCard />
    </>
  );
}
