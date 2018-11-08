import React from 'react';
import Icon from './Icon';

const Bars = props => (
  <Icon {...props}>
    {ownProps => (
      <g>
        <path
          {...ownProps}
          d="M32,20 L4,20 C3.44771525,20 3,19.3284271 3,18.5 C3,17.6715729 3.44771525,17 4,17 L32,17 C32.5522847,17 33,17.6715729 33,18.5 C33,19.3284271 32.5522847,20 32,20 Z M32,11 L4,11 C3.44771525,11 3,10.3284271 3,9.5 C3,8.67157288 3.44771525,8 4,8 L32,8 C32.5522847,8 33,8.67157288 33,9.5 C33,10.3284271 32.5522847,11 32,11 Z M32,29 L4,29 C3.44771525,29 3,28.3284271 3,27.5 C3,26.6715729 3.44771525,26 4,26 L32,26 C32.5522847,26 33,26.6715729 33,27.5 C33,28.3284271 32.5522847,29 32,29 Z"
        />
      </g>
    )}
  </Icon>
);

Bars.displayName = 'Bars';

export default Bars;
