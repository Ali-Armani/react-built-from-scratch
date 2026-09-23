
import PropTypes from "prop-types";

function ConditionalRendering() {

  return(
    <div>
      if (isLoggedIn=true) {
        <h2>Welcome to our Company.</h2>
      }
      else {
        <h2>Please Log in.</h2>
      }
    </div>
  );
}

ConditionalRendering.PropTypes = {
  isLoggedIn: true,
}

export default ConditionalRendering;