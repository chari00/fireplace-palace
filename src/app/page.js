import Card from "./Cards/Card";
import CustomerReviews from "../app/reviews/CustomerReviews";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
  
      <main>
        <Hero />
        <CustomerReviews />
        <Card />
      </main>
   
  );
}
