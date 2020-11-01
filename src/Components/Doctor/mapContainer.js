
import React, { Component } from 'react';
 
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{paddingLeft:"32px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21430.98736836711!2d77.73195124899088!3d12.954916544918412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1603017191215!5m2!1sen!2sin" title="Doc location" width="150%" height="100%" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    );
  }
}
export default SimpleMap;


















