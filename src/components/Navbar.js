import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div class= "navbar">
                <a href= "#story">Our story</a>
                <a href= "#menu">Menu</a>
                <h1>Pizza-Express</h1>
                <a href= "#location">Locations</a>
                <a href= "#contact">Contact</a>
           
            </div>
        );
    }
}

export default Navbar;