
import PropTypes from "prop-types";

function Color({color='White', psyc='Neutral'}) {

  return(
    <div>
      <p>
        Color: {color}
      </p>

      <p>
        Psychological Effect: {psyc}
      </p>
    </div>
  );
}

Color.PropTypes = {
  color: PropTypes.string,
  psyc: PropTypes.string,
}

export default Color;