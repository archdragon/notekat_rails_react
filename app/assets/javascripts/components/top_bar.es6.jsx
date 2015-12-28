class TopBar extends React.Component {
  render () {
    return (
      <div className="react_top-bar top-bar">
        <div className="navbar navbar-default">
          <button type="button" className="navbar-toggle collapsed">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a className="navbar-brand">Top Bar</a>

          <div className="collapse navbar-collapse" id="#top-bar">
            <ul className="nav navbar-nav pull-right">
              <li>
                <a href={this.props.logout_link}>Log out</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

MainMenu.propTypes = {
  logout_link: React.PropTypes.string,
};
