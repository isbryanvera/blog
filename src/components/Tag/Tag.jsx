import "./Tag.css";
import PropTypes from "prop-types";

function Tag({title,link}) {
  return (
    <span className="tag tag-primary"><a href={link}>{title}</a></span>
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