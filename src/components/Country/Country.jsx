import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, cca3, population } = country;
  // console.log(country)
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountry);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>
        <small>code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      <br />
      {visited ? "I have visited this Country" : "I want to visit this country"}
    </div>
  );
};

export default Country;