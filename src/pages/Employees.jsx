import React, { useEffect, useState } from "react";
import { Header } from "../components";
import newEmployees from "../data/newUser.png";
import { Table } from "../components/Table";
import { getEmploye } from "./../services/employeService"

const columns = [
    { name: "Image", displayName: "Image" },
    { name: "Name", displayName: "Name" },
    { name: "Designation", displayName: "Designation" },
    { name: "Country", displayName: "Country" },
    { name: "HireDate", displayName: "HireDate" },
    { name: "id", displayName: "Id" },
    { name: "reportsTo", displayName: "ReportsTo" },
  ];

const Employees = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getEmploye().then((data) => setData(data));
  }, []);

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header
        category="Page"
        title="Employees"
        image={newEmployees}
        show={true}
      />
      <Table columns={columns} rows={data} length={columns.length} />
    </div>
  );
};
export default Employees;
