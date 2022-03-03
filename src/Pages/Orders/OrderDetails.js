import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getUserData } from "../../utilities";
import axios from "axios";

const OrderDetails = ({ cars, orders }) => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [car, setCar] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    setCar(cars?.find(({ _id }) => _id === order?.carId));
  }, [order]);

  useEffect(async () => {
    try {
      const {
        data: {
          data: { user },
        },
      } = await axios.get(`/auth/${order?.userId}`);
      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  }, [order]);

  useEffect(() => {
    const orderData = orders?.find(({ _id }) => _id === orderId);
    setOrder(orderData);
  }, []);

  return (
    <Container maxWidth="lg" style={{ margin: "30px auto" }}>
      <Grid container>
        <Grid item xs={6} direction="column">
          <Typography variant="h4" component="div">
            Order Id: {orderId}
          </Typography>
        </Grid>
        <Grid item xs={6} direction="column">
          <Typography align="right" variant="h4" component="div" sx={{}}>
            Order Status: {order?.orderStatus}
          </Typography>
        </Grid>
        {/* ---------car details ------------- */}
        <Grid item xs={12}>
          <hr />
          <Typography variant="h5" component="div">
            Car Details
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <img src={`${car?.carImg}`} width="100%"></img>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h4" component="div">
            {car?.carName}
          </Typography>
          <Typography variant="body1" component="div">
            <Grid container>
              <Grid item xs={6}>
                <h3>Car Model</h3>
                {car?.model}
              </Grid>
              <Grid item xs={6}>
                <h3>Car Color</h3>
                {car?.color}
              </Grid>
              <Grid item xs={6}>
                <h3>Package Name</h3>
                {order?.packageName}
              </Grid>
              <Grid item xs={6}>
                <h3>Package Price</h3>
                {order?.packagePrice}
              </Grid>
              <Grid item xs={6}>
                <h3>Ordered Date</h3>
                {`${order?.deliveryDate}`}
              </Grid>
              <Grid item xs={6}>
                <h3>Ordered Time</h3>
                {`${order?.deliveryTime}`}
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
          <Typography variant="h5" component="div">
            User Details
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <h3>Full name</h3>
            <p style={{ textTransform: "capitalize" }}>{user?.fullName}</p>
          </Grid>
          <Grid item xs={6}>
            <h3>Email Address</h3>
            {user?.email}
          </Grid>
          <Grid item xs={6}>
            <h3>Phone number</h3>
            {user?.phoneNumber}
          </Grid>
          {/* <Grid item xs={6}>
            <h3>Package Price</h3>
            {order?.packagePrice}
          </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
};

var mapState = (state) => ({ cars: state.car, orders: state.order });
export default connect(mapState)(OrderDetails);
