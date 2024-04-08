// import Image from "next/image";
import "./page.css";
import Card from "./src/Cards/Card";
import CustomerReviews from "./src/reviews/CustomerReviews";
import Hero from "./src/Hero/Hero";



export default function Home() {
  return (
    <>    
    <main id="main">
      <Hero/>
      <CustomerReviews/>
      <Card/>
   </main>
    </>
  );
}
