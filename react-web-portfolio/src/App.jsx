import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectContextProvider } from './Context/ProjectContext';

import ApplicationRoutes from "./routes";

function App() {
  return (
    <ProjectContextProvider>
      <ApplicationRoutes />
    </ProjectContextProvider>
  );
}

export default App;
