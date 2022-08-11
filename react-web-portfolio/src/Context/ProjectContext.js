import React, { useState } from 'react';
import { createContext } from 'react';

export const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {

    const [project, setProject] = useState({});

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    )
}
