import './BackgroundImage.css';

function BackgroundImage() {
  return (
    <section className='background'>
      <img className='background--image' src="https://img.freepik.com/free-vector/follow-leader-concept-illustration_114360-10886.jpg?w=1380&t=st=1706907402~exp=1706908002~hmac=e4a64c610944972edbb5510fabafad10a0406bf3d09cb0a4dd046a75aa94ad10" alt='Make it real'></img>
      <p>
        Today's effort is <br/> tomorrow's accomplishment.
      </p>
    </section>
  );
}

export { BackgroundImage };