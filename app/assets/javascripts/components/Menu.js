import React from 'react';
import MenuItem from '../components/MenuItem.js'

class Menu extends React.Component {
  render () {
    return (
      <div className="main-menu">
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

Menu.propTypes = {
  name:  React.PropTypes.string,
  items: React.PropTypes.array
};

export default Menu
