
import PropTypes from "prop-types";

function ConditionalRendering({ isLoggedIn = false, username = 'Guest User' }) {

  if (isLoggedIn === true) {
    return <h2 className="welcome-message">Welcome {username}!</h2>
  }
  else {
    return <h2 className="login-message">Please Login.</h2>
  }
}

ConditionalRendering.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default ConditionalRendering;