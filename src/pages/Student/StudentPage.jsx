
import Student from './Student.jsx'

function StudentPage() {

  return(
    <div>
      <Student name='Ali' age='28' isStudent={true}></Student>
      <hr />
      <Student name='' age='' isStudent={1}></Student>
      <hr />
      <Student age='19'></Student>
      <hr />
      <Student isStudent={0} name='Mike' age='17'></Student>
      <hr />
      <Student name='Jack Dawson' age='21' isStudent={NaN}></Student>
    </div>
  );
}

export default StudentPage;