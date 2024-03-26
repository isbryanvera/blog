import "./Button.scss";
import { classnames } from "../../utils/utils"

function Button({children,type = 'secondary',onClick}) {
  return (
    <button onClick={onClick} className={`button ${classnames({
      [`button-${type}`]: type,
    })}`}>
      {children}
    </button>
  )
}

export default Button