import React, { useState, useEffect } from "react";
import Card from "../../components/card/card";

import axios from "axios";
import "./styles.css";

export default function Main() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!search) {
        return; 
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  return (
    <main>
      <header>
        <div className="header">
          <label htmlFor="search" className="search-bar"></label>
          <input
            id="search"
            type="search"
            placeholder="Search Here"
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>
      </header>
      <div className="content">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : characters.length === 0 ? (
          <p>No characters found.</p>
        ) : (
          <Card  data={characters} />
        )}
      </div>
    </main>
  );
}
