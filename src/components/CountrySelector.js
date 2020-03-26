import React from "react";
import { useState } from "react";
import useStats from "./useStats";
import CountrySelected from "./CountrySelected";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("BRA");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  let oldStructure = {
    countries: {},
    iso3: {}
  };

  for (let country of countries.countries) {
    oldStructure.countries[country.name] = country.iso2;
    oldStructure.iso3[country.iso2] = country.iso3;
  }
  return (
    <div>
      {/* <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(oldStructure.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === oldStructure.iso3[code]}
            key={code}
            value={oldStructure.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select> */}
      <CountrySelected
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
