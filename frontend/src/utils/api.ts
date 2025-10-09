import { mockProjects, type Project } from './mockData';

export const getAllProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects);
    }, 500);
  });
};

export const getProjectById = async (id: string): Promise<Project | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = mockProjects.find(p => p.id === id);
      resolve(project);
    }, 300);
  });
};
