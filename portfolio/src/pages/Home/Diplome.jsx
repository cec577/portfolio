import React from 'react';

import './Diplome.css';

const Diplome = () => (
  <div className="container-fluid4">
    <h1 className="haut" id="dip"> Diplômes </h1>
      {/* <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12"> */}
          <p className="encart2"> <div className="emploi">
            Préparation au titre professionel "Développeur Web" -2017/2018
          </div>
      <div className="description">Formation intensive de 5 mois. </div>
          </p>
        {/* </div>
            </div> */}

            {/* <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12"> */}
                <p className="encart2"> <div className="emploi">Ecole d'ingénieur CESI (Nancy, 54) </div>
                <div className="description"> Master sécurité et risques industriels </div>
                </p>
              {/* </div>
                  </div>

 */}


          </div>
);

export default Diplome;
