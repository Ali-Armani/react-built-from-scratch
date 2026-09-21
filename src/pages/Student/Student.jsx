
import PropTypes from 'prop-types';

function Student({ name = 'Guest', age = '0', isStudent = 'false' }) {

  return(
    <div className='student-container'>
      <p>
        Name: {name}
      </p>

      <p>
        Age: {age}
      </p>

      <p>
        Education Status: {isStudent ? "Student" : "Not a Studen"}
      </p>
    </div>
  );
}

Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

export default Student;