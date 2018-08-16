import React from 'react';

import './Activities.css';

const Activities = () => (
  <div className="container-fluid">
    <h1 className="haut" id="propos"> À propos </h1>
  <div className="row">
    <div className="col-xs col-md-6 col-lg-6">
      <div className="prestation">
          {/* <div className="icons">
              <i className="fa fa-calendar center" aria-hidden="true"></i>
          </div> */}
              <h4 className="mini-title"> Cécile Henry, 27 ans</h4>
              <p className="little-para"> Développeuse Web junior de Metz </p>
              <p className="little-para2"> Anciennement ingénieur qualité automobile, reconvertie en développeuse web épanouie, je recherche une première expérience professionnelle.
                Tu peux également me retrouver sur   <a href="http://www.linkedin.com/in/cecile-henry"> <span className="gras">Linkedin </span></a> ainsi que sur   <a href="http://github.com/cec577"> <span className="gras">Github </span> </a>.
                Une question ? Besoin d'un renseignement ? N'hésite pas à me contacter!

                </p>

      </div>

    </div>

    <div className="col-xs col-md-6 col-lg-6">
      <div className="prestation">
          {/* <div className="icons">
              <i className="fa fa-user center" aria-hidden="true"></i>
          </div> */}
              {/* <h4 className="mini-title">Spécialisation</h4> */}
              <img src={require('../images/moi.jpg')} className="img-responsive2" alt="img"  />
              {/* <p className="little-para"> Lorem ipsum</p> */}
          </div>
    </div>




</div>
</div>
)
export default Activities;
