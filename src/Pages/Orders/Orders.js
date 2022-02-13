import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OrderItems from "../../Components/OrderItems/OrderItems";

const Orders = ({ order, user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    user?._id && setOrders(order);
  }, [orders]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Orders</h1>
      <div className="order-list">
        {orders?.map((ord) => (
          <OrderItems orderData={ord} />
        ))}
      </div>
    </div>
  );
};
var mapState = (state) => ({ order: state.order, user: state.auth });
export default connect(mapState)(Orders);
