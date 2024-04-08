/* eslint-disable react/no-unescaped-entities */
import founders1 from "../images/foundersImage/founders-1.png";
import founders2 from "../images/foundersImage/founders-2.png";
import founders3 from "../images/foundersImage/founders-3.png";
import Image from "next/image";

import "./foundersCard.css";

export default function FoundersCard() {
  return (
    <>
      <main>
        <section className="cardSection">
          <div id="card-1">
            <h3 className="services-founder">Our craftsmanship</h3>
            <p className="card-text-founders">
              Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.
            </p>
            <Image className="img" src={founders1} alt="craftsman" />
          </div>
          <div id="card-2">
            <h3 className="services-founder">Our experience</h3>
            <p className="card-text-founders">
              Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us.
            </p>
            <Image className="img" src={founders2} alt="experience" />
          </div>
          <div id="card-3">
            <h3 className="services-founder">Our guarantee</h3>
            <p className="card-text-founders">
              If you're no 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!
            </p>
            <Image className="img" src={founders3} alt="guarantee" />
          </div>
        </section>
      </main>
    </>
  );
}
