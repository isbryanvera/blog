import { classnames } from "../../scripts/utils/classnames"
import "./Link.scss";

function Link({ href = '#',children,isActive }) {
  return (
    <a href={href} className={`text-button text-button-md font-bold ${classnames({
      "is-active": isActive
    })}`}>
      {children}
    </a>
  )
}

export default Link 
