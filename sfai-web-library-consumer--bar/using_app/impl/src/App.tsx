import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ExpandableSection } from 'sfai-library-Expandable-section';

const App: React.FC = () => {
  return (
    <Router>
      <div className="content-wrapper" style={{ padding: '2rem' }}>
        <h2>Ejemplo de Uso de ExpandableSection</h2>
        
        {/* Aquí la librería usa sus propios tokens internamente */}
        <ExpandableSection
          title="Haz clic para expandir esta sección"
        >
          <p>
            ¡Has expandido el contenido! Esta es la forma correcta de usar la librería.
            Simplemente pasas el contenido que quieres que se muestre dentro del componente
            `ExpandableSection`.
          </p>
          <p>
            No necesitas manejar manualmente el estado, los estilos de transición
            o los íconos, la librería se encarga de todo eso.
          </p>
        
        
        <hr style={{ margin: '30px 0' }} />

        {/* Ejemplo de cómo usar los tokens en otros elementos */}
        <h3>Uso manual de tokens de texto</h3>
        <p style={{
          color: 'var(--expandable-section-simple-plain-text-only-off-color-text)',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          Este texto utiliza un token de color simple.
        </p>
        <p style={{
          color: 'var(--expandable-section-simple-link-text-only-off-color-text)',
          textDecoration: 'underline',
          fontSize: '18px'
        }}>
          Este texto utiliza un token de color de enlace.
        </p>
        </ExpandableSection>
      </div>
    </Router>
  );
};

export default App;