import React from 'react';
import { connect } from 'react-redux';
import { addNoteItem } from '../actions/noteItemActions';
import { App } from '../containers/app';

class AddNoteItem extends React.Component {

  render () {
    var noteClass = "react_add-note-item add-note-item note-item-box note-item-box-large"

    var onClick = () => (this.props.onClick({id: 1}))

    return (
      <div className={noteClass} onClick={onClick}>
        Add note item
      </div>
    );
  }
}

AddNoteItem.propTypes = {
  onClick: React.PropTypes.func
}

export default AddNoteItem
