
import PropTypes from "prop-types";

function ConditionalRendering({ isLoggedIn = false, username = 'Guest User' }) {

  if (isLoggedIn === true) {
    return <h2>Welcome {username}!</h2>
  }
  else {
    return <h2>Please Login.</h2>
  }
}

ConditionalRendering.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default ConditionalRendering;