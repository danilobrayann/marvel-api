import React, { useState, useEffect } from "react";
import Card from "../../components/card/card";
import axios from "axios";
import "./styles.css";
export default function Main() {
  const [url, setUrl] = useState(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a"
  );
  const [item, setItem] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setItem(res.data.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setItem(null);
      }
    };
    fetchData();
  }, [url]);

  const searchMarvel = (e) => {
    if (e.key === "Enter") {
      setUrl(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
      );
    }
  };

  return (
    <main>
      <header>
        <div className="header">
          <form action="">
            <label className="search-bar"></label>
            <input
              type="search"
              placeholder="Search Here"
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchMarvel}
            />
          </form>
        </div>
      </header>
      <div className="content">
        {!item ? <p>Not Found</p> : <Card data={item} />}
      </div>
    </main>
  );
}
