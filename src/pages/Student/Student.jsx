
import PropTypes from 'prop-types';

function Student({ name = 'Guest', age = '0', isStudent = 'false' }) {

  return(
    <div className='student-container'>
      <p className='student-name-p'>
        Name: {name}
      </p>

      <p className='student-age-p'>
        Age: {age}
      </p>

      <p className='student-boolean-p'>
        Education Status: {isStudent ? "Student" : "NOT a Student"}
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