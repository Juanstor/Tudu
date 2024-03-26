import { ReactComponent as ArrowSVG } from './ArrowIcon.svg';
import { ReactComponent as CompletedSVG } from './CompletedIcon.svg';
import { ReactComponent as IncompletedSVG } from './IncompletedIcon.svg';
import { ReactComponent as EditSVG } from './EditIcon.svg';
import { ReactComponent as DeleteSVG } from './DeleteIcon.svg';
import { ReactComponent as MenuSVG } from './MenuIcon.svg';
import { ReactComponent as PlusSVG } from './PlusIcon.svg';
import { ReactComponent as CheckSVG } from './CheckIcon.svg';
import { ReactComponent as XSVG } from './XIcon.svg';
import './TuduIcon.css';

const iconTypes = { 
  "Menu": <MenuSVG />,
  "Plus": <PlusSVG />,
  "Arrow": <ArrowSVG />,
  "Completed": <CompletedSVG />,
  "Incompleted": <IncompletedSVG />,
  "Edit": <EditSVG />,
  "Delete": <DeleteSVG />,
  "Check": <CheckSVG />,
  "X": <XSVG />,
}

function TuduIcon({ type, onClick }) {
  return(
    <span
      className={`Icon Icon-${type}`}
      onClick={onClick}
    >
      {iconTypes[type]}
    </span>
  )
}

export { TuduIcon };