export const getEmployeTask = async (id = "63815bf0c3d090615ef9249b") => {
  return await fetch(`http://localhost:3001/api/workingtask/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const getEmploye = async () => {
    return await fetch(`http://localhost:3001/api/working`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

export const updateTaskById = async (id, task) => {
  console.log("id: ", id, " task: ", task);
  return await fetch(`http://localhost:3001/api/task/${id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((task) => console.log(task));
};
