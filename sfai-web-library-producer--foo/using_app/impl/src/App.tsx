import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {ExpandableSection} from "../../../sfai_library_Expandable_section/public";
import "../../../sfai_library_Expandable_section/impl/src/main/presentation/expandable-section-tokens.css";


const App: React.FC = () => {
    
  console.log("Hello world to Consumer module");

  return (
    <Router>
      <div className="content-wrapper">
          
        <ExpandableSection title="Simple - Text only" children={<div>Contenido de la sección simple con solo texto.</div>} type="simple" variant="plain" iconPosition="none"/>
        <ExpandableSection title="Simple - Text + icon" children={<div>Contenido de la sección simple con texto e icono.</div>} type="simple" variant="plain" iconPosition="right"/>
        <ExpandableSection title="Simple - Icon only" children={<div>Contenido de la sección simple con solo icono.</div>} type="simple" variant="plain" iconPosition="right" titleHidden={true}/>
        <ExpandableSection title="Link - Text only" children={<div>Contenido de la sección de enlace con solo texto.</div>} type="simple" variant="link" iconPosition="none"/>
        <ExpandableSection title="Link - Text + icon" children={<div>Contenido de la sección de enlace con texto e icono.</div>} type="simple" variant="link" iconPosition="right"/>
        <ExpandableSection title="Link - Icon only" children={<div>Contenido de la sección de enlace con solo icono.</div>} type="simple" variant="link" iconPosition="right" titleHidden={true}/>
        <ExpandableSection title="Highlighted" children={<div>Contenido de la sección destacada.</div>} type="highlighted" variant="plain" iconPosition="right"/>
      </div>
    </Router>
  );
};

export default App;
