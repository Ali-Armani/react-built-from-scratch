
import PropTypes from "prop-types";

function ConditionalRendering({isLoggedIn = false}) {

  if (isLoggedIn === true) {
    return <h2>Welcome!</h2>
  }
  else {
    return <h2>Please Login.</h2>
  }
}

ConditionalRendering.PropTypes = {
  isLoggedIn: PropTypes.bool,
}

export default ConditionalRendering;