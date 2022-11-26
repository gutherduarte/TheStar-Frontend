import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components";
import { getProducts, getProductById } from "../services/productService";
import { Table } from "../components/Table";
import newProduct from "../data/newProduct.png";
import kanban from "../data/kanban.png";
//import { Modal } from "../components/Modal";

const columns = [
  { name: "Image", displayName: "Image" },
  { name: "Name", displayName: "Name" },
  { name: "consumers", displayName: "Consumer Name" },
  { name: "totalAmount", displayName: "Total Amount" },
  { name: "Status", displayName: "Status" },
  { name: "id", displayName: "Id" },
  { name: "Location", displayName: "Location" },
  { name: "Button", displayName: "Kanban" },
];
const Products = () => {
  let navigate = useNavigate();
  //const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  //const showModal = () => setModal(true);

  const toKanban = (productId) => {
    getProductById(productId).then((data) => {
      window.localStorage.setItem("kanbanId", data.kanbans.id);
    });
    navigate("/kanban");
  };

  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header
        category="Page"
        title="Product"
        image={newProduct}
        show={true}
        //execute={showModal}
      />
      <Table
        columns={columns}
        rows={data}
        length={columns.length}
        image={kanban}
        execute={toKanban}
      />
      {/* {modal && <Modal />} */}
    </div>
  );
};

export default Products;
