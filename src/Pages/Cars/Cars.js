import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchcars } from "../../Redux/cars/carsAction";
const CarItem = ({ data: { carName, carImg, category } }) => {
  return (
    <>
      <Grid item xs={2} sx={{ maxWidth: "50px !important", height: "111px" }}>
        <img
          src={`${carImg}`}
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {category}
            </Typography>
            <Typography variant="h4" component="div">
              {carName}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <CardActions>
          <Button sx={{ paddingTop: "50px" }} size="large">
            View details
          </Button>
        </CardActions>
      </Grid>
    </>
  );
};
const Cars = ({ fetchcars, cars }) => {
  useEffect(() => {
    fetchcars();
  }, []);
  return (
    <div>
      <Container maxWidth="lg">
        <Grid
          container
          style={{ textAlign: "center" }}
          rowSpacing={5}
          columnSpacing={{ xs: 10, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <h1>Cars</h1>
          </Grid>
          {cars?.map(({ carName, carImg, category }) => (
            <CarItem data={{ carName, carImg, category }} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};
var actions = {
  fetchcars,
};
const mapState = (state) => ({ cars: state.car });
export default connect(mapState, actions)(Cars);
