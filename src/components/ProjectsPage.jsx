import React, { useState, useEffect } from 'react';
import './ProjectsPage.css'; // Asegúrate de importar el archivo CSS

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error al obtener los proyectos:', error));
  }, []);

  return (
    <div className="projects-page">
      <h2>Proyectos Realizados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id} className="project-link">
            <div className="project-card">
              <img src={project.imagen} alt={project.nombre} />
              <h3>{project.nombre}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
