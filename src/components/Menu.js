import React, { Component } from 'react';
import pizzaData from '../pizzaData';
import MenuItem from'./MenuItem'


class Menu extends Component {
    render(){
        return (
            <div className="menu">

                
                <h1>Menu</h1>
                <div className="menu-container">
                {pizzaData.map((pizza, i) => {
                    return <MenuItem key={i} pizza={pizza}/>
                })}
        </div>
          </div>
      );
    }
  }
          
  export default Menu;