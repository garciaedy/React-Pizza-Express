import React, { Component } from 'react';
import locationData from '../locationData';
import LocationList from'./LocationList'

class Location extends Component {
    render(){
        return (
            <div className="locations">
        <a name="locations"></a>
                
          
               
                {locationData.map((location, i) => {
                    return <LocationList key={i} location={location}/>
                })}
          </div>
      );
    }
  }
          
  export default Location;