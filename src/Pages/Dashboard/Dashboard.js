import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fetchOrders } from "../../Redux/orders/orderActions";
import "./Dashboard.css";
const Dashboard = ({ fetchOrders, order }) => {
  const [pending, setPending] = useState(0);
  const [progress, setProgress] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const calculateOrders = (orders) => {
    orders?.forEach((ord) => {
      if (ord.orderStatus === "pending") setPending(pending + 1);
      else if (ord.orderStatus === "in-progress") setProgress(progress + 1);
      else if (ord.orderStatus === "delivered") setDelivered(delivered + 1);
    });
  };
  useEffect(() => {
    fetchOrders();
    calculateOrders(order);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        className="dashboard-container"
        container
        style={{ textAlign: "center" }}
        rowSpacing={2}
        columnSpacing={{ xs: 10, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <h1>Dashboard</h1>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card
            sx={{ minWidth: 275, boxShadow: "0 3px 10px rgb(0 0 0 / 20%)" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Pending Order
              </Typography>
              <Typography variant="h3" component="div">
                {pending}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">view List</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          className="grid-item"
          style={{
            backgroundColor: ``,
          }}
        >
          <Card
            sx={{ minWidth: 275, boxShadow: "0 3px 10px rgb(0 0 0 / 20%)" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                In Progress Order
              </Typography>
              <Typography variant="h3" component="div">
                {progress}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">view List</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          sm={4}
          xs={12}
          className="grid-item"
          style={{
            backgroundColor: ``,
          }}
        >
          <Card
            sx={{ minWidth: 275, boxShadow: "0 3px 10px rgb(0 0 0 / 20%)" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Delivered Order
              </Typography>
              <Typography variant="h3" component="div">
                {delivered}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">view List</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
const actions = {
  fetchOrders,
};
const mapState = (state) => ({ order: state.order });
export default connect(mapState, actions)(Dashboard);
