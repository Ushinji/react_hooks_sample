import { Project } from './reducers';

export const getProject = async () => {
  const res = await fetch('/projects');
  return (await res.json()) as Project[];
};

export const updateProject = async (id: number, displayName: string) => {
  const data = {
    displayName,
  };
  const res = await fetch(`/projects/${id}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': 'TEST_CSRF_TOKEN',
    },
  });
  return (await res.json()) as Project;
};
