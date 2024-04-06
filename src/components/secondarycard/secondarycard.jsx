import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css'
export default function Marvel(){
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=be62202524d6f1fdf7af74a204451008&hash=e308519e7ae0b97e098d065bb8ac0f1d`);
        setItem(res.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
        setItem(null);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {item ? (
        <div className="box-content">
          <div className="right-box">
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
