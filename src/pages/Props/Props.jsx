
import PropTypes from "prop-types";

function Props({name='Guest User', age='0', field='Not mentioned', experience='0', citizenship='Not mentioned'}) {

  return(
    <>
      <p>
        Full Name: {name}
      </p>
      <p>
        Age: {age}
      </p>
      <p>
        Field of Study: {field}
      </p>
      <p>
        Years of Experience: {experience}
      </p>
      <p>
        Citizenship: {citizenship}
      </p>
    </>
  );
}

Props.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  field: PropTypes.string,
  experience: PropTypes.number,
  citizenship: PropTypes.string,
}

export default Props;