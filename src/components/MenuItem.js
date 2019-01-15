import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
 <div className="menu-item">
  <img src={this.props.pizza.image} alt="" />
 <div className="menu-description">
 <div className="menu-item-name">
  {this.props.pizza.name}
 </div>
<div>Price: {this.props.pizza.price}</div>
 <div>{this.props.pizza.description}</div>
</div>
</div>
        );
    }
}

export default MenuItem;