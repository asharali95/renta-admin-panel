import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderItems.css";
const OrderItems = ({ orderData }) => {
  const { _id: orderId, orderStatus, createdAt } = orderData;
  return (
    <div className="order-item">
      <h3>order Id: {orderId}</h3>
      <h4>order Status: {orderStatus}</h4>
      <h4>Created at: {`${new Date(createdAt)}`}</h4>
      <Link to={`/orders/${orderId}`} style={{ textDecoration: "none" }}>
        <Button>View Details</Button>
      </Link>
    </div>
  );
};

export default OrderItems;
