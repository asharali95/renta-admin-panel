import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getSpecificCarData } from "../../utilities";
const OrderDetails = ({ cars, orders }) => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [car, setCar] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const orderData = orders?.find(({ _id }) => _id === orderId);
    setOrder(orderData);
    // console.log(order);
  }, []);

  useEffect(() => {
    setCar(cars?.find(({ _id }) => _id === order?.carId));
  }, [order]);

  return (
    <Container maxWidth="lg" style={{ margin: "30px auto" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="div">
            Order Id: {orderId}
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
            DUMMY
          </Grid>
          <Grid item xs={6}>
            <h3>Email Address</h3>
            DUMMY@GMAIL.COM
          </Grid>
          <Grid item xs={6}>
            <h3>Phone number</h3>
            03335748693
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
