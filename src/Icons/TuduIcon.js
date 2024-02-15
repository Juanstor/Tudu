import { ReactComponent as CompletedSVG } from './CompletedIcon.svg'
import { ReactComponent as IncompletedSVG } from './IncompletedIcon.svg'
import { ReactComponent as EditSVG } from './EditIcon.svg'
import { ReactComponent as DeleteSVG } from './DeleteIcon.svg'

const iconType = { 
  "Completed": <CompletedSVG />,
  "Incompleted": <IncompletedSVG />,
  "Edit": <EditSVG />,
  "Delete": <DeleteSVG />,
}

// Clase iconos en react min 15..30

function TuduIcon({ type }) {
  return(
    <span
      className={`Icon Icon-${type}`}
    >
      {iconType[type]}

    </span>
  )
}

export { TuduIcon };