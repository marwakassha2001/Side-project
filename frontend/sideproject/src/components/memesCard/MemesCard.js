import Styles from './MemesCard.module.css'
import { Link } from 'react-router-dom'
const Meme = ({data}) => {
    return (
  <Link to={`/meme/${data.id}`}>
        <article className={Styles.articleCard}>
            <img src={data.imageURLS} />
            <div className={Styles.cardWrapper}>
                <div className={Styles.cardDetails}>
                    <p>{`${data.User.fullName}`}</p>
                    <span>{data.createdAt.split("T")[0]}</span>
                </div>
                <p>{data.caption}</p>
            </div>

        </article>
        </Link>
    )
}

export default Meme