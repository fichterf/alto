import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const outlinePath = 'M10.52,34h-3a1,1,0,0,1-.88-1.44L12.55,21H6a1,1,0,0,1-.85-1.54l10.68-17A1,1,0,0,1,16.64,2H30.07a1,1,0,0,1,.77,1.69L21.78,14h5.38a1,1,0,0,1,.73,1.66l-16.63,18A1,1,0,0,1,10.52,34ZM9.18,32h.91L24.86,16H19.59a1,1,0,0,1-.77-1.69L27.88,4H17.19L7.77,19H14.2a1,1,0,0,1,.88,1.44Z';
const solidPath = 'M30.8,2.29A.49.49,0,0,0,30.35,2H16.42a.5.5,0,0,0-.42.23l-10.71,17A.49.49,0,0,0,5.7,20h7.67L6.6,33.25a.52.52,0,0,0,.46.75h3a.5.5,0,0,0,.37-.16L28,14.85a.5.5,0,0,0-.37-.85H20.89L30.72,2.82A.49.49,0,0,0,30.8,2.29Z';

const Bolt = props => (
  <Icon {...props}>
    {ownProps => (
      <path
        {...ownProps}
        d={props.outline ? outlinePath : solidPath}
      />
    )}
  </Icon>
);

Bolt.displayName = 'Bolt';

Bolt.defaultProps = {
  outline: false,
}

Bolt.propTypes = {
  outline: PropTypes.bool,
}

export default Bolt;
