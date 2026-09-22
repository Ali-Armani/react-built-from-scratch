
import Props from './Props.jsx';

function PropsPage() {

  return(
    <>
      <Props ></Props>
      <hr />
      <Props name='Peter Parker' age={29} field='Spiderman' experience={1} citizenship='American'></Props>
      <hr />
      <Props name='Ali Armani' age={29} field='Web Development' experience={1} citizenship='Iranian'></Props>
      <hr />
      <Props field='MBA' experience={1}></Props>
      <hr />
      <Props name={20} age='age' field={3} experience='experience' citizenship={1}></Props>
    </>
  );
}

export default PropsPage;