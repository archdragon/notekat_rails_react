class MenuItem extends React.Component {
  render () {
    return (
      <li className="react_main-menu-item">
        <a href={this.props.link}>{this.props.name}</a>
      </li>
    );
  }
}

MainMenu.propTypes = {
  name:  React.PropTypes.string,
  link:  React.PropTypes.string
};
