
import PropTypes from "prop-types";

function Color({color='White', psyc='Neutral'}) {

  return(
    <div>
      <p className="color-psyc-color-p">
        Color: {color}
      </p>

      <p className="color-psyc-psyc-p">
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