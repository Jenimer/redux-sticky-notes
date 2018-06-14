import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';
import { addSticky } from './actions/stickys'

class StickyForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { name } = this.state
    dispatch(addSticky(sticky))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <h3>Add A Sticky</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
  const mapStateToProps =(state) => {
     return { id: state.nextId }
}

    
export default connect(mapStateToProps)(StickyForm);