import React from 'react'

class NoteItem extends React.Component {
  render () {
    var noteClass = "react_note-item note-item-box note-item-box-small"
    return (
      <div className={noteClass}>
        Note item
      </div>
    );
  }
}

NoteItem.propTypes = {
  data:  React.PropTypes.object
};

export default NoteItem
