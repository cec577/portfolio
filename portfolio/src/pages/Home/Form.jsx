import React from 'react';
import ProgressBar from "bootstrap-progress-bar";

import './Form.css';

const Form = () => (
  <div className="container3">
      {/* <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12"> */}
          <div className="skills">
<h1 className="haut" id="competence"> Mes compétences techniques </h1>
<li>
            <h3> HTML/CSS</h3><span className="bar"><span className="html"></span></span>
          </li>
          <li>
            <h3> Bootstrap</h3><span className="bar"><span className="css"></span></span>
          </li>
          <li>
            <h3> Javascript</h3><span className="bar"><span className="js"></span></span>
          </li>
          <li>
            <h3> PHP/POO/SQL</h3><span className="bar"><span className="php"></span></span>
          </li>
          <li>
            <h3> React.JS </h3><span className="bar"><span className="react"></span></span>
          </li>
          </div>

</div>
// {/* </div>
// </div> */}
    );

export default Form;
