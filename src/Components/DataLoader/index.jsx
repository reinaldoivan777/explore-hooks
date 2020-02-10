import React, { useState, useEffect } from "react";

export default function DataLoader() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(data => setData(data.results));
  }, []);

  return (
    <div>
      <ul>
        {data.map(people => (
          <li>{people.name}</li>
        ))}
      </ul>
    </div>
  );
}
