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

MainMenu.propTypes = {
  data:  React.PropTypes.object
};
