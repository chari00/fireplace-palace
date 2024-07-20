// import Image from "next/image";
import "./page.css";
import Card from "./Cards/Card";
import CustomerReviews from "../app/reviews/CustomerReviews";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <CustomerReviews />
        <Card />
      </main>
    </>
  );
}
