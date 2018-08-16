import React from 'react';

import './WorkExperience.css';

const WorkExperience = () => (
  <div className="container-fluid2">
    <h1 className="haut" id="exp"> Expériences professionnelles </h1>
      {/* <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12"> */}
          <p className="encart"> <div className="emploi">
            Product Owner- Projet en équipe
          </div>
      <div className="description">Création en équipe de 3 d'un site communautaire pour le jeu Hearthstone. Les
        utilisteurs peuvent partager autour dujeu par différents biais.  <div className="description"> Tu peux le consulter en cliquant ici : <a href="https://hidden-crag-41955.herokuapp.com/"> <span className="gras"> HearthBuild </span> </a> </div>
                    <li className="description">
                      <ul>-Création de decks </ul>
                      <ul>-Commentaires</ul>
                      -Système de notation

                    </li> </div>
          <div className="description">  Technologies utilisées: React,Node JS et MongoDB </div>

          </p>
        {/* </div>
            </div> */}

            {/* <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12"> */}
                <p className="encart"> <div className="emploi">Apprentie développeuse Web O'clock </div>
                <div className="description">  Apprentissage de la programmation informatique. Cours théoriques et mise
                  en pratique journalière. </div>
                </p>
              {/* </div>
                  </div> */}

                  {/* <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12"> */}
                      <p className="encart"> <div className="emploi">Ingénieur qualité automobile </div>
                        <li className="description">Relation clientèle
                          <ul>Réalisation des dossiers assurances qualité</ul>
                        <ul>Gestion et plannification de projet avec les autres services</ul>
                        <ul>Gestion des matières premières (logiciel: SAP)</ul>
                      </li>
                      </p>
                    {/* </div>
                        </div> */}

                        {/* <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12"> */}
                            <p className="encart"> <div className="emploi">Apprentie et ingénieur qualité </div>
                          <li className="description">
                            <ul>Gestion de projet avec les autres services</ul>
                          <ul>Reporting qualité, sécurité avec les autres sites Faurecia</ul>
                          <ul>Audit qualité</ul> </li>
                            </p>
                          {/* </div>
                              </div> */}


          </div>
);

export default WorkExperience;
