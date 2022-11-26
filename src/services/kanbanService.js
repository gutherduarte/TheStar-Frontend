export const getKanbanById = async (id) => {
  return await fetch(`http://localhost:3001/api/kanban/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data.tasks;
    });
};
