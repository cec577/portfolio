import React from 'react';

import './Home.css';
 import Activities from './Activities.jsx';
import Form from './Form.jsx';
 import WorkExperience from './WorkExperience.jsx';
import Diplome from './Diplome.jsx';
// //


const Home = () => (
   // <div className="luid">
  // {/* <div className="image-center"></div> */}
     // {/* <div className="5"> </div> */}
     <div className="imagefond" id="home">
       <div className="double-border"> </div>

 <img src={require('../images/ordinateur_code2.jpg')} className="img-responsive" alt="img"  />
 <span className="title"> Cécile HENRY, Développeuse Web Junior </span>


  <Activities />
   <Form />
    <WorkExperience />
  <Diplome />
 {/* <img src={require('../images/ordinateur_code2.jpg')} className="img-responsive" alt="img"  />
 <span className="title"> Cécile HENRY, Développeuse Web Junior </span> */}
  {/* <span className="title2"> Développeuse Web Junior </span>  */}


</div>

         // </div>

);

export default Home;
