import React from 'react'
import { connect } from 'react-redux';
import Sticky from './Sticky'

const filtered = (stickys, filter) => {
  switch (filter) {
    case 'Yellow':
      return stickys;
    case 'Red':
      return stickys.filter( s => !s.complete )
    case 'Green':
      return stickys.filter( s => s.complete )
  }
}
const StickyList = ({ stickys }) => (
  <ul>
    { stickys.map( (s) => {
      return (
        <Sticky key={s.id} {...s} />
          
      )
     })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { stickys: state.stickys }
}

export default connect(mapStateToProps)(StickyList)
