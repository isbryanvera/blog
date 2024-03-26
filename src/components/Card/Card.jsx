import { Tag } from "../Tag/Tag";
import PropTypes from "prop-types";
import { classnames } from "../../scripts/utils/classnames"
import "./Card.scss";
import { Autor } from "../Autor/Autor";
import { Time } from "../Time/Time";

function Card({
    unsplashId,
    tags,
    title,
    content,
    author,
    time,
    date,
    isExtended,
    isReversed
  }) 
  {
    return (
      <article className={`card ${classnames({
        "is-extended": isExtended,
        "is-reversed": isReversed
      })}`}>
        <img src={`https://images.unsplash.com/${unsplashId}`}/>
        <section>
          <div className="card-content">
            <header>
              <div className="tags">
                {tags?.map((tag) => {
                  return <Tag key={tag.name} title={tag.name} link={tag.link} type={isExtended ? 'secondary' : 'primary'}/>
                })}
              </div>
              <h2 className="heading heading-sm font-bold">{title}</h2>
              <Time date={date}></Time>
              {/* <time className="help-text paragraph-xs font-regular" dateTime="2022-06-10">{date}</time> */}
            </header>
            <p className="paragraph paragraph-sm font-regular">{content}</p>
          </div>
          <footer>
            <Autor name={author.name} img={author.img}></Autor>
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

export default Card
