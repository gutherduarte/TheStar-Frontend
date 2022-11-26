import React, { useState, useEffect } from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";
import newTask from "../data/newNote.png";
import { getEmployeTask, updateTaskById } from "../services/employeService";
import { getKanbanById } from "../services/kanbanService";
import { Modal } from "../components/Modal";

const Kanban = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  window.localStorage.getItem("kanbanId")
    ? getKanbanById(window.localStorage.getItem("kanbanId")).then((data) => {
        setData(data);
      })
    : getEmployeTask().then((data) => {
        setData(data.tasks);
      });

  const dragStopping = ({ data }) => {
    updateTaskById(data[0].Id, data[0]);
  };

  const showModal = () => setModal(true);

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header
        category="App"
        title="Kanban"
        image={newTask}
        show={true}
        execute={showModal}
      />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={data}
        cardSettings={{ contentField: "Summary", headerField: "Title" }}
        dragStop={dragStopping}
      >
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open" />
          <ColumnDirective headerText="In Progress" keyField="InProgress" />
          <ColumnDirective headerText="Testing" keyField="Review" />
          <ColumnDirective headerText="Done" keyField="Validate" />
        </ColumnsDirective>
      </KanbanComponent>
      {modal && <Modal />}
    </div>
  );
};

export default Kanban;
