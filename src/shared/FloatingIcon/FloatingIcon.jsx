import React from 'react';
import PropType from 'prop-types';

import './FloatingIcon.css';

const FloatinIcon = ({ icon }) => {
  return(
    <div className="floating-icon">
      <span>{ icon }</span>
    </div>
  )
};

FloatinIcon.propType = {
  icon: PropType.string,
}

export default FloatinIcon
