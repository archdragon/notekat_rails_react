class Note extends React.Component {
  render () {
    return (
      <div className="note-body">
      {
        this.props.items.map(function(item) {
          return <NoteItem data={item} size="large" />
        })
      }
      <AddNoteItem />
      </div>
    );
  }
}

MainMenu.propTypes = {
  items:  React.PropTypes.array
};
