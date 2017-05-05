import React from 'react';
import './style.scss'

export const Count = ( { count, ...inheritProps } ) => (
 <span className = "count" { ...inheritProps }>
		{ count }
	</span>
);
Count.propTypes = {
  count: React.PropTypes.number.isRequired
};
export default Count;
