import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function Card({ data }) {
  let navigate = useNavigate();

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <section className="card-container">
      {data.map((item) => (
        <article
          className="card"
          key={item.id}
          onClick={() => navigate(`/${item.id}`)}
        >
          <figure>
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt=""
            />
            <figcaption className="title">
              <h5>{item.name}</h5>
            </figcaption>
          </figure>
        </article>
      ))}
    </section>
  );
}
