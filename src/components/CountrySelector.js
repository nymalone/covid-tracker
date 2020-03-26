import React from "react";
import { useState } from "react";
import styled from "styled-components";

import useStats from "./useStats";
import CountrySelected from "./CountrySelected";

const Select = styled.select`
  width: 80%;
  height: 35px;
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 18px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 30px;
    padding: 0px 2px 1px;
  }
`;


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
      <CountrySelected
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />

    <div className="select"> 
    <h1 > Selecione um país </h1>
      <Select
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
      </Select>  
    
    </div>
     
    </div>
  );
}
