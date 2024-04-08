import "../Reviews/Reviews.css";
import { useState, useEffect } from "react";

export default function Reviews() {
  const [country, setCountry] = useState(null);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(
      `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`
    )
      .then((response) => response.json())
      .then((json) => setCountry);
  }, [country]);

  return (
    <>
      <button onClick={() => setCountry("England")}>England</button>
      <button onClick={() => setCountry("Scotland")}>Scotland</button>
      <button onClick={() => setCountry("Wales")}>Wales</button>

      <h1>{country}</h1>
      {lists.map((list) => {
        return <pre>{JSON.stringify(list)}</pre>;
      })}
    </>
  );
}
