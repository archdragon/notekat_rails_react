import React from 'react';


class AddNoteItem extends React.Component {
  onClick() {
    alert('Click');
  }

  render () {
    var noteClass = "react_add-note-item add-note-item note-item-box note-item-box-large"
    return (
      <div className={noteClass} onClick={this.onClick}>
        Add note item
      </div>
    );
  }
}
