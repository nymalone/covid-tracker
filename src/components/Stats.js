import React from "react";
import styled from "styled-components";
import useStats from "./useStats";

const StatGrid = styled.div`
  display: flex;
  justify-content: space-between;

`;
const StatBlock = styled.div`
  background: rgba(255, 255, 255, 0.82);
  font-size: 1.7rem;
  padding: 1rem 2rem 1rem 2rem;
  margin-top: -130px;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="body">
      <StatGrid>
        <StatBlock>
          <h2>CASOS MUNDIAIS</h2>
          <p>
            <b>Casos confirmados: </b> <span>{stats.confirmed.value}</span>
          </p>
           <p>
            <b>Número de mortes: </b> <span>{stats.deaths.value}</span>
          </p>
           <p>
            <b>Recuperados: </b> <span>{stats.recovered.value}</span>
          </p>
        </StatBlock>
      </StatGrid>
    </div>
  );
}
