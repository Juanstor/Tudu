import React from 'react';
import { Header } from '../Header/Header.js';
import { BackgroundImage } from '../BackgroundImage/BackgroundImage.js';
import { Card } from '../Card/Card.js';
import { TuduItem } from '../TuduItem/TuduItem.js';
import { EmptyTudu } from '../EmptyTudu/EmptyTudu.js';
import { LoadingTudu } from '../LoadingTudu/LoadingTudu.js';
import { ErrorTudu } from '../ErrorTudu/ErrorTudu.js';
import { Menu } from '../Menu/Menu.js';
import { Modal } from '../Modal/Modal.js';
import { Form } from '../Form/Form.js';
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
    editingTudu,
    deletingTudu,
    checkingTudu,
    xingTudu,
    toggleMenu,
    showingMenu,
    openModal,
    setOpenModal,
    openGrayBG,
    setOpenGrayBG,
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
        setOpenModal={setOpenModal}
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
            editing={tudu.editing}
            onEdit={() => editingTudu(tudu.text)}
            onDelete={() => deletingTudu(tudu.text)}
            onCheck={() => checkingTudu(tudu.text)}
            onX={() => xingTudu(tudu.text)}
            setOpenGrayBG={setOpenGrayBG}

          />
        ))}
      </Card>



      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}

      {openGrayBG && (
        <Modal />
      )}
      
    </>
  );

}

export { AppUI };