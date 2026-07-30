import ProjectCard from '../Project Card/Project Card';
 
function ProjectGrid({ projects }) {
  return (
    <div className='project-grid'>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
 
export default ProjectGrid;
 
 