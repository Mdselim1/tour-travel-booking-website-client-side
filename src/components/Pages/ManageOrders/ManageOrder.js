import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import OrderDataShow from "./OrderDataShow";

const ManageOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://tour-travel-booking.onrender.com/order")
      .then((result) => {
        setOrder(result.data);
      });
  }, []);

  return (
    <div className="py-5">
      <Container>
        <h1 className="main-title text-center pb-5">Manage Orders</h1>
        <Row>
          {order.map((data) => (
            <OrderDataShow
              key={data._id}
              data={data}
              setorder={setOrder}
              order={order}
            ></OrderDataShow>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageOrder;
