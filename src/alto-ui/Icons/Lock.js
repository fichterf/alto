import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const LockOutline = props => (
  <g>
    <path
      {...props}
      d="M18.09,20.59A2.41,2.41,0,0,0,17,25.14V28h2V25.23a2.41,2.41,0,0,0-.91-4.64Z"
    />
    <path
      {...props}
      d="M26,15V10.72a8.2,8.2,0,0,0-8-8.36,8.2,8.2,0,0,0-8,8.36V15H7V32a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V15ZM12,10.72a6.2,6.2,0,0,1,6-6.36,6.2,6.2,0,0,1,6,6.36V15H12ZM9,32V17H27V32Z"
    />
  </g>
);

const LockSolid = props => (
  <g>
    <path
      {...props}
      d="M26,15V10.72a8.2,8.2,0,0,0-8-8.36,8.2,8.2,0,0,0-8,8.36V15H7V32a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V15ZM19,25.23V28H17V25.14a2.4,2.4,0,1,1,2,.09ZM24,15H12V10.72a6.2,6.2,0,0,1,6-6.36,6.2,6.2,0,0,1,6,6.36Z"
    />
  </g>
);

const Lock = props => (
  <Icon {...props}>
    {props.outline
      ? ownProps => <LockOutline {...ownProps} />
      : ownProps => <LockSolid {...ownProps} />}
  </Icon>
);

Lock.displayName = 'Lock';

Lock.defaultProps = {
  outline: false,
};

Lock.propTypes = {
  outline: PropTypes.bool,
};

export default Lock;
