class Note extends React.Component {
  render () {
    return (
      <div className="react_note">
        {
          this.props.items.map(function(item) {
            return <NoteItem data={item} />
          })
        }
      </div>
    );
  }
}

MainMenu.propTypes = {
  items:  React.PropTypes.array
};
