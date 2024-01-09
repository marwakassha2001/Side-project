import Styles from './Home.module.css';
import React from "react";
import MemesCard from "../../components/memesCard/MemesCard.js"

import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [memes, setMemes] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchMemes = async () => {
      setisLoading(true);
      try {
        const memes = await axios.get('http://localhost:4000/meme/get');
        setMemes(memes.data.data);
        setisLoading(false);
      } catch (err) {
        console.log(err);
        setisLoading(false);
      }
    }
    fetchMemes();
  }, []);

  return (
    <main className={Styles.homePage}>
    <h1>All Memes</h1>
    <section>
      {!isLoading && memes ? (memes.map((meme)=>{
        return <MemesCard key={meme.id} data={meme}/>
      })
      ) : <p>Loading...</p>}



    </section>
  </main>

  );
}

export default Home;

