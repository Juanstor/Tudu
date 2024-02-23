import { Header } from '../Header/Header.js';
import { BackgroundImage } from '../BackgroundImage/BackgroundImage.js';
import { Card } from '../Card/Card.js';
import { TuduItem } from '../TuduItem/TuduItem.js';
import { Prueba } from '../Prueba/Prueba.js';

function AppUI ({
  tudus,
  completedTudus,
  totalTudus,
  progressPercentage,
  completingTudu,
  deletingTudu,
}) {
  return (
    <>
      <Header />
      <BackgroundImage />
  
      <Card title={"Primer TuduCard"} 
        completed={completedTudus} 
        total={totalTudus}
        percentage={progressPercentage}
      >
        {tudus.map(tudu => (
          <TuduItem 
            Key={tudu.text}
            text={tudu.text}
            completed={tudu.completed}
            onComplete={() => completingTudu(tudu.text)}
            onDelete={() => deletingTudu(tudu.text)}
          />
        ))}
      </Card>
      
      <Prueba />
    </>
  );

}

export { AppUI };