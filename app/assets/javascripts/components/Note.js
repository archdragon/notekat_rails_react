import React from 'react'
import NoteItem from './NoteItem'
import AddNoteItem from './AddNoteItem'

class Note extends React.Component {
  render () {
    return (
      <div className="note">
        <div className="note-body">
        {
          this.props.items.map(function(item) {
            return <NoteItem data={item} size="large" />
          })
        }
        <AddNoteItem onClick={this.props.onNoteAddClick} />
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  items:  React.PropTypes.array,
  onNoteAddClick: React.PropTypes.func
};

export default Note
