import React from 'react';
import { connect } from 'react-redux';
import { addNoteItem } from '../actions/noteItemActions';
import { App } from '../containers/app';

class AddNoteItem extends React.Component {

  render () {
    var noteClass = "react_add-note-item add-note-item note-item-box note-item-box-large"
    return (
      <div className={noteClass} onClick={this.props.onClick}>
        Add note item
      </div>
    );
  }
}

export default AddNoteItem
