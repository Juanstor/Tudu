import { ReactComponent as CheckSVG } from './CheckIcon.svg'
import { ReactComponent as EditSVG } from './EditIcon.svg'
import { ReactComponent as DeleteSVG } from './DeleteIcon.svg'

// const iconTypes = { 
//   "aja": <DeleteSVG />,
//   "tu sabe": <EditSVG />,
// }

// Clase iconos en react min 15..30

function TuduIcon({ type }) {
  return(
    <span
      className={`Icon Icon-${type}`}
    >
      <CheckSVG />
      {/* <EditSVG />
      <DeleteSVG /> */}
    </span>
  )
}

export { TuduIcon };