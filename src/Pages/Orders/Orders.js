import { Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OrderItems from "../../Components/OrderItems/OrderItems";

const Orders = ({ order, user }) => {
  const [orders, setOrders] = useState([]);
  const [categorisedOrder, setCategorisedOrders] = useState([]);
  const [isPendingToggle, setPendingToggle] = useState(false);
  const [isProcessToggle, setProcessToggle] = useState(false);
  const [isDeliveredToggle, setDeliveredToggle] = useState(false);

  const categoriseOrder = (categoryName) => {
    const filteredOrder = orders.filter(
      ({ orderStatus }) => orderStatus === categoryName
    );
    setCategorisedOrders(filteredOrder);
  };
  useEffect(() => {
    user?._id && setOrders(order);
  }, [orders]);
  const handleToggle = (toggleName) => {
    if (toggleName === "pending") {
      setPendingToggle(true);
      setProcessToggle(false);
      setDeliveredToggle(false);
      categoriseOrder(toggleName);
    } else if (toggleName === "in-progress") {
      setProcessToggle(true);
      setPendingToggle(false);
      setDeliveredToggle(false);
      categoriseOrder(toggleName);
    } else if (toggleName === "delivered") {
      setProcessToggle(false);
      setPendingToggle(false);
      setDeliveredToggle(true);
      categoriseOrder(toggleName);
    } else if (toggleName === "all") {
      setProcessToggle(false);
      setPendingToggle(false);
      setDeliveredToggle(false);
      setCategorisedOrders([]);
    }
  };
  console.log(isPendingToggle, isProcessToggle, isDeliveredToggle);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Orders</h1>
      <Button
        onClick={() => {
          handleToggle("pending");
        }}
      >
        Pending
      </Button>
      <Button
        onClick={() => {
          handleToggle("in-progress");
        }}
      >
        In Process
      </Button>
      <Button
        onClick={() => {
          handleToggle("delivered");
        }}
      >
        Delivered
      </Button>
      <Button
        onClick={() => {
          handleToggle("all");
        }}
      >
        All
      </Button>

      <Container maxWidth="lg">
        {categorisedOrder.length <= 0
          ? orders?.map((ord) => <OrderItems orderData={ord} />)
          : categorisedOrder?.map((ord) => <OrderItems orderData={ord} />)}
      </Container>
    </div>
  );
};
var mapState = (state) => ({ order: state.order, user: state.auth });
export default connect(mapState)(Orders);
