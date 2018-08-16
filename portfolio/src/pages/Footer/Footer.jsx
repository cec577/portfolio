/*
 * Npm import
 */
import React from 'react';
import GoogleMapReact from 'google-map-react';

// import { NavLink } from 'react-router-dom';
/*
 * Local import
 */
import './Footer.css';
import Maps from './Maps.jsx';

class Footer extends React.Component {
   // initMap = () => {
   //       // Map options
   //       var options = {
   //           zoom : 8,
   //           center: {lat: 49.117851, lng: 6.18195}
   //       }
   //     // New map
   //       var map = new google.maps.Map(document.getElementById('map'), options);
   //
   //       // Add marker
   //       var marker = new google.maps.Marker({
   //           position:{lat: 49.117851, lng: 6.18195},
   //           map:map,
   //       });
   //
   //       var infoWindow = new google.maps.InfoWindow({
   //           content:'<h6> cabinet psy </h6>'
   //       });
   //
   //       marker.addListener('click', function(){
   //           infoWindow.open(map, marker);
   //       });
   //   }

   render() {
   return (
  <div className="footer">
   <div className="info-footer">
     <div className="container-fluid6">
     {/* <div className="row">
       <div className="col-md-6 col-lg-6"> */}
         <h4 className="info" id="contact">Contact</h4>
         <div className="icon"><i className="fa fa-user" aria-hidden="true" />
           <span className="info-user">Cécile Henry </span></div>
         <div className="icon"><i className="fa fa-map-marker" aria-hidden="true" />
           <span className="info-user">Metz, France </span></div>
         <div className="icon"><i className="fa fa-phone" aria-hidden="true" />
           <span className="info-user">06.49.43.57.97 </span></div>

           <div className="icon"><i className="fa fa-envelope" aria-hidden="true" />
             <span className="info-user">cecile.henry577@gmail.com </span></div>

         <div className="icon">
           <p className="click"> Tu peux cliquer sur les liens suivants aussi: </p>
          <a href="http://www.linkedin.com/in/cecile-henry">
          <i className="fab fa-linkedin" aria-hidden="true" />
        </a>

        <a href="http://github.com/cec577">
        <i className="fab fa-github" aria-hidden="true" />
      </a>
         </div>

         <p className="pied"> Developed & Design by me </p>
       </div>


     {/* </div>
   </div> */}
</div>
 </div>

)
}
}

export default Footer;
