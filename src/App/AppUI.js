import React from 'react';
import { Header } from '../Header/Header.js';
import { BackgroundImage } from '../BackgroundImage/BackgroundImage.js';
import { Card } from '../Card/Card.js';
import { TuduItem } from '../TuduItem/TuduItem.js';
import { Prueba } from '../Prueba/Prueba.js';
import { EmptyTudu } from '../EmptyTudu/EmptyTudu.js';
import { LoadingTudu } from '../LoadingTudu/LoadingTudu.js';
import { ErrorTudu } from '../ErrorTudu/ErrorTudu.js';
import { Menu } from '../Menu/Menu.js';
import { TuduContext } from '../Context/Context.js';

function AppUI () {

  const {
    loading,
    error,
    tudus,
    completedTudus,
    totalTudus,
    progressPercentage,
    completingTudu,
    deletingTudu,
    toggleMenu,
    showingMenu,
  } = React.useContext(TuduContext);

  return (
    <>
      <Header 
        onShowMenu={showingMenu}
      />

      {toggleMenu && <Menu />}

      <BackgroundImage />

      <Card 
        title={"Primer TuduCard"} 
        completed={completedTudus} 
        total={totalTudus}
        percentage={progressPercentage}
      >
        {loading && <LoadingTudu />}
        {error && <ErrorTudu />}
        {(!loading && tudus.lenght === 0) && <EmptyTudu />}  

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