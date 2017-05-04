import React from 'react';
import './style.scss'

Count.propTypes = {
  count: React.PropTypes.number.isRequired
};

export const Count = ( { count, ...inheritProps } ) => (
 <span className = "count" { ...inheritProps }>
		{ count }
	</span>
);

export default Count;
