import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu.js'
import Note from '../components/Note.js'
import { fetchAddNoteItem } from '../actions/noteItemActions'

export default class App extends Component {

  menuItems() {
    return ['x'];
  }

  noteItems() {
    return ['a', 'b'];
  }

  /* Notes */


  render() {
    const { dispatch } = this.props

    return (
      <div className="container-flex">
        <Menu items={this.menuItems()} />
        <Note items={this.props.noteItems} onNoteAddClick={(note) => dispatch(fetchAddNoteItem(note))} />
      </div>
		)
	}
}

function select(state) {
  return {
    noteItems: state.noteItems
  }
}

export default connect(select)(App)
