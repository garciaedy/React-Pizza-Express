import React, { Component } from 'react';

class LocationList extends Component{
    render(){
        return (
            
            <div className="locations">
                <div className="location-list">
            <div className="location">              
  {this.props.location.name}
 <br/>
    {this.props.location.address}
     <br/>
    {this.props.location.phone}
 </div>
        
 </div>
  </div>
      )
    }
}
  

export default LocationList;