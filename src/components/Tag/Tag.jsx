import "./Tag.scss";
import PropTypes from "prop-types";

function Tag({title,link, type}) {
  return (
    <span className={`tag tag-${type}`}><a href={link}>{title}</a></span>
  )
}

Tag.defaultProps = {
  link: "#"
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export { Tag }