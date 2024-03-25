import { Tag } from "../Tag/Tag";
import PropTypes from "prop-types";
import "./Card.css";

function Card({unsplashId, tags, title,content, author, time, date}) {
  return (
    <article className="card">
      <img src={`https://images.unsplash.com/${unsplashId}`}/>
      <section>
        <div className="card-content">
          <header>
            <div className="tags">
              {tags.map((tag) => {
                return <Tag key={tag.name} title={tag.name} link={tag.link}/>
              })}
            </div>
            <h2 className="heading heading-sm font-bold">{title}</h2>
            <time className="help-text paragraph-xs font-regular" dateTime="2022-06-10">{date}</time>
          </header>
          <p className="paragraph paragraph-sm font-regular">{content}</p>
        </div>
        <footer>
          <div className="author">
            <img src={author.img} alt={author.name} />
            <span className="paragraph-xs font-bold">{author.name}</span>
          </div>
          <span className="help-text paragraph-xs font-regular">{time}</span>
        </footer>
      </section>
    </article>
  )
}

Card.propTypes = {
  unsplashId: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.object,
  time: PropTypes.string,
  date: PropTypes.string
}

export { Card }
