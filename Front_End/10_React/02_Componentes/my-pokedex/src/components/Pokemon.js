import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props;
    const { value, measurementUnit } = averageWeight;

    return (
      <div className="pokemon" key={id}>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {value}{measurementUnit}</p>
        <img src={image} alt={`Pokemon: ${name}`}></img>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
export default Pokemon;
