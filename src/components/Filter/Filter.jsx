import { classnames } from "../../utils/utils";
import "./Filter.scss";

const Filter = ({children, isActive , href='#', onClick }) => {
  return (
    <li 
      className={classnames({'is-active-filter':isActive})}>
        <a 
          className="filter paragraph paragraph-sm font-bold" 
          href={href} 
          onClick={(e) => {
            e.preventDefault()
            onClick(children)
        }}>
          {children}
        </a>
    </li>
  )
}

export { Filter }
