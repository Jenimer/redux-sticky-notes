import React from 'react';
import { connect } from 'react-redux';
import { toggleSticky } from './actions/stickys'

const Sticky = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch(toggleSticky)}
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    {name}
  </li>
)

export default connect()(Sticky)