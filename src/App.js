import "./App.css";
import projects from "./data/projects.json";

function App() {
  return (
    <div className="banner">
      <div className="background-overlay"></div>
      <div className="slider" style={{ "--quantity": projects.length }}>
        {projects.map((project, index) => (
          <div className="item" style={{ "--position": index + 1 }}>
            <img src={project.video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
