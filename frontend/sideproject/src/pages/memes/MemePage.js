import { useParams } from "react-router-dom";
import Styles from './MemePage.module.css'
import axios from "axios";
import { useState, useEffect } from 'react'
import Meme from "../../components/memesCard/MemesCard";
const MemePage = () => {
  const { id } = useParams()
  const [meme, setMeme] = useState(null)
  const [isLoading, setisLoading] = useState(true)

  useEffect(()=>{
    const fetchMeme = async() =>{
      setisLoading(true)
      try{
     const meme = await axios.get(`http://localhost:4000/meme/${id}`)
     if(meme){
     setMeme(Meme.data.data)
     setisLoading(false)
     }
     else{
     setMeme(null)
     setisLoading(false)
     }
    }
      catch(err){
        setisLoading(false)

      }
    }
    fetchMeme();
  }
  ,[])


  const renderContent = () => {
    if (isLoading) return <div className={Styles.container}><p>Loading...</p></div>;
    // if (isError) return <Error />;
    if (meme && !isLoading) return ( <article className={Styles.articleContainer}>
    <img 
    src={meme.imageURLS}/>
    <div className={Styles.articleWrapper}>
      <header>
        <p><span>by </span>{`${meme.User.fullName}`}</p>
        <time>{meme.createdAt.split("T")[0]}</time>
      </header>
      <section className={Styles.articleDetails}>
      {meme.caption}
      </section>
    </div>
  </article>);

  
    return <div className={Styles.container}><h1>No Article found</h1></div>;
  };
  
  return (
    renderContent()
  )
}

export default MemePage