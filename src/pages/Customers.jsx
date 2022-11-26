import React, { useEffect, useState } from "react";
import { Header } from "../components";
import newCustomer from "../data/newUser.png";
import { Table } from "../components/Table";
import { getCustomer } from "./../services/customerService"

const columns = [
    { name: "Image", displayName: "Image" },
    { name: "Name", displayName: "Name" },
    { name: "Status", displayName: "Status" },
    { name: "Butget", displayName: "Butget" },
    { name: "Week", displayName: "Week" },
    { name: "id", displayName: "Id" },
    { name: "Location", displayName: "Location" },
    { name: "products", displayName: "products" },
  ];

const Customers = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getCustomer().then((data) => setData(data));
  }, []);

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header
        category="Page"
        title="Customers"
        image={newCustomer}
        show={true}
      />
      <Table columns={columns} rows={data} length={columns.length} />
    </div>
  );
};

export default Customers;
