class MainMenu extends React.Component {
  render () {
    return (
      <div className="react_main-menu main-menu">
        <header>
          <div>Label: {this.props.name}</div>
        </header>
        <section>
          <ul>
          {
            this.props.items.map(function(item) {
              return <MenuItem link="#" name={item} />
            })
          }
          </ul>
        </section>
      </div>
    );
  }
}

MainMenu.propTypes = {
  name:  React.PropTypes.string,
  items: React.PropTypes.array
};
